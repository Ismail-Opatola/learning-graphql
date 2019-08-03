import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/query";
import BookDetails from "./BookDetails";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={e => this.setState({ selected: book.id })}>
            {book.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

BookList.propTypes = {
  data: PropTypes.object
};

export default graphql(getBooksQuery)(BookList);
