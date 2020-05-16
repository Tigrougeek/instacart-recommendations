import React from 'react'

const HomePage = () => {
    return (
        <div>
            HomePage
        </div>
    )
}
export default HomePage;



// import React, { useEffect, useState } from 'react';
// import HomePageContent from "./HomePageContent";
// import useResources from "./useResources";
// import {makeStyles} from "@material-ui/core/styles";
// import Toolbar from "@material-ui/core/Toolbar";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import PieChart from "./PieChart";
// import Chart from "./Chart";
// import HorizontalBarChart from "./HorizontalBarChart";
//
//
// const HomePage = () => {
//     const classes = useStyles();
//     const [city_id, setCity] = React.useState("all");
//     const handleChangeCity = (event) => {
//         setCity(event.target.value);
//     };
//     const [restaurantByCity, setRestaurantByCity] = useState([])
//     const [cityList, setCityList] = useState([]);
//     const [restaurantList, setRestaurantList] = useState([])
//     const [popularRestaurants, setPopularRestaurants] = useState([]);
//     const [restaurantByStatus, setRestaurantByStatus] = useState([])
//     const [restaurantByRating, setRestaurantByRating] = useState([])
//     const [restaurantByCuisine, setRestaurantByCuisine] = useState([])
//     useEffect(
//         () => {
//             useResources(`${city_id}-restaurants.json`).then(r => setRestaurantList(r));
//             useResources(`active_close_restaurants_${city_id}.json`).then(r => setRestaurantByStatus(r));
//             useResources(`num_restaurant_stars_${city_id}.json`).then(r => setRestaurantByRating(r));
//             useResources(`num_restaurant_cuisine_${city_id}.json`).then(r => setRestaurantByCuisine(r));
//             useResources(`most_popular_restaurants_reviews_${city_id}.json`).then(r => setPopularRestaurants(r));
//         },[city_id]);
//
//     useEffect(
//         () => {
//         useResources('num_restaurants_each_city.json').then(r => setRestaurantByCity(r));
//         useResources('main_cities.json').then(r => setCityList(r));
//         }, []);
//
//     const status_restaurants = (restaurantByStatus === null)
//     ? []
//     : restaurantByStatus
//         .map(status => status)
//         .filter(r => r != null);
//
//     const rating_restaurants = (restaurantByRating === null)
//     ? []
//     : restaurantByRating
//         .map(rating => rating)
//         .filter(r => r != null);
//
//     const popular_restaurants = (popularRestaurants === null)
//     ? []
//     : popularRestaurants
//         .map(restaurant => restaurantList[restaurant.business_id])
//         .filter(r => r != null);
//
//     const restaurant_by_cuisine = (restaurantByCuisine === null)
//     ? []
//     : restaurantByCuisine
//         .map(cuisine => cuisine)
//         .filter(r => r != null);
//     const restaurant_by_city = (restaurantByCity === null) && (city_id != "all")
//         ? []
//         : restaurantByCity
//             .map(city => city)
//             .filter(r => r != null);
//     console.log("woof");
//     console.log(status_restaurants);
//     return (
//         <div>abc</div>
//         // <div>
//         //     <Toolbar>
//         //         <div>
//         //             <FormControl className={classes.formControl}>
//         //                 <InputLabel id="demo-simple-select-label">City</InputLabel>
//         //                 <Select
//         //                     labelId="demo-simple-select-label"
//         //                     id="demo-simple-select"
//         //                     value={city_id}
//         //                     onChange={handleChangeCity}
//         //                 >
//         //                     {
//         //                         Object.entries(cityList).sort((e1, e2) => e1[1].localeCompare(e2[1])).map(
//         //                           entry => <MenuItem key={entry[0]} value={entry[0]}>{entry[1]}</MenuItem>)
//         //                     }
//         //                 </Select>
//         //             </FormControl>
//         //         </div>
//         //     </Toolbar>
//         //     <HomePageContent popularRestaurants = {popular_restaurants}
//         //                      restaurant_by_cuisine = {restaurant_by_cuisine}
//         //                      restaurant_by_city={restaurant_by_city}/>
//         //     {/*<Chart data={restaurant_by_cuisine} dataKey="cuisine" dataValue="num_restaurants"/>*/}
//         //     <div style={{display: 'flex', flexDirection: 'row'}}>
//         //         <PieChart title="Restaurant by Status" data={status_restaurants} dataKey="status" dataValue="number_restaurants" />
//         //         {/*<Chart title="Restaurant by Status"  data={status_restaurants} dataKey="status" dataValue="number_restaurants" />*/}
//         //
//         //         {/*<PieChart data={restaurant_by_cuisine} dataKey="cuisine" dataValue="num_restaurants" />*/}
//         //         <HorizontalBarChart title="Restaurant by Cuisine" sortBy='num_restaurants' data={restaurant_by_cuisine} dataKey="cuisine" dataValue="num_restaurants" />
//         //         <HorizontalBarChart title="Restaurant by Rating" sortBy='star' data={rating_restaurants} dataKey="star" dataValue="num_restaurants" />
//         //     </div>
//         // </div>
//
//     )
// }
//
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));
//
// export default HomePage
