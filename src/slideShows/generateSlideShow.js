import EmblaCarousel from "embla-carousel";
import { generateDots } from "./generateDots";


export function generateSlideShow(prevBtn, container, nextBtn, dots) {
  const emblaApi = EmblaCarousel(container, { loop: true });

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