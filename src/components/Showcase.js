import React from 'react';
import { Flex, Stack, Text, Image, Box, useMediaQuery, Heading, Badge, Link, Spacer } from '@chakra-ui/react';
import redditImages from '../reddit-images.PNG';
import cryptoTracker from '../crypto-tracker.PNG';
import healthDashboard from '../health-dashboard.PNG';
import './Showcase.css';

const Showcase = () => {
    const [isLargeScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Stack>
            <Heading fontWeight="bold" fontSize="2xl" bgGradient="linear(to-tr, teal.300,yellow.400)" bgClip="text">projects.</Heading>
            <Spacer />
            <Flex direction={isLargeScreen ? "row" : "column"}>
                <Box maxWidth="270px" border="1px" borderColor="blackAlpha.300" borderRadius="lg" bg="blackAlpha.300">
                    <Link href="https://datastudio.google.com/u/0/reporting/300aa1a3-6867-425e-a42d-72b4d98747d0/page/tEnnC"><Image objectFit="cover" alignSelf="center" borderRadius="lg" boxSize="270" boxShadow="lg"  backgroundColor="transparent" src={healthDashboard} /></Link>
                    <Box p={6}>
                        <Text p="1" fontSize="md" fontWeight="bold">Health Dashboard</Text>
                        <Text p="1" fontSize="sm">Ingests data from the Fitbit API and my workout log. Uses Cloud Functions for the Python script, BigQuery for the warehouse, and dbt to transform.</Text>
                        <Badge borderRadius="full" px="2" colorScheme="purple">Python</Badge>
                        <Badge borderRadius="full" px="2" colorScheme="yellow">SQL</Badge>
                    </Box>
                </Box>
                <br /> 
                <Box maxWidth="270px" border="1px" borderColor="blackAlpha.300" borderRadius="lg" bg="blackAlpha.300" ml={isLargeScreen ? "10" : "0"}>
                        <Link href="https://xavsadiq.github.io/crypto-portfolio-tracker/"><Image objectFit="cover" alignSelf="center" borderRadius="lg" boxSize="270" boxShadow="lg"  backgroundColor="transparent" src={cryptoTracker} /></Link>
                        <Box p={6}>
                            <Text p="1" fontSize="md" fontWeight="bold">Crypto Portfolio Tracker</Text>
                            <Text p="1" fontSize="sm">Dashboard to track crypto portfolio. Full-stack app using Coingecko API for prices. Users can view all transactions, summary table, and graphs. </Text>
                            <Badge borderRadius="full" px="2" colorScheme="teal">React</Badge>
                            <Badge borderRadius="full" px="2" colorScheme="red">Firebase</Badge>
                        </Box>
                </Box>
                <br />
                <Box maxWidth="270px" border="1px" borderColor="blackAlpha.300" borderRadius="lg" bg="blackAlpha.300" ml={isLargeScreen ? "10" : "0"}>
                    <Link href="https://xavsadiq.github.io/reddit-images/"><Image objectFit="cover" alignSelf="center" borderRadius="lg" boxSize="270" boxShadow="lg"  backgroundColor="transparent" src={redditImages} /></Link>
                    <Box p={6}>
                        <Text p="1" fontSize="md" fontWeight="bold">Reddit Wallpapers</Text>
                        <Text p="1" fontSize="sm">Uses the Reddit API to display images in a masonary grid from the /r/wallpapers subreddit. Filter by New/Hot or search.</Text>
                        <Badge borderRadius="full" px="2" colorScheme="teal">React</Badge>
                    </Box>
                </Box>
    
            </Flex>
        </Stack>
    );
};

export default Showcase;
