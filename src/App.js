import React, { useState } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";
import MyPage from "./components/MyPage";
import StartPage from "./components/StartPage";
import MainPage from './components/MainPage';
import Kakao from "./components/Kakao";

function App() {
  const [login, setLogin] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [myPageOpen, setMyPageOpen] = useState(false);
  const [mainPageOpen, setMainPageOpen] = useState(false);

  const locations = [
    { category: "jfood", name: "카츠요이", latitude: 37.2904, longitude: 126.9785, score: 1,},
    { category: "fastfood", name: "피자헛 천천점", latitude: 37.2906, longitude: 126.9783, score: 1,},
    { category: "fastfood", name: "BHC치킨 성대푸르지오점", latitude: 37.289, longitude: 126.9788, score: 1,},
    { category: "jfood", name: "포동이네 성대점", latitude: 37.2979, longitude: 126.969, score: 1,},
    { category: "fastfood", name: "사우스스트릿105", latitude: 37.2982, longitude: 126.9689, score: 1,},
    { category: "kfood", name: "항아리보쌈 성대직영점", latitude: 37.297, longitude: 126.9699, score: 1,},
    { category: "schoolfood", name: "신전떡볶이 수원성대점", latitude: 37.2968, longitude: 126.97, score: 1,},
    { category: "wfood", name: "롤링파스타 수원성균관대점", latitude: 37.2982, longitude: 126.9689, score: 1,},
    { category: "cfood", name: "정원", latitude: 37.2985, longitude: 126.9693, score: 1,},
    { category: "wfood", name: "정성식탁", latitude: 37.2987, longitude: 126.9728, score: 1,},
  ];

  return (
    <div className="w-screen relative">
      <Header
        login={login}
        onLogout={setLogin}
        isLoginOpen={loginModalOpen}
        onLoginClick={setLoginModalOpen}
        isSignUpOpen={signUpModalOpen}
        onSignUpClick={setSignUpModalOpen}
        isMyPageOpen={myPageOpen}
        onMyPageClick={setMyPageOpen}
      />
      <Kakao locations={locations} />
      {login ? <MainPage /> : <StartPage />}
      {/* <StartPage /> */}
      {loginModalOpen ? (
        <Login isLoginOpen={loginModalOpen} onXClick={setLoginModalOpen} />
      ) : null}
      {signUpModalOpen ? (
        <Signup
          isSignUpOpen={signUpModalOpen}
          setSignUpModalOpen={setSignUpModalOpen}
          setLogin={setLogin}
        />
      ) : null}
      {myPageOpen ? <MyPage /> : null}
      {mainPageOpen ? <MainPage /> : null}
    </div>
  );
}

export const starting_point = [
  {name: "성균관대학교 반도체관", latitude: 37.2904, longitude: 126.9785, },
  {name: "성균관대학교 자연과학캠퍼스 제2공학관", latitude: 37.295, longitude: 126.9774, },
  {name: "성균관대학교 자연과학캠퍼스 기숙사지관", latitude: 37.2964, longitude: 126.9775, },
  {name: "성균관대학교 자연과학캠퍼스 기숙사신관", latitude: 37.2965, longitude: 126.9722, },
  {name: "성균관대학교 자연과학캠퍼스 기숙사예관", latitude: 37.2966, longitude: 126.9755, },
  {name: "성균관대학교 자연과학캠퍼스 후문", latitude: 37.2963, longitude: 126.9706, },
  {name: "성균관대학교 자연과학캠퍼스 정문", latitude: 37.2907, longitude: 126.9741, },
  {name: "성균관대역 1호선 2번출구", latitude: 37.2999, longitude: 126.9722, },
];

export default App;
