import EmblaCarousel from "embla-carousel";
import { generateDots } from "./generateDots";


export function generateSlideShow(prevBtn, container, nextBtn, dots) {
  const options = {
  loop: true,
  breakpoints: {
    "(min-width: 1024px)": { watchDrag: false },
  },
};

const emblaApi = EmblaCarousel(container, options);

  prevBtn.addEventListener("click", () => emblaApi.scrollPrev());
  nextBtn.addEventListener("click", () => emblaApi.scrollNext());

  generateDots(container, dots, emblaApi)

  const dotNodes = Array.from(dots.querySelectorAll('.dot'))

   const toggleDotBtnsActive = () => {
     const previous = emblaApi.previousScrollSnap()
    const selected = emblaApi.selectedScrollSnap()
    dotNodes[previous].classList.remove('dot-selected')
    dotNodes[selected].classList.add('dot-selected')
  }

  emblaApi
    .on('init', toggleDotBtnsActive)
    .on('reInit', toggleDotBtnsActive)
    .on('select', toggleDotBtnsActive)

}