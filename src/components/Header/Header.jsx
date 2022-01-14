import { useState, useEffect } from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from "../Container";
import { HeaderEl } from "./Header-components/HeaderEl";
import { HeaderWrapper } from "./Header-components/Header-wrapper";
import { HeaderTitle } from "./Header-components/Header-title";
import { ModeSwither } from "./Header-components/ModeSwither";

const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    },[theme]);

    return (
        <HeaderEl>
            <Container>
                <HeaderWrapper>
                    <HeaderTitle>Where is the world?</HeaderTitle>
                    <ModeSwither onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size= '14px'/>
                        ) : (
                            <IoMoon size= '14px'/>
                        )}
                         <span style={{marginLeft: '10px'}}>{theme} Theme</span>
                    </ModeSwither>
                </HeaderWrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header;