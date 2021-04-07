import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';



class ProductDetails extends Component {
    componentDidMount() {
        window.commonjs();
        window.zoomimg();
    }

    render() {
        console.log("Param" , this.props.location.myCustomProps)
        return (
            <>
                <Header />

                <div class="page-heading">
                    <div class="breadcrumbs">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12">
                                    <ul>
                                        <li class="home"> <Link to={'/'} title="Go to Home Page">Home</Link> <span>&rsaquo;
                                    </span> </li>
                                        <li class="category1601"> <strong>Jasmin Home</strong> </li>
                                    </ul>
                                </div>
                                {/* <!--col-xs-12--> */}
                            </div>
                            {/* <!--row--> */}
                        </div>
                        {/* <!--container--> */}
                    </div>
                    <div class="page-title">
                        <h2>Jasmine Home</h2>
                    </div>
                </div>
                {/* <!-- BEGIN Main Container --> */}
                <div class="main-container col1-layout wow bounceInUp animated">
                    <div class="main">
                        <div class="col-main">
                            {/* <!-- Endif Next Previous Product --> */}
                            <div class="product-view wow bounceInUp animated" itemscope="" itemtype="http://schema.org/Product"
                                itemid="#product_base">
                                <div id="messages_product_view"></div>
                                {/* <!--product-next-prev--> */}
                                <div class="product-essential container">
                                    <div class="row">

                                        <form action="#" method="post" id="product_addtocart_form">
                                            {/* <!--End For version 1, 2, 6 --> */}
                                            {/* <!-- For version 3 --> */}
                                            <div class="product-img-box col-lg-5 col-sm-5 col-xs-12">
                                                <div class="new-label new-top-left">Hot</div>
                                                <div class="sale-label sale-top-left">-15%</div>
                                                <div class="product-image">
                                                    <div class="product-full"> <img id="product-zoom"
                                                        src={this.props.location.myCustomProps.image || 'NotFound'}
                                                        alt="product-image" />
                                                    </div>
                                                    <div class="more-views">
                                                        <div class="slider-items-products">
                                                            <div id="gallery_01"
                                                                class="product-flexslider hidden-buttons product-img-thumb">
                                                                <div class="slider-items slider-width-col4 block-content">
                                                                    <div class="more-views-items"> <Link to={'/'}
                                                                        data-image={this.props.location.myCustomProps.image || 'NotFound'}
                                                                    > <img
                                                                            id="product-zoom0" src={this.props.location.myCustomProps.image || 'NotFound'}
                                                                            alt="product-image" /> </Link></div>
                                                                    <div class="more-views-items"> <Link to={'/'}
                                                                        data-image={this.props.location.myCustomProps.image || 'NotFound'}
                                                                    > <img
                                                                            id="product-zoom1" src={this.props.location.myCustomProps.image || 'NotFound'}
                                                                            alt="product-image" /> </Link></div>
                                                                    <div class="more-views-items"> <Link to={'/'}
                                                                        data-image={this.props.location.myCustomProps.image || 'NotFound'}
                                                                    > <img
                                                                            id="product-zoom2" src={this.props.location.myCustomProps.image || 'NotFound'}
                                                                            alt="product-image" /> </Link></div>
                                                                    <div class="more-views-items"> <Link to={'/'}
                                                                        data-image="products-images/p14.jpg"
                                                                    > <img
                                                                            id="product-zoom3" src={this.props.location.myCustomProps.image || 'NotFound'}
                                                                            alt="product-image" /> </Link> </div>
                                                                    <div class="more-views-items"> <Link to={'/'}
                                                                        data-image="products-images/p6.jpg"
                                                                    > <img
                                                                            id="product-zoom4" src={this.props.location.myCustomProps.image || 'NotFound'}
                                                                            alt="product-image" /> </Link></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end: more-images --> */}
                                            </div>
                                            {/* <!--End For version 1,2,6--> */}
                                            {/* <!-- For version 3 --> */}
                                            <div class="product-shop col-lg- col-sm-7 col-xs-12">
                                                <div class="product-next-prev"> <Link class="product-next"
                                                    to={'/'}><span></span></Link> <Link class="product-prev"
                                                        to={'/'}><span></span></Link> </div>
                                                <div class="brand">Jasmine Home</div>
                                                <div class="product-name">
                                                    <h1>{this.props.location.myCustomProps.title}</h1>
                                                </div>
                                                <div class="ratings">
                                                    <div class="rating-box">
                                                        <div style={{ "width": "60%" }} class="rating"></div>
                                                    </div>
                                                    <p class="rating-links"> <Link to={'/'}>1 Review</Link> <span
                                                        class="separator">|</span> <Link to={'/'}>Add Your Review</Link> </p>
                                                </div>
                                                <div class="price-block">
                                                    <div class="price-box">
                                                        <p class="availability in-stock"><span>In Stock</span></p>
                                                        <p class="special-price"> <span class="price-label">Special Price</span>
                                                            <span id="product-price-48" class="price"> {this.props.location.myCustomProps.price} EGP</span> </p>


                                                    </div>
                                                </div>
                                                <div class="add-to-box">
                                                    <div class="add-to-cart">
                                                        <div class="pull-left">
                                                            <div class="custom pull-left">
                                                                <button
                                                                    onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty > 0 ) result.value--;return false;"
                                                                    class="reduced items-count" type="button"><i
                                                                        class="fa fa-minus">&nbsp;</i></button>
                                                                <input type="text" class="input-text qty" title="Qty" value="1"
                                                                    maxlength="12" id="qty" name="qty" />
                                                                <button
                                                                    onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;"
                                                                    class="increase items-count" type="button"><i
                                                                        class="fa fa-plus">&nbsp;</i></button>
                                                            </div>
                                                        </div>
                                                        <button onclick="productAddToCartForm.submit(this)"
                                                            class="button btn-cart" title="Add to Cart" type="button">Add to
                                                    Cart</button>
                                                    </div>

