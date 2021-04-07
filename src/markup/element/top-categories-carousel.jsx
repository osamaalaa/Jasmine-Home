import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopCategories extends Component {
    render() {
        return (
            <>
                <div id="top-categories" className="product-flexslider hidden-buttons">
                    <div class="slider-items slider-width-col4 products-grid">

                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel1.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>

                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel3.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>


                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel2.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>

                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel3.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>

                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel1.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>


                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel2.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>


                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel1.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>


                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel2.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>


                        <div className="item"> <Link to={'/'}>
                            <div className="pro-img"><img src="products-images/tawel3.jpg"
                                alt="Fresh Organic Mustard Leaves " />
                                <div className="pro-info">Tawels</div>
                            </div>
                        </Link> </div>


                   

                    </div>
                </div>

            </>
        );
    }
}

export default TopCategories;