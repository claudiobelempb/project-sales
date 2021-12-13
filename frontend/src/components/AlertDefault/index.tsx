import { useState } from "react";
import Styles from "./styles.module.scss";

type AlertDefaultProps = {
  type: "success" | "info" | "warning" | "danger";
  message: string;
  field?: string;
};

export type AlertProps = {
  type: "success" | "info" | "warning" | "danger";
  message: string;
  field?: string;
};

const AlertDefault: React.FC<AlertDefaultProps> = ({
  type,
  message,
  field,
}: AlertDefaultProps) => {
  const [closeAlert, setCloseAlert] = useState<String>("");

  function stateAlert() {
    setTimeout(() => {
      // setCloseAlert(`${Styles.alert__default_close_alert}`);
    }, 5000);
    // setCloseAlert("`${Styles.alert__default_open_alert}`");
  }

  switch (type) {
    case "success":
      return (
        <>
          <div
            className={`${Styles.alert__default} ${Styles.alert__default_success} ${closeAlert}`}
          >
            <p>
              {field ? `${field}: ` : "Campo obrigátorio: "}
              {message ? message : "Alert Success"}
            </p>
            <button onClick={() => stateAlert()}>Fechar</button>
          </div>
        </>
      );

    case "info":
      return (
        <div
          className={`${Styles.alert__default} ${Styles.alert__default_info}`}
        >
          <p>
            {field ? `${field}: ` : "Campo obrigátorio: "}
            {message ? message : "Alert Info"}
          </p>
        </div>
      );

    case "danger":
      return (
        <div
          className={`${Styles.alert__default} ${Styles.alert__default_danger}`}
        >
          <p>
            {field ? `${field}: ` : "Campo obrigátorio: "}
            {message ? message : "Alert Danger"}
          </p>
        </div>
      );
    default: {
      return (
        <div
          className={`${Styles.alert__default} ${Styles.alert__default_success}`}
        >
          <p>
            {field ? `${field}: ` : "Campo obrigátorio: "}
            {message ? message : "Alert Default"}
          </p>
        </div>
      );
    }
  }
};

export { AlertDefault };
