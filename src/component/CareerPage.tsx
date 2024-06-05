import React from 'react'
import classes from "./careerPage.module.scss"
import Header from './career-page/components/Header';
import Placements from './career-page/components/Placements';
import JobOpening from './career-page/components/Openings';
import Lifeat from './career-page/components/Lifeat';
import Faq from './career-page/Faq';
import HowTo from './career-page/components/HowTo';
const CareerPage = () => {
  return (
    <>
     <Header/>
            <Placements/>
            <JobOpening/>
            <HowTo/>
            <Lifeat/>
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