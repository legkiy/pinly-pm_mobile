import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'; // Добавьте createJSONStorage
import AsyncStorage from '@react-native-async-storage/async-storage'; // Импорт для RN
import { CreateProjectDTO, Project } from '../models';
import { Column } from '@/entities/Column';
import { generateUuid } from '@/shared/lib';

type State = {
  projects: Record<string, Project>;
  columns: Record<string, Column>;
};

type Actions = {
  //--- Project CRUD
  createProject: (project: CreateProjectDTO) => Promise<Project>;
  deleteProject: (projectId: string) => void;
  updateProject: (projectId: string, updatedFields: (prev: Project) => Partial<Omit<Project, 'id'>>) => void;
  //--- Column CRUD
  createColumn: (projectId: string, title: string) => void;
  deleteColumn: (columnId: string) => void;
  moveColumn: (projectId: string, newOrder: string[]) => void;
  updateColumn: (columnId: string, title: string) => void;
  //--- Clear Store
  clearStore: () => void;
};

type ProjectStore = State & Actions;

const initState: State = {
  projects: {},
  columns: {},
};

const useProjectStore = create<ProjectStore>()(
  persist(
    (set, get) => ({
      ...initState,
      createProject: async ({ columns, ...project }) => {
        const projectId = 'project-' + generateUuid();

        const newProject: Project = {
          ...project,
          id: projectId,
          createdAt: new Date().toISOString(),
          columnsIds: columns.map((el) => el.id),
          notesIds: [],
        };

        set((state) => ({
          ...state,
          projects: {
            ...state.projects,
            [projectId]: newProject,
          },
          columns: {
            ...state.columns,
            ...columns.reduce<Record<string, Column>>((acc, column) => {
              acc[column.id] = { ...column, createdAt: new Date().toISOString(), projectId, taskIds: [] };
              return acc;
            }, {}),
          },
        }));
        return newProject;
      },
      deleteProject: (projectId: string) => {
        const { projects, columns } = get();
        const project = projects[projectId];
        if (!project) return;

        const columnIds = project.columnsIds;

        // Удаляем колонки
        const updatedColumns = { ...columns };
        columnIds.forEach((id) => {
          delete updatedColumns[id];
        });

        // Удаляем проект
        const updatedProjects = { ...projects };
        delete updatedProjects[projectId];

        set({
          projects: updatedProjects,
          columns: updatedColumns,
        });
      },
      updateProject: (projectId, updatedFields) => {
        if (!projectId) return;

        set((state) => ({
          ...state,
          projects: {
            ...state.projects,
            [projectId]: {
              ...state.projects[projectId],
              ...updatedFields(state.projects[projectId]),
            },
          },
        }));
      },
      //------------- Column CRUD
      createColumn: (projectId, title) => {
        const id = 'column-' + generateUuid();
        const newColumn: Column = {
          id,
          projectId,
          title,
          taskIds: [],
          createdAt: new Date().toISOString(),
        };

        set((state) => {
          const updatedProject: Project = {
            ...state.projects[projectId],
            columnsIds: [...state.projects[projectId].columnsIds, id],
          };

          return {
            ...state,
            columns: {
              ...state.columns,
              [id]: newColumn,
            },
            projects: {
              ...state.projects,
              [projectId]: updatedProject,
            },
          };
        });
      },
      deleteColumn: (columnId) => {
        const { columns, projects } = get();
        const { [columnId]: column, ...rest } = columns;

        if (!column) return;

        set({
          columns: rest,
          projects: {
            ...projects,
            [column.projectId]: {
              ...projects[column.projectId],
              columnsIds: projects[column.projectId].columnsIds.filter((id) => id !== columnId),
            },
          },
        });
      },
      moveColumn: (projectId, newOrder) => {
        set((state) => ({
          ...state,
          projects: {
            ...state.projects,
            [projectId]: {
              ...state.projects[projectId],
              columnsIds: newOrder,
            },
          },
        }));
      },
      updateColumn: (columnId, title) => {
        set((state) => {
          const column = state.columns[columnId];
          if (!column) return state;

          return {
            ...state,
            columns: {
              ...state.columns,
              [columnId]: {
                ...column,
                title,
              },
            },
          };
        });
      },
      // --- Clear Store
      clearStore: async () => {
        set(initState);
      },
    }),
    {
      name: 'projectStore',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ projects, columns }) => ({ projects, columns }),
    }
  )
);

export default useProjectStore;
