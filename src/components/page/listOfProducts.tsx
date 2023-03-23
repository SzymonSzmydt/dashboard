import style from "./styles/product.module.css";
import { useState, Dispatch, SetStateAction } from "react";
import { Search } from "../ui/search";
import { useAppSelector } from "../../context/redux/hooks";
import { CorrectProductType } from "../../context/types/type";
import { ProductDetailsHead } from "../ui/productDetailsHead";
import { ProductDetailsBody } from "../ui/productDetailsBody";

type ListProps = {
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  setProductSelectedToEdit: Dispatch<SetStateAction<CorrectProductType>>;
  productSelectedToEdit: CorrectProductType;
};

export function ListOfProducts({
  setIsAddProductClicked,
  setProductSelectedToEdit,
  productSelectedToEdit,
}: ListProps) {
  const productList = useAppSelector((state) => state.products.value);
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <div className={style.wrapper}>
        <h1> Lista Produktów</h1>
        <Search setSearchValue={setSearchValue} />
      </div>
      <div className={style.table}>
        <ProductDetailsHead />
        {productList?.length > 0
          ? searchValue.length > 0
            ? productList
                .filter((filtr) =>
                  /[0-9]{3}/.test(searchValue)
                    ? filtr["id"].toString().includes(searchValue)
                    : filtr["namePL"]
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                )
                .map((product) => (
                  <ProductDetailsBody
                    key={product.id}
                    product={product}
                    setIsAddProductClicked={setIsAddProductClicked}
                    productSelectedToEdit={productSelectedToEdit}
                    setProductSelectedToEdit={setProductSelectedToEdit}
                  />
                ))
            : productList.map((product) => (
                <ProductDetailsBody
                  key={product.id}
                  product={product}
                  setIsAddProductClicked={setIsAddProductClicked}
                  productSelectedToEdit={productSelectedToEdit}
                  setProductSelectedToEdit={setProductSelectedToEdit}
                />
              ))
          : null}
      </div>
    </>
  );
}
