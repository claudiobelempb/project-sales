import { Dashboard } from "./LayoutDashboard";
import Styles from "./styles.module.scss";
type LayoutProps = {
  title?: string;
  heading?: string;
  type: "dashboard" | null;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  heading,
  type,
  children,
}: LayoutProps) => {
  switch (type) {
    case "dashboard":
      return (
        <Dashboard title={title ? title : "Title Default"}>
          <header>
            <h2>{heading}</h2>
          </header>
          {children}
        </Dashboard>
      );
    default:
      return <Dashboard title="Create Product">{children}</Dashboard>;
  }
};

export { Layout };
