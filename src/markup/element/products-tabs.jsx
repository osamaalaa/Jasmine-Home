import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, addToCompare } from '../../store/actions/cartActions';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ProductsTab extends Component {
    
  
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    handleAddToCart = (id) => {
        this.props.addToCart(id); 
            console.log(this.props.addToCart(id))
        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    handleAddToCompare = (id) => {
        this.props.addToCompare(id); 

        toast.success('Added to the compare', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    compareButton = (id) => {
        let compare_exist = this.props.CompareProducts.filter(item => item.id === id);
        if(compare_exist.length > 0){
            return(
                <Link href="#">
                    <a 
                        data-tip="Already Added" 
                        data-place="left" 
                        onClick={e => {
                                e.preventDefault(); 
                            }
                        }
                        disabled={true}
                        className="disabled"
                    >
                        <i className="fas fa-sync"></i>
                    </a>
                </Link>
            )
        } else {
            return(
                <Link href="#">
                    <a 
                        data-tip="Add to Compare" 
                        data-place="left" 
                        onClick={e => {
                                e.preventDefault(); 
                                this.handleAddToCompare(id)
                            }
                        }
                    >
                        <i className="fas fa-sync"></i>
                    </a>
                </Link>
            )
        }
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (image, price, id) => {
        this.setState({ 
            modalImage: image, 
            price: price,
            idd: id
        });
    }
    render() {
        let { products } = this.props;
        console.log(this.props)
        return (
            <>
               
                    {/* <div class="slider-items slider-width-col4 products-grid">

                        
                        {products.slice(0,10).map((data, idx) => (
                                              <div className="item" key={idx}>
                                              <div className="item-inner">
                                                  <div className="item-img">
                                                      <div className="item-img-info"><Link to={'/product-details'}
                                                          title={data.title} className="product-image"><img
                                                              src={data.image}
                                                              alt={data.title} /></Link> 
                                                          <div className="new-label new-top-left">Hot</div>
                                                          <div className="sale-label sale-top-left">-15%</div>
                                                          <div className="item-box-hover">
                                                              <div className="box-inner">
                                                                  <div className="product-detail-bnt"><Link to= {{pathname: `product-details` , myCustomProps: data}} 
                                                                      className="button detail-bnt"><span>Quick View</span></Link>
                                                                  </div> 
                                                                  <div className="actions"><span className="add-to-links"><Link href="#"
                                                                      className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></Link> <Link href="#"
                                                                          className="link-compare add_to_compare"
                                                                          title="Add to Compare">
                                                                      
                                                                              <span >Add to Compare</span> 
                                                                                      
                                                                                      </Link></span> </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="add_cart">
                                                          <button className="button btn-cart" type="button" onClick={(e) => {
                                                                            e.preventDefault(); this.handleAddToCart(data.id)
                                                                        }}><span>Add to Cart</span></button>
                                                      </div>
                                                  </div>
                                                  <div className="item-info">
                                                      <div className="info-inner">
                                                          <div className="item-title"><Link to={'/product-details'}
                                                              title={data.title}>{data.title}</Link> </div>
                                                          <div className="item-content">
                                                              <div className="rating">
                                                                  <div className="ratings">
                                                                      <div className="rating-box">
                                                                          <div className="rating"></div>
                                                                      </div>
                                                                      <p className="rating-links"><Link href="#">1 Review(s)</Link> <span
                                                                          className="separator">|</span> <Link href="#">Add Review</Link>
                                                                      </p>
                                                                  </div>
                                                              </div>
                                                              <div className="item-price">
                                                                  <div className="price-box"><span className="regular-price"><span
                                                                      className="price">{data.price} EGP</span> </span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                           
                                            ))}

                   
                        

                    </div> */}
                {/* </div> */}
 {/* <div id="best-seller" class="product-flexslider hidden-buttons"> */}
             {/* <!--product-essential--> */}
             <div class="product-collateral container">
                                    <ul id="product-detail-tab" class="nav nav-tabs product-tabs">
                                        <li class="active"> <a href="#product_tabs_description" data-toggle="tab"> Best Products </a> </li>
                                        <li ><a href="#product_tabs_tags" data-toggle="tab">Paradigm Products</a></li>
                                     
                                      
                                    </ul>
                                    <div id="productTabContent" class="tab-content">
                                        <div class="tab-pane fade in active" id="product_tabs_description">
                                            {/* <div class="std"> */} 
                                             <div id="best-seller" class="product-flexslider hidden-buttons">
                   
                                            <div class="slider-items slider-width-col4 products-grid">
                                            {products.slice(0,5).map((data, idx) => (
                                              <div className="item" key={idx}>
                                              <div className="item-inner">
                                                  <div className="item-img">
                                                      <div className="item-img-info"><Link to={'/product-details'}
                                                          title={data.title} className="product-image"><img
                                                              src={data.image}
                                                              alt={data.title} /></Link> 
                                                          <div className="new-label new-top-left">Hot</div>
                                                          <div className="sale-label sale-top-left">-15%</div>
                                                          <div className="item-box-hover">
                                                              <div className="box-inner">
                                                                  <div className="product-detail-bnt"><Link to= {{pathname: `product-details` , myCustomProps: data}} 
                                                                      className="button detail-bnt"><span>Quick View</span></Link>
                                                                  </div> 
                                                                  <div className="actions"><span className="add-to-links"><Link href="#"
                                                                      className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></Link> <Link href="#"
                                                                          className="link-compare add_to_compare"
                                                                          title="Add to Compare">
                                                                      
                                                                              <span >Add to Compare</span> 
                                                                                      
                                                                                      </Link></span> </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="add_cart">
                                                          <button className="button btn-cart" type="button" onClick={(e) => {
                                                                            e.preventDefault(); this.handleAddToCart(data.id)
                                                                        }}><span>Add to Cart</span></button>
                                                      </div>
                                                  </div>
                                                  <div className="item-info">
                                                      <div className="info-inner">
                                                          <div className="item-title"><Link to={'/product-details'}
                                                              title={data.title}>{data.title}</Link> </div>
                                                          <div className="item-content">
                                                              <div className="rating">
                                                                  <div className="ratings">
                                                                      <div className="rating-box">
                                                                          <div className="rating"></div>
                                                                      </div>
                                                                      <p className="rating-links"><Link href="#">1 Review(s)</Link> <span
                                                                          className="separator">|</span> <Link href="#">Add Review</Link>
                                                                      </p>
                                                                  </div>
                                                              </div>
                                                              <div className="item-price">
                                                                  <div className="price-box"><span className="regular-price"><span
                                                                      className="price">{data.price} EGP</span> </span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                           
                                            ))}

                                        </div>  
                                         </div>      
                                            {/* </div> */}
                                        </div>
                                        <div class="tab-pane fade" id="product_tabs_tags">
                                        <div id="best-seller" class="product-flexslider hidden-buttons">
                   
                   <div class="slider-items slider-width-col4 products-grid">
                   {products.slice(0,2).map((data, idx) => (
                     <div className="item" key={idx}>
                     <div className="item-inner">
                         <div className="item-img">
                             <div className="item-img-info"><Link to={'/product-details'}
                                 title={data.title} className="product-image"><img
                                     src={data.image}
                                     alt={data.title} /></Link> 
                                 <div className="new-label new-top-left">Hot</div>
                                 <div className="sale-label sale-top-left">-15%</div>
                                 <div className="item-box-hover">
                                     <div className="box-inner">
                                         <div className="product-detail-bnt"><Link to= {{pathname: `product-details` , myCustomProps: data}} 
                                             className="button detail-bnt"><span>Quick View</span></Link>
                                         </div> 
                                         <div className="actions"><span className="add-to-links"><Link href="#"
                                             className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></Link> <Link href="#"
                                                 className="link-compare add_to_compare"
                                                 title="Add to Compare">
                                             
                                                     <span >Add to Compare</span> 
                                                             
                                                             </Link></span> </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="add_cart">
                                 <button className="button btn-cart" type="button" onClick={(e) => {
                                                   e.preventDefault(); this.handleAddToCart(data.id)
                                               }}><span>Add to Cart</span></button>
                             </div>
                         </div>
                         <div className="item-info">
                             <div className="info-inner">
                                 <div className="item-title"><Link to={'/product-details'}
                                     title={data.title}>{data.title}</Link> </div>
                                 <div className="item-content">
                                     <div className="rating">
                                         <div className="ratings">
                                             <div className="rating-box">
                                                 <div className="rating"></div>
                                             </div>
                                             <p className="rating-links"><Link href="#">1 Review(s)</Link> <span
                                                 className="separator">|</span> <Link href="#">Add Review</Link>
                                             </p>
                                         </div>
                                     </div>
                                     <div className="item-price">
                                         <div className="price-box"><span className="regular-price"><span
                                             className="price">{data.price} EGP</span> </span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                  
                   ))}

               </div>  
                </div>      
                                        </div>
                                        
                                        
                                    </div>
                              
                                </div>
                                {/* </div> */}
            </>
        );
    }
}

// export default BestSeller;

const mapStateToProps = (state) => {
    return {
        products: state.products,
        CompareProducts: state.addedItemsToCompare
    }
  }
  
  const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        addToCompare: (id) => { dispatch(addToCompare(id)) }
    }
  }
  
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(ProductsTab)
  
  