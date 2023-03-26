import { useEffect } from "react";
import WindowDashboardBar from "src/components/window/windowDashboardBar";
import { Stats } from "src/components/ui/stats/stats";
import { getProducts } from "src/context/redux/productsSlice";
import { useAppDispatch, useAppSelector } from "src/context/redux/hooks";
import DashLayout from "src/components/layout/DashLayout";
import { useAuthContext } from "src/context/firebase/AuthContext";
import { useRouter } from "next/router";
import { CorrectProductType } from "../context/types/type";

import { doc, getDoc } from "firebase/firestore";
import { db } from "src/context/firebase/Firebase";

function Dashboard() {
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

  const { email } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!email) router.push("/");
  }, [router, email]);

  const fetchProducts = async () => {
    // const response = await fetch("/api/getProducts");
    // const data = await response.json();

    const docSnap = await getDoc(doc(db, "dashboard", "products"));

    if (docSnap.exists()) {
      const data: CorrectProductType[] = Object.values(docSnap.data());
      dispatch(getProducts(data));
    }
    // dispatch(getProducts(data));
  };

  useEffect(() => {
    if (products.length === 0 && email) fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return email ? (
    <DashLayout>
      <WindowDashboardBar streach={true}>
        <Stats title={"Produkty"} stats={products.length} />
        <Stats title={"Zam. oczekujące"} stats={0} />
        <Stats title={"Zam. zrealiz."} stats={0} />
      </WindowDashboardBar>
    </DashLayout>
  ) : null;
}
export default Dashboard;
