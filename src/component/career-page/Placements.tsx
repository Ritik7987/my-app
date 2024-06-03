import { Container, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List, MediaQuery, Anchor } from '@mantine/core';
import classes from './placements.module.scss'

export default function Placements() {
    return (
        <>
        <Box className={`${classes.containerHeight} ${classes.root}`}>
        <Grid>
                        <Grid.Col span={12} sm={9} xs={12}>
                            <Box>
                                <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                                    Internships and Placements{" "}
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
                <Box className={`${classes.card}`}>
                    <Flex
                        direction={{ base: 'column', sm: 'row' }}
                        gap={{ base: 'sm', sm: 'lg' }}
                        justify={{ sm: 'center' }}
                    >
                        <Box className={classes.cardHeader}  >
                            <p className={classes.title}>Monthly Internship & Placement Drives
                            </p>
                            <p className={classes.description}>
                                At Flipr, we are committed to nurturing the next generation of tech talent.  
                            </p>
                        </Box>
                        <Box className={classes.cardHeader}>
                        <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1717068408/xkcerhfppyts0xxyj1se.png`} className={classes.imgInBox} alt='image'></Image>     
                            
                        </Box>
                    </Flex>

                </Box>






                <Box className={classes.card}>
                    <Flex
                        direction={{ base: 'column', sm: 'row' }}
                        gap={{ base: 'sm', sm: 'lg' }}
                        justify={{ sm: 'center' }}
                    >
                        <Box className={classes.cardHeader}  >
                        <p className={classes.title}>Monthly Internship & Placement Drives
                            </p>
                            <p className={classes.description}>
                                We conduct monthly drives to identify and recruit the best talent from colleges.  
                                 
                            </p>
                        </Box>
                        <Box className={classes.cardHeader}>
                        <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1717068408/drio4auojbhz6ywvsl21.png`} className={classes.imgInBox} alt='image'></Image>     
                        </Box>
                    </Flex>

                </Box>


            </Flex>
</Box>

        </>
    )
}