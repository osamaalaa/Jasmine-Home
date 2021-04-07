import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/headerRtl';
import Footer from '../layout/footer';
import TopCategories from '../element/top-categories-carousel';
import BestSeller from '../element/best-seller-carousel';
import BrandCarousel from '../element/brand-slider-carousel';
import TestimonialCarousel from '../element/testimonial-carousel';
import {Trans } from "react-i18next";
import {withTranslation} from "react-i18next";
import Jasmine from "./jasmine-products"
import ProductsTabs from '../element/products-tabs';
import JasmineTwo from "./jasmine-products-two"

class RtlHome extends Component {
     componentDidMount() {
        window.sliderr();
        window.commonjs();
    }
    render() {
        return (
            <>
                <Header />

                <div className="content">
                    <div id="thmg-slider-slideshow" class="thmg-slider-slideshow">
                        <div class="container">
                            <div id='thm_slider_wrapper' class='thm_slider_wrapper fullwidthbanner-container' >
                                <div id='thm-rev-slider' class='rev_slider fullwidthabanner'>
                                    <ul>

                                        <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img1.jpg'><img src='images/s3.jpg' data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image1" />
                                            <div class="info">
                                                {/* <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0' data-y='220' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "2", "whiteSpace": "nowrap" }}><span>Fresh Food</span></div> */}
                                                <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0' data-y='300' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "3", "whiteSpace": "nowrap" }}>100 % <span>قطـن مصري</span></div>
                                                <div class='tp-caption sfb  tp-resizeme ' data-x='0' data-y='520' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}><a href='#' class="buy-btn">تسوق الان</a></div>
                                                <div class='tp-caption Title sft  tp-resizeme ' data-x='0' data-y='420' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}>The Best Bath Towels</div>
                                            </div>
                                        </li>

