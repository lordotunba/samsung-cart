import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


 const ProductItem =  ({product}) => {
    const splitHighlightStr = (highlight)=>{
      var amountIndex    = highlight.indexOf("/"),
          firstStrChar   = highlight.substr(0,amountIndex),
          updateStrArr   = firstStrChar.split(":"),
          secondStrChars = highlight.substr(amountIndex+1);

      return {updateStrArr,secondStrChars}

    }

   const processNewWordStr = (data,context) => {
     if(data.indexOf(context) == -1){
       return data;
     }
     else{
       var dashIndex  = data.indexOf("-"),
           newKey = data.substr(0,dashIndex),
           text   = data.substr(dashIndex+1);

       return { newKey,text }
     }
   }

       const img = `./images/${product.image}`;
        return(
          <div className="col-lg-4 col-xs-12 widget-cart card-inverse">
             <div className="card">
               <span className="search-plus-icon col-lg-12 col-xs-12">
                 <i className="fa fa-search-plus" aria-hidden="true"></i>
                 </span>
               <img className="card-img-top img-cart" src={img}/>
               <div className="card-block">
               <div className="card-text">
                <div className="title-text">{typeof(processNewWordStr(product.title,'NEW')) == "object" ?
                <span className="newText">{(processNewWordStr(product.title,'NEW')).newKey}
                     <span className="longTxt"> - {(processNewWordStr(product.title,'NEW')).text} </span> </span>  :
                       processNewWordStr(product.title)}
                     </div>
                <small className="text-muted">{product.model_number}</small>
                <div className="ratings">
                  <StarRatingComponent name="samsung-shopping-rating3"
                                    editing={false}
                                    starCount={5}
                                    value={product.review.score} />
                                  <p className="count"> ({product.review.count}) </p>
                </div>
                <p className="amount-text">${product.price.amount}</p>
                <p className="highlight-text">
                <span>{(splitHighlightStr(product.highlight)).updateStrArr[0]}: </span>
                <span className="srike-out">  {(splitHighlightStr(product.highlight)).updateStrArr[1] } </span>
                <span>  / {(splitHighlightStr(product.highlight)).secondStrChars}</span>
                </p>
              </div>
                <div> {product.available_sizes.length == 1 ?  <div className="size-text"> <br/>  </div>:
                  <div className="size-text">Size
                     <ul>
                       <li className="selected">
                         <a>{product.available_sizes[0]} </a> </li>
                       <li> <a> {product.available_sizes[1]} </a></li>
                      </ul>
                    </div>
                  }
                </div>

               <a href="/" className="btn-demo btn-block btn-cart">ADD TO CART</a>
            </div>
          </div>
         </div>
        )

  }

  export default ProductItem;
