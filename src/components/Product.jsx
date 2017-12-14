import React, {Component} from 'react';
import { TableCell, TableRow} from 'material-ui/Table';
import {withStyles} from 'material-ui/styles';

export default class Product extends Component{
    

    render(){
        return(
            <TableRow>
                <TableCell className={this.props.className}>{this.props.name}</TableCell>
                <TableCell>{this.props.price}</TableCell>
            </TableRow>
        );
    }
}