import { Alert, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { CreateProjectDTO, projectSchema } from '../model';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, T } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { createUuid } from '@/shared/lib';
import CreateColumnsArray from './CreateColumnsArray';

const CreateProject = () => {
  const { t } = useTranslation();

  const defaultColumns = [
    { title: t('kanban.queue'), id: 'column-' + createUuid() },
    { title: t('kanban.inProgress'), id: 'column-' + createUuid() },
    { title: t('kanban.done'), id: 'column-' + createUuid() },
  ];

  const methods = useForm<CreateProjectDTO>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      columns: defaultColumns,
    },
  });

  const handleSubmit = methods.handleSubmit(
    (data) => {
      console.log(data);
    },
    (errors) => {
      Alert.alert('Form Error', JSON.stringify(errors));
    }
  );

  return (
    <View className="gap-2">
      <Form.Input control={methods.control} name="title" labelKey="Project Name" />
      <Form.Input
        control={methods.control}
        name="description"
        labelKey="Description"
        inputProps={{
          multiline: true,
        }}
      />
      <CreateColumnsArray methods={methods} name="columns" defaultField={{ title: '', id: 'column-' + createUuid() }} />
      <Button onPress={() => handleSubmit()}>
        <T mess="common.create" />
      </Button>
    </View>
  );
};
export default CreateProject;
