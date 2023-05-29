import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMagnifyingGlass} from 'react-icons/hi2';
import styles from '../styles/dropdown.module.scss';

const DataList = [
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
  {tokenName: 'Dai', tokenFullName: 'DAI'},
];

interface DropDownProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const Dropdown = ({visible, setVisible}: DropDownProps) => {
  return (
    <main className={styles.card}>
      <div className={styles.cardTopDiv}>
        <p className={styles.titleStyle}>You Pay</p>
        <AiOutlineClose
          size={18}
          color="#7679b5"
          onClick={() => setVisible(!visible)}
        />
      </div>
      <div className={styles.cardMiddleDiv}>
        <div className={styles.searchDiv}>
          <HiMagnifyingGlass />
          <input
            placeholder="Search or paste any token"
            className={styles.inputSearch}
          />
        </div>

        {/* <p className={styles.titleStyle}>You Pay</p> */}
      </div>
      <div className={styles.cardItemDiv}>
        {DataList.map((item, index) => {
          return (
            <div
              className={styles.itemContainer}
              key={index}
              onClick={() => setVisible(!visible)}
            >
              <HiMagnifyingGlass />
              <div className={styles.textContainer}>
                <p>{item.tokenName} - </p>
                <p>{item.tokenFullName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Dropdown;
