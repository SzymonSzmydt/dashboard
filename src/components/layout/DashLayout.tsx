import layout from "./layout.module.css";
import Head from "next/head";
import { Hamburger } from "../button/hamburger";
import { useState } from "react";
import Aside from "../page/aside";
import WindowDashboard from "../window/windowDashboard";

type Props = {
  children: React.ReactNode;
};

function DashLayout({ children }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Panel administracyjny</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>

      <main className={layout.general}>
        <Hamburger
          handleClick={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        />
        <Aside isClicked={isClicked} />
        <WindowDashboard>{children}</WindowDashboard>
      </main>
    </>
  );
}

export default DashLayout;
