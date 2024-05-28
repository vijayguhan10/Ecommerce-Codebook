import { useEffect, useState } from "react";
import { ProductCard } from "./../../../components/Elements/ProductCard";
import { Testimonials } from "./Testimonials";
import DynamicTitles from "../../../DynamicTitles";
export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  DynamicTitles("Home page");
  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const response = await fetch("http://localhost:8000/featured_products");
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    }
    fetchFeaturedProducts();
  }, [featuredProducts]);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Testimonials />
    </section>
  );
};
