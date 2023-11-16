import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';

type Variables = { id: number };
type Response = {};
const token = 'pts_vzdnvbj56k7xkamjid34hjtk7f2hzc5g';
export const useUsers = createQuery<Response, Variables, AxiosError>({
  primaryKey: 'users',
  queryFn: ({ queryKey: [] }) => {
    const d = {};
    return client
      .post(`/user/list`, d, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // console.log({ response });
        return response.data;
      })
      .catch((e) => {
        console.error({ e });
        return e;
      });
  },
});
