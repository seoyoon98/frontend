import "./Review.css";

function Review() {
    const reviews = [
        {
            user: "User1",
            date: "2023.05.02",
            review: "맛있어요!",
            rating: 5
        }, {
            user: "User2",
            date: "2023.05.04",
            review: "알바생이 친절해요 ㅎㅎ",
            rating: 5
        }, {
            user: "User2",
            date: "2023.05.04",
            review: "알바생이 친절해요 ㅎㅎ",
            rating: 3
        }, {
            user: "User2",
            date: "2023.05.04",
            review: "알바생이 친절해요 ㅎㅎ",
            rating: 2
        }
    ];
  return (
    <div className="Review">
      <div id="title">
        <h1>써브웨이 수원성균관대점</h1>
        <h4>후기 <span>{reviews.length ? (reviews.reduce((a, b) => a + b.rating, 0) / reviews.length).toFixed(1) : '-'}</span> 리뷰 <span>{reviews.length}</span></h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <div>전체 {reviews.length}</div>
        {reviews.map(r => 
        <div style={{maxWidth: '300px'}}>
            <span>{r.user} | {r.date}</span>
            <br/>
            <span>{r.review}</span>
            <span style={{float: 'right'}}>{r.rating}점</span>
        </div>
            )}
      </div>
    </div>
  );
}

export default Review;