import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard.jsx';
import { API } from '../../api/axiosInstance';

const BestsellerProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get('/products');

        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error('Ürünler backendden alınamadı:', error);
      }
    };

    fetchProducts();
  }, []);

  // Backend'den gelen ürünlerin ilk 12 tanesi
  const productsToShow = products.slice(0, 12);

  return (
    <section>
      {/* Üst Başlık Grubu - Fontlar Büyütüldü */}

      <div className="text-center mb-12">
        <p>Featured Products</p>

        <h2>Bestseller Products</h2>

        <p>
          Explore our most trending pieces selected just for you.
        </p>
      </div>

      {/* Ürün Izgarası */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-20">
        {productsToShow.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="flex justify-center transition-all duration-300 transform hover:-translate-y-2"
          >
            <ProductCard
              img={p.image}
              title={p.name}
              department={p.category}
              oldPrice={p.oldPrice || ''}
              newPrice={`$${p.price}`}
              rating={p.rating}
              reviews={p.reviews}
              showRating={true}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestsellerProducts;