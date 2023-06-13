'use client';
import {Provider} from 'react-redux';
import OrderBook from './components/OrderBook';
import TokenPairSelector from './components/TokenPairSelector';
import {Layout} from './pages/layout';
import styles from './styles/swap.module.scss';
import {Store} from './store';

export default function Home() {
  return (
    <Provider store={Store}>
      <Layout
        child={
          <div className={styles.wrapper}>
            {/* <h1>{data}</h1> */}
            <main className={styles.container}>
              <OrderBook />
              <div className={styles.rightContainer}>
                <TokenPairSelector />
              </div>
            </main>
          </div>
        }
      />
    </Provider>
  );
}
