import style from './styles/email.module.css';
import eyeIconOn from '../../public/icons/pass/visibility_on.svg';
import eyeIconOff from '../../public/icons/pass/visibility_off.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Standard } from 'components/button/standard';

type LoginProps = {
  email: string;
  password: string;
};

type ComponentProps = {
  path: string;
};

export function EmailPass({ path }: ComponentProps) {
  const [user, setUser] = useState<LoginProps>({ email: '', password: '' });
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return router.push(path);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label>Emial</label>
      <input
        type="text"
        name="email"
        className={style.input}
        autoComplete="on"
        required
        minLength={4}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUser({ ...user, email: e.target.value })
        }
      />
      <label>Hasło</label>
      <section className={style.pass}>
        <input
          type={isVisible ? 'text' : 'password'}
          name="password"
          className={style.input}
          autoComplete="on"
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
          alt="Password is hidden"
        />
      </section>
      <div className={style.btn}>
        <Standard name="Zaloguj" handleClick={() => null} />
      </div>
    </form>
  );
}
