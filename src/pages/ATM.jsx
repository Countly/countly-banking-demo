import React, { useState } from 'react';
import Leaflet from 'leaflet';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';


Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const coordinates = [
  {
    city: 'İzmir',
    lat: 31,
    lng: 23,
  }, {
    city: 'İstanbul',
    lat: 41,
    lng: 31,
  },
];


const ATM = () => {
  const [lat, setLat] = useState(41);
  const [lng, setLng] = useState(29);


  const locationChange = (e) => {
    const index = e.target.value;
    const { city } = coordinates[index];
    setLat(coordinates[index].lat);
    setLng(coordinates[index].lng);
    Countly.add_event({
      key: 'atmSearch',
      segmentation: { city },
    });
    toast(`"atmSearch" event sent with "${city}" segmentation`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  return (
    <div className="p-6 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
      <h3 className="text-3xl text-center m-3">ATM & Branches</h3>
      <select onChange={(e) => locationChange(e)} className="w-1/2 m-auto block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option disabled selected>Choose a province</option>
        {coordinates.map((coor, index) => <option key={index} value={index}>{coor.city}</option>)}

      </select>
      <div className="m-auto p-6">
        <Map center={[lat, lng]} zoom={13} style={{ height: '400px' }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>
                    Lat :
              {' '}
              {lat}
              {' '}
              <br />
              {' '}
Lng :
              {' '}
              {lng}
            </Popup>
          </Marker>
        </Map>
      </div>
    </div>
  );
};


export default ATM;
