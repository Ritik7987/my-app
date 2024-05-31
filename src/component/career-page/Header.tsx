import { Container, Image, Overlay, Text, Title, Button, Group, Modal, NavLink, Box, Center, Card, List, SimpleGrid, Grid } from '@mantine/core';
// import classes from "./herobullets.module.scss";
import classes from "./herobullets.module.scss";

function Header() {



    return (

        <>  
            <Container>
                <div className={classes.root}>
                    <div style={{ width: "100%" }}>
                        <div className={classes.flexCenter}>
                            <div>
                                <div className={classes.row}>
                                    <div className={`${classes.col} ${classes.textCol}`}>
                                        <div className={classes.heading}>
                                            <br />
                                            <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                                                Join Our Innovative Team
                                            </h1>
                                        </div>
                                    </div>
                                    <div className={`${classes.col} ${classes.btnCol}`}>
                                        <div>
                                            <Image
                                                className={classes.approach_hero_banner}
                                                src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1716896026/b3jm3msc6gbiyqz5i8rb.png`}
                                                alt="approach_hero_banner"
                                                radius="lg"
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                                <p
                                    className={classes.description}
                                     
                                >
                                    Welcome to the Flipr careers page! We're excited to find talented individuals passionate about technology and eager to grow their careers.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </Container>


            
        </>
    );
}

export default Header;
