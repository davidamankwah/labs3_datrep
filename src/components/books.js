import React from 'react';
import { BookItem } from './bookItems'; //import bookItem components

export class Books extends React.Component {
    render() {
        {/*a map function to split the array of book into individual books.*/ }
        {/*outputs the bookItem component.*/ }
         {/*a key to be unique.*/ }
        return this.props.books.map(
            (book) => {
                return <BookItem book={book} key={book.isbn}></BookItem> 
            }
        );
    }
}