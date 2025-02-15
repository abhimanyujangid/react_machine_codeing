import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface ProductsData {
  products: Product[];
}

function Products() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ProductsData | null>(null);
  const [error, setError] = useState<string>("");


  // Render the fetched data
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((d: ProductsData) => {
          setData(d);
          setIsLoading(false);
        })
        .catch((err: Error) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  if (isLoading) {
    return <h4>Fetching Products...</h4>;
  }

  if (error) {
    return <h4>Error: {error}</h4>;
  }

  return (
    <div>
      {data?.products?.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <strong>Price: ${p.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default Products;

