import React, {Component} from 'react';
import Products from '../Products';
import Product from './Product';
import Category from './Category';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table,{TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';

const styles = theme=>({
    root:{
        width: '100',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table:{
        minWidth: 100,
    },
    
});


 class ShowProducts extends Component{
    
    
    render(){
        const{classes} = this.props;
        let lastCategory = '';
        let rows=[];
        let textSearch = this.props.keyword;

        Products.forEach((product, index)=>{
            if(product.name.indexOf(textSearch) === -1) return;
                
            if(lastCategory !== product.category) rows.push(<Category key={'category' + index} category={product.category} />);
            
            if(!product.stocked  && this.props.onlyInStock) return;
    

            
            
           // i need to check if it is in stock, if not i will add a class who put it in color red 
            if(!product.stocked){
                rows.push(<Product key={'row'+ index} name={product.name} price={product.price} className='red'/>);
            }

            rows.push(<Product key={'row'+ index} name={product.name} price={product.price}/>);
            lastCategory = product.category;
        });
        return (
            <Paper className={classes.root} elevation={20}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                   </TableBody>
                </Table>
            </Paper>
        );
    }
}



export default withStyles(styles)(ShowProducts);