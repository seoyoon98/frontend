/* global kakao */
import React, { useEffect, useState } from 'react';

const Map = () => {
    const [placeIds, setPlaceIds] = useState([]);

    useEffect(() => {
        window.initKakaoMap = () => {
            const inputData = ['서울역'];
            let count = 0;

            const ps = new kakao.maps.services.Places();

            if (inputData != null) {
                keywordSearch(inputData[count]);
            }

            function keywordSearch(keyword) {
                ps.keywordSearch(keyword, placesSearchCB);
                count = count + 1;
            }

            function placesSearchCB(data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
                    setPlaceIds(ids => [...ids, data[0].id]);
                    console.log(data[0].id);
                    if (count < inputData.length) {
                        keywordSearch(inputData[count]);
                    }
                }
            }
        };

        const script = document.createElement('script');
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=807665f82e6e42962d99efe5027be3ba&libraries=services&callback=initKakaoMap`;
        document.head.appendChild(script);
    }, []);

    return (
        <div>
            {placeIds.map(id => <div key={id}>{id}</div>)}
        </div>
    );
}

export default Map;