                                                </div>
                                                <div class="short-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                                                        augue nec est tristique auctor. Donec non est at libero vulputate
                                                        rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
                                                        vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
                                            </p>
                                                </div>
                                                <div class="email-addto-box">
                                                    <ul class="add-to-links">
                                                        <li> <Link class="link-wishlist" to={'/wishlist'}><span>Add to
                                                            Wishlist</span></Link></li>
                                                        <li><span class="separator">|</span> <Link class="link-compare"
                                                            to={'/compare'}><span>Add to Compare</span></Link></li>
                                                    </ul>
                                                    <p class="email-friend"><Link to={'/'} class=""><span>Email to a
                                                        Friend</span></Link></p>
                                                </div>
                                                <div class="social">
                                                    <ul class="link">
                                                        <li class="fb"><Link to={'/'}></Link></li>
                                                        <li class="tw"><Link to={'/'}></Link></li>
                                                        <li class="googleplus"><Link to={'/'}></Link></li>
                                                        <li class="rss"><Link to={'/'}></Link></li>
                                                        <li class="pintrest"><Link to={'/'}></Link></li>
                                                        <li class="linkedin"><Link to={'/'}></Link></li>
                                                        <li class="youtube"><Link to={'/'}></Link></li>
                                                    </ul>
                                                </div>

