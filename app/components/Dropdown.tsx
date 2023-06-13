import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMagnifyingGlass} from 'react-icons/hi2';
import styles from '../styles/dropdown.module.scss';
import Image from 'next/image';
import {useDispatch} from 'react-redux';
import {
  getFromTokenSelect,
  getToTokenSelect,
} from '../store/actions/generalAction';

import {Oval} from 'react-loader-spinner';

interface DropDownProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  modalId: number;
}

const Dropdown = ({visible, setVisible, modalId}: DropDownProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {symbol: '', logoURI: '', name: '', address: '', chainId: '', decimals: ''},
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://tokens.coingecko.com/uniswap/all.json',
        );
        const tokenLists = await response.json();
        setData(tokenLists.tokens);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.card}>
      {loading ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '320px',
          }}
        >
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="blue"
            secondaryColor="white"
          />
        </div>
      ) : data ? (
        <>
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
                    const payload = {
                      tokenData: {
                        address: item.address,
                        chainId: item.chainId,
                        decimals: item.decimals,
                        logoURI: item.logoURI,
                        name: item.name,
                        symbol: item.symbol,
                      },
                    };
                    if (modalId === 0) {
                      dispatch(getFromTokenSelect(payload.tokenData));
                    } else {
                      dispatch(getToTokenSelect(payload.tokenData));
                    }
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
        </>
      ) : (
        <h2>No data</h2>
      )}
    </main>
  );
};

export default Dropdown;
