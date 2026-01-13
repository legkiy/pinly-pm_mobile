import { TextInputProps, View, TextInput } from 'react-native';
import T from '../T';
import { twMerge } from 'tailwind-merge';

type Props = TextInputProps & {
  labelKey?: string;
};
const Input = ({ labelKey, className, ...props }: Props) => {
  return (
    <View>
      <T mess={labelKey} />
      <TextInput {...props} className={twMerge('text-fg border-line-main mt-1 rounded-lg border p-2', className)} />
    </View>
  );
};
export default Input;
