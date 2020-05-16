import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProductCard = (props) => {
    const classes = useStyles()
    const {product, setScope} = props;

    return (
        <div style={{padding: 10, cursor: 'pointer'}} onClick={() => setScope({scope: 'product_id', id: product.product_id, name: product.product_name})}>
            <Card className={classes.roxot}>
                <CardHeader
                avatar={
                    <div style={{alignContent: 'center'}}>
                        <img src={`/product.png`} width={100} height={80} />
                    </div>
                }
                />
                <CardContent>
                    <div style={{color: '#660066', fontWeight: 'bold'}}>{product.product_name}</div>
                    <div style={{color: '#66a', fontSize: 13, fontWeight: 'bold'}}>{product.department_name}</div>
                    <div style={{color: '#66a', fontSize: 13}}>{product.aisle_name}</div>
                    <div style={{color: '#888', fontSize: 8}}>#{product.product_id}</div>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProductCard

