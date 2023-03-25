import { useRouter } from "next/router";
import { useEffect } from "react";
import DashLayout from "src/components/layout/DashLayout";
import { useAuthContext } from "src/context/firebase/AuthContext";

function Orders() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [router, user]);

  return (
    <DashLayout>
      <h1> Orders Page</h1>;
    </DashLayout>
  );
}

export default Orders;
