import React from "react";

const RestaurantList = ({setCategoryOpen, setRListOpen, setRDataOpen, menu, setMenu, setName, setNums, setScore}) => {

    function onBackClick(){
        setCategoryOpen(true);
        setRListOpen(false);
        setMenu('');
    }

    function onRestaurantChoose(name, nums, score){
        setRListOpen(false);
        setRDataOpen(true);
        setName(name);
        setNums(nums);
        setScore(score);

    }
    
    return(
        <div style={{border: '1px solid green', padding: '10px', width: "15%"}}>
            <h5>menu</h5>
            <h5>{menu}</h5>
            <button onClick={onBackClick}>Back</button>
            <select name="order">
                <option value="RECO">추천순</option>
                <option value="DIST">거리순</option>
            </select>
            <RestaurantElement name='본찌' dist="0.9km" choose={onRestaurantChoose}/>
            <RestaurantElement name='일미' dist="0.9km" choose={onRestaurantChoose}/>
            <RestaurantElement name='옛이야기' dist="0.9km" choose={onRestaurantChoose}/>
            <RestaurantElement name='알촌' dist="0.9km" choose={onRestaurantChoose}/>
            <RestaurantElement name='우리집밥' dist="0.9km" choose={onRestaurantChoose}/>
            <RestaurantElement name='포크포크' dist="0.9km" choose={onRestaurantChoose}/>
            <RestaurantElement name='왕돈까스' dist="0.9km" choose={onRestaurantChoose}/>
            <RestaurantElement name='오아저씨' dist="0.9km" choose={onRestaurantChoose}/>
            <RestaurantElement name='바른김밥' dist="0.9km" choose={onRestaurantChoose}/>
        </div>
    );
}


const RestaurantElement = ({name, dist, choose})=> {
    return(
        <div onClick={()=>choose(name, '11', '4.2')} style={{border: '1px solid green'}}>
            <p>{name}</p>
            <p>{dist}</p>
        </div>
    );
}

export default RestaurantList;