'use client';
// import OrderBook from './components/OrderBook';
import TokenPairSelector from './components/TokenPairSelector';
import {Layout} from './pages/layout';
import styles from './styles/swap.module.scss';

export default function Home() {
  return (
    <Layout
      child={
        <div className={styles.wrapper}>
          {/* <h1>{data}</h1> */}
          <main className={styles.container}>
            {/* <OrderBook key={data} /> */}
            <div className={styles.rightContainer}>
              <TokenPairSelector />
            </div>
          </main>
        </div>
      }
    />
  );
}
