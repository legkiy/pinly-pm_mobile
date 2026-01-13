import { useColors } from '@/shared/styles';
import { memo } from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

type Props = {
  html: string;
};
const HtmlText = ({ html }: Props) => {
  const { width } = useWindowDimensions();
  const colors = useColors();

  if (!html.trim()) {
    return null;
  }

  return (
    <RenderHtml
      source={{
        html,
      }}
      contentWidth={width}
      baseStyle={{
        color: colors.fg,
      }}
    />
  );
};
export default memo(HtmlText);
