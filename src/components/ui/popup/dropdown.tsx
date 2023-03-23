import style from './styles/dropdown.module.css';
import { Confirm } from './confirm';
import { useState, Dispatch, SetStateAction } from 'react';
import { CorrectProductType } from '../../../../context/types/type';

type DropProps = {
  setIsDropdown: Dispatch<SetStateAction<boolean>>;
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  productSelectedToEdit: CorrectProductType;
  setProductSelectedToEdit: Dispatch<SetStateAction<CorrectProductType>>;
};

export function Dropdown({
  setIsDropdown,
  setIsAddProductClicked,
  productSelectedToEdit,
  setProductSelectedToEdit,
}: DropProps) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  return (
    <>
      {isDeleting ? (
        <Confirm
          setIsDeleting={setIsDeleting}
          setIsDropdown={setIsDropdown}
          setProductSelectedToEdit={setProductSelectedToEdit}
          {...productSelectedToEdit}
        />
      ) : (
        <div className={style.dropdown}>
          <ul>
            <li onClick={() => setIsAddProductClicked(true)}> Edytuj </li>
            <li onClick={() => setIsDeleting(true)}> Usuń </li>
          </ul>
        </div>
      )}
    </>
  );
}
