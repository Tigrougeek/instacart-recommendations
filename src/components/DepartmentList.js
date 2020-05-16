import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {ShoppingBasket, Store} from "@material-ui/icons";
import useResources from "./useResources";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function DepartmentList(props) {
  const classes = useStyles();
  const {setScope} = props;
  const [aisleOpenMap, setAisleOpenMap] = useState({});
  const [insideOpen, setInsideOpen] = useState(false);
  const departmentById = props.departmentById;
  const [aislesByDepartmentMap, setAislesByDepartmentMap] = useState({})
  const [aisleInfo, setAisleInfo] = useState({})
  useEffect(
  () => {
      useResources("department_aisle_mapping.json").then(r => setAislesByDepartmentMap(r));
      useResources("aisles_in_rule_info.json").then(r => setAisleInfo(r));
  }, []);
  const handleInsideClick = () => {
    setInsideOpen(!open);
  };
  const handleClick = () => {
    setAisleOpenMap({});
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Store />
        </ListItemIcon>
        <ListItemText primary="Shop By Department" />
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            Object.entries(departmentById).map(department =>
              <>
                <ListItem button onClick={e => {
                  setAisleOpenMap({...aisleOpenMap, [department[0]]: !aisleOpenMap[department[0]]})
                }} className={classes.nested}>
                  <ListItemIcon><ShoppingBasket /></ListItemIcon>
                  <ListItemText primary={<a href='javascript: void(0)' onClick={e => setScope({scope: 'department_id', id: department[0], name: department[1]})} style={{color: '#44a', fontSize: 16}}>{department[1]}</a>} />
                  {aisleOpenMap[department[0]] ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={aisleOpenMap[department[0]]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding style={{paddingLeft: 20}}>
                  {
                    (aislesByDepartmentMap[department[0]] || []).map(aisleId =>
                        <ListItem button className={classes.nested} onClick={e => setScope({scope: 'aisle_id', id: aisleId, name: aisleInfo[aisleId]})} >
                          <ListItemText primary={<div style={{color: '#660066', fontSize: 14}}>{aisleInfo[aisleId]}</div>} style={{paddingLeft: 20}}/>
                        </ListItem>)}
                  </List>
                </Collapse>
              </>
            )
          }
        </List>
      </Collapse>
    </List>
  );
}
