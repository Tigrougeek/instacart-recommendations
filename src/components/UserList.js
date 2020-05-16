import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useResources from "./useResources";

export default function UserList() {
    const [userList, setUserList] = React.useState([]);
    useEffect(
    () => {
        useResources("users.json").then(r => setUserList(r));
    }, []);

    const users = (userList.length === 0)
        ? null
        : userList.map(user => user)
      return (
        <Autocomplete
          id="combo-box-demo"
          options={users}
          getOptionLabel={(option) => option.user_id}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
      );
}



