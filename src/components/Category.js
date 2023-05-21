import React from "react";

const Category = ({setCategoryOpen, setRListOpen, setMenu}) => {

	function onCategoryChoose(menu) {
		setCategoryOpen(false);
		setRListOpen(true);
		setMenu(menu);
	};

	return (
		<div style={{
            border: '1px solid green',
            width: '80%',
            padding: '10px',
			marginTop: '80px',
			marginLeft: '0px',
			marginRight: '0px',
        	}}>
               
        	<h4>메뉴를 선택하세요</h4>
                
            <CategoryElement gotid='한식' imgsrc='img\한식.jpg' choose={onCategoryChoose}/>
            <CategoryElement gotid='양식' imgsrc='img\양식.jpg' choose={onCategoryChoose}/>
            <CategoryElement gotid='일식' imgsrc='img\일식.jpg' choose={onCategoryChoose}/>
            <CategoryElement gotid='중식' imgsrc='img\중식.jpg' choose={onCategoryChoose}/>
            <CategoryElement gotid='분식' imgsrc='img\분식.png' choose={onCategoryChoose}/>
            <CategoryElement gotid='패스트푸드' imgsrc='img\패스트푸드.jpg' choose={onCategoryChoose}/>
            </div>
	);

};

const CategoryElement = ({gotid, imgsrc, choose}) => {

	return(
		<div id={gotid} onClick={()=>choose(gotid)} className="category" style={{border: '1px solid green', padding: "10px", display: 'flex', marginRight: '0px',}}>
			<img width='120px' height='80px' src={imgsrc}/>
			<p style={{textAlign: 'center'}}>{gotid}</p>
		</div>
	);
};

export default Category;