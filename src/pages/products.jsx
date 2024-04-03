import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useState } from "react";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 1000000,
    image: "https://picsum.photos/300/200/?random/1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque deleniti pariatur omnis odit nihil voluptatibus enim. Laborum incidunt eum impedit rerum! Nulla cumque fugiat aperiam aspernatur provident tenetur, eum dolorem?",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: 500000,
    image: "https://picsum.photos/300/200/?random/2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
  },
  {
    id: 3,
    title: "Sepatu Ada Dong",
    price: 2000000,
    image: "https://picsum.photos/300/200/?random/3",
    description: "Ini adalah sepatu yang sangat bagus sekali!",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.some((item) => item.id === id)) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div>
        <h1 className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
          {email}
          <Button classname="ml-5 bg-black" onClick={handleLogout}>
            Logout
          </Button>
        </h1>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5 mb-2">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 flex justify-center mb-5">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductPage;
