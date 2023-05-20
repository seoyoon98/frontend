import React from "react";

function StartPage() {
  return (
    <div className="flex">
      <div className="justify-center w-full mt-16">
        <div className="text-center p-8">
          <div className="text-3xl mb-6 font-bold">메뉴 고민</div>
          <div className="text-3xl mb-6 font-bold">
            어떻게 해결하고 있나요 ?
          </div>
          <div></div>
        </div>

        <div className="text-center p-8 bg-slate-200">
          <p className="text-2xl mb-8 font-bold">
            카테고리별로 음식점을 확인하세요 !
          </p>
          <div className="flex justify-around mb-6">
            <div className="mx-4">
              <p className="mb-4 font-bold">한식</p>
              <img
                src="/images/한식.jpg"
                className="startPage-image rounded-full"
                alt=""
              ></img>
            </div>

            <div className="mx-4">
              <p className="mb-4 font-bold">중식</p>
              <img
                src="/images/중식.jpg"
                className="startPage-image rounded-full"
                alt=""
              ></img>
            </div>

            <div className="mx-4">
              <p className="mb-4 font-bold">일식</p>
              <img
                src="/images/일식.jpg"
                className="startPage-image rounded-full"
                alt=""
              ></img>
            </div>

            <div className="mx-4">
              <p className="mb-4 font-bold">양식</p>
              <img
                src="/images/양식.jpg"
                className="startPage-image rounded-full"
                alt=""
              ></img>
            </div>

            <div className="mx-4">
              <p className="mb-4 font-bold">패스트 푸드</p>
              <img
                src="/images/패스트푸드.jpg"
                className="startPage-image rounded-full"
                alt=""
              ></img>
            </div>

            <div className="mx-4">
              <p className="mb-4 font-bold">치킨</p>
              <img
                src="/images/치킨.jpg"
                className="startPage-image rounded-full"
                alt=""
              ></img>
            </div>
          </div>
        </div>

        <div className="text-center p-8">
          <p className="text-2xl mb-6 font-bold">음식점 리뷰를 확인하세요 !</p>
          <div className="flex">
            <div className="w-half">리뷰 UI</div>
            <div className="w-half">리뷰 작성 UI</div>
          </div>
        </div>

        <div className="text-center p-8 bg-slate-200">
          <p className="text-2xl mb-6 font-bold">
            방문 데이터 기반 음식점 맞춤 추천
          </p>
          <div className="flex">
            <div className="w-half text-center">
              <p className="mb-2 text-lg">당신의 방문 데이터를 한눈에 !</p>
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>카테고리</th>
                    <th>방문 횟수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>한식</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>중식</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>패스트 푸드</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>일식</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-half text-center">
              <div className="mb-6">
                <p className="mb-2 text-lg">
                  <strong>한식</strong> 음식점을 가장 많이 방문하셨군요!
                </p>
                <p className="mb-2">이곳은 어떤가요?</p>
                <div>
                  <p></p>
                  <img></img>
                </div>
              </div>
              <div>
                <p className="mb-2 text-lg">방문해보지 않은 곳</p>
                <p className="mb-2">이곳은 어떤가요?</p>
                <div className="">
                  <p>써브웨이 수원성균관대점</p>
                  <img
                    src="/images/써브웨이.jpg"
                    className="startPage-image rounded-full"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
