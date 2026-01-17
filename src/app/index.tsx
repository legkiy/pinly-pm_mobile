import { ROUTER } from '@/shared/models';
import { Button, NavigateLink, T } from '@/shared/ui';
import ParallaxScrollView from '@/shared/ui/ParalaxView';
import { ProjectsList, QuickSettings } from '@/widgets';
import { Image } from 'react-native';

const HommeScreen = () => {
  return (
    <>
      <ParallaxScrollView
        backSlot={
          <>
            <QuickSettings />
            <Image
              source={require('@assets/partial-react-logo.png')}
              style={{
                height: 178,
                width: 290,
              }}
            />
          </>
        }>
        <ProjectsList />
      </ParallaxScrollView>

      <NavigateLink href={ROUTER.createProject} asChild>
        <Button className="absolute bottom-12 left-[50%] transform-[translateX(-50%)] rounded-2xl p-4">
          <T mess="add project" className="text-2xl" />
        </Button>
      </NavigateLink>
    </>
  );
};
export default HommeScreen;
