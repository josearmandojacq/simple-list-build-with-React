import React,{Component} from 'react';
import { TableCell, TableRow} from 'material-ui/Table';
import {withStyles} from 'material-ui/styles';

const styles = theme =>({
    center:{
        textAlign: 'center',
    }
});



 class Categories extends Component{
    
    
    render(){
        const{classes} = this.props;
       return( <TableRow>
            <TableCell colSpan='2' className={classes.center}>{this.props.category}</TableCell>
        </TableRow>
       );
    }
}


export default withStyles(styles)(Categories);
