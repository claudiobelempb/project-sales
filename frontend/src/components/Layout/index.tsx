import { AlertDefault, AlertProps } from "../AlertDefault";
import { Dashboard } from "./LayoutDashboard";
import Styles from "./styles.module.scss";
type LayoutProps = {
  title?: string;
  heading?: string;
  type: "dashboard" | null;
  children?: React.ReactNode;
  alerts?: Array<AlertProps>;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  heading,
  type,
  children,
  alerts,
}: LayoutProps) => {
  switch (type) {
    case "dashboard":
      return (
        <Dashboard title={title ? title : "Title Default"}>
          {alerts &&
            alerts.map((alert) => {
              return <AlertDefault key={alert.type} {...alert} />;
            })}
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
