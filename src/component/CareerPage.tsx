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
import HowTo from './career-page/HowTo';
import HowTo2 from './career-page/Howto2';
const CareerPage = () => {
  return (
    <>
     <Header/>
            <Placements/>
            <JobOpening/>
            <HowTo2/>
            <Lifeat/>
            <HowTo/>
            <div style={{textAlign:"center"}} className={`${classes.stripLine}`}>
              <div className={classes.textWrapper}>

              <h2 className={ `${classes.gradientStyle}`}>We look forward to welcoming you to the Flipr team! For any questions, please contact us at devops@flipr.ai
              </h2>
              </div>
            </div>
            <Faq/>
    </>
  )
}

export default CareerPage