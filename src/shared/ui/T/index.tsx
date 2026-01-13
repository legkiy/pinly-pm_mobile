import { Text, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

type TProps = Omit<TextProps, 'children'> & {
  mess?: string;
};

const T = ({ mess, className, ...props }: TProps) => {
  const { t } = useTranslation();

  if (!mess) {
    return null;
  }

  return (
    <Text {...props} className={twMerge('color-fg', className)}>
      {t(mess)}
    </Text>
  );
};
export default T;
