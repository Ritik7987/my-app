import { Container, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List, MediaQuery, Anchor } from '@mantine/core';
import classes from './placements.module.scss'

export default function Placements() {
    return (
        <>
        <Box className={`${classes.containerHeight} ${classes.root}`}>
        <Grid>
                        <Grid.Col span={12} sm={12} xs={12}>
                            <Box>
                                <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                                Conduction of Internship and Placement Drives Monthly{" "}
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
                                <p className={classes.text} style={{color:"black"}}>At Flipr, we are committed to nurturing young talent and providing them with the opportunities they need to grow. 
                                </p>


                        </Grid.Col>

                    </Grid>
            <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
            >
                <Box className={`${classes.card}`}>
                    <Flex
                        className={classes.cardBox}
                        direction={'row'}
                        gap={{ base: 'sm', sm: 'lg' }}
                        justify={{ sm: 'center' }}
                    >
                        <Box className={classes.cardHeader}  >
                            <p className={classes.description}>
                            Every month, we conduct internship and placement drives, offering students and recent graduates the chance to gain hands-on experience in a fast-paced, innovative environment.  
                            </p>
                        </Box>
                        <Box className={classes.cardImg}>
                        <Image src={`https://image.freepik.com/free-vector/illustrated-woman-being-intern-company_23-2148726151.jpg`} className={classes.imgInBox} alt='image'></Image>     
                            
                        </Box>
                    </Flex>

                </Box>






                <Box className={classes.card}>
                    <Flex
                        className={classes.cardBox}
                        direction={'row'}
                        gap={{ base: 'sm', sm: 'lg' }}
                        justify={{ sm: 'center' }}
                    >
                        <Box className={classes.cardHeader}   >
                            <p className={classes.description}>
                            Our internship programs are designed to provide real-world experience, mentorship from industry experts, and the potential for full-time employment upon completion. 
                                 
                            </p>
                        </Box>
                        <Box className={classes.cardImg}>
                        <Image src={`https://static.vecteezy.com/system/resources/previews/002/111/176/large_2x/multitasking-project-manager-concept-vector.jpg`} className={classes.imgInBox} alt='image'></Image>     
                        </Box>
                    </Flex>

                </Box>


            </Flex>
</Box>

        </>
    )
}