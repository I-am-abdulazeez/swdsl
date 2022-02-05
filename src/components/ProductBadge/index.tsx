import { Badge } from "@chakra-ui/layout";
import { DocumentData } from "firebase/firestore";

const ProductBadge = ({ product }: DocumentData): JSX.Element => {
  return (
    <Badge
      borderRadius="md"
      colorScheme={
        product?.category === "Cognac"
          ? "whatsapp"
          : product?.category === "Juice"
          ? "orange"
          : product?.category === "Whisky"
          ? "purple"
          : product?.category === "Non alcoholic"
          ? "teal"
          : product?.category === "Red wine"
          ? "red"
          : product?.category === "Champagne"
          ? "cyan"
          : product?.category === "Rum"
          ? "yellow"
          : product?.category === "Irish cream"
          ? "twitter"
          : product?.category === "White wine"
          ? "gray"
          : product?.category === "Gin"
          ? "green"
          : product?.category === "Sparkling wine"
          ? "primary"
          : product?.category === "Brandy"
          ? "secondary"
          : product?.category === "Others"
          ? "telegram"
          : undefined
      }
    >
      {product?.category}
    </Badge>
  );
};

export default ProductBadge;
