import React from "react";
import { locations } from '../App.js';
import Map from "./Kakao.jsx";

const RestaurantList = ({ setCategoryOpen, setRListOpen, setRDataOpen, menu, setMenu, setName, setNums, setScore }) => {

    const filteredLocations = locations.filter(location => {
        switch (menu) {
            case '한식':
                return location.category === 'kfood';
            case '일식':
                return location.category === 'jfood';
            case '중식':
                return location.category === 'cfood';
            case '양식':
                return location.category === 'wfood';
            case '분식':
                return location.category === 'schoolfood';
            case '패스트푸드':
                return location.category === 'fastfood';
            default:
                return location;
        }
    });

    function onBackClick() {
        window.jfoodMarkers.forEach(item => {
            item.marker.setMap(null);   // Set marker map to null
            item.infowindow.close();    // Close infowindow
        });
        window.fastfoodMarkers.forEach(item => {
            item.marker.setMap(null);   // Set marker map to null
            item.infowindow.close();    // Close infowindow
        });
        window.cfoodMarkers.forEach(item => {
            item.marker.setMap(null);   // Set marker map to null
            item.infowindow.close();    // Close infowindow
        });
        window.wfoodMarkers.forEach(item => {
            item.marker.setMap(null);   // Set marker map to null
            item.infowindow.close();    // Close infowindow
        });
        window.kfoodMarkers.forEach(item => {
            item.marker.setMap(null);   // Set marker map to null
            item.infowindow.close();    // Close infowindow
        });
        window.schoolfoodMarkers.forEach(item => {
            item.marker.setMap(null);   // Set marker map to null
            item.infowindow.close();    // Close infowindow
        });
        setCategoryOpen(true);
        setRListOpen(false);
        setMenu('');
    }

    function onRestaurantChoose(name, nums, score) {
        setRListOpen(false);
        setRDataOpen(true);
        setName(name);
        setNums(nums);
        setScore(score);
    }

    return (
        <div style={{ border: '1px solid green', padding: '10px', width: "150%", marginTop: '80px' }}>
            <h5>menu</h5>
            <h5>{menu}</h5>
            <button onClick={onBackClick}>Back</button>
            <select name="order">
                <option value="RECO">추천순</option>
            </select>
            {filteredLocations.map(location =>
                <RestaurantElement
                    name={location.name}
                    dist="0.9km"
                    choose={onRestaurantChoose}
                />
            )}
        </div>
    );
}

const RestaurantElement = ({ name, dist, choose }) => {
    return (
        <div onClick={() => choose(name, '11', '4.2')} style={{ border: '1px solid green', marginRight: '0px', }}>
            <p>{name}</p>
            <p>{dist}</p>
        </div>
    );
}

export default RestaurantList;