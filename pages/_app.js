import "../styles/styles.scss";
import "antd/dist/antd.css";

import Head from "next/head";
import "../styles/responsive.scss";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
