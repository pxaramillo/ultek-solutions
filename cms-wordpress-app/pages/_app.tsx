import { AppProps } from "next/app";
import "../styles/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Transition from "../components/transition";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Transition> 
        <Component {...pageProps} />
      </Transition>
    </SSRProvider>
  );
}

export default MyApp;
