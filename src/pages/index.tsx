import { EmailPass } from "src/components/login/emailPass";
import style from "../styles/login.module.css";

export default function Login() {
  return (
    <div className={style.login}>
      <h2>Wymagana autoryzacja</h2>
      <EmailPass />
    </div>
  );
}
