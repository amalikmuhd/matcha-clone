'use client';
import {Provider} from 'react-redux';
// import OrderBook from './components/OrderBook';
import TokenPairSelector from './components/TokenPairSelector';
import {Layout} from './pages/layout';
import {EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum';
import {Web3Modal} from '@web3modal/react';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import {arbitrum, mainnet, polygon} from 'wagmi/chains';
import styles from './styles/swap.module.scss';
import {Store} from './store';

// import {Web3Button} from '@web3modal/react';

const chains = [arbitrum, mainnet, polygon];
const projectId = '8e77e249165c02c7b833699075f30faf';

const {publicClient} = configureChains(chains, [w3mProvider({projectId})]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({projectId, version: 1, chains}),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function Home() {
  return (
    <Provider store={Store}>
      <WagmiConfig config={wagmiConfig}>
        <Layout
          child={
            <div className={styles.wrapper}>
              {/* <h1>{data}</h1> */}
              <main className={styles.container}>
                {/* <OrderBook /> */}
                <div className={styles.rightContainer}>
                  <TokenPairSelector />
                </div>
              </main>
            </div>
          }
        />
        {/* <Web3Button /> */}
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </Provider>
  );
}
