import { Badge } from "@chakra-ui/layout";
import { DocumentData } from "firebase/firestore";

const ProductBadge: React.FC<DocumentData> = (props) => {
  const { product } = props;

  return (
    <Badge
      borderRadius="md"
      fontSize={"0.7em"}
      fontWeight={"semibold"}
      variant="subtle"
      colorScheme={
        product?.category === "Cognac"
          ? "whatsapp"
          : product?.category === "Juice"
          ? "orange"
          : product?.category === "Whiskey"
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
          : product?.category === "Tequila"
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
