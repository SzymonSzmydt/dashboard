import style from "./styles/email.module.css";
import eyeIconOn from "../../../public/pass/visibility_on.svg";
import eyeIconOff from "../../../public/pass/visibility_off.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Variant } from "../button/Variant";
import signIn from "src/context/firebase/signIn";

type LoginProps = {
  email: string;
  password: string;
};

export function EmailPass() {
  const [user, setUser] = useState<LoginProps>({ email: "", password: "" });
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { result, error } = await signIn(user.email, user.password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/home");
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label>Emial</label>
      <input
        type='text'
        name='email'
        className={style.input}
        autoComplete='on'
        required
        minLength={4}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUser({ ...user, email: e.target.value })
        }
      />
      <label>Hasło</label>
      <section className={style.pass}>
        <input
          type={isVisible ? "text" : "password"}
          name='password'
          className={style.input}
          autoComplete='on'
          required
          minLength={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, password: e.target.value })
          }
        />
        <Image
          src={isVisible ? eyeIconOn : eyeIconOff}
          onClick={() => setIsVisible((state) => !state)}
          className={style.visibility}
          alt='Password is hidden'
        />
      </section>
      <div className={style.btn}>
        <Variant name='Zaloguj' handleClick={() => null} />
      </div>
    </form>
  );
}
