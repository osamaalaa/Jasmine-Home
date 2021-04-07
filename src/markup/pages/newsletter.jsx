import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';
import TopCategories from '../element/top-categories-carousel';
import BestSeller from '../element/best-seller-carousel';
import BrandCarousel from '../element/brand-slider-carousel';
import TestimonialCarousel from '../element/testimonial-carousel';



class Newsletter extends Component {

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
                                        <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img1.jpg'><img src='images/slide-img2.jpg' data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image1" />
                                            <div class="info">
                                                <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0' data-y='220' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "2", "whiteSpace": "nowrap" }}><span>Fresh Food</span></div>
                                                <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0' data-y='300' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "3", "whiteSpace": "nowrap" }}>Simply <span>delicious</span></div>
                                                <div class='tp-caption sfb  tp-resizeme ' data-x='0' data-y='520' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}><a href='#' class="buy-btn">Shop Now</a></div>
                                                <div class='tp-caption Title sft  tp-resizeme ' data-x='0' data-y='420' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}>We supply highly quality organic products</div>
                                            </div>
                                        </li>
                                        <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img3.jpg'><img src='images/slide-img3.jpg' data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image2" />
                                            <div class="info">
                                                <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0' data-y='220' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "2", "whiteSpace": "nowrap" }}><span>Fresh Look</span></div>
                                                <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0' data-y='300' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "3", "whiteSpace": "nowrap" }}><span>100%</span> Organic</div>
                                                <div class='tp-caption sfb  tp-resizeme ' data-x='0' data-y='520' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}><a href='#' class="buy-btn">Shop Now</a></div>
                                                <div class='tp-caption Title sft  tp-resizeme ' data-x='0' data-y='420' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ "zIndex": "4", "whiteSpace": "nowrap" }}>Farm Fresh Produce Right to Your Door</div>
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
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <Link to={'/'} data-scroll-goto="1"> <img
                                    src="images/banner-img1.jpg" alt="promotion-banner1" /> </Link> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <Link to={'/'} data-scroll-goto="2"> <img
                                    src="images/banner-img2.jpg" alt="promotion-banner2" /> </Link> </div>
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
                    <div className="hot-section">
                        <div className="container">
                            <div className="row">
                                <div className="ad-info">
                                    <h2>Hurry Up!</h2>
                                    <h3>Deal of the week</h3>
                                    <h4>From our family farm right to your doorstep.</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="hot-deal">
                                    <div className="box-timer">
                                        <div className="countbox_1 timer-grid"></div>
                                    </div>
                                    <ul className="products-grid">
                                        <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div className="item-inner">
                                                <div className="item-img">
                                                    <div className="item-img-info"><Link to={'product-details'}
                                                        title="Fresh Organic Mustard Leaves " className="product-image"><img
                                                            src="products-images/p16.jpg"
                                                            alt="Fresh Organic Mustard Leaves " /></Link>
                                                        <div className="new-label new-top-left">Hot</div>
                                                        <div className="item-box-hover">
                                                            <div className="box-inner">
                                                                <div className="product-detail-bnt"><Link to={'/'}
                                                                    className="button detail-bnt"><span>Quick
                                                                    View</span></Link></div>
                                                                <div className="actions"><span className="add-to-links"><Link to={'/'}
                                                                    className="link-wishlist"
                                                                    title="Add to Wishlist"><span>Add to
                                                                        Wishlist</span></Link> <Link to={'/'}
                                                                        className="link-compare add_to_compare"
                                                                        title="Add to Compare"><span>Add to
                                                                        Compare</span></Link></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to
                                                        Cart</span></button>

                                                    </div>
                                                </div>
                                                <div className="item-info">
                                                    <div className="info-inner">
                                                        <div className="item-title"><Link to={'product-details'}
                                                            title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard
                                                        Leaves </Link> </div>
                                                        <div className="item-content">
                                                            <div className="rating">
                                                                <div className="ratings">
                                                                    <div className="rating-box">
                                                                        <div className="rating"></div>
                                                                    </div>
                                                                    <p className="rating-links"><Link to={'/'}>1 Review(s)</Link> <span
                                                                        className="separator">|</span> <Link to={'/'}>Add
                                                                    Review</Link> </p>
                                                                </div>
                                                            </div>
                                                            <div className="item-price">
                                                                <div className="price-box"><span className="regular-price"><span
                                                                    className="price">$125.00</span>
                                                                </span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div className="item-inner">
                                                <div className="item-img">
                                                    <div className="item-img-info"><Link to={'product-details'}
                                                        title="Fresh Organic Mustard Leaves " className="product-image"><img
                                                            src="products-images/p12.jpg"
                                                            alt="Fresh Organic Mustard Leaves " /></Link>
                                                        <div className="item-box-hover">
                                                            <div className="box-inner">
                                                                <div className="product-detail-bnt"><Link to={'/'}
                                                                    className="button detail-bnt"><span>Quick
                                                                    View</span></Link></div>
                                                                <div className="actions"><span className="add-to-links"><Link to={'/'}
                                                                    className="link-wishlist"
                                                                    title="Add to Wishlist"><span>Add to
                                                                        Wishlist</span></Link> <Link to={'/'}
                                                                        className="link-compare add_to_compare"
                                                                        title="Add to Compare"><span>Add to
                                                                        Compare</span></Link></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to
                                                        Cart</span></button>
                                                    </div>
                                                </div>
                                                <div className="item-info">
                                                    <div className="info-inner">
                                                        <div className="item-title"><Link to={'product-details'}
                                                            title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard
                                                        Leaves </Link> </div>
                                                        <div className="item-content">
                                                            <div className="rating">
                                                                <div className="ratings">
                                                                    <div className="rating-box">
                                                                        <div className="rating"></div>
                                                                    </div>
                                                                    <p className="rating-links"><Link to={'/'}>1 Review(s)</Link> <span
                                                                        className="separator">|</span> <Link to={'/'}>Add
                                                                    Review</Link> </p>
                                                                </div>
                                                            </div>
                                                            <div className="item-price">
                                                                <div className="price-box"><span className="regular-price"><span
                                                                    className="price">$125.00</span>
                                                                </span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div className="item-inner">
                                                <div className="item-img">
                                                    <div className="item-img-info"><Link to={'product-details'}
                                                        title="Fresh Organic Mustard Leaves " className="product-image"><img
                                                            src="products-images/p21.jpg"
                                                            alt="Fresh Organic Mustard Leaves " /></Link>
                                                        <div className="item-box-hover">
                                                            <div className="box-inner">
                                                                <div className="product-detail-bnt"><Link to={'/'}
                                                                    className="button detail-bnt"><span>Quick
                                                                    View</span></Link></div>
                                                                <div className="actions"><span className="add-to-links"><Link to={'/'}
                                                                    className="link-wishlist"
                                                                    title="Add to Wishlist"><span>Add to
                                                                        Wishlist</span></Link> <Link to={'/'}
                                                                        className="link-compare add_to_compare"
                                                                        title="Add to Compare"><span>Add to
                                                                        Compare</span></Link></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to
                                                        Cart</span></button>
                                                    </div>
                                                </div>
                                                <div className="item-info">
                                                    <div className="info-inner">
                                                        <div className="item-title"><Link to={'product-details'}
                                                            title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard
                                                        Leaves </Link> </div>
                                                        <div className="item-content">
                                                            <div className="rating">
                                                                <div className="ratings">
                                                                    <div className="rating-box">
                                                                        <div className="rating"></div>
                                                                    </div>
                                                                    <p className="rating-links"><Link to={'/'}>1 Review(s)</Link> <span
                                                                        className="separator">|</span> <Link to={'/'}>Add
                                                                    Review</Link> </p>
                                                                </div>
                                                            </div>
                                                            <div className="item-price">
                                                                <div className="price-box"><span className="regular-price"><span
                                                                    className="price">$125.00</span>
                                                                </span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <div className="item-inner">
                                                <div className="item-img">
                                                    <div className="item-img-info"><Link to={'product-details'}
                                                        title="Fresh Organic Mustard Leaves " className="product-image"><img
                                                            src="products-images/p3.jpg"
                                                            alt="Fresh Organic Mustard Leaves " /></Link>
                                                        <div className="sale-label sale-top-right">-40%</div>
                                                        <div className="item-box-hover">
                                                            <div className="box-inner">
                                                                <div className="product-detail-bnt"><Link to={'/'}
                                                                    className="button detail-bnt"><span>Quick
                                                                    View</span></Link></div>
                                                                <div className="actions"><span className="add-to-links"><Link to={'/'}
                                                                    className="link-wishlist"
                                                                    title="Add to Wishlist"><span>Add to
                                                                        Wishlist</span></Link> <Link to={'/'}
                                                                        className="link-compare add_to_compare"
                                                                        title="Add to Compare"><span>Add to
                                                                        Compare</span></Link></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to
                                                        Cart</span></button>
                                                    </div>
                                                </div>
                                                <div className="item-info">
                                                    <div className="info-inner">
                                                        <div className="item-title"><Link to={'product-details'}
                                                            title="Fresh Organic Mustard Leaves ">Fresh Organic Mustard
                                                        Leaves </Link> </div>
                                                        <div className="item-content">
                                                            <div className="rating">
                                                                <div className="ratings">
                                                                    <div className="rating-box">
                                                                        <div className="rating"></div>
                                                                    </div>
                                                                    <p className="rating-links"><Link to={'/'}>1 Review(s)</Link> <span
                                                                        className="separator">|</span> <Link to={'/'}>Add
                                                                    Review</Link> </p>
                                                                </div>
                                                            </div>
                                                            <div className="item-price">
                                                                <div className="price-box"><span className="regular-price"><span
                                                                    className="price">$125.00</span>
                                                                </span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="testimonials-section slider-items-products">
                                            <TestimonialCarousel />
                                        
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
                    <div className="latest-blog wow bounceInUp animated animated container">
                        {/* <!--exclude For version 6 --> */}

                        {/* <!--For version 1,2,3,4,5,6,8 --> */}
                        <div>
                            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
                                <div className="blog_inner">
                                    <div className="blog-img"> <Link to={'blog-detail'}> <img src="images/blog-img1.jpg"
                                        alt="blog image" /> </Link>
                                        <div className="mask"> <Link className="info" to={'blog-detail'}>Read More</Link> </div>
                                    </div>
                                    {/* <!--blog-img--> */}
                                    <div className="blog-info">
                                        <div className="post-date">
                                            <time className="entry-date" datetime="2015-05-11T11:07:27+00:00">26
                                        <span>June</span></time>
                                        </div>
                                        <ul className="post-meta">
                                            <li><i className="fa fa-user"></i>Posted by <Link to={'/'}>admin</Link> </li>
                                            <li><i className="fa fa-comments"></i><Link to={'/'}>4 comments</Link> </li>
                                        </ul>
                                        <h3><Link to={'blog-detail'}>Powerful and flexible premium Ecommerce themes</Link></h3>
                                        <p>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est.
                                            Ut mi metus,
                                    semper eu dictum nec...</p>
                                    </div>
                                </div>
                                {/* <!--blog_inner--> */}
                            </div>
                            {/* <!--col-lg-4 col-md-4 col-xs-12 col-sm-4--> */}
                            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
                                <div className="blog_inner">
                                    <div className="blog-img"> <Link to={'blog-detail'}> <img src="images/blog-img2.jpg"
                                        alt="blog image" /> </Link>
                                        <div className="mask"> <Link className="info" to={'blog-detail'}>Read More</Link> </div>
                                    </div>
                                    {/* <!--blog-img--> */}
                                    <div className="blog-info">
                                        <div className="post-date">
                                            <time className="entry-date" datetime="2015-05-11T11:07:27+00:00">30
                                        <span>June</span></time>
                                        </div>
                                        <ul className="post-meta">
                                            <li><i className="fa fa-user"></i>Posted by <Link to={'/'}>admin</Link> </li>
                                            <li><i className="fa fa-comments"></i><Link to={'/'}>6 comments</Link> </li>
                                        </ul>
                                        <h3><Link to={'blog-detail'}>Awesome template with lot's of features on the board!</Link>
                                        </h3>
                                        <p>Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet
                                            eget ac felis erat
                                    sed elit bibendum ...</p>
                                    </div>
                                </div>
                                {/* <!--blog_inner--> */}
                            </div>
                        </div>
                        {/* <!--END For version 1,2,3,4,5,6,8 --> */}
                        {/* <!--exclude For version 6 --> */}
                        {/* <!--container--> */}
                    </div>

                    {/* <!-- Logo Brand Block --> */}

                </div>
                <div className="mid-section">
                    <div className="container">
                        <div className="row">
                            <h3>Fresh organic foods delivery made easy</h3>
                            <h2>Special Product</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="block1"> <strong>fresh from our farm</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant
                                morbi.</p>
                                </div>
                                <div className="block2"> <strong>100% organic Foods</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant
                                morbi.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="spl-pro"><Link to={'product-details'} title="Fresh Organic Mustard Leaves "><img
                                    src="products-images/p12.jpg" alt="Fresh Organic Mustard Leaves " /></Link>
                                    <div className="item-info">
                                        <div className="info-inner">
                                            <div className="item-title"><Link to={'product-details'}
                                                title="Fresh Organic Mustard Leaves ">Fresh
                                            Organic Mustard Leaves </Link> </div>
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
                                <div className="block3"> <strong>Good for health</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy habitant
                                morbi.</p>
                                </div>
                                <div className="block4"> <strong>Safe From Pesticides</strong>
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
                                    <div className="content">FREE SHIPPING on order over $99</div>
                                </div>
                            </li>
                            <li>
                                <div className="feature-box">
                                    <div className="icon-support"></div>
                                    <div className="content">Have a question? <br />
                                        +1 800 789 0000 </div>
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
                           
                        </ul>
                    </div>
                </div>
                {/* <!-- For version 1,2,3,4,6 --></div> */}

                <Footer />

                <div class="popup1" style={{"display":"block"}}>
 
  <div class="newsletter-sign-box">
<img src="images/close-icon.png" alt="close" class="x"/>
<div class="newsletter">

<div class="newsletter_img">
<img alt="newsletter" src="images/custom-img2.jpg"/></div>
    <form method="post" id="popup-newsletter" name="popup-newsletter" class="email-form">
        <h3>Newsletter Sign up</h3>
        
        <h4>Be the first to know about our new arrivals, exclusive offers and the latest fashion update.
        
        </h4>
     <div class="newsletter-form">
        <div class="input-box">
           <input type="text" name="email" id="newsletter2" title="Sign up for our newsletter" placeholder="Enter your email address" class="input-text required-entry validate-email"/>        
           <button type="submit" title="Subscribe" class="button subscribe"><span>Subscribe</span></button>
         
        </div> 
        
     </div> 
     
        <label class="subscribe-bottom"><input type="checkbox" name="notshowpopup" id="notshowpopup"/>Don’t show this popup again</label>
    </form>



</div> 


  </div> 
  
</div>
<div id="fade" style={{"display":"block"}}></div>   

            </>
        )
    }
}
export default Newsletter;