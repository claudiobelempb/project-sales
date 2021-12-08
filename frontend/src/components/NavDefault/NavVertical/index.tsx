import { ReactNode } from "react";
import Styles from "./styles.module.scss";

type NavVerticalProps = {
  // label: string;
  // href: string;
  // target?: "_blank" | "_self";
  // icon: string;
  // type: "on-map" | "off-map";
  children: ReactNode;
};

const NavVertical: React.FC<NavVerticalProps> = ({
  children,
}: NavVerticalProps) => {
  return (
    <nav className={`${Styles.nav__vertical}`}>
      <div className={`${Styles.nav__vertical_title}`}>
        <h3>Menu</h3>
      </div>
      <ul>{children}</ul>
    </nav>
  );
};

export { NavVertical };
