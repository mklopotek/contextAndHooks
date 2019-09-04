import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

//using Consumer
const Navbar = (props) => {
    return (
        <AuthContext.Consumer>
            {
                (authContext) => (
                    <ThemeContext.Consumer>
                        {
                            (themeContext) => {
                                const { isLightTheme, light, dark } = themeContext
                                const theme = isLightTheme ? light : dark

                                const { isAuthenticated, toggleAuth } = authContext

                                return (
                                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                                        <h1>Context App</h1>
                                        <div onClick={toggleAuth}>
                                            {isAuthenticated ? 'Hi! Logged in!' : 'Logged out!'}
                                        </div>
                                        <ul>
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Contact</li>
                                        </ul>
                                    </nav>
                                )
                            }
                        }
                    </ThemeContext.Consumer>
                )
            }
        </AuthContext.Consumer>
    )

}
//using Context
const Navbar2 = (props) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const { isAuthenticated, toggleAuth } = useContext(AuthContext)

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Hi! Logged in!' : 'Logged out!'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>)

}

export default Navbar2