import type { AppProps } from "next/app";
import "../assets/css/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
