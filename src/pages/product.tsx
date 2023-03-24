import { useState, useEffect } from "react";
import WindowDashboard from "src/components/window/windowDashboard";
import WindowDashboardBar from "src/components/window/windowDashboardBar";
import WindowDashboardBody from "src/components/window/windowDashboardBody";
import { ListOfProducts } from "src/components/page/listOfProducts";
import { CorrectProductType } from "src/context/types/type";
import { Variant } from "src/components/button/Variant";
import AddNewProduct from "src/components/page/addProduct";
import { useAppDispatch, useAppSelector } from "src/context/redux/hooks";
import { getProducts } from "src/context/redux/productsSlice";

function ProductList() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.value);
  const [isAddProductClicked, setIsAddProductClicked] = useState(false);
  const [productSelectedToEdit, setProductSelectedToEdit] =
    useState<CorrectProductType>({} as CorrectProductType);

  const fetchProducts = async () => {
    const response = await fetch("/api/getProducts");
    const data = await response.json();
    dispatch(getProducts(JSON.parse(data || "")));
  };

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <>
      <WindowDashboard>
        <WindowDashboardBar>
          {isAddProductClicked ? (
            <Variant
              name='Wróć do listy'
              handleClick={() => setIsAddProductClicked(false)}
            />
          ) : (
            <Variant
              name={"Dodaj produkt"}
              handleClick={() => setIsAddProductClicked(true)}
            />
          )}
        </WindowDashboardBar>
        <WindowDashboardBody>
          {isAddProductClicked ? (
            <AddNewProduct
              productSelectedToEdit={productSelectedToEdit}
              setProductSelectedToEdit={setProductSelectedToEdit}
              setIsAddProductClicked={setIsAddProductClicked}
            />
          ) : (
            <ListOfProducts
              setProductSelectedToEdit={setProductSelectedToEdit}
              setIsAddProductClicked={setIsAddProductClicked}
              productSelectedToEdit={productSelectedToEdit}
            />
          )}
        </WindowDashboardBody>
      </WindowDashboard>
    </>
  );
}

export default ProductList;
