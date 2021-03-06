# E-commerce site
> e-commerce site made with react. 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Site made with react, node.js and bootstrap. Basically on front page you see list of all products, you can add products in cart, or </br>
you can see details for specific product. In cart you can remove or add more same items, also project have paypal button, so you </br>
can test it.

## Screenshots
![](https://github.com/MarkoVitkovic/react-store/blob/master/store.png)

## Technologies
* [React](https://reactjs.org/docs/getting-started.html) - version 16.13.1
* [Node.js](https://nodejs.org/en/docs/) - version 13
* [CSS](https://devdocs.io/css/) - version 3
* [React-dom](https://github.com/facebook/react) - version 16.13.1
* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - version 4

## Setup
Open terminal(cmd) and navigate:</br>
`npx create-react-app my-app`</br>
`cd my-app`</br>
`npm start`</br>
Open source in Visual Studio Code.

## Available Scripts

In the project directory, you can run:

npm start</br>
npm test</br>
npm run build</br>
npm run eject</br>
npm run build

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Examples
Code:</br>
 `<React.Fragment>`</br>
 `       <div className="py-5">`</br>
 `         <div className="container">`</br>
  `        <Title name="our" title="products" />`</br>
   `         <div className="row">`</br>
    `        <ProductConsumer>`</br>
     `         {(value) => {`</br>
      `          return value.products.map(product => {`</br>
       `           return <Product key = {product.id} product = {product} />`</br>
        `        })`</br>
         `     }}`</br>
       `     </ProductConsumer>`</br>
       `   </div>`</br>
       `   </div>`</br>
       ` </div>`</br>
      `</React.Fragment>`</br>


## Features
List of features ready and TODOs for future development
* List of products
* Product details
* Responsive
* Functionally cart
* PayPal pay

To-do list:
* Enable wish list
* Add input form for new products
* Add login form
* Add more products

## Status
Project is: _not finished_

## Inspiration
Credits: [freeCodeCamp.org](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ)

## Contact
Created by [Marko Vitkovic](https://github.com/MarkoVitkovic) - feel free to contact me!

