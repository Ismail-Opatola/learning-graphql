import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/query";

class BookDetails extends Component {
  displayBookDetails = () => {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul>
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div id="book-details">
          <p>Book details</p>
        </div>
      );
    }
  };
  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

BookDetails.propTypes = {
  data: PropTypes.object
};

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
