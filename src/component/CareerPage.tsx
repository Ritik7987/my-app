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
import Faq from './career-page/Faq';
const CareerPage = () => {
  return (
    <>
     <Header/>
            <Placements/>
            <JobOpening/>
            <Lifeat/>

            <Faq/>
    </>
  )
}

export default CareerPage