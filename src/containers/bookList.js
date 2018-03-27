import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book) =>{
            return (
			<li key={book.title}
				onClick={() => this.props.selectBook(book)}
			 	className="list-group-item"
			 >{book.title}</li>
            )
        });
    }
	render(){
		return (
            <ul className="list-group cm-4">
			{this.renderList()}
		    </ul>
		);
	}
	onInputChange = (term) => {
		this.setState({ term});
		this.props.onSearchTermChange(term);
	}
}

function mapStateToProps(state){
	return {
		books: state.bookspene
	};
}

function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result shoudl be passed
	// to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
