/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, {useState, useEffect} from 'react';
import styles from '../styles/tokenpairselector.module.scss';
import {BsArrowDownCircle} from 'react-icons/bs';
import {AiOutlineDown} from 'react-icons/ai';
import Image from 'next/image';
import {CiSettings} from 'react-icons/ci';
import Dropdown from './Dropdown';
import {useSelector} from 'react-redux';
import {RootStore} from '../store';
import {useDispatch} from 'react-redux';
import {useWeb3Modal} from '@web3modal/react';
import {useAccount} from 'wagmi';
import {useBalance} from 'wagmi';

const TokenPairSelector = () => {
  const [visible, setVisible] = useState(false);
  const [modalId, setModalId] = useState(0);
  const dispatch = useDispatch();

  const {open, close} = useWeb3Modal();

  const {address: walletAddress, isConnected} = useAccount();

  const {data, isError, isLoading} = useBalance({
    address: walletAddress,
    // chainId: 1,
  });

  const fromToken = useSelector((state: RootStore) => state.fromTokenSelect);
  const toToken = useSelector((state: RootStore) => state.toTokenSelect);
  const [showGasFee, setShowGasFee] = useState(false);
  // console.log(fromToken, 'from');
  // console.log(toToken, 'to');

  // const ShowBalance = () => {
  //   if (isLoading) return 'Fetching balance';
  //   if (isError) return 'Error fetching balance';

  //   return data?.formatted;
  // };

  const getPrice = () => {
    console.log(fromToken, 'from');
    console.log(toToken, 'to');
  };

  return (
    <div className={styles.card}>
      {/* <p>
        Wallet Address:
        {walletAddress}
      </p> */}
      {/* {ShowBalance()} */}

      {visible && (
        <Dropdown visible={visible} setVisible={setVisible} modalId={modalId} />
      )}
      <div className={styles.cardTopDiv}>
        <div className={styles.rowDiv}>
          <button className={styles.marketButtonStyle}>Market</button>
          <button className={styles.limitButtonStyle}>Limit</button>
        </div>
        <CiSettings size={24} color="#25272b" />
      </div>

      <div className={styles.cardMiddleDiv}>
        <div className={styles.fromTokenSelectContainer}>
          <div className={styles.fromTokenSelectContainerTop}>
            <p className={styles.titleStyle}>Pay with</p>
            <p className={styles.balanceStyle}>Balance:</p>
          </div>

          <div className={styles.fromTokenSelectContainerMiddle}>
            <div
              className={styles.chooseTokenDiv}
              onClick={() => {
                setModalId(0);
                setVisible(!visible);
              }}
            >
              <Image
                unoptimized
                src={fromToken.tokenData.logoURI}
                alt="coin"
                width={25}
                height={25}
              />
              <p className={styles.fromText}>
                {fromToken.tokenData.symbol ?? 'Choose Token'}
              </p>
              <AiOutlineDown size={12} style={{marginRight: 5}} />
            </div>
            <div
              className={
                styles.fromTokenSelectContainerMiddleInnerLeftContainer
              }
            >
              <p className={styles.CircleButton}>Max</p>
              <p className={styles.CircleButton}>50%</p>
              {/* <p className={styles.CircleButton}>Clear</p> */}
            </div>
          </div>

          <div className={styles.fromTokenSelectContainerBottom}>
            <input
              type="number"
              placeholder="0.0"
              className={styles.inputStyle}
            />
            <p className={styles.balanceStyle}>0.34345</p>
          </div>

          <div className={styles.dividerDiv}>
            <BsArrowDownCircle className={styles.circleDiv} color="black" />
          </div>
        </div>

        {/*  */}

        <div className={styles.fromTokenSelectContainer}>
          <div className={styles.fromTokenSelectContainerTop}>
            <p className={styles.titleStyle}>You recieve</p>
            <p className={styles.balanceStyle}>Balance:</p>
          </div>

          <div className={styles.fromTokenSelectContainerMiddle}>
            <div
              className={styles.chooseTokenDiv}
              onClick={() => {
                setModalId(1);
                setVisible(!visible);
              }}
            >
              <Image
                unoptimized
                src={toToken.tokenData.logoURI}
                alt="coin"
                width={25}
                height={25}
              />
              <p className={styles.FromText}>
                {toToken.tokenData.symbol ?? 'Choose Token'}
              </p>
              <AiOutlineDown size={12} style={{marginRight: 5}} />
            </div>
          </div>

          <div className={styles.fromTokenSelectContainerBottom}>
            <input
              type="number"
              placeholder="0.0"
              className={styles.inputStyle}
            />
            <p className={styles.balanceStyle}>0.34345</p>
          </div>
        </div>

        {showGasFee && (
          <div className={styles.gasFeeContainer}>
            <div className={styles.fromTokenSelectContainerTop}>
              <p className={styles.titleStyle}>Transaction type:</p>
              <p className={styles.balanceStyle}>Standard</p>
            </div>

            <div className={styles.fromTokenSelectContainerTop}>
              <p className={styles.titleStyle}>Gas fee:</p>
              <p className={styles.balanceStyle}>0.00</p>
            </div>
          </div>
        )}

        <div className={styles.btndiv}>
          <button className={styles.connectWalletBtn} onClick={() => open()}>
            Swap
          </button>
          {/* {isConnected ? (
            <button className={styles.connectWalletBtn} onClick={() => open()}>
              Swap
            </button>
          ) : (
            <button className={styles.connectWalletBtn} onClick={() => open()}>
              Connect Wallet
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default TokenPairSelector;
