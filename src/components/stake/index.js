import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3';
import { ethers } from 'ethers';

import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants';

let web3, contractObject1;

function ComponentStake() {
    const {
        active,
        account,
        library,
        chainId,
        connector,
        activate,
        deactivate,
      } = useWeb3React()

    const [loading, setLoading] = useState(false)
    const [stakeValue, setStakeValue] = useState()

    let metadata = CONTRACTS[CONTRACTS_TYPE.BAKED_BEANS][chainId]?.abi;
    let addr = CONTRACTS[CONTRACTS_TYPE.BAKED_BEANS][chainId]?.address;

    const onChangeStakeAmount = async (e) => 
    {
        setStakeValue(e.target.value);
    }

    const onClickStake = async () => 
    {

        if (account && chainId && library) {
            


            setLoading(true)
            const { ethereum } = window;
      
            web3 = new Web3(library.provider)
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            contractObject1 = new ethers.Contract(addr, metadata, signer);
            let balance  = await contractObject1.hatchEggs(account);
            console.log(balance);

        }
    }

    return (
        <div className="masthead">
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <div className='stakeWood'>
                            <input type="text" onChange = {onChangeStakeAmount} style={{ fontSize:'20px', textAlign:'center', width:'70%', margin:'14% 15% 0 15%', border:'1px solid black'}} />
                            <button className="mint-number-button" onClick={onClickStake} >Sowing</button>
                            <p style={{margin:'7% 29%', fontSize:'35px'}}>Rewards: 0.00 BNB</p>
                            <div className='stakeButtonGroup'>
                                <button className="s_button">Re-sowing</button>
                                <button className="s_button">Harvest</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default ComponentStake;