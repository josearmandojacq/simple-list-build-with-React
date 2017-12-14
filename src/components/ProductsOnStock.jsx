import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';


const styles = theme =>({
    container:{
        display: 'flex',
        justifyContent: 'center'
    },
    input:{
        margin: theme.spacing.unit,
    }, 
    label:{
        marginLeft: '8px'
    }
});

    class ProductsOnStock extends Component{
    
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
        console.log(e.target.checked);
        this.props.changeOnStock(e.target.checked);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <input type='checkbox' onChange={this.onChange} />
                <label className={classes.label}>Only show Products in Stock</label>
            </div>
        );
    }
}

export default withStyles(styles)(ProductsOnStock);