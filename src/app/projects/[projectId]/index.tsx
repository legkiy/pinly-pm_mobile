import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

const ProjectIdScreen = () => {
  const { projectId } = useLocalSearchParams();
  return <Text>{projectId}</Text>;
};
export default ProjectIdScreen;
