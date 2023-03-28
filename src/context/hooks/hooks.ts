import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { completStructureOfProduct } from "../types/type";

export const sendProductsToFirebase = async (
  product: completStructureOfProduct
) => {
  await setDoc(doc(db, "dashboard", "products"), product, {
    merge: true,
  });
};


