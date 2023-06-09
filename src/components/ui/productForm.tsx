import add from "./styles/form.module.css";
import { Dispatch, SetStateAction } from "react";
import { CorrectProductType } from "../../context/types/type";
import settings from "../../../JSON/settings.json";

interface FormProps {
  productData: CorrectProductType;
  setProductData: Dispatch<SetStateAction<CorrectProductType>>;
}

export function ProductForm({ productData, setProductData }: FormProps) {
  const { shipping, delivery, category } = settings;

  const productImagesNames: Array<keyof typeof productData> = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
  ];

  const handleChangeInputValue = (
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    value.preventDefault();
    setProductData({
      ...productData,
      [value.target.name]: value.target.value,
    });
  };

  return (
    <>
      <label className={add.label}>Nazwa produktu - Polska</label>
      <input
        type='text'
        name='namePL'
        required
        minLength={3}
        placeholder='np. Krem'
        className={add.input}
        value={productData.namePL}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeInputValue(e)
        }
      />
      <label className={add.label}>Nazwa produktu - Angielska</label>
      <input
        type='text'
        name='nameEN'
        required
        minLength={3}
        placeholder='np. Cream'
        className={add.input}
        value={productData.nameEN}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeInputValue(e)
        }
      />
      <label className={add.label}>Kolor produktu - Polska</label>
      <input
        type='text'
        name='colorPL'
        required
        minLength={3}
        placeholder='np. Jasno-niebieski'
        className={add.input}
        value={productData.colorPL}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeInputValue(e)
        }
      />
      <label className={add.label}>Kolor produktu - Angielski</label>
      <input
        type='text'
        name='colorEN'
        required
        minLength={3}
        placeholder='np. Light-blue'
        className={add.input}
        value={productData.colorEN}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeInputValue(e)
        }
      />
      <label className={add.label}>Kategoria produktu</label>
      <select
        name='category'
        className={add.select}
        required
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setProductData({
            ...productData,
            category: e.target.value,
          })
        }
      >
        <option value={productData.category ? productData.category : ""}>
          {productData.category ? productData.category : "Wybierz"}
        </option>
        {category.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
      <label className={add.label}>Termin dostawy</label>
      <select
        name='shipping'
        className={add.select}
        required
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setProductData({
            ...productData,
            shipping: e.target.value,
          })
        }
      >
        <option value={productData.shipping ? productData.shipping : ""}>
          {productData.shipping ? productData.shipping : "Wybierz"}
        </option>
        {shipping.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
      <label className={add.label}>Koszt dostawy</label>
      <select
        name='delivery'
        className={add.select}
        required
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setProductData({
            ...productData,
            delivery: e.target.value,
          })
        }
      >
        <option value={productData.delivery ? productData.delivery : ""}>
          {productData.delivery ? productData.delivery : "Wybierz"}
        </option>
        {delivery.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
      <label className={add.label}>Waga produktu (kg)</label>
      <input
        type='number'
        name='weight'
        required
        minLength={1}
        step='0.01'
        min='0.01'
        max='1000.00'
        pattern='^\d+(\.\d{1,2})|(?![e])?$'
        placeholder='np. 5'
        className={add.priceInput}
        value={productData.weight}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setProductData({
            ...productData,
            weight: e.target.value,
          })
        }
      />

      <label className={add.label}>Cena - PLN</label>
      <input
        type='number'
        name='pricePL'
        required
        minLength={1}
        step='0.01'
        min='0.01'
        max='10000.00'
        pattern='^\d+(\.\d{1,2})|(?![e])?$'
        placeholder='np. 25.49'
        className={add.priceInput}
        value={productData.pricePL}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setProductData({
            ...productData,
            pricePL: e.target.value,
          })
        }
      />
      <label className={add.label}>Cena - EURO</label>
      <input
        type='number'
        name='priceEU'
        required
        minLength={1}
        step='0.01'
        min='0.01'
        max='10000.00'
        pattern='^\d+(\.\d{1,2})?$'
        placeholder='np. 25.49'
        className={add.priceInput}
        value={productData.priceEU}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setProductData({
            ...productData,
            priceEU: e.target.value,
          })
        }
      />
      <label className={add.label}>Opis produktu - Polski</label>
      <textarea
        name='descriptionPL'
        required
        minLength={30}
        placeholder='Opis'
        className={add.textarea}
        value={productData.descriptionPL}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setProductData({
            ...productData,
            descriptionPL: e.target.value,
          })
        }
      />
      <label className={add.label}>Opis produktu - Angielski</label>
      <textarea
        name='descriptionEN'
        required
        minLength={30}
        placeholder='Description'
        className={add.textarea}
        value={productData.descriptionEN}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setProductData({
            ...productData,
            descriptionEN: e.target.value,
          })
        }
      />
      {productImagesNames.map((imageName, index) => (
        <section key={imageName}>
          <label className={add.label}>Zdjęcie produktu nr {index + 1}</label>
          <input
            type='text'
            name={imageName}
            required
            minLength={3}
            className={add.input}
            value={productData[imageName]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeInputValue(e)
            }
          />
        </section>
      ))}
    </>
  );
}
