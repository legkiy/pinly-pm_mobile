import { Link, LinkProps } from 'expo-router';

type Props = LinkProps;

const NavigateLink = ({ ...props }: Props) => {
  return <Link {...props} suppressHighlighting />;
};
export default NavigateLink;
