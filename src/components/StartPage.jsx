import React from "react";

const Th = ({h1, h2, h3}) => {
  const thStyle = {
    padding: '0.5rem',
    border: '1px solid black'
  }

  return (
    <tr>
      <th style={thStyle}>{h1}</th>
      <th style={thStyle}>{h2}</th>
      <th style={thStyle}>{h3}</th>
    </tr>
  );
}

const TrData = ({ rank, category, num }) => {
  const trStyle = {
    background: 'white',
  }

  const tdStyle = {
    padding: '0.5rem',
    border: '1px solid black',
  }

  return (
    <tr style={trStyle}>
      <td style={tdStyle}>{rank}</td>
      <td style={tdStyle}>{category}</td>
      <td style={tdStyle}>{num}</td>
    </tr>
  );
}

const CategoryImg = ({name, src}) => {
  return (
    <div className="mx-4">
      <p className="mb-4 font-bold">{name}</p>
        <img
          src={src}
          className="startPage-image rounded-full"
          alt=""
         ></img>
    </div>
  );
}

function StartPage() {
  return (
    <div className="flex">
      <div className="justify-center w-full mt-16">
        <div className="text-center p-8">
          <div className="text-3xl mb-6 font-bold">메뉴 고민</div>
          <div className="text-3xl mb-6 font-bold">
            어떻게 해결하고 있나요 ?
          </div>
          <div>

          </div>
        </div>

        <div className="text-center p-8 bg-slate-200">
          <p className="text-2xl mb-8 font-bold">
            카테고리별로 음식점을 확인하세요 !
          </p>
          <div className="flex justify-around mb-6">
            <CategoryImg name="한식" src="/images/한식.jpg"/>
            <CategoryImg name="중식" src="/images/중식.jpg"/>
            <CategoryImg name="일식" src="/images/일식.jpg"/>
            <CategoryImg name="양식" src="/images/양식.jpg"/>
            <CategoryImg name="패스트푸드" src="/images/패스트푸드.jpg"/>
            <CategoryImg name="치킨" src="/images/치킨.jpg"/>
          </div>
        </div>

        <div className="text-center p-8">
          <p className="text-2xl mb-6 font-bold">음식점 리뷰를 확인하세요 !</p>
          <div className="flex">
            <div className="w-half p-4">
              <p className="mb-4 text-lg">음식점A 방문 후기</p>
              <table className="w-full">
                <thead className="bg-lime-500/[0.5]">
                  <Th h1="음식점 명" h2="후기" h3="평점"/>
                </thead>
                <tbody>
                  <TrData rank="음식점A" category="괜찮네요" num="3" />
                  <TrData rank="음식점A" category="맛있습니다. 다음에 또 올게요!" num="5" />
                  <TrData rank="음식점A" category="맛있어요!" num="4" />
                </tbody>
              </table>
            </div>
            <div className="w-half p-4">
              <p className="mb-2 text-lg">✏ 방문한 음식점에 리뷰를 남겨보세요 !</p>
              <div className="my-8">
                <input placeholder="평점(1-5)" className="mx-4 p-2" style={{width: "100px", border:'1px solid grey'}}></input>
                <input placeholder="방문 후기를 입력하세요." className="mx-4 p-2" style={{width: "400px", border:'1px solid grey'}}></input>
                <button className="mx-4 p-2" style={{border:'1px solid grey'}}>확인</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-8 bg-slate-200">
          <p className="text-2xl mb-6 font-bold">
            방문 데이터 기반 음식점 맞춤 추천 !
          </p>
          <div className="flex">
            <div className="w-half text-center">
              <p className="mb-4 text-lg">당신의 방문 데이터를 한눈에 !</p>
              <table className="w-full">
                <thead className="bg-lime-500/[0.5]">
                  <Th h1="Rank" h2="카테고리" h3="방문 횟수"/>
                </thead>
                <tbody>
                  <TrData rank="1" category="한식" num="5" />
                  <TrData rank="2" category="치킨" num="3" />
                  <TrData rank="3" category="패스트푸드" num="2" />
                  <TrData rank="4" category="중식" num="1" />
                </tbody>
              </table>
            </div>

            <div className="w-half text-center">
              <div className="mb-6 py-2">
                <p className="mb-2 text-lg">
                📌 <strong>한식</strong> 음식점을 가장 많이 방문하셨군요 !
                </p>
                <div className="mb-2">이곳은 어떤가요?
                  <button className="mx-4 p-2 bg-white rounded-3xl" style={{border:'1px solid grey'}}>율천회관</button>
                </div>
              </div>
              <div className="py-2">
                <p className="mb-2 text-lg">📌 방문해보지 않은 곳</p>
                <div className="mb-2">이곳은 어떤가요?
                  <button className="mx-4 p-2 bg-white rounded-3xl" style={{border:'1px solid grey'}}>써브웨이 수원성균관대점</button>
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