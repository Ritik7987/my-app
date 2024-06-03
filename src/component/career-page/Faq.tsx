"use client"
import { Container, Flex } from '@mantine/core'
import React, { useState } from 'react'
import classes from "./faq.module.scss"
import img from "../../../public/faq_image 1.png"
import Image from 'next/image'
import { faqItems } from '../utils/faqSection'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from 'react-icons/fa6'

const Faq = () => {
    const [showAns, setShowAns] = useState(Array(faqItems.length).fill(false))

    const toggleAnswer = (index:number) => {
        setShowAns(prevState => {
            const newState = [...prevState]
            newState[index] = !newState[index]
            return newState
        })
    }
    return (
    <Container size={'xl'} className={classes.mainContainer}>
        <div>
            <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                Frequently Asked Questions
            </h1>
        </div>
        <div>
            <Flex className={classes.mainsection}>
                    <Image
                        src={img}
                        alt='faq_image'
                        className={classes.imagefaq}
                    />
                    <Flex direction={'column'} style={{width:"100%",padding:"15px",gap:"1rem"}}>
    {faqItems.map((item, index) => (
        <div key={index} className={classes.faqSection}>
            <div className={classes.ques} style={{backgroundColor:`${showAns[index] ? "#ECECEC" : "#F4DED6"}`, display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} onClick={() => toggleAnswer(index)}>
                    <p>{item.ques}</p>
                    <div style={{display:"flex"}}>
                        {showAns[index] ? (
                            <FaMinus style={{cursor:"pointer"}}/>
                        ) : (
                            <FaPlus style={{cursor:"pointer"}}/>
                        )}
                    </div>
                </div>
                <div className={`${classes.answer} ${showAns[index] ? classes.show : classes.hide}`}>
                    <p>{item.ans}</p>
                </div>
            </div>
        </div>
    ))}
</Flex>

                </Flex>
        </div>
    </Container>
  )
}

export default Faq