import React, { CSSProperties, useState } from 'react';
import Count from './Count';
import ChangeBox from './ChangeBox';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineUnsubscribe } from 'react-icons/md';
import { MdUnsubscribe } from 'react-icons/md';
import { FaEyeSlash } from 'react-icons/fa6';
import { FaRegEye } from 'react-icons/fa';
import LimitCount from './LimitCount';

// ctrl + w : 영역 선택
// ctrl + alt + l : 라인정리
// alt + j : 같은 단어 선택

// Components - Props + State
// html + css => Components
// js[랜더링] =>  Props
// js[이벤트] => State

function App() {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isSub, setIsSub] = useState<boolean>(false);
  const [isCrypted, setIsCrypted] = useState<boolean>(false);
  return (
    <>
      <div onClick={() => setIsLike(!isLike)}>
        {isLike ? <FaHeart /> : <FaRegHeart />}
      </div>
      <div onClick={() => setIsSub(!isSub)}>
        {isSub ? <MdOutlineUnsubscribe /> : <MdUnsubscribe />}
      </div>
      <div onClick={() => setIsCrypted(!isCrypted)}>
        {isCrypted ? (
          <span>
            비밀번호 가리기
            <FaEyeSlash />
          </span>
        ) : (
          <span>
            비밀번호 보이기
            <FaRegEye />
          </span>
        )}
      </div>
      <div>
        <ChangeBox />
        <Count />
      </div>
      <div>
        <LimitCount />
      </div>
    </>
  );
}

export default App;
