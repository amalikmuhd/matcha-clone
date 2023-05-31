import React, {useState} from 'react';
import styles from '../styles/tokenpairselector.module.scss';
import {HiOutlineSwitchHorizontal} from 'react-icons/hi';
import {BsArrowDownCircle} from 'react-icons/bs';
import {AiOutlineDown} from 'react-icons/ai';
import coin from '../assets/icons/eth.webp';
import Image from 'next/image';
import Dropdown from './Dropdown';

interface TokenPairSelectorProps {
  data: string;
  setData: (value: string) => void;
}

const TokenPairSelector = ({data, setData}: TokenPairSelectorProps) => {
  const [visible, setVisible] = useState(false);
  // const [data, setData] = useState('');

  return (
    <main className={styles.card}>
      {visible && (
        <Dropdown setData={setData} visible={visible} setVisible={setVisible} />
      )}
      <div className={styles.cardTopDiv}>
        <div className={styles.rowDiv}>
          <button className={styles.marketButtonStyle}>Market</button>
          <button className={styles.limitButtonStyle}>Limit</button>
        </div>
        <HiOutlineSwitchHorizontal size={24} color="#7679b5" />
      </div>
      <div className={styles.cardMiddleDiv}>
        <p className={styles.titleStyle}>You Pay</p>
        <div
          className={styles.chooseTokenDiv}
          onClick={() => setVisible(!visible)}
        >
          <p className={styles.chooseTokenBtn}>
            {data ? data : 'Choose Token'}
          </p>
          <AiOutlineDown />
        </div>
        <div className={styles.dividerDiv}>
          <BsArrowDownCircle className={styles.circleDiv} />
        </div>
        <p className={styles.titleStyle}>You Receive</p>
        <div
          className={styles.tokenAndInputDiv}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.tokenSelector}>
            <Image src={coin} alt="coin" className={styles.coinStyles} />
            <p className={styles.coinTitle}>USDT</p>
            <AiOutlineDown className={styles.coinArrowDown} />
          </div>
          <div className={styles.inputAmountDiv}>0</div>
        </div>
        <div className={styles.btndiv}>
          <button className={styles.connectWalletBtn}>Connect Wallet</button>
        </div>
      </div>
    </main>
  );
};

export default TokenPairSelector;
