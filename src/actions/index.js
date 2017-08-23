export function selectBook(book) {
	// select book is action creator and needs to return an action, an object with a TYPE property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}