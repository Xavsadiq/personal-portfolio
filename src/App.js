import { Flex, Heading, IconButton, Spacer, VStack, StackDivider } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { FaSun, FaMoon } from 'react-icons/fa';
import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import About from './components/About';

const App = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <VStack p={5} spacing={5} divider={<StackDivider opacity="0%"/>}>
            <Flex w="100%">
                <Heading fontWeight="semibold" size="1xl">xavdev.io</Heading>
                <Spacer />
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
            </Flex>
            <Header />
            <Spacer />
            <About />
            <Spacer />
            <Showcase />
        </VStack>
    );
};

export default App;