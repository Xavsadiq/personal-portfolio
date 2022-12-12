import React from 'react';
import { Flex, Stack, Text, Box, useMediaQuery, Heading, Spacer } from '@chakra-ui/react';

const About = () => {
    const [isLargeScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Stack>
            <Heading fontWeight="bold" fontSize="2xl" bgGradient="linear(to-tr, teal.300,yellow.400)" bgClip="text">about.</Heading>
            <Spacer />
            <Flex direction={isLargeScreen ? "row" : "column"}>
                <Box width={isLargeScreen ? "890px" : "270px"} border="1px" borderColor="blackAlpha.300" borderRadius="lg" bg="blackAlpha.300">
                        <Box p={6}>
                            <Text fontSize="sm">
                                Passion for solving data problems. Experience in building data pipelines, warehousing, modelling, and dashboarding.
                                With an emphasis on these skills: <b>SQL</b>, <b>Python</b>, <b>BigQuery</b>, <b>dbt</b>, and <b>Fivetran</b>.<br /><br />
                                I like to dabble in other projects using <b>React</b> and <b>Redux</b>, which are available in the projects section below.<br /><br />
                                Based around London, feel free to reach out!
                            </Text>
                        </Box>
                </Box>      
            </Flex>
        </Stack>
    );
};

export default About;
