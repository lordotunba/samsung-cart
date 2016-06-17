import React,{ Component } from 'react';
import ProductItem from './ProductItem';



const ProductItems = (props) => {
     const renderCart = props.products.map((product,id) =>{
       return(
              <ProductItem key={id} product={product}/>
            )
     });
    return (
            <div className="section-map">
               {renderCart}
            </div>
          );

}


export default ProductItems;
