
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3';
import { ethers } from 'ethers';

import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants';


let web3, contractObject1, provider, signer;

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

    let balance = 0;

    const onChangeStakeAmount = async (e) => 
    {
        setStakeValue(e.target.value);
    }

    useEffect(() => {
		(async () => {
			if (account && chainId && library) {
                web3 = new Web3(library.provider)
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                contractObject1 = new ethers.Contract(addr, metadata, signer);
                console.log(contractObject1);
                balance = await contractObject1.getBalance(account);
                console.log(balance);
                console.log('rewardsrewards');
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
                                <p>Farm: 1,000,000 BNB</p>
                                <p>Your Seeds:{balance} BNB</p>
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