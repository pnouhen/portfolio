import { generateSlideShow } from "./generateSlideShow"

const slideShowHobbies = document.querySelector(".slideShowHobbies")
const prevBtn = slideShowHobbies.querySelector(".prevBtn")
const container = slideShowHobbies.querySelector(".slideShow-container")
const nextBtn = slideShowHobbies.querySelector(".nextBtn")
const dots = slideShowHobbies.querySelector(".dots")

generateSlideShow(prevBtn, container, nextBtn, dots)