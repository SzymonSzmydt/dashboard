import style from './styles/detail.module.css';

export function ProductDetailsHead() {
  return (
    <section className={style.row}>
      <div className={style.id}>ID</div>
      <div className={style.name}>NAZWA</div>
      <div className={style.price}>CENA</div>
      <div className={style.color}>COLOR</div>
      <div className={style.sales}>SPRZEDANO</div>
      <div className={style.option} />
    </section>
  );
}
