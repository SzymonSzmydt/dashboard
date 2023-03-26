import { useRouter } from "next/router";
import { useEffect } from "react";
import DashLayout from "src/components/layout/DashLayout";
import { useAuthContext } from "src/context/firebase/AuthContext";

function Orders() {
  const { email } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!email) router.push("/");
  }, [router, email]);

  return email ? (
    <DashLayout>
      <h1> Orders Page</h1>;
    </DashLayout>
  ) : null;
}

export default Orders;
