import { useEffect } from "react";
import WindowDashboardBar from "src/components/window/windowDashboardBar";
import { Stats } from "src/components/ui/stats/stats";
import { getProducts } from "src/context/redux/productsSlice";
import { useAppDispatch, useAppSelector } from "src/context/redux/hooks";
import DashLayout from "src/components/layout/DashLayout";
import { useAuthContext } from "src/context/firebase/AuthContext";
import { useRouter } from "next/router";

function Dashboard() {
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

  const { email } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!email) router.push("/");
  }, [router, email]);

  const fetchProducts = async () => {
    const response = await fetch("/api/getProducts");
    const data = await response.json();
    dispatch(getProducts(data));
  };

  useEffect(() => {
    if (products.length === 0) fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <DashLayout>
      <WindowDashboardBar streach={true}>
        <Stats title={"Produkty"} stats={products.length} />
        <Stats title={"Zam. oczekujące"} stats={0} />
        <Stats title={"Zam. zrealiz."} stats={0} />
      </WindowDashboardBar>
    </DashLayout>
  );
}
export default Dashboard;
