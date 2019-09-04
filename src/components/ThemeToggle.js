import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext


    render() {
        const { toggleTheme } = this.context

        return (
            <button onClick={toggleTheme}>
                Toggle the theme
            </button>
        )
    }
}

const ThemeToggle2 = (props) => {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme}>
            Toggle the theme
        </button>
    )
}

export default ThemeToggle2