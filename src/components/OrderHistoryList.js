import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import {ShoppingBasket} from "@material-ui/icons";

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

export default function OrderHistoryList(props) {
  const classes = useStyles();
  const {orderIds, setOrderId} = props;

  console.log("grrrrr");
  console.log(orderIds);
  const handleClickOrder = (e, orderId) => {
    e.stopPropagation();
    console.log("selected orderId " + orderId)
    setOrderId(orderId);
  }
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <ShoppingBasket />
        </ListItemIcon>
        <ListItemText primary="Order History" />
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            orderIds.map(orderId =>
                <ListItem key={orderId} button className={classes.nested} onClick={e => handleClickOrder(e, orderId)}>
                  <ListItemText primary={<a href='javascript: void(0)' style={{color: '#44a', fontSize: 16}}>order #{orderId}</a>} />
                </ListItem>
            )
          }
        </List>
      </Collapse>
    </List>
  );
}
