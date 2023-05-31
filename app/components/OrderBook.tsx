import React from 'react';
import styles from '../styles/orderbook.module.scss';

interface OrderBookProps {
  key: string;
}
const OrderBook = ({key}: OrderBookProps) => {
  return (
    <main className={styles.orderBookContainer}>
      <div className={styles.buyingContainer}>
        <h1>
          {key ?? 'ETH'}/{'USDT'}
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
          <div className={styles.quantityBuyStyle}>
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
          <div className={styles.totalBuyStyle}>
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

      <div className={styles.sellingContainer}>
        &nbsp;
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
