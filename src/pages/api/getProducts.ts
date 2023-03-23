import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../context/firebase/Firebase";
import { CorrectProductType } from "../../context/types/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CorrectProductType[]>
) {
  const docSnap = await getDoc(doc(db, "dashboard", "products"));

  if (docSnap.exists()) {
    const data = Object.values(docSnap.data());
    res.status(200).json(data);
  }
}
