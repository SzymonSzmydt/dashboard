import style from './styles/confirm.module.css';
import { doc, updateDoc, deleteField } from 'firebase/firestore';
import { Variant } from '../../../button/Variant';
import { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../../../context/redux/hooks';
import { deleteProductFromState } from '../../../../context/redux/productsSlice';
import { db } from '../../../../context/firebase/Firebase';
import { CorrectProductType } from '../../../../context/types/type';

type ConfirmProps = {
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
  setIsDropdown: Dispatch<SetStateAction<boolean>>;
  setProductSelectedToEdit: Dispatch<SetStateAction<CorrectProductType>>;
  id: number;
  namePL: string;
};

export function Confirm({
  setProductSelectedToEdit,
  setIsDeleting,
  setIsDropdown,
  id,
  namePL,
}: ConfirmProps) {
  const dispatch = useAppDispatch();

  const handleDeleteProduct = async () => {
    const productRef = doc(db, 'dashboard', 'products');
    await updateDoc(productRef, {
      [id]: deleteField(),
    });
    dispatch(deleteProductFromState(id));
    setIsDropdown(false);
    setProductSelectedToEdit({} as CorrectProductType);
  };

  const handleCancel = () => {
    setProductSelectedToEdit({} as CorrectProductType);
    setIsDeleting(false);
    setIsDropdown(false);
  };

  return (
    <div className={style.confirm}>
      <p>Czy na pewno usunąć product ?</p>
      <span className={style.id}> {id} </span>
      <span className={style.name}> {namePL} </span>
      <br />
      <section className={style.box}>
        <Variant name="TAK" handleClick={handleDeleteProduct} />
        <Variant name="NIE" handleClick={handleCancel} />
      </section>
    </div>
  );
}
