import Link from "next/link";
import Styles from "./styles.module.scss";

type BrandTextProps = {
  href: string;
  title: string;
};

const BrandText: React.FC<BrandTextProps> = ({
  href,
  title,
}: BrandTextProps) => {
  return (
    <div className={`${Styles.brand__text}`}>
      <Link href={href}>
        <a>
          <h1>{title}</h1>
        </a>
      </Link>
    </div>
  );
};

export { BrandText };
