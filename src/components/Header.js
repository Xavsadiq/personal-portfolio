import React from 'react';
import { Flex, Stack, Text, Image, Box, Icon, useMediaQuery, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import profilepic from '../profilepic.jpg';
import './Header.css';

const Header = () => {
    const [isLargeScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Stack>
            <Flex direction={isLargeScreen ? "row" : "column"}>
                <Image objectFit="cover" alignSelf="center" boxSize="300" boxShadow="lg" borderRadius="full" backgroundColor="transparent" src={profilepic} />
                <Box alignSelf="center" ml={5} width={isLargeScreen ? "550px": "300px"}>
                    <Text fontSize="3xl" fontWeight="semibold">Hi, my name is</Text>
                    <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-tr, teal.300,yellow.400)" bgClip="text">Xav Sadiq</Text>
                    <Text fontSize="2xl">Data Engineer with a focus on <b>SQL</b> and <b>Python</b>.</Text>
                    <br />
                    <Link href="https://github.com/Xavsadiq/"><Icon as={FaGithub} boxSize={30}></Icon></Link>
                    <Link href="https://www.linkedin.com/in/xavier-sadiq-b142838b/"><Icon ml={6} as={FaLinkedin} boxSize={30}></Icon></Link>
                    <Link href="mailto:xavsadiq@gmail.com"><Icon ml={6} as={AiOutlineMail} boxSize={30}></Icon></Link>
                </Box>
            </Flex>
        </Stack>
    );
};

export default Header;
