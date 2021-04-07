import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';



class Login extends Component {


    render() {
        return (
            <>
                <Header />

                    <div class="main-container col1-layout wow bounceInUp animated animated">

            <div class="main">
                <div class="account-login container">
                    {/* <!--page-title--> */}

                    <form action="" method="post" id="login-form">
                        <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr"/>
                        <fieldset class="col2-set">
                            <div class="col-1 new-users">
                                <strong>New Customers</strong>
                                <div class="content">

                                    <p>By creating an account with our store, you will be able to move through the
                                        checkout process
                                        faster, store multiple shipping addresses, view and track your orders in your
                                        account and more.</p>
                                    <div class="buttons-set">
                                        <button type="button" title="Create an Account" class="button create-account"
                                            onClick=""><span><span>Create an Account</span></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 registered-users">
                                <strong>Registered Customers</strong>
                                <div class="content">

                                    <p>If you have an account with us, please log in.</p>
                                    <ul class="form-list">
                                        <li>
                                            <label for="email">Email Address<em class="required">*</em></label>
                                            <div class="input-box">
                                                <input type="text" name="login[username]" value="" id="email"
                                                    class="input-text required-entry validate-email"
                                                    title="Email Address"/>
                                            </div>
                                        </li>
                                        <li>
                                            <label for="pass">Password<em class="required">*</em></label>
                                            <div class="input-box">
                                                <input type="password" name="login[password]"
                                                    class="input-text required-entry validate-password" id="pass"
                                                    title="Password"/>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="remember-me-popup">
                                        <div class="remember-me-popup-head">
                                            <h3 id="text2">What's this?</h3>
                                            <Link to={'/'} class="remember-me-popup-close" onClick="showDiv()"
                                                title="Close">Close</Link>
                                        </div>
                                        <div class="remember-me-popup-body">
                                            <p id="text1">Checking "Remember Me" will let you access your shopping cart
                                                on this computer when
                                                you are logged out</p>
                                            <div class="remember-me-popup-close-button a-right">
                                                <Link to={'/'} class="remember-me-popup-close button" title="Close"
                                                    onClick="
            showDiv()"><span>Close</span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <p class="required">* Required Fields</p>



                                    <div class="buttons-set">

                                        <button type="submit" class="button login" title="Login" name="send"
                                            id="send2"><span>Login</span></button>

                                        <Link to={'/'} class="forgot-word">Forgot Your Password?</Link>
                                    </div>
                                    {/* <!--buttons-set--> */}
                                </div>
                                {/* <!--content--> */}
                            </div>
                            {/* <!--col-2 registered-users--> */}
                        </fieldset>
                        {/* <!--col2-set--> */}
                    </form>

                </div>
                {/* <!--account-login--> */}

            </div>
            {/* <!--main-container--> */}

        </div>
        {/* <!--col1-layout--> */}




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
                            <div class="content">Have a question?<br/>
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
                        <div class="feature-box"> <Link to={'/'}><i class="fa fa-apple"></i> download</Link> <Link to={'/'}><i
                                    class="fa fa-android"></i> download</Link> </div>
                    </li>
                </ul>
            </div>
        </div>
                
                <Footer />
            </>
        )
    }
}
export default Login;