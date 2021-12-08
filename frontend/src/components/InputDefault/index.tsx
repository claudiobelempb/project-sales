import { InputHTMLAttributes } from "react";
import Styles from "./styles.module.scss";

interface ImputDefaultProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id: string;
  label: string;
  type: "text" | "number" | "textarea" | "full" | "search";
  iscolor?: boolean;
  icon?: boolean;
  isbgcolor?: string;
  hasError?: boolean;
}

const InputDefault: React.FC<ImputDefaultProps> = ({
  id,
  label,
  isbgcolor,
  iscolor,

  ...props
}: ImputDefaultProps) => {
  const isColor = iscolor ?? "color_black-500";
  const isBgColor = isbgcolor ?? "#c3c3c3";
  const isId = id ?? "input" + id;

  switch (props.type) {
    case "text":
      return (
        <div className={`${Styles.input__default}`}>
          <label htmlFor="">{label}</label>
          <input
            onChange={props.onChange}
            placeholder={props.placeholder ?? ""}
            alt={props.alt ?? "Text alternative"}
            type={"text"}
            id={isId}
            value={props.value}
            disabled={props.disabled}
          />
        </div>
      );
    case "number":
      return (
        <div className={`${Styles.input__default}`}>
          <label htmlFor={label}>{label}</label>
          <input
            onChange={props.onChange}
            placeholder={props.placeholder ?? ""}
            alt={props.alt ?? "Text alternative"}
            type={"number"}
            id={isId}
            disabled={props.disabled}
          />
        </div>
      );

    case "textarea":
      return (
        <div className={`${Styles.input__default}`}>
          <label htmlFor={label}>{label}</label>
          <textarea
            onChange={props.onChange}
            placeholder={props.placeholder ?? ""}
            rows={5}
            cols={33}
            id={isId}
            disabled={props.disabled}
          ></textarea>
        </div>
      );

    default:
      return (
        <>
          <label htmlFor={label}>{label}</label>
          <input
            onChange={props.onChange}
            placeholder={props.placeholder ?? ""}
            alt={props.alt ?? "Text alternative"}
            type={"text"}
            id={isId}
            disabled={props.disabled}
          />
        </>
      );
  }
};

export { InputDefault };
