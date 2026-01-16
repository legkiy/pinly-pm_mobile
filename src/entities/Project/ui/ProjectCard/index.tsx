import { STYLE_VARS } from '@/shared/styles';
import { HtmlText, NavigateLink, T } from '@/shared/ui';
import { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Project } from '../../models';
import { ROUTER } from '@/shared/models';

type Props = Project;
const ProjectCard: FC<Props> = ({ title, description, id }) => {
  return (
    <NavigateLink href={ROUTER.project(id)}>
      <View className="bg-card g-2 w-full rounded-lg p-2 shadow-xs">
        <T mess={title} />
        <HtmlText html={description || ''} />
      </View>
    </NavigateLink>
  );
};
export default ProjectCard;

const { width } = Dimensions.get('window');

const cardMargin = STYLE_VARS.spacing.default;
const cardWidth = width / 2 - cardMargin * 4;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // maxWidth: cardWidth,
    // padding: STYLE_VARS.spacing.default,
    borderRadius: STYLE_VARS.br.default,
    width: 200,
    height: 100,
    // backgroundColor: 'red',
    // ...STYLE_VARS.shadow.default,
  },
});
