import style from './styles/spinner.module.css';
export function Spinner() {
  return (
    <div className={style.box}>
      <span className={style.loader} />
    </div>
  );
}
