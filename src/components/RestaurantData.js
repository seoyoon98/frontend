import React from "react";

const RestaurantData = ({setRListOpen, setRDataOpen, name, nums, score}) => {

    function onBackClick(){
        setRListOpen(true);
        setRDataOpen(false);
    }

    return(
        <div style={{border:'1px solid green'}}>
            <div style={{display: "flex", padding:'10px', justifyContent: "space-between"}}>
                <button onClick={onBackClick}>Back</button>
                <div>
                    <h2 style={{textAlign: 'center'}}>{name}</h2>
                    <h4 style={{textAlign: 'center'}}>리뷰 {nums}개, 평점 : {score}</h4>
                </div>
                <button>My Page</button>
            </div>
            <div style={{display: "flex", padding:'10px'}}>
                <MenuData/>
                <ReviewData/>
            </div>
        </div>
    );
};

const MenuData =()=>{
    return(
            <div style={{width: '48%', padding:'10px', border:'1px solid green'}}>
            <MenuElement menu="메뉴" price="10000"/>
            <MenuElement menu="메뉴2" price="10000"/>               
            <MenuElement menu="메뉴3" price="10000"/>
            <MenuElement menu="메뉴4" price="10000"/>
            <MenuElement menu="메뉴5" price="10000"/>
            <MenuElement menu="메뉴6" price="10000"/>
            <MenuElement menu="메뉴7" price="10000"/>
            <MenuElement menu="메뉴8" price="10000"/>
        </div>
    );
};

const MenuElement =({menu, price})=>{
    return(
        <div style={{border:'1px solid green'}}>
            <p>{menu}</p>
            <p>{price}</p>
        </div>
    );
};

const ReviewData=()=>{
    return(
        <div style={{width: '48%', padding:'10px', border:'1px solid green', marginLeft:'10px'}}>
            <ReviewElement user="ABC" date="2023.05.11" review="맛있어요" score="4.0"/>
            <ReviewElement user="ABC" date="2023.05.11" review="맛있어요" score="4.0"/>
            <ReviewElement user="ABC" date="2023.05.11" review="맛있어요" score="4.0"/>
            <ReviewElement user="ABC" date="2023.05.11" review="맛있어요" score="4.0"/>
            <ReviewElement user="ABC" date="2023.05.11" review="맛있어요" score="4.0"/>
            <ReviewElement user="ABC" date="2023.05.11" review="맛있어요" score="4.0"/>
            <ReviewElement user="ABC" date="2023.05.11" review="맛있어요" score="4.0"/>
            <ReviewElement user="ABC" date="2023.05.11" review="맛있어요" score="4.0"/>
            <button>리뷰 남기기</button>
        </div>
    );
};

const ReviewElement=({user, date, review, score})=>{
    return(
        <div style={{border:'1px solid green'}}>
            <p>{user} / {date} / {score}</p>
            <p>{review}</p>
        </div>
    );
};

export default RestaurantData;