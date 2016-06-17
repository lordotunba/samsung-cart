import React, {Component} from 'react';
import axios from 'axios';
import ProductItems from './productItems';




export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
             products:[]
           };
           
    this.fetchProducts = this.fetchProducts.bind(this);
  }



componentWillMount(){
  this.fetchProducts();
}

makeApiCall(){
  axios.get('/v1/products')
       .then((response) => {
         this.setState({products:this.state.products.concat(response.data)});
       });

}

fetchProducts(e){
    this.makeApiCall(this.state.userLocation);
}



  render() {
    return (
        <div className="row">
        <div>
          <ProductItems products={this.state.products} />
        </div>

        </div>
    );
  }
}
