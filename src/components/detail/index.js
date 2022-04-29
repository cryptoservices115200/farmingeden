import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'

import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants'

let web3,
  contractObject1,
  provider,
  signer,
  balance = 0

const pumpkin = 'images/pumpkin.png'

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

  const { ethereum } = window
  const supportNetworkId = 4;

  let metadata = CONTRACTS[CONTRACTS_TYPE.BAKED_BEANS][chainId]?.abi
  let addr = CONTRACTS[CONTRACTS_TYPE.BAKED_BEANS][chainId]?.address

  const onChangeStakeAmount = async (e) => {
    setStakeValue(e.target.value)
  }

  useEffect(() => {
    (async () => {
      if (account && chainId && library) {
        if(supportNetworkId == chainId)
            try {
                web3 = new Web3(library.provider)
                const provider = new ethers.providers.Web3Provider(ethereum)
                const signer = provider.getSigner()
                contractObject1 = new ethers.Contract(addr, metadata, signer)
                console.log(contractObject1)
                balance = await contractObject1.getMyMiners(account)

                // balance  = new BigNumber(balance).toString;
                console.log(balance.toString())
                console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
            } catch (err) {
            console.log(err)
            }
      }
    })()
  }, [chainId, account])

  return (
    <div className="masthead">
      <Container>
        <Row>
          <div className="stake_container">
            <div className="stakeDetail">
              <div className="stakeDetailText">
                <p>Farm: 100000000 BNB</p>
                <p>Your Seeds:0 BNB</p>
                <p>Daily-Growing: 6%</p>
                <p>Farmer: 2%</p>
                <a>https://github.com/foreverglorydev</a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default ComponentDetail
