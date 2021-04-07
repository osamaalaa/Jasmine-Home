import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';
import POne from "../images/p1.jpg"
import PTwo from "../images/p1-1.jpg"
import PThree from "../images/p2.jpg"
import PFour from "../images/p3.jpg"
class Jasmine2 extends Component {
    
    render() {
        var {rowClass, fimage, iImg, ftitle, descriptions, aClass} = this.props;
        return (      
        <section className={`agency_featured_item ${rowClass} `}>
            <div className={`agency_featured_item ${rowClass} `}>
              
                <div className="col-lg-8">
                    <div className={`agency_featured_content wow fadeInLeft ${aClass}`} data-wow-delay="0.6s">
                    <Reveal effect="fadeInRight">
                        {/* <div className="dot"><span className="dot1"></span><span className="dot2"></span></div>
                        <img className="number" src={require ("../images/" + iImg)} alt=""/> */}
                        <h3>{ftitle}</h3>
                        <p>{descriptions}</p>
                        <a href="#" className="buy-btn" Style="transition: all 0s ease 0s; min-height: 0px; min-width: 0px; line-height: 20px; border-width: 0px; margin: 0px; padding: 7px 35px; letter-spacing: 1px; font-size: 16px;">Shop Now</a>
                    </Reveal>
                    </div>
                </div>
                <div className="col-lg-3">
                   <Reveal effect="fadeInLeft">
                        <div className="agency_featured_img text-right">
                            <img src={require ("../images/" + fimage)} alt=""/>
                        </div>
                   </Reveal>
                </div>
            </div>
        </section>
        
        );
    }
}

export default Jasmine2;