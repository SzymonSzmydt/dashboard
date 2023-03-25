import wind from "./window.module.css";
import WindowDashboardBar from "./windowDashboardBar";

interface WindowProps {
  children: React.ReactNode;
}

function WindowDashboard({ children }: WindowProps) {
  return (
    <div className={wind.main}>
      <WindowDashboardBar>
        <h1> USER</h1>
      </WindowDashboardBar>
      <main>{children}</main>
    </div>
  );
}

export default WindowDashboard;
