import Layout from "../components/layout/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
