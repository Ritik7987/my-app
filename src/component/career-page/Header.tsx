import { Container, Image, Overlay, Text, Title, Button, Group, Modal, NavLink, Box, Center, Card, List, SimpleGrid, Grid, Badge, Flex } from '@mantine/core';
// import classes from "./herobullets.module.scss";
import classes from "./herobullets.module.scss";
import headerimage from '../../../public/sss.png'

function Header() {



    return (

        <>
            <Box>
                <div className={classes.root}>
                    <div style={{ width: "100%" }}>
                        <div className={classes.flexCenter}>
                            <div>
                                <div className={classes.row}>
                                    <div className={`${classes.col} ${classes.textCol}`}>
                                        <div className={classes.heading}>
                                            <Badge
                                                color="gray">Flipr Careers</Badge>
                                            <br />
                                            <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                                                Join Our Innovative Team
                                            </h1>
                                        </div>
                                    </div>
                                    <div className={`${classes.col} ${classes.btnCol}`}>
                                        <div className={classes.container}>
                                            <Image
                                                className={classes.approach_hero_banner}
                                                src={headerimage.src}
                                                alt="approach_hero_banner"
                                                radius="xl"
                                            />
                                            {/* <Flex
                                                direction={{ base: 'column', sm: 'row' }}
                                                gap={{ base: 'sm', sm: 'lg' }}
                                                justify={{ sm: 'center' }}
                                            >
                                                <Box className={`${classes.card} ${classes.blackbox} ${classes.cardHover}`}>

                                                </Box>
                                                <Box className={`${classes.card} ${classes.cyanbox} ${classes.cardHover}`}>

                                                </Box>
                                                <Box className={`${classes.card} ${classes.pinkbox} ${classes.cardHover}`}>

                                                </Box>
                                                <Box className={`${classes.card} ${classes.purplebox} ${classes.cardHover}`}>

                                                </Box>
                                            </Flex>
                                            <Flex
                                                direction={{ base: 'column', sm: 'row' }}
                                                gap={{ base: 'sm', sm: 'lg' }}
                                                justify={{ sm: 'center' }}
                                            >
                                                <Box className={`${classes.card} ${classes.yellowbox} ${classes.cardHover}`}>

                                                </Box>
                                                <Box className={`${classes.card} ${classes.orangebox} ${classes.cardHover}`}>

                                                </Box>
                                            </Flex> */}
                                             
                                        </div>
                                    </div>

                                </div>
                                <p
                                    className={classes.description}

                                >
                                    Welcome to the Flipr careers page! We re excited to <br />   find talented individuals passionate about technology and eager to grow their careers.
                                </p>

                            </div>
                        </div>


                    </div>
                </div>
            </Box>



        </>
    );
}

export default Header;
