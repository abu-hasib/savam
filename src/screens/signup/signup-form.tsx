import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/ui';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format')
    .optional(),
});

export type FormType = z.infer<typeof schema>;

export type SignupFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  onGit?: () => void;
  onGoogle?: () => void;
  isLoading: boolean;
};

export const SignupForm = ({
  onSubmit = () => {},
  onGit = () => {},
  onGoogle = () => {},
  isLoading,
}: SignupFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  // const [input, setInput] = useState('');

  return (
    <View className="flex-1 justify-center p-4">
      <Text
        testID="form-title"
        variant="h1"
        className="pb-6 text-center text-lg"
      >
        Sign up
      </Text>

      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        placeholder="email"
      />
      <Button
        testID="login-button"
        label="Sign up"
        onPress={handleSubmit(onSubmit)}
        loading={isLoading}
        variant="primary"
      />
      <Button
        testID="login-button"
        label="Google"
        onPress={handleSubmit(onGoogle)}
        // loading={isLoading}
        variant="outline"
      />
      <Button
        testID="login-button"
        label="Github"
        onPress={handleSubmit(onGit)}
        // loading={isLoading}
        variant="outline"
        id="github"
      />
    </View>
  );
};
