import { Container, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List, MediaQuery, Anchor, Text } from '@mantine/core';
import classes from './howto2.module.scss'
import { Howtoapply } from '../utils/jobopeningsdata';
 

export default function HowTo2(){
    return(
        <>
         <Box className={`${classes.root} ${classes.containerHeight}`} mb={50}>
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
                 

{Howtoapply.map((data,index)=>(
    <Box key={index} className={`${classes.card} ${classes.imgclass} ${classes.relative}`}>
                    <Image src={data.image.src} height={100} width={100} radius='lg' alt='image'></Image>
                    <p className={`${classes.numberOver} ${classes.boxHeading}`}>0{data.id}</p>
                <p className={classes.boxHeading}>{data.heading}</p>
                <span>{data.description}
</span>
                </Box> 
))}
            </Flex>
             
</Box>
        </>
    )
}