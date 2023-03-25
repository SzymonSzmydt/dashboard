import wind from "./window.module.css";

interface WindowProps {
  children: React.ReactNode;
  streach?: boolean;
}

function WindowDashboardBar({ streach, children }: WindowProps) {
  const style = streach ? wind.streach : wind.bar;
  return <div className={style}>{children}</div>;
}

export default WindowDashboardBar;
