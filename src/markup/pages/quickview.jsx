import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';



class QuickView extends Component {
componentDidMount() {
        window.sliderr();
        window.commonjs();
         window.zoomimg();
    }

    render() {
        return (
            <>
                <Header />

                <div class="content">
                    <div id="thm-mart-slideshow" class="thm-mart-slideshow">
                        <div class="container">
                            <div id='thm_slider_wrapper' class='thm_slider_wrapper fullwidthbanner-container' >
                                <div id='thm-rev-slider' class='rev_slider fullwidthabanner'>
                                    <ul>
                                        <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img1.jpg'><img src='images/slide-img2.jpg' data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image1" />
                                            <div class="info">
                                                <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0' data-y='220' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "2", "maxWidth": "auto", "maxHeight": "auto", "whiteSpace": "nowrap" }}><span>Fresh Food</span></div>
                                                <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0' data-y='300' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "3", "maxWidth": "auto", "maxHeight": "auto", "whiteSpace": "nowrap" }}>Simply <span>delicious</span></div>
                                                <div class='tp-caption sfb  tp-resizeme ' data-x='0' data-y='520' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "maxWidth": "auto", "maxHeight": "auto", "whiteSpace": "nowrap" }}><a href='#' class="buy-btn">Shop Now</a></div>
                                                <div class='tp-caption Title sft  tp-resizeme ' data-x='0' data-y='420' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "maxWidth": "auto", "maxHeight": "auto", "whiteSpace": "nowrap" }}>Little things make a big difference</div>
                                            </div>
                                        </li>
                                        <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img3.jpg'><img src='images/slide-img3.jpg' data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image2" />
                                            <div class="info">
                                                <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0' data-y='220' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "2", "maxWidth": "auto", "maxHeight": "auto", "whiteSpace": "nowrap" }}><span>Fresh Look</span></div>
                                                <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0' data-y='300' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "3", "maxWidth": "auto", "maxHeight": "auto", "whiteSpace": "nowrap" }}><span>100%</span> Organic</div>
                                                <div class='tp-caption sfb  tp-resizeme ' data-x='0' data-y='520' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "maxWidth": "auto", "maxHeight": "auto", "whiteSpace": "nowrap" }}><a href='#' class="buy-btn">Shop Now</a></div>
                                                <div class='tp-caption Title sft  tp-resizeme ' data-x='0' data-y='420' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "maxWidth": "auto", "maxHeight": "auto", "whiteSpace": "nowrap" }}>Farm Fresh Produce Right to Your Door</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!--Category slider Start--> */}
                    <div class="top-cate">
                        <div class="featured-pro container">
                            <div class="row">
                                <div class="slider-items-products">
                                    <div id="top-categories" class="product-flexslider hidden-buttons">
                                        <div class="slider-items slider-width-col4 products-grid">
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p1.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Fruits</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p2.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Salads</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item -->  */}

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p3.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Vegetables</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p5.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Juices</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p12.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Meats</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item -->  */}

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p27.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Lettuce</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item -->  */}

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p8.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Citrus‎</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item -->  */}

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p11.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Berries</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item -->  */}

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p9.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Beans</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item -->  */}

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p6.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Pomegranates</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item -->  */}

                                            {/* <!-- Item --> */}
                                            <div class="item"> <a href="#">
                                                <div class="pro-img"><img src="products-images/p7.jpg" alt="Fresh Organic Mustard Leaves " />
                                                    <div class="pro-info">Leafy Veg</div>
                                                </div>
                                            </a> </div>

                                            {/* <!-- End Item -->  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--Category silder End--> */}

                    <div id="top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6"> <a href="#" data-scroll-goto="1"> <img src="images/banner-img1.jpg" alt="promotion-banner1" /> </a> </div>
                                <div class="col-lg-6"> <a href="#" data-scroll-goto="2"> <img src="images/banner-img2.jpg" alt="promotion-banner2" /> </a> </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- best Pro Slider --> */}
                    <section class=" wow bounceInUp animated">
                        <div class="best-pro slider-items-products container">
                            <div class="new_title">
                                <h2>Best Seller</h2>
                                <h4>So you get to know me better</h4>
                            </div>
                            <div id="best-seller" class="product-flexslider hidden-buttons">
                                <div class="slider-items slider-width-col4 products-grid">
                                    <div class="item">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p27.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                    <div class="new-label new-top-left">Hot</div>
                                                    <div class="sale-label sale-top-left">-15%</div>
                                                    <div class="item-box-hover">
                                                        <div class="box-inner">
                                                            <div class="product-detail-bnt"><a class="button detail-bnt"><span>Quick View</span></a></div>
                                                            <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="add_cart">
                                                    <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                    <div class="item-content">
                                                        <div class="rating">
                                                            <div class="ratings">
                                                                <div class="rating-box">
                                                                    <div class="rating" style={{ "width": "80%" }}></div>
                                                                </div>
                                                                <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div class="item-price">
                                                            <div class="price-box"><span class="regular-price" ><span class="price">$125.00</span> </span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <!-- Item --> */}
                                    <div class="item">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p17.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                    <div class="item-box-hover">
                                                        <div class="box-inner">
                                                            <div class="product-detail-bnt"><a class="button detail-bnt"><span>Quick View</span></a></div>
                                                            <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="add_cart">
                                                    <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                    <div class="item-content">
                                                        <div class="rating">
                                                            <div class="ratings">
                                                                <div class="rating-box">
                                                                    <div class="rating" style={{ "width": "80%" }}></div>
                                                                </div>
                                                                <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div class="item-price">
                                                            <div class="price-box"><span class="regular-price" ><span class="price">$125.00</span> </span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- End Item -->  */}


                                    {/* <!-- Item --> */}
                                    <div class="item">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p7.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                    <div class="item-box-hover">
                                                        <div class="box-inner">
                                                            <div class="product-detail-bnt"><a class="button detail-bnt"><span>Quick View</span></a></div>
                                                            <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="add_cart">
                                                    <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                    <div class="item-content">
                                                        <div class="rating">
                                                            <div class="ratings">
                                                                <div class="rating-box">
                                                                    <div class="rating" style={{ "width": "80%" }}></div>
                                                                </div>
                                                                <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div class="item-price">
                                                            <div class="price-box"><span class="regular-price" ><span class="price">$125.00</span> </span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- End Item --> */}

                                    <div class="item">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p26.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                    <div class="sale-label sale-top-left">Sale</div>
                                                    <div class="item-box-hover">
                                                        <div class="box-inner">
                                                            <div class="product-detail-bnt"><a class="button detail-bnt"><span>Quick View</span></a></div>
                                                            <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="add_cart">
                                                    <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                    <div class="item-content">
                                                        <div class="rating">
                                                            <div class="ratings">
                                                                <div class="rating-box">
                                                                    <div class="rating" style={{ "width": "80%" }}></div>
                                                                </div>
                                                                <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div class="item-price">
                                                            <div class="price-box"><span class="regular-price" ><span class="price">$125.00</span> </span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <!-- Item --> */}
                                    <div class="item">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p5.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                    <div class="new-label new-top-left">New</div>
                                                    <div class="item-box-hover">
                                                        <div class="box-inner">
                                                            <div class="product-detail-bnt"><a class="button detail-bnt"><span>Quick View</span></a></div>
                                                            <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="add_cart">
                                                    <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                    <div class="item-content">
                                                        <div class="rating">
                                                            <div class="ratings">
                                                                <div class="rating-box">
                                                                    <div class="rating" style={{ "width": "80%" }}></div>
                                                                </div>
                                                                <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div class="item-price">
                                                            <div class="price-box"><span class="regular-price" ><span class="price">$125.00</span> </span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- End Item -->  */}


                                    {/* <!-- Item --> */}
                                    <div class="item">
                                        <div class="item-inner">
                                            <div class="item-img">
                                                <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p6.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                    <div class="new-label new-top-left">New</div>
                                                    <div class="item-box-hover">
                                                        <div class="box-inner">
                                                            <div class="product-detail-bnt"><a class="button detail-bnt"><span>Quick View</span></a></div>
                                                            <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="add_cart">
                                                    <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                </div>
                                            </div>
                                            <div class="item-info">
                                                <div class="info-inner">
                                                    <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                    <div class="item-content">
                                                        <div class="rating">
                                                            <div class="ratings">
                                                                <div class="rating-box">
                                                                    <div class="rating" style={{ "width": "80%" }}></div>
                                                                </div>
                                                                <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                            </div>
                                                        </div>
                                                        <div class="item-price">
                                                            <div class="price-box"><span class="regular-price" ><span class="price">$125.00</span> </span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- End Item -->  */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="hot-section">
                        <div class="container">
                            <div class="row">
                                <div class="ad-info">
                                    <h2>Hurry Up!</h2>
                                    <h3>Deal of the week</h3>
                                    <h4>From our family farm right to your doorstep.</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="hot-deal">
                                    <div class="box-timer">
                                        <div class="countbox_1 timer-grid"></div>
                                    </div>
                                    <ul class="products-grid">
                                        <li class="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="item-inner">
                                                <div class="item-img">
                                                    <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p16.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                        <div class="new-label new-top-left">Hot</div>
                                                        <div class="item-box-hover">
                                                            <div class="box-inner">
                                                                <div class="product-detail-bnt"><a class="button detail-bnt" type="button"><span>Quick View</span></a></div>
                                                                <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="add_cart">
                                                        <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                </div>
                                                <div class="item-info">
                                                    <div class="info-inner">
                                                        <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                        <div class="item-content">
                                                            <div class="rating">
                                                                <div class="ratings">
                                                                    <div class="rating-box">
                                                                        <div class="rating" style={{ "width": "80%" }}></div>
                                                                    </div>
                                                                    <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                                </div>
                                                            </div>
                                                            <div class="item-price">
                                                                <div class="price-box"><span class="regular-price" id="product-price-1"><span class="price">$125.00</span> </span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="item-inner">
                                                <div class="item-img">
                                                    <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p12.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                        <div class="item-box-hover">
                                                            <div class="box-inner">
                                                                <div class="product-detail-bnt"><a class="button detail-bnt" type="button"><span>Quick View</span></a></div>
                                                                <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="add_cart">
                                                        <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                </div>
                                                <div class="item-info">
                                                    <div class="info-inner">
                                                        <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                        <div class="item-content">
                                                            <div class="rating">
                                                                <div class="ratings">
                                                                    <div class="rating-box">
                                                                        <div class="rating" style={{ "width": "80%" }}></div>
                                                                    </div>
                                                                    <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                                </div>
                                                            </div>
                                                            <div class="item-price">
                                                                <div class="price-box"><span class="regular-price" id="product-price-1"><span class="price">$125.00</span> </span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="item-inner">
                                                <div class="item-img">
                                                    <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p21.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                        <div class="item-box-hover">
                                                            <div class="box-inner">
                                                                <div class="product-detail-bnt"><a class="button detail-bnt" type="button"><span>Quick View</span></a></div>
                                                                <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="add_cart">
                                                        <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                </div>
                                                <div class="item-info">
                                                    <div class="info-inner">
                                                        <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                        <div class="item-content">
                                                            <div class="rating">
                                                                <div class="ratings">
                                                                    <div class="rating-box">
                                                                        <div class="rating" style={{ "width": "80%" }}></div>
                                                                    </div>
                                                                    <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                                </div>
                                                            </div>
                                                            <div class="item-price">
                                                                <div class="price-box"><span class="regular-price" id="product-price-1"><span class="price">$125.00</span> </span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div class="item-inner">
                                                <div class="item-img">
                                                    <div class="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " class="product-image"><img src="products-images/p3.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                                        <div class="sale-label sale-top-right">-40%</div>
                                                        <div class="item-box-hover">
                                                            <div class="box-inner">
                                                                <div class="product-detail-bnt"><a class="button detail-bnt" type="button"><span>Quick View</span></a></div>
                                                                <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="add_cart">
                                                        <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                </div>
                                                <div class="item-info">
                                                    <div class="info-inner">
                                                        <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                                        <div class="item-content">
                                                            <div class="rating">
                                                                <div class="ratings">
                                                                    <div class="rating-box">
                                                                        <div class="rating" style={{ "width": "80%" }}></div>
                                                                    </div>
                                                                    <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                                </div>
                                                            </div>
                                                            <div class="item-price">
                                                                <div class="price-box"><span class="regular-price" id="product-price-1"><span class="price">$125.00</span> </span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="testimonials-section slider-items-products">
                                    <div id="testimonials" class="offer-slider parallax parallax-2">
                                        <div class="slider-items slider-width-col6">
                                            <div class="item">
                                                <div class="avatar"><img src="images/member1.png" alt="Image" /></div>
                                                <div class="testimonials">Perfect Themes and the best of all that you have many options to choose! Very fast responding! I highly recommend this theme and these people!</div>
                                                <div class="clients_author"> Smith John <span>Happy Customer</span> </div>
                                            </div>
                                            <div class="item">
                                                <div class="avatar"><img src="images/member2.png" alt="Image" /></div>
                                                <div class="testimonials">Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated.</div>
                                                <div class="clients_author"> Karla Anderson <span>Happy Customer</span> </div>
                                            </div>
                                            <div class="item">
                                                <div class="avatar"><img src="images/member3.png" alt="Image" /></div>
                                                <div class="testimonials">Our support and response has been amazing, helping me with several issues I came across and got them solved almost the same day. A pleasure to work with them!</div>
                                                <div class="clients_author"> Stephen Smith <span>Happy Customer</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="logo-brand">
                                    <div class="slider-items-products">
                                        <div id="brand-slider" class="product-flexslider hidden-buttons">
                                            <div class="slider-items slider-width-col6">

                                                {/* <!-- Item --> */}
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand1.png" alt="Image" /></a></div>
                                                </div>
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand2.png" alt="Image" /></a></div>
                                                </div>

                                                {/* <!-- End Item -->  */}

                                                {/* <!-- Item --> */}
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand3.png" alt="Image" /></a></div>
                                                </div>
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand4.png" alt="Image" /></a></div>
                                                </div>

                                                {/* <!-- End Item -->  */}

                                                {/* <!-- Item --> */}
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand5.png" alt="Image" /></a></div>
                                                </div>
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand6.png" alt="Image" /></a></div>
                                                </div>

                                                {/* <!-- End Item -->  */}

                                                {/* <!-- Item --> */}
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand1.png" alt="Image" /></a></div>
                                                </div>
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand2.png" alt="Image" /></a></div>
                                                </div>

                                                {/* <!-- End Item -->  */}

                                                {/* <!-- Item --> */}
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand3.png" alt="Image" /></a></div>
                                                </div>
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand4.png" alt="Image" /></a></div>
                                                </div>

                                                {/* <!-- End Item -->  */}

                                                {/* <!-- Item --> */}
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand5.png" alt="Image" /></a></div>
                                                </div>
                                                <div class="item">
                                                    <div class="logo-item"><a href="#"><img src="images/brand6.png" alt="Image" /></a></div>
                                                </div>

                                                {/* <!-- End Item -->  */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Home Lastest Blog Block --> */}
                    <div class="latest-blog wow bounceInUp animated animated container">

                        {/* <!--exclude For version 6 -->  */}


                        {/* <!--For version 1,2,3,4,5,6,8 --> */}
                        <div>
                            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
                                <div class="blog_inner">
                                    <div class="blog-img"> <a href="blog-detail.html"> <img src="images/blog-img1.jpg" alt="blog image" /> </a>
                                        <div class="mask"> <a class="info" href="blog-detail.html">Read More</a> </div>
                                    </div>

                                    {/* <!--blog-img--> */}
                                    <div class="blog-info">
                                        <div class="post-date">
                                            <time class="entry-date" datetime="2015-05-11T11:07:27+00:00">26 <span>June</span></time>
                                        </div>
                                        <ul class="post-meta">
                                            <li><i class="fa fa-user"></i>Posted by <a href="#">admin</a> </li>
                                            <li><i class="fa fa-comments"></i><a href="#">4 comments</a> </li>
                                        </ul>
                                        <h3><a href="blog-detail.html">Lorem ipsum dolor sit amet, consectetur adipiscing</a></h3>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada ...</p>
                                    </div>
                                </div>

                                {/* <!--blog_inner-->  */}
                            </div>

                            {/* <!--col-lg-4 col-md-4 col-xs-12 col-sm-4--> */}
                            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
                                <div class="blog_inner">
                                    <div class="blog-img"> <a href="blog-detail.html"> <img src="images/blog-img2.jpg" alt="blog image" /> </a>
                                        <div class="mask"> <a class="info" href="blog-detail.html">Read More</a> </div>
                                    </div>

                                    {/* <!--blog-img--> */}
                                    <div class="blog-info">
                                        <div class="post-date">
                                            <time class="entry-date" datetime="2015-05-11T11:07:27+00:00">30 <span>June</span></time>
                                        </div>
                                        <ul class="post-meta">
                                            <li><i class="fa fa-user"></i>Posted by <a href="#">admin</a> </li>
                                            <li><i class="fa fa-comments"></i><a href="#">6 comments</a> </li>
                                        </ul>
                                        <h3><a href="blog-detail.html">Lorem ipsum dolor sit amet, consectetur adipiscing</a></h3>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada ...</p>
                                    </div>
                                </div>

                                {/* <!--blog_inner-->  */}
                            </div>
                        </div>

                        {/* <!--END For version 1,2,3,4,5,6,8 -->  */}

                        {/* <!--exclude For version 6 -->  */}

                        {/* <!--container-->  */}
                    </div>


                    {/* <!-- Logo Brand Block -->  */}

                </div>
                <div class="mid-section">
                    <div class="container">
                        <div class="row">
                            <h3>Fresh organic foods delivery made easy</h3>
                            <h2>Special Product</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="block1"> <strong>fresh from our farm</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant morbi.</p>
                                </div>
                                <div class="block2"> <strong>100% organic Foods</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant morbi.</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="spl-pro"><a href="product-detail.html" title="Fresh Organic Mustard Leaves "><img src="products-images/p12.jpg" alt="Fresh Organic Mustard Leaves " /></a>
                                    <div class="item-info">
                                        <div class="info-inner">
                                            <div class="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard Leaves </a> </div>
                                            <div class="item-content">
                                                <div class="rating">
                                                    <div class="ratings">
                                                        <div class="rating-box">
                                                            <div class="rating" style={{ "width": "80%" }}></div>
                                                        </div>
                                                        <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="block3"> <strong>Good for health</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant morbi.</p>
                                </div>
                                <div class="block4"> <strong>Safe From Pesticides</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant morbi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            
                        </ul>
                    </div>
                </div>

                <Footer />

                <div class="popup1" style={{"display":"block"}}>

                    <div class="quick-view-box">


                        <img src="images/close-icon.png" alt="close" class="x" />

                        <div class="product-view product-essential container">
                            <div class="row">

                                <form action="" method="post" id="product_addtocart_form">

                                    <div class="product-img-box col-lg-5 col-sm-5 col-xs-12">
                                        <div class="new-label new-top-left">Hot</div>
                                        <div class="sale-label sale-top-left">-15%</div>
                                        <div class="product-image">
                                            <div class="product-full"> <img id="product-zoom" src="products-images/p14.jpg" data-zoom-image="products-images/p14.jpg" alt="product-image" /> </div>
                                            <div class="more-views">
                                                <div class="slider-items-products">
                                                    <div id="gallery_01" class="product-flexslider hidden-buttons product-img-thumb">
                                                        <div class="slider-items slider-width-col4 block-content">
                                                            <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom" src="products-images/p2.jpg" alt="product-image" /> </a></div>
                                                            <div class="more-views-items"> <a href="#" data-image="products-images/p3.jpg" data-zoom-image="products-images/p3.jpg"> <img id="product-zoom" src="products-images/p3.jpg" alt="product-image" /> </a></div>
                                                            <div class="more-views-items"> <a href="#" data-image="products-images/p4.jpg" data-zoom-image="products-images/p4.jpg"> <img id="product-zoom" src="products-images/p4.jpg" alt="product-image" /> </a></div>
                                                            <div class="more-views-items"> <a href="#" data-image="products-images/p14.jpg" data-zoom-image="products-images/p14.jpg"> <img id="product-zoom" src="products-images/p14.jpg" alt="product-image" /> </a> </div>
                                                            <div class="more-views-items"> <a href="#" data-image="products-images/p6.jpg" data-zoom-image="products-images/p6.jpg"> <img id="product-zoom" src="products-images/p6.jpg" alt="product-image" /> </a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="product-shop col-lg- col-sm-7 col-xs-12">

                                        <div class="brand">XPERIA</div>
                                        <div class="product-name">
                                            <h1>Fresh Organic Mustard Leaves </h1>
                                        </div>
                                        <div class="ratings">
                                            <div class="rating-box">
                                                <div style={{"width":"60%"}} class="rating"></div>
                                            </div>
                                            <p class="rating-links"> <a href="#">1 Review</a> <span class="separator">|</span> <a href="#">Add Your Review</a> </p>
                                        </div>
                                        <div class="price-block">
                                            <div class="price-box">
                                                <p class="availability in-stock"><span>In Stock</span></p>
                                                <p class="special-price"> <span class="price-label">Special Price</span> <span id="product-price-48" class="price"> $309.99 </span> </p>


                                            </div>
                                        </div>
                                        <div class="add-to-box">
                                            <div class="add-to-cart">
                                                <div class="pull-left">
                                                    <div class="custom pull-left">
                                                        <button onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="fa fa-minus">&nbsp;</i></button>
                                                        <input type="text" class="input-text qty" title="Qty" value="1" maxlength="12" id="qty" name="qty" />
                                                        <button onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;" class="increase items-count" type="button" ><i class="fa fa-plus">&nbsp;</i></button>
                                                    </div>
                                                </div>
                                                <button onclick="productAddToCartForm.submit(this)" class="button btn-cart" title="Add to Cart" type="button">Add to Cart</button>
                                            </div>

                                        </div>
                                        <div class="short-description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. </p>
                                        </div>
                                        <div class="email-addto-box">
                                            <ul class="add-to-links">
                                                <li> <a class="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a></li>
                                                <li><span class="separator">|</span> <a class="link-compare" href="compare.html"><span>Add to Compare</span></a></li>
                                            </ul>
                                            <p class="email-friend"><a href="#" class=""><span>Email to a Friend</span></a></p>
                                        </div>


                                        <ul class="shipping-pro">
                                            <li>Free Wordwide Shipping</li>
                                            <li>30 Days Return</li>
                                            <li>Member Discount</li>
                                        </ul>
                                    </div>

                                </form>
                            </div>
                        </div>





                    </div>
                </div>
                <div id="fade" style={{"display":"block"}}></div>

            </>
        )
    }
}
export default QuickView;