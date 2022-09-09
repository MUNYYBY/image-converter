import "../styles/globals.css";
import Layout from "../Layout/MainLayout";
import NextNProgress from "nextjs-progressbar";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#00DC1F"
        startPosition={0.3}
        height={5}
        options={{ easing: "ease", speed: 300 }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
