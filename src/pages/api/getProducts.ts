import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./auth/Firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const docSnap = await getDoc(doc(db, "dashboard", "products"));

  if (docSnap.exists()) {
    const data = JSON.stringify(Object.values(docSnap.data()));
    res.status(200).json(data);
  }
}
