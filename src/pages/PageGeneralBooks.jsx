export const PageGeneralBooks = ({generalBooks}) => {
	return (
		<div className="page_generalBooks">
			<h2>General Books</h2>
			<p>There are {generalBooks.length} general books.</p>
		</div>
	)
}