import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
          deleniti pariatur omnis odit nihil voluptatibus enim. Laborum incidunt
          eum impedit rerum! Nulla cumque fugiat aperiam aspernatur provident
          tenetur, eum dolorem?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
          deleniti pariatur omnis odit nihil voluptatibus enim. Laborum incidunt
          eum impedit rerum! Nulla cumque fugiat aperiam aspernatur provident
          tenetur, eum dolorem?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
