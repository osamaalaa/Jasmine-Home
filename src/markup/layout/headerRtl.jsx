import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery';

// import {} from 'react-router-dom'

import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity } from '../../store/actions/cartActions';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class HeaderRtl extends Component {
    handleRemove = (id) => {
        this.props.removeItem(id);

        toast.error('Removed from cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render() { 
        console.log("Osama" , this.props.products); 
        return (
            <>
                <header>
                    <div id="header">
                        <div className="container">
                            <div className="header-container row">
                                <div className="logo-rtl"> <Link to={'/'} title="index">
                                    <div><img src="images/logo.png" alt="logo" /></div>
                                </Link> </div>
                                <div className="fl-nav-menu-rtl">
                                    <nav>
                                        <div className="mm-toggle-wrap">
                                            <div className="mm-toggle"><i className="icon-align-justify"></i><span
                                                className="mm-label">Menu</span> </div>
                                        </div>
                                        <div className="nav-inner">
                                            {/* <!-- BEGIN NAV --> */}
                                            <ul id="nav"  className="hidden-xs">

                                                <li> <Link className="level-top" to={'/'}><span>الرئيسيه</span></Link></li>
                                                <li> <Link className="level-top" to={'/'}><span>عننا</span></Link></li>
                                                <li> <Link className="level-top" to={'/'}><span>المنتجات</span></Link></li>
                                                <li> <Link className="level-top" to={'/'}><span>تواصل معنا</span></Link></li>
                                            </ul>
                                            {/* <!--nav--> */}
                                        </div>
                                    </nav>
                                </div>

                                {/* <!--row--> */}

                                <div className="fl-header-right">
                                    <div className="fl-links">
                                        <div className="no-js"> <Link title="Company" className="clicker"></Link>
                                            <div className="fl-nav-links">
                                                <div className="language-currency">
                                                    <div className="fl-language">
                                                        <ul className="lang">
                                                            <li><Link title="Arabic Language" to={'/arabic'}> <img src="images/united-arab-emirates.svg" alt="English" />
                                                                <span>Arabic</span> </Link></li>
                                                            <li><Link title="English Language" to={'/'}> <img src="images/united-kingdom.svg" alt="English" />
                                                                <span>English</span> </Link></li>
                                                        </ul>
                                                    </div>
                                                    {/* <!--fl-language--> */}
                                                    {/* <!-- END For version 1,2,3,4,6 --> */}
                                                    {/* <!-- For version 1,2,3,4,6 --> */}
                                                    <div className="fl-currency">
                                                        <ul className="currencies_list">
                                                            <li><Link to={'/'} title="EGP"> £</Link></li>
                                                            <li><Link to={'/'} title="EUR"> €</Link></li>
                                                            <li><Link to={'/'} title="USD"> $</Link></li>
                                                        </ul>
                                                    </div>
                                                    {/* <!--fl-currency--> */}
                                                    {/* <!-- END For version 1,2,3,4,6 --> */}
                                                </div>
                                                <ul className="links">
                                                    <li><Link to={'/dashboard'} title="My Account">My Account</Link></li>
                                                    <li><Link to={'/wishlist'} title="Wishlist">Wishlist</Link></li>
                                                    <li><Link to={'/checkout'} title="Checkout">Checkout</Link></li>
                                                    <li className="last"><Link to={'/login'} title="Login"><span>Login</span></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ========================Cart===================================== */}
                                    <div className="fl-cart-contain">
                                        <div className="mini-cart">
                                            <div className="basket"> <Link to={'/shopping-cart'}><span> {this.props.products.length} </span></Link> </div>
                                            <div className="fl-mini-cart-content">
                                                <div className="block-subtitle">
                                                    <div className="top-subtotal">{this.props.products.length} items, <span className="price">{this.props.total} EGP</span> </div>
                                                    {/* <!--top-subtotal--> */}
                                                    {/* <!--pull-right--> */}
                                                </div> 
                                                {/* <!--block-subtitle--> */}
                                                <ul className="mini-products-list" id="cart-sidebar">

                                                {this.props.products.length ?
                                                                     (this.props.products.map((data, idx) => {
                                                                            return (
                                                                                <li className="item first" key={idx}>
                                                                                <div className="item-inner"><Link className="product-image"
                                                                                    title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                                                                                    to="#l"><img
                                                                                        alt="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                                                                                        src={data.image} /></Link>
                                                                                    <div className="product-details">
                                                                                        <div className="access" onClick={(e)=>{e.preventDefault();this.handleRemove(data.id)}}><Link className="btn-remove1"
                                                                                            title="Remove This Item" >Remove</Link> </div>
                                                                                        {/* <!--access--> */}
                                                                                        <strong>{data.quantity}</strong>X<span className="price">{data.price} EGP</span>
                                                                                        <p className="product-name"><Link to={'/product-details'}>{data.title}</Link></p>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            )
                                                                        })
                                                  
                                                
                                                ): (
                                                    <li className="item first">Empty Cart</li>)}
                                                    
                                                </ul>
                                                <div className="actions">
                                                    <Link to={'/shopping-cart'} className="btn-checkout" title="Checkout" type="button"><span>SHOPPING CART</span></Link>
                                                </div>
                                                {/* <!--actions--> */}
                                            </div>
                                            {/* <!--fl-mini-cart-content--> */}
                                        </div>
                                    </div>
                                    {/* =============================================End Cart ============================== */}
                                    {/* <!--mini-cart--> */}
                                    <div className="collapse navbar-collapse">
                                        <form className="navbar-form" role="search">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="search-btn"> <span
                                                        className="glyphicon glyphicon-search"> <span
                                                            className="sr-only">Search</span> </span> </button>
                                                </span> </div>
                                        </form>
                                    </div>
                                    {/* <!--links--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </>
        )
    }
}
// export default Header;

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(HeaderRtl)