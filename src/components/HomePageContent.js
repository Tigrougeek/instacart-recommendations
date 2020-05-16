// import React, {useEffect} from 'react'
// import RestaurantCard from "./RestaurantCard";
// import useWindowDimensions from "./UseWindowDimensions";
//
// const HomePageContent = (props) => {
//     const { height: windowHeight, width: windowWidth } = useWindowDimensions();
//     return (
//         <div>
//             <h2>Popular Restaurants</h2>
//             <div style={{display: 'flex', flexDirection: 'row', overflow: 'auto', width: '100%'}}>
//                 {
//                     props.popularRestaurants.map(restaurant =>
//                         <div style={{width: 300, minWidth: 250, minHeight: 130}}>
//                             <RestaurantCard key={restaurant.business_id} restaurant={restaurant} style={{minHeight: 144}}/>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }
//
// export default HomePageContent