                                                <ul class="shipping-pro">
                                                    <li>Free Wordwide Shipping</li>
                                                    <li>30 Days Return</li>
                                                    <li>Member Discount</li>
                                                </ul>
                                            </div>
                                            {/* <!--product-shop--> */}
                                            {/* <!--Detail page static block for version 3--> */}
                                        </form>
                                    </div>
                                </div>
                                {/* <!--product-essential--> */}
                                <div class="product-collateral container">
                                    <ul id="product-detail-tab" class="nav nav-tabs product-tabs">
                                        <li class="active"> <Link href="#product_tabs_description" data-toggle="tab"> Product
                                        Description </Link> </li>
                                        <li><Link href="#product_tabs_tags" data-toggle="tab">Tags</Link></li>
                                        <li> <Link href="#reviews_tabs" data-toggle="tab">Reviews</Link> </li>
                                        <li> <Link href="#product_tabs_custom" data-toggle="tab">Custom Tab</Link> </li>
                                        <li> <Link href="#product_tabs_custom1" data-toggle="tab">Custom Tab1</Link> </li>
                                    </ul>
                                    <div id="productTabContent" class="tab-content">
                                        <div class="tab-pane fade in active" id="product_tabs_description">
                                            <div class="std">

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue
                                                    nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
                                                    ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
                                                    adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque
                                                    aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum
                                                    turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa.
                                                    Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu,
                                                    suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget
                                                    laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget
                                            velit. Donec ac tempus ante. </p>
                                                <img alt="" src={this.props.location.myCustomProps.image} style={{ "float": "right" }} />
                                                <p> Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis
                                                    vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum
                                                    primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean
                                                    eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper.
                                                    Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora
                                                    torquent per conubia nostra, per inceptos himenaeos. Integer enim purus,
                                                    posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium
                                                    eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non
                                                    arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.
                                                    vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
                                                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem,
                                                    quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies
                                                    massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero
                                                    hendrerit est, vulputate adipiscing cursus eu, suscipit id nulla. Donec a
                                                    neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                                                    feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
                                                    Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
                                            sapien libero hendrerit.</p>
                                                <ul>
                                                    <li><strong>Mauris vel tellus non nunc mattis lobortis</strong></li>
                                                    <li><strong>Suspendisse aliquet urna pretium eros convallis</strong></li>
                                                    <li>Vestibulum ante ipsum <strong>primis in faucibus</strong></li>
                                                    <li><strong>Fusce ultricies massa massa</strong></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue
                                                    nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
                                                    ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
                                                    adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque
                                                    aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum
                                                    turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa.
                                                    Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu,
                                                    suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget
                                                    laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget
                                            velit. Donec ac tempus ante. </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="product_tabs_tags">
                                            <div class="box-collateral box-tags">
                                                <div class="tags">
                                                    <form id="addTagForm" action="#" method="get">
                                                        <div class="form-add-tags">

