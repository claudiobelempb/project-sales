import { useState } from "react";
import { ButtonDefault } from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { Layout } from "../../../components/Layout";

import { useProductService } from "../../../app/services";
import { Product } from "../../../app/models/product";
import { RANDOM_NUMBER, FORMAT_DATE } from "../../../utils/utils";

const CreateProduct: React.FC = () => {
  const service = useProductService();

  const random_number = RANDOM_NUMBER(1234567, 100, 9);

  const [id, setId] = useState<string>("");
  const [sku, setSku] = useState<number>(random_number);
  const [price, setPrice] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");
  // console.log(createdAt);

  const createProduct = () => {
    const product: Product = {
      sku,
      price,
      name,
      description,
    };

    setSku(random_number);
    setPrice(0);
    setName("");
    setDescription("");
    service.create(product).then((resp) => {
      setId(resp.id ? resp.id : ""),
        setCreatedAt(resp.createdAt ? resp.createdAt : "");
    });
    console.log(product);
  };

  return (
    <Layout
      heading={id ? "Atualizar Produtos" : "Cadastro Produtos"}
      title={id ? "Atualizar Produtos" : "Cadastro Produtos"}
      type={"dashboard"}
    >
      <section>
        <form className={`form__Default`}>
          {id && (
            <div className="input__default_group">
              <InputDefault
                type={"text"}
                label="ID"
                id="id"
                value={id}
                disabled
              />
              <InputDefault
                type={"text"}
                label="Data de Cadastro"
                id="createdAt"
                value={FORMAT_DATE(createdAt)}
                disabled
              />
            </div>
          )}
          <div className="input__default_group">
            <InputDefault
              type={"text"}
              placeholder="SKU"
              label="SKU *"
              id="sku"
              value={sku}
              disabled
              // onChange={(e) => setSku(e.target.value)}
            />
            <InputDefault
              type={"number"}
              placeholder="Preço"
              label="Preço *"
              id="preco"
              value={id ? price : ""}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>
          <InputDefault
            type={"text"}
            placeholder="Nome"
            label="Nome *"
            id="nome"
            value={id ? name : ""}
            onChange={(e) => setName(e.target.value)}
          />

          <InputDefault
            type={"textarea"}
            placeholder="Descrição"
            label="Descrição *"
            id="descricao"
            value={id ? description : ""}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="button__default_group">
            <ButtonDefault
              isbgcolor="bgcolor__300"
              isFontcolor="fontcolor__200"
              onClick={createProduct}
              type="button"
              label={id ? "Atualizar" : "Salvar"}
              isIcon
              size="small"
              href={null}
            />
            <ButtonDefault
              isbgcolor="bgcolor__500"
              isFontcolor="fontcolor__100"
              onClick={() => console.log("Button Click")}
              type="button"
              label="Voltar"
              isIcon
              size="link"
              href="/products"
            />
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default CreateProduct;
