// 1. React Library
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 2.third-party library
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../recoil/tokenState';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 3. components & assets
import { BASE_URL } from '../../../config';
import { A11yHidden } from '../../../components/A11yHidden';
import Button from '../../../components/Button';
import img from '../../../assets/image/image.svg';

// 4. custom hooks & styled-components
import { useMutationHook } from '../../../hooks/useMutationHook';
import {
  ProfileInput,
  Fieldsets,
  ProfileImg
} from './profileUpload.style';


export const ProfileUpload = () => {
  const { account } = useParams();
  const [token] = useRecoilState(tokenState);
  const [username, setUserName] = useState('');
  const [accountname, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  // * 입력값 핸들러
  const handleInputChange = (e, setInputChange) => {
    if (setInputChange === setImage) {
      test.mutate();
      setImage(e.target.files[0]);
      console.log('file:', image);
    } else {
      setInputChange(e.target.value);
    }
  }


  // * 이미지 업로드 API 호출
  // 이미지 파일 정보를 담은 FormData 객체에 imageFile을 담아서 전송
  const formData = new FormData();
  formData.append('image', image);

  //! 이미지 첨부가 잘 되지 않음
  const test = useMutationHook(
    '/image/uploadfile',
    'post',
    { formData },
    {
      onSuccess: (data) => {
        console.log('hahaha');
      }
    }
  );


  // * 프로필 업로드 API 호출
  const uploadProfile = useMutationHook(
    '/user',
    'put',
    { user: { username, accountname, intro, image } },
    {
      onSuccess: () => {
        console.warn('요청에 성공했습니다..');
      }
    },
  );

  // 페이지 이동
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate(`/profile/${account}`);
  }

  return (
    <>
      <ProfileInput>
        <h2>
          <A11yHidden>
            프로필 설정
          </A11yHidden>
        </h2>
        <ProfileImg icon={img}>
          <label htmlFor="profileImg">
            <img
              // src={imageUrl || "http://146.56.183.55:5050/Ellipse.png"}
              src={imageUrl || "http://146.56.183.55:5050/Ellipse.png"}
              alt="사용자 이미지"
              id="imagePre"
            />
          </label>
          <input
            type="file"
            id="profileImg"
            onChange={(e) => handleInputChange(e, setImage)}
          />
        </ProfileImg>
        <Fieldsets>
          <label htmlFor="userNameInput">사용자 이름</label>
          <input
            type="text"
            id="userNameInput"
            value={username}
            placeholder="2~10자 이내여야 합니다."
            onChange={(e) => handleInputChange(e, setUserName)}
          />
        </Fieldsets>
        <Fieldsets>
          <label htmlFor="userIdInput">계정 ID</label>
          <input
            type="text"
            value={accountname}
            id="userIdInput"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
            onChange={(e) => handleInputChange(e, setAccountName)}
          />
        </Fieldsets>
        <Fieldsets>
          <label htmlFor="userIntroInput">소개</label>
          <input
            type="text"
            value={intro}
            id="userIntroInput"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요."
            onChange={(e) => handleInputChange(e, setIntro)}
          />
        </Fieldsets>

        <Button
          // icon={img}
          size="cta"
          variant="primary"
          type="button"
          onClick={() => uploadProfile.mutate()}
        >
          저장
        </Button>
        <button onClick={goToProfile}>프로필 보기</button>
      </ProfileInput>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default ProfileUpload;