import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


function LoginForm() {
    return (

        <div className='login-con'>
            <div className='login-desc'>
                <div>
                    <p className='login-con-text'>Serching for <b>Augmented Develepemented</b> Teams to stree your product towaed triumph?"</p>
                </div>
                <div className='success-desc'>
                    <div>
                        <h3>50%+</h3>
                        <p>Clients</p>
                    </div>
                    <div>
                        <h3>80%+</h3>
                        <p>Project successfully completed</p>
                    </div>
                    <div>
                        <h3>60%+</h3>
                        <p>of the clinent converted into
                            long term engagement partner
                        </p>
                    </div>
                </div>

            </div>
            <div className='login-form'>
                <div className='login-forn'>
                    <h4>Fill out the form</h4>
                    <p>Our team will touch base with you within 24 hours.</p>
                    <div>
                        <form class="login">
                            <div className='inputs'>
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="text" class="login__input" placeholder="Full Name*" />
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="email" class="login__input" placeholder="Email ID*" />
                                </div>
                            </div>
                            <div className='inputs'>
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="text" class="login__input" placeholder="Country" />
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="text" class="login__input" placeholder="Contact Number" />
                                </div>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Tell us your requirements*" />
                            </div>
                            <div className='inputs'>
                                
                        <button className='buttons-1' style={{ width: "85px" }}> Submit</button>
                        <button className='buttons-1' style={{ width: "40px" }}> <FaArrowRight /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm