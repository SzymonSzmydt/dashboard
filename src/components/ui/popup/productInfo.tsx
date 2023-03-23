import style from './styles/productInfo.module.css';
import { CorrectProductType } from '../../../../context/types/type';

export function ProductInfo({ ...product }: CorrectProductType) {
  return (
    <div className={style.wrapper}>
      <section className={style.box}>
        <p className={style.title}>Informacje</p>
        <ul className={style.text}>
          <li> {product.nameEN} </li>
          <li>&euro; {product.priceEU} </li>
          <li> {product.shipping}</li>
          <li> Koszt przesyłki: {product.delivery} zł</li>
          <li> Kategoria {product.category}</li>
          <li> Waga {product.weight} kg</li>
        </ul>
      </section>
    </div>
  );
}
