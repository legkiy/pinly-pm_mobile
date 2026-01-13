import { useColors } from '@/shared/styles';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const iconSets = {
  fontawesome6: FontAwesome6,
  'material-icons': MaterialIcons,
  // добавь сюда свои паки, например:
  // materialcommunity: MaterialCommunityIcons,
  // feather: Feather,
} as const;

type IconPack = keyof typeof iconSets;

// Это самый важный кусок: тип имени иконки в зависимости от пака
type IconName<P extends IconPack> = React.ComponentProps<(typeof iconSets)[P]>['name'];

type IconsProps<P extends IconPack> = {
  packName: P;
  name: IconName<P>; // строгая типизация имени иконки!
} & Omit<React.ComponentProps<(typeof iconSets)[P]>, 'name'>; // все остальные пропсы (size, color, style и т.д.)

export const Icons = <P extends IconPack>({ packName, name, ...props }: IconsProps<P>) => {
  const IconComponent = iconSets[packName];
  const colors = useColors();

  // на случай, если кто-то передаст неверный packName (хотя TS уже не даст)
  if (!IconComponent) {
    console.warn(`Unknown icon pack: ${packName}`);
    return null;
  }

  // @ts-ignore
  return <IconComponent name={name} size={24} color={colors.fg} {...props} />;
};

export default Icons;
