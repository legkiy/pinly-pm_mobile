import { Form, Icons, T } from '@/shared/ui';
import { ArrayPath, FieldArray, FieldValues, Path, useFieldArray, UseFormReturn } from 'react-hook-form';
import { FlatList, Pressable, View } from 'react-native';
import { STYLE_VARS } from '@/shared/styles';
import { ScrollView } from 'react-native-gesture-handler';

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
      {/* <FlatList
        maxToRenderPerBatch={4}
        style={{
          height: 200,
        }}
        contentContainerStyle={{
          paddingVertical: STYLE_VARS.spacing.default,
          gap: STYLE_VARS.spacing.default,
        }}
        data={fields}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <Form.Input
            control={methods.control}
            name={`${name}.${item.index}.title` as Path<T>}
            inputProps={{
              endIcon: (
                <Icons
                  packName="fontawesome6"
                  name="circle-minus"
                  iconStyle="solid"
                  onPress={() => remove(item.index)}
                  suppressHighlighting
                />
              ),
            }}
          />
        )}
      /> */}
      <Pressable onPress={() => append(defaultField)} className="flex-row items-center gap-2">
        <T mess="columns.add" />
        <Icons packName="fontawesome6" name="circle-plus" iconStyle="solid" />
      </Pressable>
    </View>
  );
};
export default CreateColumnsArray;
