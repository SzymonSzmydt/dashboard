import style from "./styles/stats.module.css";
import { Spinner } from "../spinner";

interface StatsProps {
  title: string;
  stats: number;
}

export function Stats({ title, stats }: StatsProps) {
  return (
    <section className={style.box}>
      <p className={style.title}> {title} </p>
      {typeof stats === "number" ? <h2> {stats} </h2> : <Spinner />}
    </section>
  );
}
