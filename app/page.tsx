import Layout from './pages/layout';

export default function Home() {
  return (
    <Layout
      child={
        <main>
          <h1>Project Setup</h1>
        </main>
      }
    />
  );
}
