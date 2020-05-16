import React, {useEffect, useState} from "react";
import useResources from "./useResources";
import useWindowDimensions from "./UseWindowDimensions";
import ProductCard from "./ProductCard";
import DepartmentList from "./DepartmentList";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddIcon from '@material-ui/icons/Add';
import LinearProgress from '@material-ui/core/LinearProgress';

const AssociationRulePage = (props) => {
    const {scope, setScope, products, associationRules} = props;
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();

    let title = "Click on a aisle to see the list of products";
    switch(scope.scope) {
        case 'aisle_id':
            title = `Products in aisle ${scope.name}`;
            return <div style={{marginTop: 10, marginLeft: 10}}>
                  <h2>{title}</h2>
                  <div style={{display: 'flex', flexFlow: 'wrap', flexDirection: 'row', alignContent: 'flex-start',maxHeight: windowHeight - 130}}>
                      {
                          products.map(product =>
                              <ProductCard key={product.product_id} product={product} setScope={setScope} />
                          )
                      }
                  </div>
              </div>;

        case 'product_id':
            title = `Products associated to ${scope.name}`;
            return <div style={{marginTop: 10, marginLeft: 10}}>
                  <h2>{title}</h2>
                  <div style={{display: 'flex', flexFlow: 'wrap', flexDirection: 'row', alignContent: 'flex-start',maxHeight: windowHeight - 130}}>
                      {
                          associationRules.map((associationRule, j) =>
                              <div style={{marginTop: 10, marginBottom: 10}}>
                                  {j < 0 && <hr />}
                                  <div style={{display: 'flex', flexDirection: 'row', fontSize: 14, marginLeft: 20}}>
                                      <div style={{width: 200, paddingLeft: 14, paddingRight: 14}}>
                                          Lift: {associationRule.lift.toFixed(3)}
                                          <LinearProgress variant="determinate" value={associationRule.lift * 100} />
                                      </div>
                                      <div style={{width: 200, paddingLeft: 14, paddingRight: 14}}>
                                          Support:{associationRule.support.toFixed(3)}
                                          <LinearProgress variant="determinate" value={associationRule.support * 100} />
                                      </div>
                                      <div style={{width: 200, paddingLeft: 14, paddingRight: 14}}>
                                          Confidence: {associationRule.confidence.toFixed(3)}
                                          <LinearProgress variant="determinate" value={associationRule.confidence * 100} />
                                      </div>
                                  </div>
                                  <div style={{padding: 10, display: 'flex', flexDirection: 'row'}}>
                                      {
                                          associationRule.antecedentProducts.map(
                                              (product, i) =>
                                                <>
                                                    {
                                                        i > 0 && <div><AddIcon style={{ marginTop: 45, fontSize: 80, color: 'pink' }}/></div>
                                                    }
                                                    <div style={{padding: 10, cursor: 'pointer'}} onClick={() => setScope({scope: 'product_id', id: product.product_id, name: product.product_name})}>
                                                      <ProductCard key={product.product_id} product={product} />
                                                    </div>
                                                </>
                                          )
                                      }
                                      <div><ArrowForwardIcon style={{ marginTop: 45, fontSize: 80 }}/></div>
                                      {
                                          associationRule.consequentProducts.map(
                                              (product, i) =>
                                                <>
                                                    {
                                                        i > 0 && <div><AddIcon style={{ marginTop: 45, fontSize: 80, color: 'pink' }}/></div>
                                                    }
                                                    <div style={{padding: 10, cursor: 'pointer'}}>
                                                      <ProductCard key={product.product_id} product={product} setScope={setScope} />
                                                    </div>
                                                </>
                                          )
                                      }
                                  </div>

                              </div>
                          )
                      }
                  </div>
              </div>;
        default:
            return <div style={{marginTop: 10, marginLeft: 10}}>
              <h2>Click on one of the aisle on the left to get started</h2>
            </div>
    }
}


export default AssociationRulePage;

