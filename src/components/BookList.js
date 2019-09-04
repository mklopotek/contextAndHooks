import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

//using this.context
class BookList extends Component {
    static contextType = ThemeContext

    render() {

        const { isLightTheme, light, dark } = this.context

        const theme = isLightTheme ? light : dark

        return <div className={'book-list'} style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }}>book 1 </li>
                <li style={{ background: theme.ui }}>book 2</li>
                <li style={{ background: theme.ui }}>book 3</li>
                <li style={{ background: theme.ui }}>book 4</li>
            </ul>
        </div>
    }
}

//using useContext hook
const BookList2 = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { books } = useContext(BookContext)

    const theme = isLightTheme ? light : dark

    return <div className={'book-list'} style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
            {books.map(({ title, id }) => <li key={id} style={{ background: theme.ui }}>{title}</li>)}
        </ul>
    </div>
}

export default BookList2