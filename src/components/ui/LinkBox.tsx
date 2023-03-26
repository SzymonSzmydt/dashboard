import link from "./styles/link.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface ImgProp {
  src: string;
  width: number;
  height: number;
}

interface Props {
  image: ImgProp;
  name: string;
  path: string;
  handleClick?: () => void;
}

export function LinkBox({ name, path, image, handleClick }: Props) {
  const { pathname } = useRouter();

  return pathname !== path ? (
    <Link href={path} className={link.link} onClick={handleClick}>
      <Image src={image} alt={name} className={link.icon} />
      {name}
    </Link>
  ) : (
    <div className={link.linkBox}>
      <Image src={image} alt={name} className={link.icon} />
      {name}
    </div>
  );
}
