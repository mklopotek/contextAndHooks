import React, { Component } from 'react'

class BookList extends Component {
    render() {
        return <div className={'book-list'}>
            <ul>
                <li>book 1 </li>
                <li>book 2</li>
                <li>book 3</li>
                <li>book 4</li>
            </ul>
        </div>
    }
}

export default BookList