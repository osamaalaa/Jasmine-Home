import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import Error404 from './pages/404error';
import About from './pages/about-us';
import Blog from './pages/blog-detail';
import BlogDetails from './pages/blog';
import List from './pages/list';
import Grid from './pages/grid';
import Login from './pages/login';
import MultipleAddresses from './pages/multiple-addresses';
import ProductDetails from './pages/product-details';
import ShoppingCart from './pages/shopping-cart';
import Wishlist from './pages/wishlist';
import CheckoutMethod from './pages/checkout-method';
import Checkout from './pages/checkout';
import ContactUs from './pages/contact-us';
import Dashboard from './pages/dashboard';
import Newsletter from './pages/newsletter';
import QuickView from './pages/quickview';
import Arabic from './pages/rtl-home'
import { Provider } from 'react-redux';
class Markup extends Component {
    render() {
        return (
            
            <BrowserRouter basename={''}>
                <Switch>
                    <Route path='/' exact component={Index} />
                    <Route path='/404error' component={Error404} />
                    <Route path='/about-us' component={About} />
                    <Route path='/blog-detail' component={Blog} />
                    <Route path='/blog' component={BlogDetails} />
                    <Route path='/list' component={List} />
                    <Route path='/grid' component={Grid} />
                    <Route path='/login' component={Login} />
                    {/* <Route path='/multiple-addresses' component={MultipleAddresses} /> */}
                    <Route path='/product-details' component={ProductDetails} />
                    <Route path='/shopping-cart' component={ShoppingCart} />
                    {/* <Route path='/wishlist' component={Wishlist} /> */}
                    <Route path='/checkout-method' component={CheckoutMethod} />
                    <Route path='/checkout' component={Checkout} />
                    <Route path='/contact-us' component={ContactUs} />
                    <Route path='/dashboard' component={Dashboard} />
                    {/* <Route path='/newsletter' component={Newsletter} /> */}
                    <Route path='/quickview' component={QuickView} />
                    <Route path='/arabic' component={Arabic} />

                </Switch>
            </BrowserRouter>

        )
    }
}

export default Markup;