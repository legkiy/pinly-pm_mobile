import { Button, NavigateLink, T } from '@/shared/ui';
import { ProjectsList } from '@/widgets';

const HommeScreen = () => {
  return (
    <>
      <ProjectsList />
      <NavigateLink href={'/add-project'} asChild>
        <Button className="absolute bottom-12 left-[50%] transform-[translateX(-50%)] rounded-2xl p-4">
          <T mess="add project" className="text-2xl" />
        </Button>
      </NavigateLink>
    </>
  );
};
export default HommeScreen;
