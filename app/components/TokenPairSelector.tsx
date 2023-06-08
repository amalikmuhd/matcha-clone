import React, {useState} from 'react';
import styles from '../styles/tokenpairselector.module.scss';
import {BsArrowDownCircle} from 'react-icons/bs';
import {AiOutlineDown} from 'react-icons/ai';
import coin from '../assets/icons/eth.webp';
import Image from 'next/image';
import {CiSettings} from 'react-icons/ci';
import Dropdown from './Dropdown';

const TokenPairSelector = () => {
  const [visible, setVisible] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        console.log('Connecting to Metamask');
        await window.ethereum.request({method: 'eth_requestAccounts'});
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('window is undefined');
    }
  };

  return (
    <div className={styles.card}>
      {visible && <Dropdown visible={visible} setVisible={setVisible} />}
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
            <p className={styles.balanceStyle}>Balance: 0.234</p>
          </div>

          <div className={styles.fromTokenSelectContainerMiddle}>
            <div
              className={styles.chooseTokenDiv}
              onClick={() => setVisible(!visible)}
            >
              <Image src={coin} alt="coin" style={{width: 25, height: 25}} />
              <p className={styles.fromText}>USDT</p>
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
        <div className={styles.fromTokenSelectContainer}>
          <div className={styles.fromTokenSelectContainerTop}>
            <p className={styles.titleStyle}>You recieve</p>
            <p className={styles.balanceStyle}>Balance: 0.234</p>
          </div>

          <div className={styles.fromTokenSelectContainerMiddle}>
            <div
              className={styles.chooseTokenDiv}
              onClick={() => setVisible(!visible)}
            >
              <Image src={coin} alt="coin" style={{width: 25, height: 25}} />
              <p className={styles.FromText}>USDT</p>
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
        <div className={styles.btndiv}>
          <button className={styles.connectWalletBtn} onClick={connectWallet}>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenPairSelector;
