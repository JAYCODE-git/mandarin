import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userLoginState } from '../../recoil/userLoginState';

import { useMutationHook } from '../../hooks/useMutationHook';


export const Login = () => {
  // useNavigate를 사용해서 url 변경
  const navigate = useNavigate();

  // recoil을 사용해서 userLoginState를 변경
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUserLoginState = useSetRecoilState(userLoginState);
  // const BASE_URL = 'https://api.mandarin.weniv.co.kr';
  // const api = '/user/login'

  const getLogin = useMutationHook(
    '/user/login',
    'post',
    {
      onSuccess: () => {
        console.log('hahaha');
        navigate('/profile/weniv_jay');
      }
    }
  );



  // * 입력값 핸들러
  const handleInputChange = (e, setInputChange) => {
    setInputChange(e.target.value);
  }

  // Email, Password 입력시 state 변경하는 Handler 함수
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // * Login 버튼 클릭시 비동기 통신 실행
  const handleLogin = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("비밀번호 6개 이상어야함");
      return;
    }
    getLogin.mutate();
  };


  return (
    <>
      <section>
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
            />
          </div>
          <button type="submit">로그인</button>
          <button type="button">이메일로 회원가입</button>
        </form>
      </section>
    </>
  );
};

