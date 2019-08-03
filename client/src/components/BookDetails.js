import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/query";

class BookDetails extends Component {

  render() {
    return (
      <div id='book-details'>
        <p>Book details</p>
      </div>
    );
  }
}

BookDetails.propTypes = {
  data: PropTypes.object
};

export default graphql(getBookQuery)(BookDetails);