import ProductDetails from "./ProductDetails";
import { Container } from "../Container";

const data = {
  createdAt: "2023-02-27T18:03:47.286Z",
  name: "Refined Fresh Hat",
  material: "Bronze",
  price: "473.00",
  description:
    "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  image: "https://loremflickr.com/640/480/abstract",
  id: "20",
};

export const Default = () => {
  return (
    <Container>
      <ProductDetails
        name={data.name}
        description={data.description}
        price={data.price}
        image={data.image}
        productId={data.id}
        material={data.material}
      />
    </Container>
  );
};
