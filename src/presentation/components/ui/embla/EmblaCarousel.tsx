import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Product } from "@/infrastructure/interfaces/product";
import CrossUpCard from "../cards/CrossUpCard";

type PropType = {
  products: Product[];
  options?: EmblaOptionsType;
  currentProduct: Product;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { products, options, currentProduct } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((item: Product, key: number) => (
            <div className="embla__slide" key={key}>
              <div className="embla__slide__number">
                <CrossUpCard
                  product={item}
                  currentProductName={currentProduct.name}></CrossUpCard>
              </div>
            </div>
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

export default EmblaCarousel;