                                                            <div class="input-box">
                                                                <input class="input-text" name="productTagName"
                                                                    id="productTagName" type="text" value="enter your tags" />
                                                                <button type="button" title="Add Tags" class=" button btn-add"
                                                                    onClick="submitTagForm()"> <span>Add Tags</span> </button>
                                                            </div>
                                                            {/* <!--input-box--> */}
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* <!--tags--> */}
                                                <p class="note">Use spaces to separate tags. Use single quotes (') for phrases.
                                        </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade in" id="reviews_tabs">
                                            <div class="woocommerce-Reviews">
                                                <div>
                                                    <h2 class="woocommerce-Reviews-title">2 reviews for <span>Bacca Bucci Men's
                                                    Running Shoes</span></h2>
                                                    <ol class="commentlist">
                                                        <li class="comment">
                                                            <div>
                                                                <img alt="" src="images/member1.png"
                                                                    class="avatar avatar-60 photo" />
                                                                <div class="comment-text">
                                                                    <div class="ratings">
                                                                        <div class="rating-box">
                                                                            <div style={{ "width": "100%" }} class="rating"></div>
                                                                        </div>

                                                                    </div>
                                                                    <p class="meta">
                                                                        <strong>John Doe</strong>
                                                                        <span>–</span> April 19, 2018
                                                            </p>
                                                                    <div class="description">
                                                                        <p>Vivamus magna justo, lacinia eget consectetur sed,
                                                                            convallis at tellus. Nulla quis lorem ut libero
                                                                            malesuada feugiat. Proin eget tortor risus. Donec
                                                                            rutrum congue leo eget malesuada. Lorem ipsum dolor
                                                                    sit amet, consectetur adipiscing elit.</p>
                                                                        <p>Donec sollicitudin molestie malesuada. Vivamus
                                                                            suscipit tortor eget felis porttitor volutpat. Lorem
                                                                            ipsum dolor sit amet, consectetur adipiscing elit.
                                                                            Nulla quis lorem ut libero malesuada feugiat.
                                                                            Vivamus magna justo, lacinia eget consectetur sed,
                                                                    convallis at tellus.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        {/* <!-- #comment-## --> */}
                                                        <li class="comment">
                                                            <div>
                                                                <img alt="" src="images/member2.png"
                                                                    class="avatar avatar-60 photo" />
                                                                <div class="comment-text">
                                                                    <div class="ratings">
                                                                        <div class="rating-box">
                                                                            <div style={{ "width": "100%" }} class="rating"></div>
                                                                        </div>

                                                                    </div>
                                                                    <p class="meta">
                                                                        <strong>Stephen Smith</strong> <span>–</span> June 02,
                                                                        2018
                                                                        </p>
                                                                    <div class="description">
                                                                        <p>Donec rutrum congue leo eget malesuada. Lorem ipsum
                                                                    dolor sit amet, consectetur adipiscing elit.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        {/* <!-- #comment-## --> */}
                                                    </ol>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div class="comment-respond">
                                                            <span class="comment-reply-title">Add a review </span>
                                                            <form action="#" method="post" class="comment-form" novalidate>
                                                                <p class="comment-notes"><span id="email-notes">Your email
                                                                address will not be published.</span> Required fields
                                                            are marked <span class="required">*</span></p>
                                                                <div class="comment-form-rating">
                                                                    <label id="rating">Your rating</label>
                                                                    <p class="stars">
                                                                        <span>
                                                                            <Link class="star-1" to={'/'}>1</Link>
                                                                            <Link class="star-2" to={'/'}>2</Link>
                                                                            <Link class="star-3" to={'/'}>3</Link>
                                                                            <Link class="star-4" to={'/'}>4</Link>
                                                                            <Link class="star-5" to={'/'}>5</Link>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <p class="comment-form-comment">
                                                                    <label>Your review <span class="required">*</span></label>
                                                                    <textarea id="comment" name="comment" cols="45" rows="8"
                                                                        required></textarea>
                                                                </p>
                                                                <p class="comment-form-author">
                                                                    <label for="author">Name <span
                                                                        class="required">*</span></label>
                                                                    <input id="author" name="author" type="text" value=""
                                                                        size="30" required /></p>
                                                                <p class="comment-form-email">
                                                                    <label for="email">Email <span
                                                                        class="required">*</span></label>
                                                                    <input id="email" name="email" type="email" value=""
                                                                        size="30" required /></p>
                                                                <p class="form-submit">
                                                                    <input name="submit" type="submit" id="submit"
                                                                        class="submit" value="Submit" />
                                                                </p>
                                                            </form>
                                                        </div>
                                                        {/* <!-- #respond --> */}
                                                    </div>
                                                </div>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="product_tabs_custom">
                                            <div class="product-tabs-content-inner clearfix">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et
                                                    placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
                                        </p>
                                                <p> Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida
                                                    vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant
                                                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam
                                                    erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis
                                                    convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus
                                            enim lorem nec augue.</p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="product_tabs_custom1">
                                            <div class="product-tabs-content-inner clearfix">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et
                                                    placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
                                                    Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida
                                                    vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant
                                                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam
                                                    erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis
                                                    convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus
                                            enim lorem nec augue.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                             
                            </div>
                            {/* <!--box-additional--> */}
                            {/* <!--product-view--> */}
                        </div>
                    </div>
                    {/* <!--col-main--> */}
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

                <Footer />
            </>
        )
    }
}
export default ProductDetails;