                                        <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img3.jpg'><img src='images/s1.jpg' data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image2" />
                                            <div class="info">
                                                {/* <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0' data-y='220' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "2", "whiteSpace": "nowrap" }}><span>Fresh Look</span></div> */}
                                                <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0' data-y='300' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "3", "whiteSpace": "nowrap" }}><span>100%</span> قطـن مصري</div>
                                                <div class='tp-caption sfb  tp-resizeme ' data-x='0' data-y='520' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}><a href='#' class="buy-btn">Shop Now</a></div>
                                                <div class='tp-caption Title sft  tp-resizeme ' data-x='0' data-y='420' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}>According to Textile Expert</div>
                                            </div>
                                        </li>

                                        <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img3.jpg'><img src='images/s4.jpg' data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image2" />
                                            <div class="info">
                                                {/* <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0' data-y='220' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "2", "whiteSpace": "nowrap" }}><span>Fresh Look</span></div> */}
                                                <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0' data-y='300' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "3", "whiteSpace": "nowrap" }}><span>100%</span> قطـن مصري</div>
                                                <div class='tp-caption sfb  tp-resizeme ' data-x='0' data-y='520' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}><a href='#' class="buy-btn">تسوق الان</a></div>
                                                <div class='tp-caption Title sft  tp-resizeme ' data-x='0' data-y='420' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}>According to Textile Expert</div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--Category slider Start--> */}
                    <div className="top-cate">
                        <div className="featured-pro container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slider-items-products">
                                                <TopCategories />
                                            
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!--Category silder End--> */}

                    <div id="top">
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <Link to={'/'} data-scroll-goto="1"> <img
                                    src="images/banner-img1.jpg" alt="promotion-banner1" /> </Link> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <Link to={'/'} data-scroll-goto="2"> <img
                                    src="images/banner-img2.jpg" alt="promotion-banner2" /> </Link> </div> */}
                            </div>
                        </div>
                    </div>



                    {/* <!-- best Pro Slider --> */}
                    <section className=" wow bounceInUp animated">
                        <div className="best-pro slider-items-products container">
                            <div className="new_title">
                                <h2>Best Seller</h2>
                                <h4>So you get to know me better</h4>
                            </div>
                                    <BestSeller />
                            
                        </div>
                    </section>
                    <section className=" wow bounceInUp animated">
                        <div className="best-pro slider-items-products container">
                            <div className="new_title">
                                <h2>Products</h2>
                                <h4>Jasmine Home Products</h4>
                               
                            </div>
                           
                                    
                            
                        </div>
                        <ProductsTabs />
                    </section>
                    
                    <div className="hot-section">
                        <div className="container">
                            <div className="row">
                                <div className="ad-info">
                                    <h2>Hurry Up!</h2>
                                    <h3>Deal of the week</h3>
                                    <h4>100% EGYPTIAN COTTON.</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="hot-deal">
                                    <div className="box-timer">
                                        <div className="countbox_1 timer-grid"></div>
                                    </div>
                                    <ul className="products-grid">
                                       
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="logo-brand">
                                    <div className="slider-items-products">
                                                <BrandCarousel />
                                        

                                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Home Lastest Blog Block --> */}
                    {/* <div className="latest-blog wow bounceInUp animated animated container"> */}
                        {/* <!--exclude For version 6 --> */}

                        {/* <!--For version 1,2,3,4,5,6,8 --> */}
                      
                        {/* <!--END For version 1,2,3,4,5,6,8 --> */}
                        {/* <!--exclude For version 6 --> */}
                        {/* <!--container--> */}
                        <div className="body_wrapper">
                        <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        {/* <img className="dot_img" src={require ('../images/divider.png')} alt=""/> */}
                        <Jasmine rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="p1.jpg" iImg="icon01.png" ftitle="With efficiency to unlock more opportunities" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <JasmineTwo rowClass="row" aClass="pl_100"  fimage="p1.jpg" iImg="icon02.png" ftitle="Wuth instant data to keep everyone in the know" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Jasmine rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="p1-1.jpg" iImg="icon3.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <JasmineTwo rowClass="row" aClass="pl_100"  fimage="p2.jpg" iImg="icon_04.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Jasmine rowClass="row flex-row-reverse" aClass="pr_70 pl_70"  fimage="p3.jpg" iImg="icon_05.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="dot middle_dot"><span className="dot1">Shop Now</span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
            </div>
                    {/* </div> */}

                    {/* <!-- Logo Brand Block --> */}

                </div>
                <div className="mid-section">
                    <div className="container">
                        <div className="row">
                            <h3>100 % EGYPTIAN COTTON</h3>
                            <h2>Special Product</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="block1"> <strong>100 % EGYPTIAN COTTON</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant
                                morbi.</p>
                                </div>
                                <div className="block2"> <strong>100 % EGYPTIAN COTTON</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant
                                morbi.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="spl-pro"><Link to={'product-details'} title="100 % EGYPTIAN COTTON"><img
                                    src={require("../images/towel-TE62EJY.jpg")} alt="100 % EGYPTIAN COTTON" /></Link>
                                    <div className="item-info">
                                        <div className="info-inner">
                                            <div className="item-title"><Link to={'product-details'}
                                                title="100 % EGYPTIAN COTTON">100 % EGYPTIAN COTTON</Link> </div>
                                            <div className="item-content">
                                                <div className="rating">
                                                    <div className="ratings">
                                                        <div className="rating-box">
                                                            <div className="rating"></div>
                                                        </div>
                                                        <p className="rating-links"><Link to={'/'}>1 Review(s)</Link> <span
                                                            className="separator">|</span> <Link to={'/'}>Add Review</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="block3"> <strong>100 % EGYPTIAN COTTON</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant
                                morbi.</p>
                                </div>
                                <div className="block4"> <strong>100 % EGYPTIAN COTTON</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant
                                morbi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row our-features-box">
                        <ul>
                            <li>
                                <div className="feature-box">
                                    <div className="icon-truck"></div>
                                    <div className="content">FREE SHIPPING on order over 99 EGP</div>
                                </div>
                            </li>
                            <li>
                                <div className="feature-box">
                                    <div className="icon-support"></div>
                                    <div className="content">Have a question? <br />
                                        +201017372790 </div>
                                </div>
                            </li>
                            <li>
                                <div className="feature-box">
                                    <div className="icon-money"></div>
                                    <div className="content">100% Money Back Guarantee</div>
                                </div>
                            </li>
                            <li>
                                <div className="feature-box">
                                    <div className="icon-return"></div>
                                    <div className="content">30 days return Service</div>
                                </div>
                            </li>
                            <li>
                                <div className="feature-box">
                                    <div className="icon-return"></div>
                                    <div className="content">30 days return Service</div>
                                </div>
                            </li>
                          
                        </ul>
                    </div>
                </div>
                {/* <!-- For version 1,2,3,4,6 --></div> */}

                <Footer />
            </>
        )
    }
}
export default RtlHome ;