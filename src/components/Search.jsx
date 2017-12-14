import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Input from 'material-ui/Input';

const styles = theme =>({
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '30px 0 20px 0',
        
    },
    input:{
        margin: theme.spacing.unit
    }
});

     class Search extends Component{
    constructor(props){
       
        super(props);
        
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e){
       this.props.changeKeywordState(e.target.value);
    }
    
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <Input type='text' placeholder='Search...' onChange={this.changeHandler} className={classes.input}/>
            </div>
        );
    }
}

export default withStyles(styles)(Search);