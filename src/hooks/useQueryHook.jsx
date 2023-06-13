import { BASE_URL } from '../config';

import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query'

import { useRecoilState } from 'recoil';
import { tokenState } from '../recoil/tokenState';

// export const useQueryHook = (apiUrl, method, login) => {
//   const [token] = useRecoilState(tokenState);
//   const queryClient = useQueryClient();

// const { isLoading, error, data } = useQuery({
//   queryKey: [apiUrl, method],
//   queryFn: async () => {
//     const headers = {
//       'Content-type': 'application/json',
//     };
//     login && (headers['Authorization'] = `Bearer ${token}`);

//     const res = await axios({
//       url: BASE_URL + apiUrl,
//       method: method,
//       headers: headers,
//     });
//     console.warn('요청에 성공했습니다.');
//     console.table(res.data)
//     return res.data;
//   },
// });

export const useQueryHook = (apiUrl, method, body = null) => {
  const [token] = useRecoilState(tokenState);
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: [apiUrl, method, body],
    queryFn: async () => {
      const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const res = await axios({
        url: BASE_URL + apiUrl,
        method,
        headers,
        data: body
      });
      console.log('요청에 성공했습니다.');
      console.log(res.data)
      return res.data;
    }
  });
  if (isLoading) {
    console.warn('요청을 실행합니다.');
  }
  if (error) {
    console.error('요청에 실패했습니다.');
  }

  // 쿼리 캐시 삭제
  queryClient.invalidateQueries([apiUrl, method]);
  return { isLoading, error, data };
};

// ✅ CustomHook 활용 예시
// const { data } = useApi(
//   '/url',        // API 주소
//   'get',         // get ...
//   'login',       // 토큰이 필요한 API는 user를 true로 설정
//   data,          // body에 담아 보낼 데이터명
// );

