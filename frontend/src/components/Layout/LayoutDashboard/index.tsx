import Head from "next/head";
import { BrandDefault } from "../../BrandDefault";
import { NavDefault } from "../../NavDefault";
import Styles from "./styles.module.scss";

type DashboardProps = {
  title?: string;
  children?: React.ReactNode;
  isAlert?: boolean;
};

const Dashboard: React.FC<DashboardProps> = ({
  children,
  title,
  isAlert,
}: DashboardProps) => {
  return (
    <div className={`${Styles.layout__container}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      {/* <header className={`${Styles.header__default}`}>
        <NavDefault type="nav-hozontal" />
      </header> */}

      <aside className={`${Styles.aside__default}`}>
        <BrandDefault
          href="/dashboard"
          type={"brand-text"}
          title="Sales Control"
        />
        <NavDefault type="nav-vertical" />

        <div className={`${Styles.nav__default}`}>Nav</div>
      </aside>

      <main className={`${Styles.main__default}`}>{children}</main>

      <footer className={`${Styles.footer__default}`}>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
export { Dashboard };
