import Link from "next/link";
import Image from "next/image";

import Styles from "./styles.module.scss";
import { ReactNode } from "react";

type NavItemProps = {
  label: string;
  alt: string;
  href: string;
  target?: "_blank" | "_self";
  src: string;
  isIcon: boolean;
  children: ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({
  label,
  alt,
  href,
  target,
  src,
  isIcon,
  children,
}: NavItemProps) => {
  return (
    <li className={`${Styles.nav__item}`}>
      <Link href={href}>
        <a target={"_self"}>
          {label} {isIcon ? <Image src={src} alt={alt} /> : false}
        </a>
      </Link>
    </li>
  );
};

export { NavItem };
