import Link from "next/link";
import Img from "next/image";

import Styles from "./styles.module.scss";

import BrandImagem from "../../../assets/images/brand.svg";

type BrandImgProps = {
  href: string;
};

const BrandImg: React.FC<BrandImgProps> = ({ href }: BrandImgProps) => {
  return (
    <div className={`${Styles.brand__img}`}>
      <Link href={href}>
        <a>
          <Img src={BrandImagem} alt="Brand company" />
        </a>
      </Link>
    </div>
  );
};

export { BrandImg };
