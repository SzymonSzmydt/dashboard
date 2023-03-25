import DashLayout from "src/components/layout/DashLayout";
import { useAuthContext } from "../context/firebase/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Realized() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);

  return (
    <DashLayout>
      <h1>Realized</h1>
    </DashLayout>
  );
}
export default Realized;
