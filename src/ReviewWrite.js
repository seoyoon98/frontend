import "./ReviewWrite.css";

function ReviewWrite(props) {
  console.log(props)
  return (
    <div className="ReviewWrite">
      <p>음식은 어떠셨어요?<br/>써브웨이 수원성균관대점<br/>점수를 입력해주세요!</p>
      <input placeholder="1-5"></input>점
      <br/>
      <p>리뷰를 입력해주세요!</p>
      <input placeholder="리뷰"></input>
      <br/>
      <button onClick={() => props.setWrite(false)}>리뷰 작성하기</button>
    </div>
  );
}

export default ReviewWrite;