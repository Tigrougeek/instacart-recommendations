import React, {useEffect, useState} from "react";
import useResources from "./useResources";
import useWindowDimensions from "./UseWindowDimensions";
import ProductCard from "./ProductCard";
import DepartmentList from "./DepartmentList";


const OrderHistoryPage = (props) => {
    const {orderId, products, userId, setScope} = props;
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();

    if (userId == null) {
        return <div style={{marginTop: 10, marginLeft: 10}}>
          <h2>Select a user to see her past orders</h2>
        </div>
    }

    if (orderId == null) {
        return <div style={{marginTop: 10, marginLeft: 10}}>
          <h2>Select an order on the left</h2>
        </div>
    }

    return (
          <div style={{marginTop: 10, marginLeft: 10}}>
              <h2>Order #{orderId}</h2>
              <div style={{display: 'flex', flexFlow: 'wrap', flexDirection: 'row', alignContent: 'flex-start',maxHeight: windowHeight - 130}}>
                  {
                      products.map(product =>
                          <div style={{padding: 10}}>
                              <ProductCard key={product.product_id} product={product} setScope={setScope} />
                          </div>
                      )
                  }
              </div>
          </div>
      );
}


export default OrderHistoryPage

