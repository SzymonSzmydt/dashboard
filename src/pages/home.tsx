import { useEffect } from "react";
import WindowDashboardBar from "src/components/window/windowDashboardBar";
import { Stats } from "src/components/ui/stats/stats";
import { getProducts } from "src/context/redux/productsSlice";
import { useAppDispatch, useAppSelector } from "src/context/redux/hooks";

function Dashboard() {
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

  const fetchProducts = async () => {
    const response = await fetch("/api/getProducts");
    const data = await response.json();
    dispatch(getProducts(JSON.parse(data || "")));
  };

  useEffect(() => {
    if (products.length === 0) fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <>
      <WindowDashboardBar streach={true}>
        <Stats title={"Produkty"} stats={products.length} />
        <Stats title={"Zam. oczekujące"} stats={0} />
        <Stats title={"Zam. zrealiz."} stats={0} />
      </WindowDashboardBar>
    </>
  );
}
export default Dashboard;
