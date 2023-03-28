import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../context/firebase/Firebase";
import { completStructureOfProduct } from "./types";

export const sendProductsToFirebase = async (
  product: completStructureOfProduct
) => {
  await setDoc(doc(db, "dashboard", "products"), product, {
    merge: true,
  });
};

export function getUniqueId(): number {
  return Date.now();
}
