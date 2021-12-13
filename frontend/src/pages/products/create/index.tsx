import { useState } from "react";
import { ButtonDefault } from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { Layout } from "../../../components/Layout";

import { useProductService } from "../../../app/services";
import { Product } from "../../../app/models/product";
import { RANDOM_NUMBER, FORMAT_DATE } from "../../../utils/utils";
import { AlertProps } from "../../../components/AlertDefault";
import { ValidationCreateSchema } from "./ValidationCreateSchema";

const CreateProduct: React.FC = () => {
  const service = useProductService();

  const random_number = RANDOM_NUMBER(1234567, 100, 9);

  const [id, setId] = useState<string>("");
  const [sku, setSku] = useState<number>(random_number);
  const [price, setPrice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");
  const [alert, setAlert] = useState<Array<AlertProps>>([]);

  const createProduct = () => {
    const product: Product = {
      id,
      sku,
      price,
      name,
      description,
    };

    ValidationCreateSchema.validate(product)
      .then((obj) => {
        if (id) {
          service.update(product).then((resp) => {
            setAlert([
              {
                field: "Produto",
                message: "atualizado com sucesso",
                type: "success",
              },
            ]);
          });
        } else {
          service.create(product).then((resp) => {
            setId(resp.id ? resp.id : ""),
              setCreatedAt(resp.createdAt ? resp.createdAt : "");
          });
          setAlert([
            {
              field: "Produto",
              message: "cadastrado com sucesso",
              type: "success",
            },
          ]);
          // setSku(random_number);
          // setPrice(0);
          // setName("");
          // setDescription("");
        }
      })
      .catch((err) => {
        const field = err.path;
        const message = err.message;

        setAlert([
          {
            field,
            message,
            type: "danger",
          },
        ]);
        console.log(JSON.parse(JSON.stringify(err)));
      });
  };

  return (
    <Layout
      heading={id ? "Atualizar Produtos" : "Cadastro Produtos"}
      title={id ? "Atualizar Produtos" : "Cadastro Produtos"}
      type={"dashboard"}
      alerts={alert}
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
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              iscurrency
            />
          </div>
          <InputDefault
            type={"text"}
            placeholder="Nome"
            label="Nome *"
            id="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputDefault
            type={"textarea"}
            placeholder="Descrição"
            label="Descrição *"
            id="descricao"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* <AlertDefault message="Produto inválido" type="danger" field="Name" /> */}

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
