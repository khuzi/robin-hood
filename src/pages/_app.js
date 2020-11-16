import React, { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/layout/Layout";

import CssBaseline from "@material-ui/core/CssBaseline";
import Spinner from "../components/spinner/spinner";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const handleRouteChange = () => {
      setLoading(true);
    };
    const handleRouteComplete = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", () => handleRouteChange);
      router.events.off("routeChangeStart", () => handleRouteComplete);
    };
  }, []);

  return (
    <Layout>
      <CssBaseline />
      {loading ? (
        <Spinner />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Layout>
  );
}

export default MyApp;
