'use client';
import {Layout} from './pages/layout';
import {AiOutlineDown} from 'react-icons/ai';
import {HiOutlineSwitchHorizontal} from 'react-icons/hi';
import {BsArrowDownCircle} from 'react-icons/bs';
import styles from './styles/swap.module.scss';
import Image from 'next/image';
import coin from './assets/icons/eth.webp';
import {useState} from 'react';
import Dropdown from './components/Dropdown';

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <Layout
      child={
        <div className={styles.wrapper}>
          <div>
            <h1>Ethereum</h1>
          </div>
          <main className={styles.container}>
            <div className={styles.leftContainer}>h2</div>
            <div className={styles.rightContainer}>
              <main className={styles.card}>
                {visible && (
                  <Dropdown visible={visible} setVisible={setVisible} />
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
                    <p className={styles.chooseTokenBtn}>Choose Token</p>
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
                      <Image
                        src={coin}
                        alt="coin"
                        className={styles.coinStyles}
                      />
                      <p className={styles.coinTitle}>ETH</p>
                      <AiOutlineDown className={styles.coinArrowDown} />
                    </div>
                    <div className={styles.inputAmountDiv}>0</div>
                  </div>
                  <div className={styles.btndiv}>
                    <button className={styles.connectWalletBtn}>
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </div>
      }
    />
  );
}
