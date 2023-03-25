import wind from "./window.module.css";
import WindowDashboardBar from "./windowDashboardBar";
import { useAuthContext } from "../../context/firebase/AuthContext";

interface WindowProps {
  children: React.ReactNode;
}

function WindowDashboard({ children }: WindowProps) {
  const { email } = useAuthContext();
  return (
    <div className={wind.main}>
      <WindowDashboardBar>
        <h2> Witaj! </h2> <p>{email?.slice(0, email.indexOf("@"))}</p>
      </WindowDashboardBar>
      <main>{children}</main>
    </div>
  );
}

export default WindowDashboard;
