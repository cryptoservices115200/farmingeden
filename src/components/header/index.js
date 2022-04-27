import React from 'react';
import { Link } from "react-router-dom";
// import Wallet from "../../components/wallet";
import WalletConnect from "../../components/wallet/walletconnect";

const Logo = 'images/logo.png';

function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <Link to="/"><img src={Logo} alt="logo" style={{ width: "75px", marginLeft:'50px' }} className="img-fluid" /></Link>
                <button className="navbar-toggler navbar-toggler-main" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="stick"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style = {{justifyContent: 'flex-end'}}>
                    <button className="navbar-toggler navbar-toggler-main" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">  
                        {/* reduce button when mibile view */}
                        <span className="stick"></span>
                    </button>
                    <ul className="navbar-nav ms-auto">
                    </ul>
                    <div style={{float:'right'}}> <WalletConnect /></div>
                </div>
            </nav>
        </div>
    )
}

export default Header;