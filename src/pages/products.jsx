import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "https://picsum.photos/300/200/?random/1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque deleniti pariatur omnis odit nihil voluptatibus enim. Laborum incidunt eum impedit rerum! Nulla cumque fugiat aperiam aspernatur provident tenetur, eum dolorem?",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: "Rp 500.000",
    image: "https://picsum.photos/300/200/?random/2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
  },
  {
    id: 3,
    title: "Sepatu Ada Dong",
    price: "Rp 2.000.000",
    image: "https://picsum.photos/300/200/?random/3",
    description: "Ini adalah sepatu yang sangat bagus sekali!",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div>
        <h1 className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
          {email}
          <Button classname="ml-5 bg-black" onClick={handleLogout}>
            Logout
          </Button>
        </h1>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
