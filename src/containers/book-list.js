import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	renderList(){
	
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
		 	);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
};

function mapStateToProps(state) {
// this v converts state into props
		
	return {
		
		books: state.books
	};
}

// this v merges newly created props with component
export default connect(mapStateToProps)(BookList);