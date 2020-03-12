import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {Button} from './Button';

class Details extends Component {
  render(){
    return (
      <ProductConsumer>
        {(value) => {
          const{id,company,img,info,price,title,inCart} = value.detailProduct;
          return (
            <div className="container py-5">
            {/*TITLE*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-5 text-slanted">
                  <h1>{title}</h1>
                </div>
              </div>
            {/*END TITLE*/}
            {/*PRODUCT INFO*/}
              <div className="row">
                <div className=" col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product"/>
                </div>
                <div className=" col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2 className="font-weight-bold">model : {title}</h2>
                  <h4 className=" text-title mt-3 mb-2">
                    made by: <span className=" text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-title font-weight-bold">
                    price: <span>$</span>{price}
                  </h4>
                  <h4>
                    <p className="text-title mt-3 mb-0 text-capitalize">
                      Info:
                    </p>
                    <p className="text-muted lead">
                      {info}
                    </p>
                    {/*Button*/}
                    <div>
                      <Link to='/'>
                        <Button>back to product</Button>
                      </Link>
                      <Button cart disabled={inCart?true:false} onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                      }}>
                        {inCart? "inCart" : "add to cart"}
                      </Button>
                    </div>
                  </h4>
                </div>
              </div>
            {/*END PRODUCT INFO*/}
            </div>
          )
        }}
      </ProductConsumer>
    );
}
}

export default Details;
