import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import Styles from "./styles.module.scss";

import ImageEnviar from "../../assets/images/enviar.png";

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type: "submit" | "button" | "reset";
  size: "full" | "large" | "medium" | "small" | "full" | "link";
  isFontcolor:
    | "fontcolor__100"
    | "fontcolor__200"
    | "fontcolor__300"
    | "fontcolor__400"
    | "fontcolor__500";
  isIcon?: boolean;
  alt?: string;
  isbgcolor?:
    | "bgcolor__100"
    | "bgtcolor__200"
    | "bgcolor__300"
    | "bgcolor__400"
    | "bgcolor__500";
  hasError?: boolean;
  src?: string;
  href: string | null;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  size,
  isFontcolor,
  isbgcolor,
  isIcon,
  href,
  ...props
}: ButtonDefaultProps) => {
  const isFontColor = isFontcolor ?? "";
  const isBgColor = isbgcolor ?? "";
  const isHref = href ?? "";

  switch (size) {
    case "full":
      return (
        <div
          className={`${Styles.button__default} ${Styles.button__default_full}`}
        >
          <button
            onClick={props.onClick}
            type={props.type ? props.type : "button"}
            className={`${isBgColor} ${isFontColor}`}
          >
            {props.label ? props.label : "Button Full"}
            <span className={`${Styles.button__default_full_img}`}>
              {isIcon ? <Image src={ImageEnviar} alt={props.label} /> : ""}
            </span>
          </button>
        </div>
      );
    case "large":
      return (
        <div
          className={`
            ${Styles.button__default} 
            ${Styles.button__default_large}
          `}
        >
          <button
            onClick={props.onClick}
            type={props.type ? props.type : "button"}
            className={`${isBgColor} ${isFontColor}`}
          >
            {props.label ? props.label : "Button Large"}
            <span className={`${Styles.button__default_large_img}`}>
              {isIcon ? <Image src={ImageEnviar} alt={props.label} /> : ""}
            </span>
          </button>
        </div>
      );

    case "medium":
      return (
        <div
          className={`
              ${Styles.button__default} 
              ${Styles.button__default_medium} 
              ${isBgColor}
            `}
        >
          <button
            onClick={props.onClick}
            type={props.type ? props.type : "button"}
            className={`${isBgColor} ${isFontColor}`}
          >
            {props.label ? props.label : "Button Medium"}
            <span className={`${Styles.button__default_medium_img}`}>
              {isIcon ? <Image src={ImageEnviar} alt={props.label} /> : ""}
            </span>
          </button>
        </div>
      );

    case "small":
      return (
        <div
          className={`${Styles.button__default} ${Styles.button__default_small}`}
        >
          <button
            onClick={props.onClick}
            type={props.type ? props.type : "button"}
            className={`${isBgColor} ${isFontColor}`}
          >
            {props.label ? props.label : "Button Small"}
            <span className={`${Styles.button__default_small_img}`}>
              {isIcon ? <Image src={ImageEnviar} alt={props.label} /> : ""}
            </span>
          </button>
        </div>
      );

    case "link":
      return (
        <div
          className={`
            ${Styles.button__default} 
            ${Styles.button__default_link}
          `}
        >
          <Link href={isHref}>
            <a className={`${isBgColor} ${isFontColor}`}>
              {props.label ? props.label : "Button Default"}
              <span className={`{Styles.button__default_link_img}`}>
                {isIcon ? <Image src={ImageEnviar} alt={props.label} /> : ""}
              </span>
            </a>
          </Link>
        </div>
      );

    default:
      return (
        <div className={`${Styles.button__default}`}>
          <button
            onClick={props.onClick}
            type={props.type ? props.type : "button"}
            className={`${isBgColor} ${isFontColor}`}
          >
            {props.label ? props.label : "Button Default"}
            <span className={`${Styles.button__default_img}`}>
              {isIcon ? <Image src={ImageEnviar} alt={props.label} /> : ""}
            </span>
          </button>
        </div>
      );
  }
};

export { ButtonDefault };
