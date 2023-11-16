import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { authClient } from '../common';

type Variables = { email?: string; cb_uri: string };
type Response = {
  request_id: string;
  request_time: string;
  response_time: string;
  status: string;
  summary: string;
  result: {
    flow_choices: Array<any>;
    flow_type: Array<any>;
  };
};

export const useSignin = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) =>
    authClient({
      url: 'flow/start',
      method: 'POST',
      data: variables,
    })
      .then((response) => {
        console.log({ sign: response.data });
        return response.data;
      })
      .catch((e) => {
        console.error({ e });
        return e;
      }),
});
