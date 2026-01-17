import { Button, Form, Icons, T } from '@/shared/ui';
import { ArrayPath, FieldArray, FieldValues, Path, useFieldArray, UseFormReturn } from 'react-hook-form';
import { Pressable, View } from 'react-native';

type Props<T extends FieldValues> = {
  name: ArrayPath<T>;
  methods: UseFormReturn<T>;
  defaultField: FieldArray<T, ArrayPath<T>>;
};

const CreateColumnsArray = <T extends FieldValues>({ methods, name, defaultField }: Props<T>) => {
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name,
  });

  return (
    <View>
      <T mess="columns.title" />
      <View className="gap-2">
        {fields.map((item, index) => (
          <Form.Input
            key={item.id}
            control={methods.control}
            name={`${name}.${index}.title` as Path<T>}
            inputProps={{
              endIcon: (
                <Icons
                  packName="fontawesome6"
                  name="circle-minus"
                  iconStyle="solid"
                  onPress={() => remove(index)}
                  suppressHighlighting
                />
              ),
            }}
          />
        ))}
      </View>
      <Pressable onPress={() => append(defaultField)} className="flex-row items-center justify-center gap-2">
        <T mess="columns.add" />
        <Icons packName="fontawesome6" name="circle-plus" iconStyle="solid" />
      </Pressable>
    </View>
  );
};
export default CreateColumnsArray;
