import "../styles/globals.css";
import { Arimo } from "next/font/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "src/context/redux/store";

const inter = Arimo({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </>
  );
}
