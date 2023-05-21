/* global kakao */
import React, { useEffect, useState } from "react";
import { starting_point } from '../App.js';

function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  
  function findNearestLocation(currentLat, currentLng, locations) {
    let closestLocation = null;
    let closestDistance = Infinity;
  
    for(let location of locations) {
      let distance = getDistance(currentLat, currentLng, location.latitude, location.longitude);
      if(distance < closestDistance) {
        closestDistance = distance;
        closestLocation = location;
      }
    }
  
    return closestLocation ? closestLocation.name : "No locations available";
  }
  

const { kakao } = window;

const Map = ({ locations }) => {
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [currentPositionMarker, setCurrentPositionMarker] = useState(null);

  window.kfoodMarkers = window.kfoodMarkers || [];
  window.fastfoodMarkers = window.fastfoodMarkers || [];
  window.jfoodMarkers = window.jfoodMarkers || [];
  window.wfoodMarkers = window.jfoodMarkers || [];
  window.cfoodMarkers = window.jfoodMarkers || [];
  window.schoolfoodMarkers = window.jfoodMarkers || [];

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 2,
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
    window.fastfoodMarkers.forEach(marker => marker.setMap(null));
    window.jfoodMarkers.forEach(marker => marker.setMap(null));
    window.cfoodMarkers.forEach(marker => marker.setMap(null));
    window.schoolfoodMarkers.forEach(marker => marker.setMap(null));
    window.wfoodMarkers.forEach(marker => marker.setMap(null));
  
    window.kfoodMarkers = [];
    locations.filter(location => location.category === "kfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

        const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);

      kakao.maps.event.addListener(marker, 'click', function() {
        window.open(`https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C495190%2C1053160&rt1=${nearestLocationName}&rt2=${location.name}&rtIds=%2C&rtTypes=%2C`, '_blank');
      });
  
      marker.setMap(map);
      window.kfoodMarkers.push(marker);
    });
  };
  
  const handleJFoodButton = () => {
    if (!map || !currentPosition) return;
  
    // Clear old fastfood markers
    window.fastfoodMarkers.forEach(marker => marker.setMap(null));
    window.cfoodMarkers.forEach(marker => marker.setMap(null));
    window.schoolfoodMarkers.forEach(marker => marker.setMap(null));
    window.wfoodMarkers.forEach(marker => marker.setMap(null));
    window.kfoodMarkers.forEach(marker => marker.setMap(null));
  
    window.jfoodMarkers = [];
    locations.filter(location => location.category === "jfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);

      kakao.maps.event.addListener(marker, 'click', function() {
        window.open(`https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C495190%2C1053160&rt1=${nearestLocationName}&rt2=${location.name}&rtIds=%2C&rtTypes=%2C`, '_blank');
      });
  
      marker.setMap(map);
      window.jfoodMarkers.push(marker);
    });
  };

  const handlefastFoodButton = () => {
    if (!map || !currentPosition) return;
  
    // Clear old kfood markers
    window.jfoodMarkers.forEach(marker => marker.setMap(null));
    window.cfoodMarkers.forEach(marker => marker.setMap(null));
    window.schoolfoodMarkers.forEach(marker => marker.setMap(null));
    window.wfoodMarkers.forEach(marker => marker.setMap(null));
    window.kfoodMarkers.forEach(marker => marker.setMap(null));
  
    window.fastfoodMarkers = [];
    locations.filter(location => location.category === "fastfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);

      kakao.maps.event.addListener(marker, 'click', function() {
        window.open(`https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C495190%2C1053160&rt1=${nearestLocationName}&rt2=${location.name}&rtIds=%2C&rtTypes=%2C`, '_blank');
      });
  
      marker.setMap(map);
      window.fastfoodMarkers.push(marker);
    });
  }; 

  const handleschoolFoodButton = () => {
    if (!map || !currentPosition) return;
  
    // Clear old kfood markers
    window.jfoodMarkers.forEach(marker => marker.setMap(null));
    window.cfoodMarkers.forEach(marker => marker.setMap(null));
    window.fastfoodMarkers.forEach(marker => marker.setMap(null));
    window.wfoodMarkers.forEach(marker => marker.setMap(null));
    window.kfoodMarkers.forEach(marker => marker.setMap(null));
  
    window.schoolfoodMarkers = [];
    locations.filter(location => location.category === "schoolfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);

      kakao.maps.event.addListener(marker, 'click', function() {
        window.open(`https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C495190%2C1053160&rt1=${nearestLocationName}&rt2=${location.name}&rtIds=%2C&rtTypes=%2C`, '_blank');
      });
  
      marker.setMap(map);
      window.fastfoodMarkers.push(marker);
    });
  };

  const handlewFoodButton = () => {
    if (!map || !currentPosition) return;
  
    // Clear old kfood markers
    window.jfoodMarkers.forEach(marker => marker.setMap(null));
    window.cfoodMarkers.forEach(marker => marker.setMap(null));
    window.fastfoodMarkers.forEach(marker => marker.setMap(null));
    window.schoolfoodMarkers.forEach(marker => marker.setMap(null));
    window.kfoodMarkers.forEach(marker => marker.setMap(null));
  
    window.wfoodMarkers = [];
    locations.filter(location => location.category === "wfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);

      kakao.maps.event.addListener(marker, 'click', function() {
        window.open(`https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C495190%2C1053160&rt1=${nearestLocationName}&rt2=${location.name}&rtIds=%2C&rtTypes=%2C`, '_blank');
      });
  
      marker.setMap(map);
      window.fastfoodMarkers.push(marker);
    });
  };

  const handlecFoodButton = () => {
    if (!map || !currentPosition) return;
  
    // Clear old kfood markers
    window.jfoodMarkers.forEach(marker => marker.setMap(null));
    window.wfoodMarkers.forEach(marker => marker.setMap(null));
    window.fastfoodMarkers.forEach(marker => marker.setMap(null));
    window.schoolfoodMarkers.forEach(marker => marker.setMap(null));
    window.kfoodMarkers.forEach(marker => marker.setMap(null));
  
    window.cfoodMarkers = [];
    locations.filter(location => location.category === "cfood").forEach(location => {
      const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });

      const nearestLocationName = findNearestLocation(currentPosition.lat, currentPosition.lng, starting_point);

      kakao.maps.event.addListener(marker, 'click', function() {
        window.open(`https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C495190%2C1053160&rt1=${nearestLocationName}&rt2=${location.name}&rtIds=%2C&rtTypes=%2C`, '_blank');
      });
  
      marker.setMap(map);
      window.fastfoodMarkers.push(marker);
    });
  };

  return (
    <div>
        <button
            onClick={handleschoolFoodButton}
            style={{
                position: 'fixed',
                top: '15%',
                left: '10%',
                transform: 'translate(-50%, -50%)',
            }}
        >
        School Food
        </button>

        <button
            onClick={handlewFoodButton}
            style={{
                position: 'fixed',
                top: '25%',
                left: '10%',
                transform: 'translate(-50%, -50%)',
            }}
        >
        Western Food
        </button>

        <button
            onClick={handlecFoodButton}
            style={{
                position: 'fixed',
                top: '35%',
                left: '10%',
                transform: 'translate(-50%, -50%)',
            }}
        >
        Chinese Food
        </button>

        <button
            onClick={handleKFoodButton}
            style={{
                position: 'fixed',
                top: '45%',
                left: '10%',
                transform: 'translate(-50%, -50%)',
            }}
        >
        Korean Food
        </button>

        <button
            onClick={handlefastFoodButton}
            style={{
                position: 'fixed',
                top: '55%',
                left: '10%',
                transform: 'translate(-50%, -50%)',
            }}
        >
        Fast Food
        </button>

        <button
            onClick={handleJFoodButton}
            style={{
                position: 'fixed',
                top: '65%',
                left: '10%',
                transform: 'translate(-50%, -50%)',
            }}
        >
        Japanese Food
        </button>

        <div
            id="map"
            style={{
                width: "85%",
                height: "1000px",
                transform: "translate(25%, 8%)",
            }}
            className="relative z-0"
        />
    </div>
  );
};

export default Map;
