// import React, {useContext, useEffect, useState} from 'react';
// import useResources from "./useResources";
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Toolbar from "@material-ui/core/Toolbar";
// import AppBar from "@material-ui/core/AppBar";
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
// const NavBar = (props) => {
//     const classes = useStyles();
//
//     const {city, setCity, user, setUser} = props;
//     const [userList, setUserList] = React.useState([]);
//     const [cityList, setCityList] = React.useState([]);
//
//     const handleChangeCity = (event) => {
//         setCity(event.target.value);
//     };
//     const handleChangeUser = (event) => {
//         setUser(event.target.value);
//     };
//
//     useEffect(
//         () => {
//         useResources('users-test.json').then(r => setUserList(r));
//         useResources('main_cities.json').then(r => setCityList(r));
//
//         }, []);
//
//
//     return (
//         <div>
//         <AppBar position="static">
//             <Toolbar>
//                 <div>
//                     <FormControl className={classes.formControl}>
//                         <InputLabel id="demo-simple-select-label">City</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={city}
//                             onChange={handleChangeCity}
//                         >
//                       {
//                           Object.entries(cityList).sort((e1, e2) => e1[1].localeCompare(e2[1])).map(
//                               entry => <MenuItem key={entry[0]} value={entry[1]}>{entry[1]}</MenuItem>)
//                       }
//                         </Select>
//                     </FormControl>
//                                 <FormControl className={classes.formControl}>
//                         <InputLabel id="demo-simple-select-label">User</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={user}
//                             onChange={handleChangeUser}
//                         >
//                       {
//                           Object.entries(userList).sort((e1, e2) => e1[1].localeCompare(e2[1])).map(
//                               entry => <MenuItem key={entry[0]} value={entry[1]}>{entry[1]}</MenuItem>)
//                       }
//                         </Select>
//                     </FormControl>
//                 </div>
//             </Toolbar>
//         </AppBar>
//
//         </div>
//     )
// }
//
// export default NavBar;
//             // <div>{JSON.stringify(Rec)}</div>
