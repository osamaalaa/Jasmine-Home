import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>

                <footer>
                    {/* <!-- BEGIN INFORMATIVE FOOTER --> */}
                    <div className="footer-inner">
                        <div className="newsletter-row">
                            <div className="container">
                                <div className="row">

                                    {/* <!-- Footer Newsletter --> */}
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col1">
                                        <div className="newsletter-wrap">
                                            <h5>Newsletter</h5>
                                            <h4>Get discount 30% off</h4>
                                            <form action="#" method="post" id="newsletter-validate-detail1">
                                                <div id="container_form_news">
                                                    <div id="container_form_news2">
                                                        <input type="text" name="email" id="newsletter1"
                                                            title="Sign up for our newsletter"
                                                            className="input-text required-entry validate-email"
                                                            placeholder="Enter your email address" />
                                                        <button type="submit" title="Subscribe"
                                                            className="button subscribe"><span>Subscribe</span></button>
                                                    </div>
                                                    {/* <!--container_form_news2--> */}
                                                </div>
                                                {/* <!--container_form_news--> */}
                                            </form>
                                        </div>
                                        {/* <!--newsletter-wrap--> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!--footer-column-last--> */}
                        </div>
                        <div className="footer-middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="footer-column">
                                            <h4>Shopping Guide</h4>
                                            <ul className="links">
                                                <li><a href="blog.html" title="How to buy">Blog</a></li>
                                                <li><a href="faq.html" title="FAQs">FAQs</a></li>
                                                <li><a href="#" title="Payment">Payment</a></li>
                                                <li><a href="#" title="Shipment">Shipment</a></li>
                                                <li><a href="#" title="Where is my order?">Where is my order?</a></li>
                                                <li><a href="#" title="Return policy">Return policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="footer-column">
                                            <h4>Style Advisor</h4>
                                            <ul className="links">
                                                <li><a href="login.html" title="Your Account">Your Account</a></li>
                                                <li><a href="#" title="Information">Information</a></li>
                                                <li><a href="#" title="Addresses">Addresses</a></li>
                                                <li><a href="#" title="Addresses">Discount</a></li>
                                                <li><a href="#" title="Orders History">Orders History</a></li>
                                                <li><a href="#" title="Order Tracking">Order Tracking</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="footer-column">
                                            <h4>Information</h4>
                                            <ul className="links">
                                                <li><a href="sitemap.html" title="Site Map">Site Map</a></li>
                                                <li><a href="#" title="Search Terms">Search Terms</a></li>
                                                <li><a href="#" title="Advanced Search">Advanced Search</a></li>
                                                <li><a href="about_us.html" title="About Us">About Us</a></li>
                                                <li><a href="contact_us.html" title="Contact Us">Contact Us</a></li>
                                                <li><a href="#" title="Suppliers">Suppliers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="footer-column">
                                            <h4>Contact Us</h4>
                                            <div className="contacts-info">
                                                <address>
                                                    <i className="add-icon"></i>ThemesGround, 789 Main rd,<br />
                                                    Anytown, CA 12345 USA <br />
                                                </address>
                                                <div className="phone-footer"><i className="phone-icon"></i>+ 888 456-7890</div>
                                                <div className="email-footer"><i className="email-icon"></i><a
                                                    href="mailto:abc@example.com">jasmine-home@themesground.com</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--container--> */}
                    </div>
                    {/* <!--footer-inner--> */}

                    {/* <!--footer-middle--> */}
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4">
                                    <div className="social">
                                        <ul>
                                            <li className="fb"><a href="#"></a></li>
                                            <li className="tw"><a href="#"></a></li>
                                            <li className="googleplus"><a href="#"></a></li>
                                            <li className="rss"><a href="#"></a></li>
                                            <li className="pintrest"><a href="#"></a></li>
                                            <li className="linkedin"><a href="#"></a></li>
                                            <li className="youtube"><a href="#"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12 coppyright"> © 2021 Jasmine Home. All Rights Reserved. </div>
                                <div className="col-xs-12 col-sm-4">
                                    <div className="payment-accept"> <img src="images/payment-1.png" alt="" /> <img
                                        src="images/payment-2.png" alt="" /> <img src="images/payment-3.png" alt="" /> <img
                                            src="images/payment-4.png" alt="" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--footer-bottom--> */}
                    {/* <!-- BEGIN SIMPLE FOOTER --> */}
                </footer>

                {/* <div id="mobile-menu" Style="left: -250px;">
                    <ul>
                        <li>
                            <div className="mm-search">
                                <form id="search1" name="search">
                                    <div className="input-group">

                                        <input type="text" className="form-control simple" placeholder="Search ..." name="srch-term"
                                            id="srch-term" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit"><i className="fa fa-search"></i> </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li>
                            <div className="home"><a href="#">Home</a> </div>
                        </li>
                        <li><a href="#">Pages</a>
                            <ul>
                                <li><a href="grid.html">Grid</a></li>
                                <li> <a href="list.html">List</a></li>
                                <li> <a href="product-detail.html">Product Detail</a></li>
                                <li> <a href="shopping-cart.html">Shopping Cart</a></li>
                                <li><a href="checkout.html">Checkout</a>
                                    <ul>
                                        <li><a href="checkout-method.html">Checkout Method</a></li>
                                        <li><a href="checkout-billing-info.html">Checkout Billing Info</a></li>
                                    </ul>
                                </li>
                                <li> <a href="wishlist.html">Wishlist</a></li>
                                <li> <a href="dashboard.html">Dashboard</a></li>
                                <li> <a href="multiple-addresses.html">Multiple Addresses</a></li>
                                <li> <a href="about-us.html">About us</a></li>
                                <li><a href="blog.html">Blog</a>
                                    <ul>
                                        <li><a href="blog-detail.html">Blog Detail</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact-us.html">Contact us</a></li>
                                <li><a href="404error.html">404 Error Page</a></li>
                            </ul>
                        </li>
                        <li><a href="grid.html">Fruits‎</a>
                            <ul>
                                <li><a href="grid.html">Tropical Fruits‎</a>
                                    <ul>
                                        <li> <a href="grid.html">Coconuts</a> </li>
                                        <li> <a href="grid.html">Dragonfruits</a> </li>
                                        <li> <a href="grid.html">Pomegranates</a> </li>
                                        <li> <a href="grid.html">Passionfruit</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Citrus Fruits‎</a>
                                    <ul>
                                        <li> <a href="grid.html">Fresh Oranges</a> </li>
                                        <li> <a href="grid.html">Grapefruits</a> </li>
                                        <li> <a href="grid.html">Organic Limes</a> </li>
                                        <li> <a href="grid.html">Yellow Lemons</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Stone Fruits</a>
                                    <ul>
                                        <li> <a href="grid.html">Sweet Apricots</a> </li>
                                        <li> <a href="grid.html">Nectarines</a> </li>
                                        <li> <a href="grid.html">Doughnut Peachs</a> </li>
                                        <li> <a href="grid.html">Italian Fruits</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Large Fruits</a>
                                    <ul>
                                        <li> <a href="grid.html">Pineapples</a> </li>
                                        <li> <a href="grid.html">Organic Papayas</a> </li>
                                        <li> <a href="grid.html">Fresh Melons</a> </li>
                                        <li> <a href="grid.html">Grapefruits</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Seasonal Fruits</a>
                                    <ul>
                                        <li> <a href="grid.html">Black Jamuns</a> </li>
                                        <li> <a href="grid.html">Fresh Mangos</a> </li>
                                        <li> <a href="grid.html">Organic Litchis</a> </li>
                                        <li> <a href="grid.html">Longans</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Berries & Cherries</a>
                                    <ul>
                                        <li> <a href="grid.html">Strawberries</a> </li>
                                        <li> <a href="grid.html">Raspberries</a> </li>
                                        <li> <a href="grid.html">Blackberries</a> </li>
                                        <li> <a href="grid.html">Cherries</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="grid.html">Salads‎</a>
                            <ul>
                                <li> <a href="grid.html">Veg Salads</a>
                                    <ul>
                                        <li> <a href="grid.html">Tomatoes</a> </li>
                                        <li> <a href="grid.html">Cucumbers</a> </li>
                                        <li> <a href="grid.html">Peppers & Capsicums</a> </li>
                                        <li> <a href="grid.html">Avocados</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Dressings Salads</a>
                                    <ul>
                                        <li> <a href="grid.html">Hellmann's</a> </li>
                                        <li> <a href="grid.html">Giuseppe Giusti</a> </li>
                                        <li> <a href="grid.html">Unitednature</a> </li>
                                        <li> <a href="grid.html">Walden Farms</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Fruits Salads</a>
                                    <ul>
                                        <li> <a href="grid.html">Pineapples</a> </li>
                                        <li> <a href="grid.html">Red Apple</a> </li>
                                        <li> <a href="grid.html">Strawberries</a> </li>
                                        <li> <a href="grid.html">Row Mangos</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Bagged Salads</a>
                                    <ul>
                                        <li> <a href="grid.html">Italian Baby Spinach</a> </li>
                                        <li> <a href="grid.html">Australia Green Kale</a> </li>
                                        <li> <a href="grid.html">Sustenir Fresh Toscano</a> </li>
                                        <li> <a href="grid.html">Oro Rocket Salad</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Lettuce Salads</a>
                                    <ul>
                                        <li> <a href="grid.html">Butterhead</a> </li>
                                        <li> <a href="grid.html">Red Coral</a> </li>
                                        <li> <a href="grid.html">Rolla Rosa Lettuce</a> </li>
                                        <li> <a href="grid.html">Summercrisp</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Bread Salads</a>
                                    <ul>
                                        <li> <a href="grid.html">Green Goddess</a> </li>
                                        <li> <a href="grid.html">Grilled Broccoli</a> </li>
                                        <li> <a href="grid.html">Panzanella</a> </li>
                                        <li> <a href="grid.html">Green Tomato</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="grid.html">Vegetables</a>
                            <ul>
                                <li> <a href="grid.html">Leafy Vegetables</a>
                                    <ul>
                                        <li> <a href="grid.html">Sprouts</a> </li>
                                        <li> <a href="grid.html">Lettuce</a> </li>
                                        <li> <a href="grid.html">Banana Leaves</a> </li>
                                        <li> <a href="grid.html">Microgreens</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Mushrooms</a>
                                    <ul>
                                        <li> <a href="grid.html">Shimeji Mushroom</a> </li>
                                        <li> <a href="grid.html">Portobello Mushroom</a> </li>
                                        <li> <a href="grid.html">Oyster Mushroom</a> </li>
                                        <li> <a href="grid.html">Shiitake Mushroom</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Baby Vegetables</a>
                                    <ul>
                                        <li> <a href="grid.html">Cabbage</a> </li>
                                        <li> <a href="grid.html">Capsicums</a> </li>
                                        <li> <a href="grid.html">Pak Choi</a> </li>
                                        <li> <a href="grid.html">Spinach</a> </li>
                                    </ul>
                                </li>

                                <li> <a href="grid.html">Salad Vegetables</a>
                                    <ul>
                                        <li> <a href="grid.html">Cucumbers</a> </li>
                                        <li> <a href="grid.html">Avocados</a> </li>
                                        <li> <a href="grid.html">Mustard Leaves</a> </li>
                                        <li> <a href="grid.html">Tomatoes</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Asian Vegetables</a>
                                    <ul>
                                        <li> <a href="grid.html">Spring Onion</a> </li>
                                        <li> <a href="grid.html">Lady Fingers</a> </li>
                                        <li> <a href="grid.html">Watercress</a> </li>
                                        <li> <a href="grid.html">Curry Leaves</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="grid.html">Beans Vegetables</a>
                                    <ul>
                                        <li> <a href="grid.html">French Beans</a> </li>
                                        <li> <a href="grid.html">Sweet Corn</a> </li>
                                        <li> <a href="grid.html">Fine Green Beans</a> </li>
                                        <li> <a href="grid.html">Petai Beans</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="grid.html">Juices‎</a></li>
                        <li><a href="grid.html">Meats‎</a></li>
                        <li><a href="#">Custom‎</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                    </ul>
                    <div className="top-links">
                        <ul className="links">
                            <li><a title="My Account" href="login.html">My Account</a> </li>
                            <li><a title="Wishlist" href="wishlist.html">Wishlist</a> </li>
                            <li><a title="Checkout" href="checkout.html">Checkout</a> </li>
                            <li><a title="Blog" href="blog.html">Blog</a> </li>
                            <li className="last"><a title="Login" href="login.html">Login</a> </li>
                        </ul>
                    </div>
                </div> */}

            </>
        );
    }
}

export default Footer;