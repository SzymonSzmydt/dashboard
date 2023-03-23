import { useEffect } from "react";
import WindowDashboard from "src/components/window/windowDashboard";
import WindowDashboardBar from "src/components/window/windowDashboardBar";
import { Stats } from "src/components/ui/stats/stats";
import { CorrectProductType } from "src/context/types/type";
import { getProducts } from "src/context/redux/productsSlice";
import { useAppDispatch, useAppSelector } from "src/context/redux/hooks";

function Dashboard() {
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

  const fetchProducts = async () => {
    const response = await fetch("/api/products/getProducts");
    const data = await response.json();
    const result: Array<CorrectProductType> = Object.values(data);
    dispatch(getProducts(result));
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
        <WindowDashboardBar streach={true}>
          <Stats title={"Produkty"} stats={products.length} />
          <Stats title={"Zam. oczekujące"} stats={0} />
          <Stats title={"Zam. zrealiz."} stats={0} />
        </WindowDashboardBar>
      </WindowDashboard>
    </>
  );
}
export default Dashboard;
