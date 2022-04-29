import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { ethers } from 'ethers'

import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants'

let web3, contractObject1, provider, signer

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

  const { ethereum } = window

  let metadata = CONTRACTS[CONTRACTS_TYPE.BAKED_BEANS][chainId]?.abi
  let addr = CONTRACTS[CONTRACTS_TYPE.BAKED_BEANS][chainId]?.address

  let rewards, supportNetworkId = 4;

  const onChangeStakeAmount = async (e) => {
    setStakeValue(e.target.value)
  }

  useEffect(() => {
    (async () => {
      if (account && chainId && library) {
        if(supportNetworkId == chainId)
        {
            console.log(account)
            web3 = new Web3(library.provider)
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            contractObject1 = new ethers.Contract(addr, metadata, signer)
            console.log(contractObject1)
            rewards = await contractObject1.beanRewards(account)
            rewards.wait();
            console.log(rewards)
            console.log('rewardsrewards!!!!!!!!!!!!!')
        }
      }
    })()
  }, [chainId, account])

  const onClickStake = async () => {
    if (account && chainId && library) {
      setLoading(true)
      let balance = await contractObject1.hatchEggs(account)
      console.log(balance)
    }
  }

  return (
    <div className="masthead">
      <Container>
        <Row>
          <div className="stake_container">
            <div className="stakeWood">
              <input
                type="text"
                onChange={onChangeStakeAmount}
                className="stake_input"
              />
              <button className="mint-number-button" onClick={onClickStake}>
                Sowing
              </button>
              <p className="reward_text">Rewards: {rewards ? rewards : 0} BNB</p>
              <div className="stakeButtonGroup">
                <button className="s_button" onClick={onClickStake}>
                  Re-sowing
                </button>
                <button className="s_button">Harvest</button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default ComponentStake
