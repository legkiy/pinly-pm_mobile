import { Project, ProjectCard } from '@/entities/Project';
import { createMockArray } from '@/shared/lib';
import { ScrollView } from 'react-native';

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
    <ScrollView contentContainerClassName="gap-4 pb-35">
      {mockData.map((el) => (
        <ProjectCard key={el.id} {...el} />
      ))}
    </ScrollView>
  );
};
export default ProjectsList;
