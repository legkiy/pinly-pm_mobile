import { Project, ProjectCard } from '@/entities/Project';
import { createMockArray } from '@/shared/lib';
import { FlatList } from 'react-native';

const mockData = createMockArray<Project>(9, (step, id) => ({
  id,
  createdAt: new Date().toISOString(),
  title: 'Project ' + step,
  description: `<p>D ${step}</p><p>D ${step}</p><p>D ${step}</p><p>D ${step}</p>`,
  columnsIds: ['c-1', 'c-2', 'c-3'],
  notesIds: ['note-1-' + step, 'note-2-' + step, 'note-3-' + step],
}));

const ProjectsList = () => {
  return (
    <FlatList
      data={mockData}
      keyExtractor={(el) => el.id}
      renderItem={({ item }) => <ProjectCard {...item} />}
      contentContainerClassName="gap-4 p-2 pb-35"
    />
  );
};
export default ProjectsList;
