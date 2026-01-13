import { Form, T } from '@/shared/ui';
import { ArrayPath, FieldArray, FieldValues, Path, useFieldArray, UseFormReturn } from 'react-hook-form';
import { FlatList, Pressable, View } from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useColors } from '@/shared/styles';

type Props<T extends FieldValues> = {
  name: ArrayPath<T>;
  methods: UseFormReturn<T>;
  defaultField: FieldArray<T, ArrayPath<T>>;
};

const CreateColumnsArray = <T extends FieldValues>({ methods, name, defaultField }: Props<T>) => {
  const colors = useColors();
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name,
  });

  return (
    <View>
      <FlatList
        maxToRenderPerBatch={4}
        style={{
          maxHeight: 200,
        }}
        data={fields}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <Form.Input control={methods.control} name={`${name}.${item.index}.title` as Path<T>} />}
      />
      <Pressable onPress={() => append(defaultField)} className="flex-row items-center gap-2">
        <T mess="Add column" />
        <FontAwesome6 name="circle-plus" size={24} iconStyle="solid" color={colors.fg} />
      </Pressable>
    </View>
  );
};
export default CreateColumnsArray;
