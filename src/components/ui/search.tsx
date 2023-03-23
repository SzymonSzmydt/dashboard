import style from './styles/search.module.css';
import { Dispatch, SetStateAction } from 'react';

type SearchProps = {
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export function Search({ setSearchValue }: SearchProps) {
  return (
    <input
      type="text"
      className={style.input}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchValue(e.target.value)
      }
      placeholder="Znajdź produkt"
    />
  );
}
