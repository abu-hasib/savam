import React from 'react';
import { Linking } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { useSignin } from '@/api/auth';
import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { FocusAwareStatusBar, showErrorMessage } from '@/ui';

import type { SignupFormProps } from './signup-form';
import { SignupForm } from './signup-form';

// eslint-disable-next-line max-lines-per-function
export const Signup = () => {
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();
  const { mutate: SignIn, isLoading } = useSignin();

  const onGoogle = async () => {
    SignIn(
      {
        cb_uri: 'http://localhost:3000',
      },
      {
        onSuccess: (payload) => {
          const {
            result: { flow_choices },
          } = payload;
          if (payload.result) {
            console.log({ iiii: payload.result.flow_choices[2] });
            Linking.openURL(flow_choices[1].data.redirect_uri);
            signIn({ access: '', refresh: '' });
          }
          showMessage({
            message: 'Logged in via Github',
            type: 'success',
          });
        },
        onError: () => {
          showErrorMessage('Error occured sifn');
        },
      }
    );
  };

  const onGit = async () => {
    SignIn(
      {
        cb_uri: 'http://localhost:3000',
      },
      {
        onSuccess: (payload) => {
          const {
            result: { flow_choices },
          } = payload;
          if (payload.result) {
            Linking.openURL(flow_choices[2].data.redirect_uri);
            signIn({ access: '', refresh: '' });
          }
          showMessage({
            message: 'Logged in via Github',
            type: 'success',
          });
        },
        onError: () => {
          showErrorMessage('Error occured sifn');
        },
      }
    );
  };

  const onSubmit: SignupFormProps['onSubmit'] = async (data, e) => {
    console.log({ data, e });
    SignIn(
      {
        ...data,
        cb_uri: 'http://localhost:3000',
      },
      {
        onSuccess: (payload) => {
          console.log({ d: payload });
          const {
            result: { flow_type },
          } = payload;
          if (payload.result) {
            if (flow_type[0] === 'signin') {
              signIn({ access: '', refresh: '' });
            } else {
              onGoogle();
            }
          }
          showMessage({
            message: 'Signed in',
            type: 'success',
          });
        },
        onError: () => {
          showErrorMessage('Error occured sifn');
        },
      }
    );
  };
  return (
    <>
      <FocusAwareStatusBar />
      <SignupForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        onGit={onGit}
        onGoogle={onGoogle}
      />
    </>
  );
};
