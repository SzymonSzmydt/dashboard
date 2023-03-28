import { Variant } from "../button/Variant";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { ProductForm } from "../ui/productForm";
import { useAppDispatch } from "src/context/redux/hooks";
import {
  modyfyProductState,
  pushNewProductToState,
} from "src/context/redux/productsSlice";
import {
  CorrectProductType,
  completStructureOfProduct,
} from "../../context/types/type";
import { sendProductsToFirebase } from "../../context/hooks/hooks";

const initialState: CorrectProductType = {
  id: 0,
  priceEU: "",
  pricePL: "",
  category: "",
  delivery: "",
  colorEN: "",
  colorPL: "",
  descriptionEN: "",
  descriptionPL: "",
  nameEN: "",
  namePL: "",
  sales: 0,
  shipping: "",
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  weight: "",
};

function getUniqueId(): number {
  return Date.now();
}

interface AddProps {
  productSelectedToEdit: CorrectProductType;
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  setProductSelectedToEdit: Dispatch<SetStateAction<CorrectProductType>>;
}

function AddNewProduct({
  productSelectedToEdit,
  setIsAddProductClicked,
  setProductSelectedToEdit,
}: AddProps) {
  const dispatch = useAppDispatch();

  const [productData, setProductData] =
    useState<CorrectProductType>(initialState);

  useEffect(() => {
    if (productSelectedToEdit.namePL?.length > 2) {
      setProductData(productSelectedToEdit);
      setProductSelectedToEdit({} as CorrectProductType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSelectedToEdit]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (productData.id === 0) {
      const uniqueId = getUniqueId();
      setProductData({ ...productData, id: uniqueId });

      const data: completStructureOfProduct = {
        [uniqueId]: productData,
      };
      sendProductsToFirebase(data);
      dispatch(pushNewProductToState(productData));
    }

    if (productData.id > 0) {
      const data: completStructureOfProduct = {
        [productData.id]: productData,
      };
      sendProductsToFirebase(data);
      dispatch(modyfyProductState(productData));
    }

    setProductData(initialState);
    setIsAddProductClicked(false);
  };

  console.log(productData.id);

  return (
    <>
      <h2> Informacje o produkcie</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <ProductForm
          productData={productData}
          setProductData={setProductData}
        />
        <Variant name={"Zapisz"} />
      </form>
    </>
  );
}

export default AddNewProduct;
