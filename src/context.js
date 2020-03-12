import React, {Component} from 'react';
import {StoreProducts} from './data';
import {detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
state={
  products: [],
  detailProduct: detailProduct,
  cart: [],
  modalOpen: false,
  modalProduct: detailProduct,
  cartSubTotal:0,
  cartTax:0,
  cartTotal:0,
}
componentDidMount(){
  this.setProducts();
}
setProducts = () =>{
  let tempProducts = [];
  StoreProducts.forEach(item => {
    const singleItem = {...item};
    tempProducts = [...tempProducts,singleItem];
  });
    this.setState(() => {
      return {products:tempProducts}
    })
  }

getItem = (id) => {
  const product= this.state.products.find(item => item.id ===id);
  return product;
}

handleDeatail= (id) =>{
  const product = this.getItem(id);
  this.setState(() => {return{detailProduct:product}})
}

addToCart= (id) =>{
  let temp = [...this.state.products];
  const index = temp.indexOf(this.getItem(id));
  const product = temp[index];
  product.inCart = true;
  product.count = 1;
  const price = product.price;
  product.total =  price;
  this.setState(() => {return {products: temp, cart: [...this.state.cart, product]}} , () => {
  this.addTotals(); } ); }


openModal = id => {
  const product = this.getItem(id);
  this.setState(()=> {
    return{modalProduct:product,modalOpen:true}
  })
}
closeModal = () =>{
  this.setState(() => {
    return {modalOpen:false}
  })
}
increment = (id) => {
  let temp = [...this.state.cart];
  const selected = temp.find(item => item.id ===id)
  const index = temp.indexOf(selected);
  const product = temp[index];
  product.count = product.count +1;
  product.total = product.count * product.price;

  this.setState(() => {return{cart:[...temp]}},() => {this.addTotals()})

};
decrement = (id) => {
  let temp = [...this.state.cart];
  const selected = temp.find(item => item.id ===id)
  const index = temp.indexOf(selected);
  const product = temp[index];
  product.count = product.count -1;

if(product.count === 0){
  this.removeItem(id)
}
else{

  product.total = product.count * product.price;
  this.setState(() => {return{cart:[...temp]}},() => {this.addTotals()})
}


};
removeItem = (id) => {
  let temp = [...this.state.products];
  let tempcart = [...this.state.cart];

  tempcart = tempcart.filter(item => item.id!==id);
  const index = temp.indexOf(this.getItem(id));
  let remove = temp[index];
  remove.inCart = false;
  remove.count = 0;
  remove.total = 0;
  this.setState(() => {return{
    cart: [...tempcart],
    products: [...temp]
  };},
  () => {
    this.addTotals();
  }
)
};
clearCart = () => {
  this.setState(() => {
    return{cart:[]}}, ()=> {
      this.setProducts();
      this.addTotals();
  })
};
addTotals = () => {
  let subTotal = 0;
  this.state.cart.map(item => (subTotal += item.total));
  const temp = subTotal * 0.1;
  const tax = parseFloat(temp.toFixed(2));
  const total = subTotal + tax;
  this.setState(() => {
    return{
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total

    }
  })
}
  render(){
    return (

        <ProductContext.Provider value={{
          ...this.state,
          handleDeatail: this.handleDeatail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}>
          {this.props.children}
        </ProductContext.Provider>


    );
}
}

const ProductConsumer = ProductContext.Consumer;



export { ProductProvider, ProductConsumer };
