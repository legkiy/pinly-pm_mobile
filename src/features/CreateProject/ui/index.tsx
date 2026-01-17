import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertLoader, Button, Form, T } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { generateUuid } from '@/shared/lib';
import CreateColumnsArray from './CreateColumnsArray';
import { CreateProjectDTO, projectSchema, useProjectStore } from '@/entities/Project';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ROUTER } from '@/shared/models';

const CreateProject = () => {
  const { t } = useTranslation();
  const { createProject } = useProjectStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const defaultColumns = [
    { title: t('kanban.queue'), id: 'column-' + generateUuid() },
    { title: t('kanban.inProgress'), id: 'column-' + generateUuid() },
    { title: t('kanban.done'), id: 'column-' + generateUuid() },
  ];

  const methods = useForm<CreateProjectDTO>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      columns: defaultColumns,
    },
  });

  const handleSubmit = methods.handleSubmit(
    async (data) => {
      setIsLoading(true);
      try {
        const res = await createProject(data);
        router.replace(ROUTER.project(res.id));
      } catch {
        Alert.alert('Error', 'Failed to create project');
      } finally {
        setIsLoading(false);
      }
    },
    (errors) => {
      Alert.alert('Form Error', JSON.stringify(errors));
    }
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <View className="gap-4 p-4 pb-15">
          <Form.Input control={methods.control} name="title" labelKey="Project Name" />
          <Form.Input
            control={methods.control}
            name="description"
            labelKey="Description"
            inputProps={{
              multiline: true,
              className: 'min-h-24 max-h-40',
            }}
          />
          <CreateColumnsArray
            methods={methods}
            name="columns"
            defaultField={{ title: '', id: 'column-' + generateUuid() }}
          />
          <Button onPress={handleSubmit} disabled={isLoading}>
            <T mess="common.create" />
          </Button>
        </View>
      </ScrollView>
      <AlertLoader loading={isLoading} />
    </KeyboardAvoidingView>
  );
};
export default CreateProject;
