import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/query";

class BookList extends Component {
  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

BookList.propTypes = {
  data: PropTypes.object
};

export default graphql(getBooksQuery)(BookList);
