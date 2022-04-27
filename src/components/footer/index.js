import React from 'react';
import { Link } from "react-router-dom";
// import Wallet from "../../components/wallet";
import WalletConnect from "../../components/wallet/walletconnect";

const Logo = 'images/logo.png';

const etherscan = 'images/social-section/etherscan-logo.png';
const discord = 'images/social-section/discord-logo.png';
const telegram = 'images/social-section/telegram-logo.png';
const twitter = 'images/social-section/twitter-logo.png';

function clickSocial() 
{
    alert();
}

function ComponentFooter() {
    return (
        <>
            <div className='masthead'>
                <div className='social_area'>
                    <a><img src = {etherscan} onClick = {clickSocial} /></a>
                    <a><img src = {discord} onClick = {clickSocial}  /></a>
                    <a><img src = {telegram} onClick = {clickSocial}  /></a>
                    <a><img src = {twitter} onClick = {clickSocial}  /></a>
                </div>
            </div>
        </>
    )
}

export default ComponentFooter;