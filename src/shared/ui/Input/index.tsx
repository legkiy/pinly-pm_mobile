import { TextInputProps, View, TextInput } from 'react-native';
import T from '../T';
import { twMerge } from 'tailwind-merge';

export type InputProps = TextInputProps & {
  labelKey?: string;
  endIcon?: React.ReactNode;
};
const Input = ({ labelKey, className, endIcon, ...props }: InputProps) => {
  return (
    <View className="relative">
      <T mess={labelKey} className="mb-1" />
      <TextInput
        {...props}
        className={twMerge('text-fg border-line-main rounded-lg border p-2', !!endIcon && 'pr-12', className)}
      />
      {endIcon && <View className="absolute top-0 right-0 h-full justify-center px-2">{endIcon}</View>}
    </View>
  );
};
export default Input;
