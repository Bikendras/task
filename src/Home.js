import React from 'react'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import logo from './logo-e.svg';


function Home() {
    return (
        <div style={{ background: "black", padding:"20px" }}>
            <div className='home-nav'>
            <Navbar />
            </div>
            <div className='home-login'>
                <LoginForm />
            </div>

            <div className='promatoin'>
                <div className='prmo-card'>
                    <img src={logo} />
                </div>
            </div>
        </div>
    )
}

export default Home