import DashLayout from "src/components/layout/DashLayout";
import { useAuthContext } from "../context/firebase/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Realized() {
  const { email } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!email) router.push("/");
  }, [router, email]);

  return email ? (
    <DashLayout>
      <h1>Realized</h1>
    </DashLayout>
  ) : null;
}
export default Realized;
