import wind from "./window.module.css";
import WindowDashboardBar from "./windowDashboardBar";
import { useAuthContext } from "../../context/firebase/AuthContext";
import userIcon from "../../../public/user.webp";
import Image from "next/image";

interface WindowProps {
  children: React.ReactNode;
}

function WindowDashboard({ children }: WindowProps) {
  const { email } = useAuthContext();
  return (
    <div className={wind.main}>
      <WindowDashboardBar>
        <Image src={userIcon} alt='user icon' width={40} height={40} />
        <h2 className={wind.h2}> Witaj, </h2>
        <p className={wind.p}>{email?.slice(0, email.indexOf("@"))}</p>
      </WindowDashboardBar>
      <main>{children}</main>
    </div>
  );
}

export default WindowDashboard;
