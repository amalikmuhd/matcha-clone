import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMagnifyingGlass} from 'react-icons/hi2';
import styles from '../styles/dropdown.module.scss';
import Image from 'next/image';
// import Image from 'next/image';

interface DropDownProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const Dropdown = ({visible, setVisible}: DropDownProps) => {
  const [data, setData] = useState([{symbol: '', logoURI: ''}]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://tokens.coingecko.com/uniswap/all.json',
      );
      const tokenLists = await response.json();
      setData(tokenLists.tokens);
      // console.log(tokenLists);
    };
    fetchData();
  }, []);

  console.log(data);
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
        {data.map((item, index: React.Key | null | undefined) => {
          return (
            <div
              className={styles.itemContainer}
              key={index}
              onClick={() => {
                // setData(item.tokenName);
                setVisible(!visible);
              }}
            >
              <Image
                unoptimized
                src={item.logoURI}
                alt="coin"
                width={30}
                height={30}
              />
              <div className={styles.textContainer}>
                {/* <Image src={item.logoURI} alt="coin" /> */}
                <p>{item.symbol}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Dropdown;
