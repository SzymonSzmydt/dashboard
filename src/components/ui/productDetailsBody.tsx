import style from './styles/detail.module.css';
import { Dispatch, SetStateAction } from 'react';
import { CorrectProductType } from './../../../context/types/type';
import { useState } from 'react';
import { ProductInfo } from '../ui/popup/productInfo';
import { Dropdown } from './popup/dropdown';

type DetailProps = {
  product: CorrectProductType;
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  productSelectedToEdit: CorrectProductType;
  setProductSelectedToEdit: Dispatch<SetStateAction<CorrectProductType>>;
};

export function ProductDetailsBody({
  product,
  setIsAddProductClicked,
  productSelectedToEdit,
  setProductSelectedToEdit,
}: DetailProps) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [info, setInfo] = useState({ id: 0, active: false });

  const triggerDropdown = (product: CorrectProductType) => {
    setIsDropdown(!isDropdown);
    if (!isDropdown) {
      setProductSelectedToEdit(product);
    } else if (isDropdown) {
      setProductSelectedToEdit({} as CorrectProductType);
    }
  };

  return (
    <div
      key={product.id}
      className={
        productSelectedToEdit.id === product.id ? style.position : style.product
      }
    >
      {isDropdown && product.id === productSelectedToEdit.id ? (
        <Dropdown
          setIsDropdown={setIsDropdown}
          setIsAddProductClicked={setIsAddProductClicked}
          productSelectedToEdit={productSelectedToEdit}
          setProductSelectedToEdit={setProductSelectedToEdit}
        />
      ) : null}
      <div className={style.id}>{product.id}</div>
      <div className={style.name}> {product?.namePL} </div>
      <div
        className={style.price}
        onMouseEnter={() => setInfo({ id: product.id, active: true })}
        onMouseLeave={() => setInfo({ id: 0, active: false })}
      >
        {info.active && product.id === info.id ? (
          <ProductInfo {...product} />
        ) : null}
        {product.pricePL} zł
      </div>
      <div className={style.color}> {product?.colorPL} </div>
      <div className={style.sales}> {product?.sales ?? 0} szt.</div>
      <div
        className={style.option}
        onClick={() => triggerDropdown({ ...product })}
      >
        <span />
        <span />
      </div>
    </div>
  );
}
