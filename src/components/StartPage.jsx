import React from "react";

function StartPage(){
    return (
        <div className="flex">
            <div className="justify-center w-full mt-16">

            <div className="text-center p-8">
                <div className="text-3xl mb-6">메뉴 고민</div>
                <div className="text-3xl mb-6">어떻게 해결하고 있나요 ?</div>
                <div></div>
            </div>

            <div className="text-center p-8">
                <p className="text-2xl mb-6">카테고리별로 음식점을 확인하세요 !</p>
                <div>
                    
                </div>
            </div>
            <div className="text-center p-8">
                <p className="text-2xl mb-6">음식점 리뷰를 확인하세요 !</p>
            </div>
            <div className="text-center p-8">
                <p className="text-2xl mb-6">DB 기반 음식점 맞춤 추천</p>
            </div>

            </div>
            
        </div>
    );
}

export default StartPage;