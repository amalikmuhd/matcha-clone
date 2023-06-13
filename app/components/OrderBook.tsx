/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useEffect, useState} from 'react';
import styles from '../styles/orderbook.module.scss';
import {useSelector} from 'react-redux';
import {RootStore} from '../store';

// interface OrderBookProps {
//   key: string;
// }
const OrderBook = () => {
  const [loading, setLoading] = useState(false);
  const fromToken = useSelector((state: RootStore) => state.fromTokenSelect);
  const toToken = useSelector((state: RootStore) => state.toTokenSelect);
  const [data, setData] = useState({
    asks: {
      page: Number,
      perPage: Number,
      records: [{}],
      total: Number,
    },
    bids: {
      page: Number,
      perPage: Number,
      records: [{}],
      total: Number,
    },
  });
  //
  console.log(loading);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.0x.org/orderbook/v1?quoteToken=${fromToken.tokenData.address}&baseToken=${toToken.tokenData.address}`,
        );
        const tokenLists = await response.json();
        setData(tokenLists);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // console.log(data, 'data from order book');
  console.log(data.asks.records, 'asks');
  console.log(data.bids.records, 'bids');
  return (
    <main className={styles.orderBookContainer}>
      <div className={styles.buyingContainer}>
        <h1>
          {`${fromToken.tokenData.symbol} / ${toToken.tokenData.symbol}` ??
            'Jerry'}
        </h1>

        <div className={styles.headerContainer}>
          <div className={styles.priceStyle}>
            <h2>Price</h2>
          </div>
          <div className={styles.quantityStyle}>
            <h2>Quantity</h2>
          </div>
          <div className={styles.totalStyle}>
            <h2>Total</h2>
          </div>
        </div>

        <div className={styles.bodyContainer}>
          <div className={styles.priceBuyStyle}>
            <p>23,376.00</p>

            {/* {data.bids.records.map((item: any) => console.log(item))} */}

            <p>dasdfasf</p>
          </div>
          <div className={styles.quantityBuyStyle}>
            <p>5,678</p>
          </div>
          <div className={styles.totalBuyStyle}>
            <p>5,678</p>
          </div>
        </div>
      </div>

      <div className={styles.sellingContainer}>
        &nbsp;
        <div className={styles.headerContainer}>
          <>
            <div className={styles.priceStyle}>
              <h2>Price</h2>
            </div>
            <div className={styles.quantityStyle}>
              <h2>Quantity</h2>
            </div>
            <div className={styles.totalStyle}>
              <h2>Total</h2>
            </div>
          </>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.priceSellStyle}>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
            <p>23,376.00</p>
          </div>
          <div className={styles.quantitySellStyle}>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
          </div>
          <div className={styles.totalSellStyle}>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
            <p>5,678</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderBook;
