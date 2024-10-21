import {createContext} from 'react'	;

export const themes = {
    primary: {
        background: '#f0f0f0',
        color: '#000',
    },
    secondary: {
        background: '#000',
        color: '#fff',
    }
}

export const ThemeContext = createContext(themes.primary)