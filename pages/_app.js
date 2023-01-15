import { Sora } from "@next/font/google";

import Header from "../components/Header";
import "../styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={sora.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
