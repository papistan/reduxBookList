import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render(){
		var prop = this.props.book
		if (prop == null) {
					
						return (
							<div>
								<h3>Select book for more details</h3>
							</div>
						)
					
		} else { 
				
					return (
						<div>
							<h3>Details for:</h3>
							<div>{this.props.book.title}</div>
						</div>
					)

		}
	}
}

function mapStateToProps(state) {
// this v converts state into props
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail); 