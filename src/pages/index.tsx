import { EmailPass } from "src/components/login/emailPass";
import style from "../styles/login.module.css";

export default function Login() {
  return (
    <div className={style.wrapper}>
      <section className={style.box}>
        <h2>Wymagana autoryzacja</h2>
        <EmailPass />
      </section>
    </div>
  );
}
