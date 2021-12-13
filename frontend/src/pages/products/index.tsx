import Link from "next/link";
import { ButtonDefault } from "../../components/ButtonDefault";
import { Layout } from "../../components/Layout";

const Products: React.FC = () => {
  return (
    <Layout
      heading="Lista de Produtos"
      title="Lista produtos"
      type={"dashboard"}
    >
      <ButtonDefault
        size={"link"}
        label={"Cadastrar"}
        href={"/products/create"}
        isbgcolor="bgcolor__500"
        type="button"
        isFontcolor="fontcolor__100"
      />

      <section>
        <h1>Section</h1>
      </section>
    </Layout>
  );
};

export default Products;
