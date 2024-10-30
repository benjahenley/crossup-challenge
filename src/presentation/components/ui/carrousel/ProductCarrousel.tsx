"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import { Product } from "@/infrastructure/interfaces/product";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../embla/EmblaCarouselArrowButtons";
import { OPTIONS } from "@/infrastructure/config/embla";
import { PageTitle } from "../Texts";
import HomeProduct from "../cards/HomeProduct";

const ProductCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/a69824ca4c40ac8e783d"
        );
        setProducts(response.data.map((item: any) => item.shooter));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="embla relative px-4 lg:px-10  bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="px-2 py-5 text-center">
        <PageTitle className="uppercase py-4">Productos</PageTitle>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container" style={{ paddingTop: 0 }}>
          {products.map((product, key) => (
            <HomeProduct product={product} key={key}></HomeProduct>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
