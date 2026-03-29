import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const limit = 10;

  async function fetchData() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${currPage * limit}`,
      );
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  const totalProducts = 194;
  const totalPages = Math.ceil(totalProducts / limit);

  useEffect(() => {
    fetchData();
  }, [currPage]);

  return (
    <div>
      <h1>Pagination</h1>

      <div>
        <button
          disabled={currPage === 0}
          onClick={() => setCurrPage((prev) => prev - 1)}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            className={`${currPage === idx ? "active-page" : ""}`}
            onClick={() => setCurrPage(idx)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          disabled={currPage === totalPages - 1}
          onClick={() => setCurrPage((prev) => prev + 1)}
        >
          {">"}
        </button>
      </div>

      <div className="card-container">
        {products.length ? (
          products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
            />
          ))
        ) : (
          <p>No products</p>
        )}
      </div>
    </div>
  );
};

export default App;

function ProductCard({ title, thumbnail, price }) {
  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>$ {price}</p>
    </div>
  );
}
