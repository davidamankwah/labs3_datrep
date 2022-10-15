import React from 'react';
import Card from 'react-bootstrap/Card'; //import allows use of Card

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                {/* <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl} width="200" height="200"/>
                <h4>{this.props.book.authors[0]}</h4> */}


                {/*display individual book information from props of books component.*/}
                 {/*A Card with header and footer*/}
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.book.thumbnailUrl} width="200" height="200" />
                            <footer>
                                {this.props.book.authors[0]}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}