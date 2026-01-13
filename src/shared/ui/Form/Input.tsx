import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import { TextInputProps } from 'react-native';
import Input from '../Input';

type Props<TFieldValues extends FieldValues = FieldValues> = Omit<
  ControllerProps<TFieldValues, FieldPath<TFieldValues>>,
  'render'
> & {
  inputProps?: TextInputProps;
  labelKey?: string;
};

const FormInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  inputProps,
  labelKey,
  ...controlProps
}: Props<TFieldValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      {...controlProps}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input {...inputProps} labelKey={labelKey} value={value} onChangeText={onChange} onBlur={onBlur} /> // Для обработки фокуса/валидации/>
      )}
    />
  );
};
export default FormInput;
