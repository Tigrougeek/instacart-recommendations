// import React, {Component, Fragment, useEffect} from 'react';
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import useResources from "./useResources";
// import useWindowDimensions from "./UseWindowDimensions";
//
// // type Position = [number, number]
//
// const ShowMap = (props) => {
//     const [coordinate, setCoordinate] = React.useState([43.6532, -79.3832]);
//     const { height: windowHeight, width: windowWidth } = useWindowDimensions();
//
//     const {recommendations} = props;
//    // const [markerList, setMakerList] = React.useState([])
//     // if (props.recommendations != null) {
//     //     const markerList = props.recommendations.map(restaurant => ({
//     //         key: restaurant.business_id,
//     //         position: [restaurant.longitude, restaurant.latitude],
//     //         content: "good restaurant"}));
//     //     setMakerList(markerList)
//     // if (props.recommendations != null) {
//     //     const markerList = props.recommendations.map(restaurant => [restaurant.longitude, restaurant.latitude])
//     //     setMakerList(markerList)
//     // }
//     // useEffect(
//     //     () => {
//     //     }, [markerList]
//     // )
//
//     var pandaIcon = L.icon({
//         iconUrl: 'panda_marker.png',
//         iconSize: [32, 32], // size of the icon
//     });
//
//     useEffect(
//         () => {
//             useResources('coordinate_of_cities.json').then(r => setCoordinate(r))
//         }, []
//     )
//     const position = coordinate[props.city];
//     const zoom = 13;
//     return (
//         <div id="mapId">
//             <Map center={position} zoom={zoom} style={{height: windowHeight - 130}}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 {
//                     recommendations != null && recommendations.map(
//                         restaurant =>
//                             <Marker key={restaurant.business_id}
//                                     position={[restaurant.latitude, restaurant.longitude]}
//                                     icon={pandaIcon}
//                             >
//                                 <Popup>
//                                     {restaurant.name}
//                                 </Popup>
//                             </Marker>
//                     )
//                 }
//
//             </Map>
//         </div>
//     )
// }
//
// export default ShowMap
