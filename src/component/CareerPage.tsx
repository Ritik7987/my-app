import Image from 'next/image'
import React from 'react'
import img from "../../public/navbar.jpeg"
import image from "../../public/header.png"
import { FaArrowRightLong } from "react-icons/fa6";
import classes from "./careerPage.module.scss"
import Header from './career-page/Header';
import Placements from './career-page/Placements';
import JobOpening from './career-page/Openings';
import Lifeat from './career-page/Lifeat';
import Header2 from './career-page/c2/Header';
import HowTo from './career-page/HowTo';
const CareerPage = () => {
  return (
    <>
     <Header/>
            <Placements/>
            <JobOpening/>
            <Lifeat/>
            <HowTo/>
    </>
  )
}

export default CareerPage