import wind from "./window.module.css";

type WindowProps = {
  children: React.ReactNode;
};

function WindowDashboardBody({ children }: WindowProps) {
  return <section className={wind.body}> {children} </section>;
}

export default WindowDashboardBody;
