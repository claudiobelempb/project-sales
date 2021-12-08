import Link from "next/link";

import { NavHorizontal } from "./NavHorizontal";
import { NavVertical } from "./NavVertical";
import { NavItem } from "./NavItem";
const EnviarImage =
  "https://www.projetoacbr.com.br/forum/uploads/monthly_2017_10/WPF_ListBox3.jpg.96511cbc145fc8c844d8187f6f68926a.jpg";

type NavDefaultProps = {
  type: "nav-vertical" | "nav-hozontal";
};

const NavDefault: React.FC<NavDefaultProps> = ({ type }: NavDefaultProps) => {
  switch (type) {
    case "nav-hozontal":
      return (
        <NavHorizontal>
          <NavItem label="Home" alt="Home" />
          <li>
            <Link href={"/"}>
              <a target={"_self"}>Products</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a target={"_self"}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a target={"_self"}>Home</a>
            </Link>
          </li>
        </NavHorizontal>
      );
    case "nav-vertical":
      return (
        <NavVertical>
          <NavItem href={"/products"} label="Products" alt="Products" />
          <li>
            <Link href={"/"}>
              <a target={"_self"}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a target={"_self"}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a target={"_self"}>Home</a>
            </Link>
          </li>
        </NavVertical>
      );
    default:
  }
};

export { NavDefault };
