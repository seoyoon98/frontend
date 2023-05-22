/* global kakao */
import React, { useEffect, useState } from "react";
import { starting_point } from '../App.js';
import Category from "./Category.js";
import RestaurantList from "./RestaurantList.js";
import RestaurantData from "./RestaurantData.js";
import MainPage from "./MainPage.js";

// 두 좌표 간의 거리를 Haversine 공식을 사용하여 계산하는 함수
function getDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

// 각도를 라디안으로 변환하는 함수
function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

// 가장 가까운 위치를 찾는 함수. 미리 정해놓은 학교 및 학교 주변에 왕래가 많은 곳 중에 현위치와 가장 곳을 보여줌
function findNearestLocation(currentLat, currentLng, locations) {
  let closestLocation = null;
  let closestDistance = Infinity;

  for (let location of locations) {
    let distance = getDistance(currentLat, currentLng, location.latitude, location.longitude);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestLocation = location;
    }
  }

  return closestLocation ? closestLocation.name : "No locations available";
}

const { kakao } = window;

const Map = ({ locations }) => {
  const [CategoryOpen, setCategoryOpen] = useState(true);
  const [RListOpen, setRListOpen] = useState(false);
  const [RDataOpen, setRDataOpen] = useState(false);
  const [Menu, setMenu] = useState('');
  const [RName, setRName] = useState('');
  const [RNums, setRNums] = useState('');
  const [RScore, setRScore] = useState('');
  const [nearestLocationName, setNearestLocationName] = useState("");

  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [currentPositionMarker, setCurrentPositionMarker] = useState(null);

  window.kfoodMarkers = window.kfoodMarkers || [];
  window.fastfoodMarkers = window.fastfoodMarkers || [];
  window.jfoodMarkers = window.jfoodMarkers || [];
  window.wfoodMarkers = window.wfoodMarkers || [];
  window.cfoodMarkers = window.cfoodMarkers || [];
  window.schoolfoodMarkers = window.schoolfoodMarkers || [];

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 4,
    };

    let newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          setCurrentPosition({ lat, lng });

          const markerImage = new kakao.maps.MarkerImage(
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
            new kakao.maps.Size(50, 50)
          );

          const markerPosition = new kakao.maps.LatLng(lat, lng);
          const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          });

          marker.setMap(newMap);

          setCurrentPositionMarker(marker);

          newMap.setCenter(markerPosition);
        },
        (error) => {
          console.error(error);
        }
      );
    }

    console.log("loading kakaomap");
  }, []);

  const handleKFoodButton = () => {
    if (!map || !currentPosition) return;

    // Clear old fastfood markers
    // Clear old markers and infowindows
    window.fastfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.cfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.schoolfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.wfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.kfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.jfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });


    window.kfoodMarkers = [];
    locations.filter(location => location.category === "kfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);
      setNearestLocationName(nearestLocationName);

      kakao.maps.event.addListener(marker, 'click', function () {
        window.open("https://map.kakao.com/link/to/" + location.name + ',' + location.latitude + ',' + location.longitude);
      });

      marker.setMap(map);

      var iwContent = `
      <div style="padding:5px; height:80px">
        ${location.name}
        <br>
        <p style="color:blue" target="_blank">점수</a>
        <a href="https://map.kakao.com/link/to/${location.name},${location.latitude},${location.longitude}" style="color:blue" target="_blank">길찾기</a>
      </div>
    `,
        iwPosition = new kakao.maps.LatLng(location.latitude, location.longitude); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);

      window.kfoodMarkers.push({ marker: marker, infowindow: infowindow });
    });
  };

  const handleJFoodButton = () => {
    if (!map || !currentPosition) return;

    // Clear old markers and infowindows
    window.fastfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.cfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.schoolfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.wfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.kfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.jfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });


    window.jfoodMarkers = [];
    locations.filter(location => location.category === "jfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);
      setNearestLocationName(nearestLocationName);

      kakao.maps.event.addListener(marker, 'click', function () {
        window.open("https://map.kakao.com/link/to/" + location.name + ',' + location.latitude + ',' + location.longitude);
      });

      marker.setMap(map);

      var iwContent = `
      <div style="padding:5px; height:80px">
        ${location.name}
        <br>
        <p style="color:blue" target="_blank">점수</a>
        <a href="https://map.kakao.com/link/to/${location.name},${location.latitude},${location.longitude}" style="color:blue" target="_blank">길찾기</a>
      </div>
    `,
        iwPosition = new kakao.maps.LatLng(location.latitude, location.longitude); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);

      window.jfoodMarkers.push({ marker: marker, infowindow: infowindow });
    });
  };

  const handlefastFoodButton = () => {
    if (!map || !currentPosition) return;

    // Clear old fastfood markers
    // Clear old markers and infowindows
    window.fastfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.cfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.schoolfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.wfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.kfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.jfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });


    window.fastfoodMarkers = [];
    locations.filter(location => location.category === "fastfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);
      setNearestLocationName(nearestLocationName);

      kakao.maps.event.addListener(marker, 'click', function () {
        window.open("https://map.kakao.com/link/to/" + location.name + ',' + location.latitude + ',' + location.longitude);
      });

      marker.setMap(map);

      var iwContent = `
      <div style="padding:5px; height:80px">
        ${location.name}
        <br>
        <p style="color:blue" target="_blank">점수</a>
        <a href="https://map.kakao.com/link/to/${location.name},${location.latitude},${location.longitude}" style="color:blue" target="_blank">길찾기</a>
      </div>
    `,
        iwPosition = new kakao.maps.LatLng(location.latitude, location.longitude); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);

      window.fastfoodMarkers.push({ marker: marker, infowindow: infowindow });
    });
  };

  const handleschoolFoodButton = () => {
    if (!map || !currentPosition) return;

    // Clear old fastfood markers
    // Clear old markers and infowindows
    window.fastfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.cfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.schoolfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.wfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.kfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.jfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });


    window.schoolfoodMarkers = [];
    locations.filter(location => location.category === "schoolfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);
      setNearestLocationName(nearestLocationName);

      kakao.maps.event.addListener(marker, 'click', function () {
        window.open("https://map.kakao.com/link/to/" + location.name + ',' + location.latitude + ',' + location.longitude);
      });

      marker.setMap(map);

      var iwContent = `
      <div style="padding:5px; height:80px">
        ${location.name}
        <br>
        <p style="color:blue" target="_blank">점수</a>
        <a href="https://map.kakao.com/link/to/${location.name},${location.latitude},${location.longitude}" style="color:blue" target="_blank">길찾기</a>
      </div>
    `,
        iwPosition = new kakao.maps.LatLng(location.latitude, location.longitude); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);

      window.schoolfoodMarkers.push({ marker: marker, infowindow: infowindow });
    });
  };

  const handlewFoodButton = () => {
    if (!map || !currentPosition) return;

    // Clear old fastfood markers
    // Clear old markers and infowindows
    window.fastfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.cfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.schoolfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.wfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.kfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.jfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });


    window.wfoodMarkers = [];
    locations.filter(location => location.category === "wfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);
      setNearestLocationName(nearestLocationName);

      kakao.maps.event.addListener(marker, 'click', function () {
        window.open("https://map.kakao.com/link/to/" + location.name + ',' + location.latitude + ',' + location.longitude);
      });

      marker.setMap(map);

      var iwContent = `
      <div style="padding:5px; height:80px">
      ${location.name}
      <br>
      <p style="color:blue" target="_blank">점수</a>
      <a href="https://map.kakao.com/link/to/${location.name},${location.latitude},${location.longitude}" style="color:blue" target="_blank">길찾기</a>
    </div>
    `,
        iwPosition = new kakao.maps.LatLng(location.latitude, location.longitude); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);

      window.wfoodMarkers.push({ marker: marker, infowindow: infowindow });
    });
  };

  const handlecFoodButton = () => {
    if (!map || !currentPosition) return;

    // Clear old fastfood markers
    // Clear old markers and infowindows
    window.fastfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.cfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.schoolfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.wfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.kfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });
    window.jfoodMarkers.forEach(item => { item.marker.setMap(null); item.infowindow.close(); });


    window.cfoodMarkers = [];
    locations.filter(location => location.category === "cfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);
      setNearestLocationName(nearestLocationName);

      kakao.maps.event.addListener(marker, 'click', function () {
        window.open("https://map.kakao.com/link/to/" + location.name + ',' + location.latitude + ',' + location.longitude);
      });

      marker.setMap(map);

      var iwContent = `
      <div style="padding:5px; height:80px">
        ${location.name}
        <br>
        <p style="color:blue" target="_blank">점수</a>
        <a href="https://map.kakao.com/link/to/${location.name},${location.latitude},${location.longitude}" style="color:blue" target="_blank">길찾기</a>
      </div>
    `,
        iwPosition = new kakao.maps.LatLng(location.latitude, location.longitude); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);

      window.cfoodMarkers.push({ marker: marker, infowindow: infowindow });
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        {CategoryOpen && <Category setCategoryOpen={setCategoryOpen} setRListOpen={setRListOpen} setMenu={setMenu} handleKFoodButton={handleKFoodButton} handleJFoodButton={handleJFoodButton} handleschoolFoodButton={handleschoolFoodButton} handlewFoodButton={handlewFoodButton} handlecFoodButton={handlecFoodButton} handlefastFoodButton={handlefastFoodButton} />}
        {RListOpen && <RestaurantList setCategoryOpen={setCategoryOpen} setRListOpen={setRListOpen} setRDataOpen={setRDataOpen} menu={Menu} setMenu={setMenu} setName={setRName} setNums={setRNums} setScore={setRScore} />}
        {RDataOpen && <RestaurantData setRListOpen={setRListOpen} setRDataOpen={setRDataOpen} name={RName} nums={RNums} score={RScore} />}
        {/* Add the map related HTML elements here */}
      </div>

      <div style={{ textAlign: "center", }}>
        <div
          style={{
            position: 'fixed',
            top: '4.5%',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            backgroundColor: '#FFDEAD',
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center"
          }}
        >
          Nearest location<br></br>{nearestLocationName}
        </div>
      </div>

      <div
        id="map"
        style={{
          width: "1800px",
          height: "800px",
          transform: "translate(7%, 10%)",
        }}
        className="relative z-0"
      />
    </div>
  );

};

export default Map;
