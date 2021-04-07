import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';



class Error404 extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-heading">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="page-title"><h2>404 Page</h2></div>
                            </div>
                            {/* <!--col-xs-12--> */}
                        </div>
                        {/* <!--row--> */}
                    </div>
                    {/* <!--container--> */}
                </div>

                <section class="content-wrapper">
                    <div class="container">
                        <div class="std">
                            <div class="page-not-found">
                                <br />
                                <div><img src="images/404-img.png" alt="error imag" /></div>
                                <h3>Oops! The Page you requested was not found!</h3>
                                <div><Link href="index.html" class="btn-home"><span>Back To Home</span></Link></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Main Container End -->  */}
                <div class="container">
                    <div class="row our-features-box">
                        <ul>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-truck"></div>
                                    <div class="content">FREE SHIPPING on order over $99</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-support"></div>
                                    <div class="content">Have a question?<br />
                                        +1 800 789 0000</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-money"></div>
                                    <div class="content">100% Money Back Guarantee</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-return"></div>
                                    <div class="content">30 days return Service</div>
                                </div>
                            </li>
                            <li class="last">
                                <div class="feature-box"> <Link href="#"><i class="fa fa-apple"></i> download</Link> <Link href="#"><i class="fa fa-android"></i> download</Link> </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
export default Error404;