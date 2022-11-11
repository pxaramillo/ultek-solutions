import { AppProps } from "next/app";
import "../styles/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Transition from "../components/transition";
import { SSRProvider } from "react-bootstrap";
import * as styles from '../components/transition.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Transition> 
        <Component {...pageProps} className={styles.page} />
      </Transition>
    </SSRProvider>
  );
}

export default MyApp;
