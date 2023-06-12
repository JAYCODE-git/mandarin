import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQueryHook } from '../../hooks/useQueryHook';

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Profile = () => {
  const { account } = useParams();

  // useQueryHook을 사용해서 API 호출
  const { data } = useQueryHook(
    `/profile/${account}`,
    'get',
    'login'
  );

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const goToProfileUpload = () => {
    navigate(`/profile/${account}/upload`);
  }

  return (
    <section>
      <h2>프로필</h2>
      <h3>
        {account}
      </h3>
      {data && data.profile ?
        <ul>
          <li>
            <strong>이름</strong>
            <div>
              <img src={`${data.profile.image}`} alt="이미지" />
            </div>
            <span>{data.profile.username}</span>
          </li>
          <li>
            <span>{data.profile.intro}</span>
          </li>
          <li>
            <strong>팔로워</strong>
            <span>{data.profile.follower.length}</span>
          </li>
          <li>
            <strong>팔로잉</strong>
            <span>{data.profile.following.length}</span>
          </li>
        </ul>
        :
        <p>프로필 정보가 없습니다.</p>
      }
      <button type='button' onClick={goToProfileUpload}>프로필 수정</button>
      <ReactQueryDevtools initialIsOpen />
    </section >
  )
}

export default Profile