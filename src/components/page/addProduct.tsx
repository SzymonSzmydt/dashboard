import { Variant } from "../button/Variant";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { ProductForm } from "../ui/productForm";
import { useAppDispatch } from "src/context/redux/hooks";
import { modyfyProductState } from "src/context/redux/productsSlice";
import { CorrectProductType } from "../../context/types/type";
import { completStructureOfProduct } from "./pageSettings/types";
import { sendProductsToFirebase, getUniqueId } from "./pageSettings/hooks";

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
  weight: "",
};

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (productData.id === 0) {
      const uniqueId = getUniqueId();
      setProductData({ ...productData, id: uniqueId });

      const data: completStructureOfProduct = {
        [uniqueId]: productData,
      };
      sendProductsToFirebase(data);
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
