import { ReactNode } from "react";

import Styles from "./styles.module.scss";

type NavHorizontalProps = {
  children: ReactNode;
};

const NavHorizontal: React.FC<NavHorizontalProps> = ({
  children,
}: NavHorizontalProps) => {
  return (
    <nav className={`${Styles.nav__horizontal}`}>
      <ul>{children}</ul>
    </nav>
  );
};

export { NavHorizontal };
