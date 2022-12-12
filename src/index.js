import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <ChakraProvider theme={extendTheme({config: {
        useSystemColorMode: false,
        initialColorMode: "dark",
    }})}>
        <ColorModeScript />
        <App />
    </ChakraProvider>, 
    document.querySelector('#root'));