import "../styles/globals.css";
import Layout from "../components/ui/Layout";
import AppProvider from "../store/AppProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
