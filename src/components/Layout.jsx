import React,{Component} from 'react';
import ShowProducts from './ShowProducts';
import ProductsOnStock from './ProductsOnStock';
import Search from './Search';
import LayoutStyle from '../LayoutStyle.css';

export default class Layout extends Component{
    constructor(){
        super();
        this.state={
            keywordSearch: '',
            onlyInStock: false
        }
        this.changeKeywordState = this.changeKeywordState.bind(this);
        this.changeOnStock = this.changeOnStock.bind(this);
    }

    changeKeywordState(keyword){
        this.setState({
            keywordSearch: keyword
        }, ()=>{
            console.log('keyword state:', this.state.keywordSearch);
        })

    }

    changeOnStock(val){
        this.setState({
                onlyInStock: val
            }, ()=>{
                console.log('onstock:', this.state.onlyInStock);
            });
        }

    

    

    render(){
        return(
            <div>
                <Search changeKeywordState={this.changeKeywordState}/>
                <ProductsOnStock changeOnStock={this.changeOnStock}/>
                <ShowProducts onlyInStock={this.state.onlyInStock} keyword={this.state.keywordSearch}/>
            </div>
        );
    }
}
