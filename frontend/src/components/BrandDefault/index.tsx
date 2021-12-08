import { BrandImg } from "./BrandImg";
import { BrandText } from "./BrandText";

type BrandDefaultProps = {
  type: "brand-img" | "brand-text" | null;
  title?: string;
  href: string;
};

const BrandDefault: React.FC<BrandDefaultProps> = ({
  ...props
}: BrandDefaultProps) => {
  switch (props.type) {
    case "brand-img":
      return <BrandImg href={props.href} />;
    case "brand-text":
      return (
        <BrandText
          title={props.title ? props.title : "Brand Default"}
          href={props.href ? props.href : "/"}
        />
      );
    default:
      return (
        <BrandText
          href={props.href ? props.href : "/"}
          title={props.title ? props.title : "Brand Default"}
        />
      );
  }
};

export { BrandDefault };
