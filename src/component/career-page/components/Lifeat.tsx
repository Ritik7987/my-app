import { Container, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List, MediaQuery, Anchor, Text } from '@mantine/core';
import classes from '../css/lifeat.module.scss'

export default function Lifeat() {

    return (
        <>
            <Box className={`${classes.root} ${classes.containerHeight}`}>




                <Grid>
                    <Grid.Col span={12} sm={9} xs={12}>
                        <Box sx={{ marginTop: 14 }}>
                            <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                                Life At Flipr
                            </h1>
                            {/* <p className={classes.para}>Life at Flipr is all about balance, growth, and innovation. We believe in fostering a positive and inclusive work environment where employees can thrive. Our offices are designed to encourage collaboration and creativity. We offer flexible working arrangements, wellness programs, and regular team-building activities to ensure our employees stay motivated and engaged. At Flipr, your professional development is a priority, and we provide ample opportunities for learning and career advancement.
</p> */}
                        </Box>
                    </Grid.Col>
                </Grid>
                <Flex
                    direction={{ base: 'column', sm: 'row' }}
                    gap={{ base: 'sm', sm: 'lg' }}
                    justify={{ sm: 'center' }}
                >
                    <Box className={`${classes.card} ${classes.blackbox} ${classes.cardHover}`}>
                    </Box>
                    <Box className={`${classes.card}`}>
                        <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1716548539/imbjylcdhtbclusgrred.png`} height={40} width={50} radius='lg' alt='image'></Image>
                        <p className={classes.boxHeading}>Team Culture</p>
                        <p>Flipr fosters a vibrant team culture, where collaboration fuels innovation, and every voice is valued, creating a dynamic and supportive workplace.
</p>
                    </Box>
                    <Box className={`${classes.card} ${classes.cyanbox} ${classes.cardHover}`}>
                    </Box>
                    <Box className={`${classes.card}`}>
                        <Image src={`./box4.png`} height={40} width={50} radius='lg' alt='image'></Image>
                        <p className={classes.boxHeading}>Learning & Development</p>
                        <p>At Flipr, your professional development is a priority, and we provide ample opportunities for learning and career advancement.
</p>
                    </Box>
                </Flex>
                <Flex
                    direction={{ base: 'column', sm: 'row' }}
                    gap={{ base: 'sm', sm: 'lg' }}
                    justify={{ sm: 'center' }}
                >
                    <Box className={`${classes.card}`}>

                        <Image src={`./image10.png`} height={40} width={50} radius='lg' alt='image'></Image>
                        <p className={classes.boxHeading}>Fun & Engagement:</p>

                        <p>We offer flexible working arrangements, wellness programs, and regular team-building activities to ensure our employees stay motivated and engaged.
</p>
                    </Box>

                    <Box className={`${classes.card} ${classes.pinkbox} ${classes.cardHover}`}>


                    </Box>

                    <Box className={`${classes.card}`}>
                        <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1716548539/imbjylcdhtbclusgrred.png`} height={40} width={50} radius='lg' alt='image'></Image>
                        <p className={classes.boxHeading}>Innovative Work Environment</p>

                        <p>Life at Flipr is all about balance, growth, and innovation. We believe in fostering a positive and inclusive work environment where employees can thrive. 
</p>

                    </Box>


                    <Box className={`${classes.card} ${classes.purplebox} ${classes.cardHover}`}>


                    </Box>









                </Flex>
            </Box>
        </>
    )
}