import { generateSlideShow } from "./generateSlideShow"

const slideShowProjects = document.querySelector(".slideShowProjects")
const prevBtnProjects = slideShowProjects.querySelector(".prevBtn")
const containerProjects = slideShowProjects.querySelector(".slideShow-container")
const nextBtnProjects = slideShowProjects.querySelector(".nextBtn")
const dotsProjects = slideShowProjects.querySelector(".dots")

generateSlideShow(prevBtnProjects, containerProjects, nextBtnProjects, dotsProjects)

const slideShowHobbies = document.querySelector(".slideShowHobbies")
const prevBtnHobbies = slideShowHobbies.querySelector(".prevBtn")
const containerHobbies = slideShowHobbies.querySelector(".slideShow-container")
const nextBtnHobbies = slideShowHobbies.querySelector(".nextBtn")
const dotsHobbies = slideShowHobbies.querySelector(".dots")

generateSlideShow(prevBtnHobbies, containerHobbies, nextBtnHobbies, dotsHobbies)