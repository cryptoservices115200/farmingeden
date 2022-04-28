
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';

import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants';


let web3, contractObject1, provider, signer,balance = 0;

const pumpkin = 'images/pumpkin.png';

function ComponentDetail() {

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

    const { ethereum } = window;

    let metadata = CONTRACTS[CONTRACTS_TYPE.BAKED_BEANS][chainId]?.abi;
    let addr = CONTRACTS[CONTRACTS_TYPE.BAKED_BEANS][chainId]?.address;


    const onChangeStakeAmount = async (e) => 
    {
        setStakeValue(e.target.value);
    }

    useEffect(() => {
		(async () => {
			if (account && chainId && library) {
                try{
                    web3 = new Web3(library.provider)
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    contractObject1 = new ethers.Contract(addr, metadata, signer);
                    console.log(contractObject1);
                    balance = await contractObject1.getBalance();
                    
                    // balance  = new BigNumber(balance).toString;
                    balance = new BigNumber(balance).dividedBy(10 ** 18).toString();
                    console.log(balance);
                    console.log('rewardsrewards');
                }  catch (err) {
                    console.log(err);
                    console.log('error............');
                }
			}
		})();
	},[chainId, account]);

    return (
        <div className="masthead">
            <Container>
                <Row>
                    <Col lg={3}>
                    </Col>
                    <Col lg={6}>
                        <div className='stakeDetail'>
                            <div className='stakeDetailText'>
                                <p>Farm: 100000000000000 BNB</p>
                                <p>Your Seeds:0 BNB</p>
                                <p>Daily-Growing: 6%</p>
                                <p>Farmer: 2%</p>
                                <div>
                                    <a>https://github.com/foreverglorydev</a>
                                </div>
                            </div>
                            
                        </div>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default ComponentDetail;