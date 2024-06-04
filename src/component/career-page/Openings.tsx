import { Container, Text, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List, MediaQuery, Anchor } from '@mantine/core';
import classes from './openings.module.scss'
import { Openings1, Openings2 } from '../utils/jobopeningsdata';
export default function JobOpening() {

  return (
    <>

      <Box className={`${classes.root} ${classes.containerHeight}`}>
        <Grid>
          <Grid.Col span={12} sm={9} xs={12}>
            <Box sx={{ marginTop: 14 }}>
              <h1 className={`${classes.heading} ${classes.gradientStyle}`}>
                Open Positions{" "}
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
        <p className={classes.text}>We are currently hiring for the following profiles:
        </p>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
          className={classes.flexClass}
        >



          {Openings1.map((data, index) => (
            <Anchor key={index} href="#" className={classes.container} style={{ textDecoration: 'none' }}>
              <Box className={classes.card}>
                <Box className={classes.cardHeader}>
                  <Text className={classes.title}>{data.jobtitle}</Text>
                  <Text className={classes.description}>
                    Description: {data.jobdescription}
                  </Text>
                  <Text className={classes.description}>
                    Requirement: {data.jobrequirements}

                  </Text>
                </Box>
                <Group className={classes.infoGroup}>
                  <Box className={classes.infoItem}>
                    <svg
                      className={classes.icon}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Text className={classes.infoText}>Location: {data.joblocation}</Text>
                  </Box>
                  <Box className={classes.infoItem}>
                    <svg
                      className={classes.icon}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Text className={classes.infoText}>Duration: {data.jobduration}</Text>
                  </Box>

                </Group>
              </Box>
            </Anchor>
          ))}
        </Flex>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
          className={classes.flexClass}
        >



          {Openings2.map((data, index) => (
            <Anchor key={index} href="#" className={classes.container} style={{ textDecoration: 'none' }}>
              <Box className={classes.card}>
                <Box className={classes.cardHeader}>
                  <Text className={classes.title}>{data.jobtitle}</Text>
                  <Text className={classes.description}>
                    Description: {data.jobdescription}
                  </Text>
                  <Text className={classes.description}>
                    Requirement: {data.jobrequirements}

                  </Text>
                </Box>
                <Group className={classes.infoGroup}>
                  <Box className={classes.infoItem}>
                    <svg
                      className={classes.icon}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Text className={classes.infoText}>Location: {data.joblocation}</Text>
                  </Box>
                  <Box className={classes.infoItem}>
                    <svg
                      className={classes.icon}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Text className={classes.infoText}>Duration: {data.jobduration}</Text>
                  </Box>

                </Group>
              </Box>
            </Anchor>
          ))}
        </Flex>
      </Box>





    </>




  )
}