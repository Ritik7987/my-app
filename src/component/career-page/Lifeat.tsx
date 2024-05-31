import { Container, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List, MediaQuery, Anchor, Text } from '@mantine/core';
import classes from './lifeat.module.scss'

export default function Lifeat(){
    return (
        <>
        <Container className={`${classes.root}`}>
        <Grid>
                        <Grid.Col span={12} sm={9} xs={12}>
                            <Box sx={{ marginTop: 14 }}>
                                <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                                    Life At Flipr
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
                <Box className={`${classes.card} ${classes.blackbox}`}>
                </Box>

                <Box className={`${classes.card}`}>
                    <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1716548539/imbjylcdhtbclusgrred.png`} height={40} width={50} radius='lg'></Image>
                <p className={classes.boxHeading}>Team Culture</p>
                     <p>We foster a collaborative environment where team members</p>
                </Box>

                <Box className={`${classes.card} ${classes.cyanbox}`}>
                     

                </Box>


                <Box className={`${classes.card}`}>
                <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1717068408/xkcerhfppyts0xxyj1se.png`} height={40} width={50} radius='lg'></Image>
                <p className={classes.boxHeading}>Learning & Development</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        

                </Box>






                 


            </Flex>
            <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
            >
                <Box className={`${classes.card}`}>
                     
                <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1717068408/xkcerhfppyts0xxyj1se.png`} height={40} width={50} radius='lg'></Image>
                <p className={classes.boxHeading}>Fun & Engagement:</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Box>

                <Box className={`${classes.card} ${classes.pinkbox}`}>
                     
                                        
                </Box>

                <Box className={`${classes.card}`}>
                <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1716548539/imbjylcdhtbclusgrred.png`} height={40} width={50} radius='lg'></Image>
                <p className={classes.boxHeading}>Innovative Work Environment</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </Box>


                <Box className={`${classes.card} ${classes.purplebox}`}>
                     

                </Box>






                 


            </Flex>
</Container>
        </>
    )
}