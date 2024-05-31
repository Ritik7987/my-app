import { Container, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List, MediaQuery, Anchor, Text } from '@mantine/core';
import classes from './howto2.module.scss'
 import box5 from '../../../public/box5.png'
import box4 from '../../../public/box4.png'
import box3 from '../../../public/box3.png'
import box2 from '../../../public/box2.png'
import box1 from '../../../public/box1.png'


export default function HowTo2(){
    return(
        <>
         <Box className={`${classes.root} ${classes.container}`} mb={50}>
        <Grid>
                        <Grid.Col span={12} sm={9} xs={12}>
                            <Box>
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
                mt={30}
            >
                 
                 <Box className={`${classes.card} ${classes.imgclass} ${classes.relative}`}>
                    <Image src={box1.src} height={100} width={100} radius='lg' alt='image'></Image>
                    <p className={`${classes.numberOver} ${classes.boxHeading}`}>01</p>
                <p className={classes.boxHeading}>Explore Open Position</p>
                </Box> 
                <Box className={`${classes.card}  ${classes.imgclass}`} ml={10}>
                    <Image src={box2.src} height={100} width={100} radius='lg' alt='image'></Image>
                    <p className={`${classes.numberOver} ${classes.boxHeading}`}>02</p>

                <p className={classes.boxHeading}>Prepare Your Application</p>
                </Box>
                <Box className={`${classes.card}  ${classes.imgclass}`} ml={10}>
                    <Image src={box3.src} height={100} width={100} radius='lg' alt='image'></Image>
                    <p className={`${classes.numberOver} ${classes.boxHeading}`}>03</p>

                <p className={classes.boxHeading}>Submit Your Application</p>
                </Box>
            </Flex>

            <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
                mt={30}
            >
                 
                 <Box className={`${classes.card} ${classes.imgclass} ${classes.relative}`}>
                    <Image src={box1.src} height={100} width={100} radius='lg' alt='image'></Image>
                    <p className={`${classes.numberOver} ${classes.boxHeading}`}>04</p>
                <p className={classes.boxHeading}>Explore Open Position</p>
                </Box> 
                <Box className={`${classes.card}  ${classes.imgclass}`} ml={10}>
                    <Image src={box2.src} height={100} width={100} radius='lg' alt='image'></Image>
                    <p className={`${classes.numberOver} ${classes.boxHeading}`}>05</p>

                <p className={classes.boxHeading}>Prepare Your Application</p>
                </Box>
            </Flex>
             
</Box>
        </>
    )
}