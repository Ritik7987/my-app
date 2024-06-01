import { Container, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List, MediaQuery, Anchor, Text } from '@mantine/core';
import classes from './howto.module.scss'
import box5 from '../../../public/box5.png'
import box4 from '../../../public/box4.png'
import box3 from '../../../public/box3.png'
import box2 from '../../../public/box2.png'
import box1 from '../../../public/box1.png'


export default function HowTo() {
    return (
        <>
            <Box className={`${classes.root} ${classes.container}`}>
                <Grid>
                    <Grid.Col span={12} sm={9} xs={12}>
                        <Box sx={{ marginTop: 14 }}>
                            <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                                How To Apply
                                <MediaQuery
                                    query="(max-width:767px)"
                                    styles={{
                                        display: "none",
                                    }}
                                >
                                    <br />
                                </MediaQuery>
                            </h1>

                        </Box>


                    </Grid.Col>

                </Grid>
                <Flex
                    direction={{ base: 'column', sm: 'row' }}
                    gap={{ base: 'sm', sm: 'lg' }}
                    justify={{ sm: 'center' }}
                >




                    <Box className={`${classes.card} ${classes.relative} ${classes.cardcontainer}`}>
                        <div className={classes.front}>
                            <Image className={`${classes.imgclass}`} src={box1.src} height={100} width={100} radius='lg' alt='image'></Image>
                            <p className={`${classes.numberBox} ${classes.boxHeading}`}>01</p>
                            <p className={classes.boxHeading}>Check Eligibility</p>
                        </div>
                        <div className={`${classes.back}`}>
                            Make sure you meet the requirements for the positions you're interested in.
                        </div>
                    </Box>
                    <Box className={`${classes.card} ${classes.cardcontainer}`}>


                        <div className={classes.front}>
                            <Image className={`${classes.imgclass}`} src={box2.src} height={100} width={100} radius='lg' alt='image'></Image>
                            <p className={`${classes.numberBox} ${classes.boxHeading}`}>02</p>
                            <p className={classes.boxHeading}>Register for the Drive</p>
                        </div>
                        <div className={classes.back}>
                            Sign up for the upcoming drive using the registration link.
                        </div>
                    </Box>

                     <Box className={`${classes.card} ${classes.cardcontainer}`}>
                        <div className={classes.front}>
                        <Image className={`${classes.imgclass}`} src={box3.src} height={100} width={100} radius='lg' alt='image'></Image>
                        <p className={`${classes.numberBox} ${classes.boxHeading}`}>03</p>
                        <p className={classes.boxHeading}>Complete the Assessment Task</p>
                        </div>
                        <div className={classes.back}>
                        Code and submit the assigned task. Review Task Results: Await feedback on your assessment task.
                        </div>
                    </Box>
                    <Box className={`${classes.card} ${classes.cardcontainer}`}>
                        
                        <div className={`${classes.front} ${classes.imgclass}`}>
                        <Image className={`${classes.imgclass}`} src={box4.src} height={100} width={100} radius='lg' alt='image'></Image>
                        <p className={`${classes.numberBox} ${classes.boxHeading}`}>04</p>
                        <p className={classes.boxHeading}>Attend the Drive:</p>
                        </div>
                        <div className={classes.back}>
                         Participate in the scheduled assessments and interviews.
                        </div>
                    </Box>
                    <Box className={`${classes.card} ${classes.cardcontainer}`}>
                        <div className={classes.front}>
                        <Image className={`${classes.imgclass}`} src={box5.src} height={100} width={100} radius='lg' alt='image'></Image>
                        <p className={`${classes.numberBox} ${classes.boxHeading}`}>05</p>
                        <p className={classes.boxHeading}>Receive an Offer:</p>
                        </div>
                        <div className={classes.back}>
                        If you meet our criteria, you'll receive an offer to join our internship or full-time program.
                        </div>
                    </Box>







                </Flex>

            </Box>
        </>
    )
}