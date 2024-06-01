"use client"
import { Container, Image, Overlay, Text, Title, Button, Group, Modal, NavLink, Box, Center, Card, List, SimpleGrid, Grid } from '@mantine/core';
import classes from "./herobullets.module.css";
function Header2() {



    return (

        <>
         <Container>
                <div className={classes.root}>
                    <div style={{ width: "100%" }}>
            <Grid grow gutter="xs" className={classes.margin}>
 
                <Grid.Col span={6}>
                    <Container className={classes.div3}>
                        <Container className={classes.div4}>
                            <span className={`${classes.header} ${classes.bounce}`}>Flipr Careers</span>
                            
                            <Title order={1} className={`${classes.title}`}>
                            Join Our Innovative Team
                            </Title>
                            {/* <Text className={classes.para}>
                                Join Our Innovative Team
                            </Text> */}
                            <Text fz="lg" className={classes.text}>Welcome to the Flipr careers page! We`&apos;`re excited to find talented individuals passionate about technology and eager to grow their careers.
</Text>
                            <Container className={classes.margin}>
                                <Button size="lg" className={classes.btndiv2}>Read More </Button>
                            </Container>

                        </Container>
                    </Container>
                </Grid.Col>
                <Grid.Col span={6} className={classes.margin2}>
                    <Container className={classes.imgdiv1}>
                        <Container pos="relative" className={classes.imgdiv2}>
                            <div className={``}><Image src="https://res.cloudinary.com/dasdutgf6/image/upload/v1716896026/b3jm3msc6gbiyqz5i8rb.png" radius="xl" className={classes.img3} alt='image' />
                            </div>       
                        </Container>
                    </Container>
                </Grid.Col>
            </Grid>
            </div>
            </div>
            </Container>
        </>
    );
}

export default Header2;
