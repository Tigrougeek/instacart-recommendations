import React from "react";
import useWindowDimensions from "./UseWindowDimensions";
import ProductCard from "./ProductCard";

const RecommendationPage = (props) => {
    const {userId, products, setScope} = props;
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();

    if (userId == null) {
        return <div style={{marginTop: 10, marginLeft: 10}}>
              <h2>Click on a user to see the recommendations</h2>
        </div>
    }
    return (
          <div style={{marginTop: 10, marginLeft: 10}}>
              <h2>Recommended products for user #{userId}</h2>
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


export default RecommendationPage

