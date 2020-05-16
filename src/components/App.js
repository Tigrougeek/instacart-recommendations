import React, {useEffect, useState} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import RecommendationPage from './RecommendationPage';
import OrderHistoryPage from './OrderHistoryPage';
import AssociationRulePage from './AssociationRulePage';

import HomePage from "./HomePage";
import { useHistory } from 'react-router-dom';
import "./style.css";
import "leaflet/dist/leaflet.css";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useResources from "./useResources";
import DepartmentList from "./DepartmentList";
import OrderHistoryList from "./OrderHistoryList";


const App = () => {
    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState(null);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [selectedScope, setSelectedScope] = useState({});
    const classes = useStyles();
    const [selectedTabId, setSelectedTabId] = React.useState(0);
    const history = useHistory();
    const [orderIdsByUser, setOrderIdsByUser] = useState([])
    const [productIdsByOrder, setProductIdsByOrder] = useState({})
    const [productById, setProductById] = useState({});
    const [associationRules, setAssociationRules] = useState([]);
    const [departmentById, setDepartmentById] = useState({})
    const [aisleById, setAisleById] = useState({})
    const [recommendedProductIdsByUserId, setRecommendedProductIdsByUserId] = useState({});
    const [productByIdInRule, setProductByIdInRule] = useState({});
    const [departmentByIdInRule, setDepartmentByIdInRule] = useState({})

    const tabs = ['/association_rules', '/recommendation', '/order_history'];

    useEffect(
    () => {
         setSelectedTabId(Math.max(0, tabs.indexOf(history.location.pathname)));
        useResources("recommendations.json").then(r => setRecommendedProductIdsByUserId(r));
        useResources("aisles.json").then(r => setAisleById(r));
        useResources("users.json").then(r => setUserList(r));
        useResources("orders_by_user.json").then(r => setOrderIdsByUser(r));
        useResources("products_by_oder.json").then(r => setProductIdsByOrder(r));
        useResources("products_info.json").then(r => setProductById(r));
        useResources("departments.json").then(r => setDepartmentById(r));
        useResources("rules.json").then(r => setAssociationRules(r));
        useResources("products_in_rule_info.json").then(r => setProductByIdInRule(r));
        useResources("departments_in_rule_info.json").then(r => setDepartmentByIdInRule(r))

    }, []);

    const getProducts = (productIds) => {
        return productIds.map(
            productId => {
                const product = productById[productId];
                return {
                    product_id: productId,
                    product_name: product.product_name,
                    department_id: product.department_id,
                    department_name: departmentById[product.department_id],
                    aisle_id: product.aisle_id,
                    aisle_name: aisleById[product.aisle_id]
                };
            }
        );
    }

    const handleChange = (event, tabId) => {
        console.log("woof");
        console.log(tabId)
        setSelectedTabId(tabId);

        if (tabId != 0) {
            setSelectedScope({});
        }
        history.push(tabs[tabId]);
    };

    const userId = user != null ? user["user_id"] : null;

    const userOrderIds = (userId != null && orderIdsByUser[userId] != null)
        ? orderIdsByUser[userId]
        : [];

    const recommendedProducts = (userId != null && recommendedProductIdsByUserId[userId] != null)
        ? getProducts(recommendedProductIdsByUserId[userId])
        : [];

    const orderProducts = (selectedOrderId != null && productIdsByOrder[selectedOrderId] != null)
        ? getProducts(productIdsByOrder[selectedOrderId])
        : [];


    let associatedProducts = [];
    let matchingAssociationRules = [];
    switch (selectedScope.scope) {
        case 'aisle_id':
            associatedProducts = getProducts(
                Object.entries(productByIdInRule).filter(e => e[1]['aisle_id'] === selectedScope.id).map(e => e[0])
            );
            break;

        case 'product_id':
            const productId = parseInt(selectedScope.id);
            if (selectedTabId != 0) {
                setSelectedTabId(0);
                history.push(tabs[0]);
            }
            matchingAssociationRules = associationRules
                .filter(r => r.antecedents.indexOf(productId) >= 0)
                .map(
                    rule => ({
                        ...rule,
                        antecedentProducts: getProducts(rule.antecedents),
                        consequentProducts: getProducts(rule.consequents),
                    })
                );
            matchingAssociationRules.sort((r1, r2) => r2.lift - r1.lift);
            break;

    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <div style={{width: 80}}>
                        <img src='panda_grocery.png' style={{width: 80, padding: 8, top: -4, left: 10, position: 'fixed', transform: 'scale(1.5)'}}/>
                    </div>
                    <Tabs value={selectedTabId} onChange={handleChange} aria-label="simple tabs example" style={{flex: 1}}>
                        <Tab label="Association Rules" />
                        <Tab label="Recommendation" />
                        <Tab label="Order History" />
                    </Tabs>

                    <Autocomplete
                        onChange={(event, newValue) => setUser(newValue)}
                        id="combo-box-demo"
                        options={userList}
                        getOptionLabel={(option) => option.user_id}
                        style={{ paddingLeft: 100, width: 300 }}
                        renderInput={(params) => <TextField {...params} label="User" variant="outlined" />}
                    />
                </Toolbar>
            </AppBar>]
            {
                selectedTabId !== 1 && <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                >
                    <div className={classes.drawerContainer} style={{marginTop: 80}}>
                        {
                         selectedTabId === 0
                            ? <DepartmentList departmentById={departmentByIdInRule} setScope={setSelectedScope} />
                            : <OrderHistoryList orderIds={userOrderIds} setOrderId={setSelectedOrderId} />
                        }

                    </div>
                </Drawer>
            }

            {/*<main className={classes.content}>*/}
            {/*    <Toolbar />*/}
            {/*</main>*/}
            <div style={{marginTop: 70}}>
           <Switch>
              <Route path="/recommendation">
                <RecommendationPage userId={userId} products={recommendedProducts} setScope={setSelectedScope} />
              </Route>
              <Route path="/association_rules">
                <AssociationRulePage
                    scope={selectedScope} setScope={setSelectedScope}
                    products={associatedProducts}
                    associationRules={matchingAssociationRules}
                />
              </Route>
              <Route path="/order_history">
                <OrderHistoryPage orderId={selectedOrderId} products={orderProducts} userId={userId} setScope={setSelectedScope}/>
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
            </div>

        </div>
    );
}

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default App
