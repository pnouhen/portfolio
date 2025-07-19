export function generateDots(container, dots) {
  const slides = container.querySelectorAll(".slide");
  
  const arrayDot = [...Array(slides.length)];
  arrayDot.map((_, i) => {
    const li = document.createElement("li");
    li.classList.add("dot");

    dots.appendChild(li);
  });
}
