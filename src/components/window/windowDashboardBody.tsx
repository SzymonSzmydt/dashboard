import wind from "./window.module.css";

interface WindowProps {
  children: React.ReactNode;
}

function WindowDashboardBody({ children }: WindowProps) {
  return <section className={wind.body}> {children} </section>;
}

export default WindowDashboardBody;
