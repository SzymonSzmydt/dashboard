import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "src/context/firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";
import type { Body } from "../../context/types/type";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  const sendProductsToFirebase = async (product: Body) => {
    await setDoc(doc(db, "dashboard", "products"), product, {
      merge: true,
    });
  };

  if (req.body.id === 0) {
    body.id = Date.now();
    const data: Body = {
      [body.id]: body,
    };
    await sendProductsToFirebase(data);
    res.status(201).send({ message: "Dodano do koszyka" });
  } else if (body.id > 0) {
    const data: Body = {
      [body.id]: body,
    };
    await sendProductsToFirebase(data);
    res.status(200).send({ message: "Dodano do koszyka" });
  } else res.status(400).json({ message: "Pola nie uzupełnione" });
}
