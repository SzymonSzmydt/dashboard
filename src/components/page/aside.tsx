import aside from "./styles/aside.module.css";
import realized from "../../../public/orders.svg";
import handshake from "../../../public/handshake.svg";
import home from "../../../public/home.svg";
import list from "../../../public/list.svg";
import panel from "../../../public/panel.svg";
import Image from "next/image";
import { LinkBox } from "../ui/LinkBox";
import logout from "../../../public/logout.svg";
import { signOut } from "firebase/auth";
import { authentication } from "src/context/firebase/Firebase";

interface AsideProps {
  isClicked: boolean;
}

function Aside({ isClicked }: AsideProps) {
  const asideBackMove = isClicked ? aside.asideOn : aside.aside;
  return (
    <aside className={asideBackMove}>
      <section>
        <div className={aside.box}>
          <div className={aside.title}>
            <Image
              src={panel}
              alt='Panel administracyjny'
              className={aside.panelIcon}
            />
            Panel
          </div>
          <span className={aside.small}>administracyjny</span>
        </div>
        <p className={aside.category}>ANALITYKA</p>
        <LinkBox name='Home' path='/home' image={home} />
        <LinkBox name='Zam. zrealizowane' path='/realized' image={realized} />
        <p className={aside.category}>ZARZĄDZANIE</p>
        <LinkBox name='Lista produktów' path='/product' image={list} />
        <LinkBox name='Zam. oczekujące' path='/orders' image={handshake} />
      </section>
      <section className={aside.logout}>
        <p className={aside.category}>PAMIĘTAJ</p>
        <LinkBox
          name='Wyloguj się'
          path=''
          image={logout}
          handleClick={() => signOut(authentication)}
        />
      </section>
    </aside>
  );
}

export default Aside;
