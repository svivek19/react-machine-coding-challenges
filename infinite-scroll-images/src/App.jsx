import React, { useEffect, useRef, useState } from "react";

const LIMIT = 4;

const App = () => {
  const ref = useRef();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  async function fetchImages() {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}`,
    );

    const data = await res.json();

    setProducts((prev) => [...prev, ...data.products]);
    setLoading(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div>
      <div>
        {products.map((item, i) => (
          <img key={i} src={item.images[0]} alt={item.title} />
        ))}
      </div>
      <div ref={ref}>{loading && <p>Loading...</p>}</div>
    </div>
  );
};

export default App;
