import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { psClient } from '../common';

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

export const useAddCustomer = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) =>
    psClient({
      url: 'customer',
      method: 'POST',
      data: variables,
    })
      .then((response) => {
        console.log({ cus: response.data });
        return response.data;
      })
      .catch((e) => {
        console.error({ e });
        return e;
      }),
});
