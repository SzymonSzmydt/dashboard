import link from './styles/link.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type ImgProp = {
  src: string;
  width: number;
  height: number;
};

type Props = {
  image: ImgProp;
  name: string;
  path: string;
};

export function LinkBox({ name, path, image }: Props) {
  const { pathname } = useRouter();

  return pathname !== path ? (
    <Link href={path} className={link.link}>
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
