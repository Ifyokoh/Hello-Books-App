const express = require('express');
	router = express.Router();


global.books = [
{
	id:1,
	name: 'Obi goes to school',
	Author: 'Mr Eze'
},

{
	id:2,
	name: 'Scandal',
	Author: 'Mr Obi'
}
];

//to add a book
router.post('/api/books', function(req, res){
	if(!req.body.name){
		return res.json({
			message: 'Book name missing',
			error: true
		});
	}
	global.books.push(req.body);
	return res.json({
		message: 'Success',
		error: false
	});
});

//modify a book
router.put('/api/books/:id', function(req, res){
	for(let i=0; i < global.books.length; i++){
		if(global.books[i].id === parseInt(req.params.id, 10)){
			global.books[i].name = req.body.name;
			global.books[i].author = req.body.Author;
			return res.json({
				message: 'success',
				error: false
			});
		}
	}
	return res.status(404).json({
		message:'book not found',
		error: true
	});
});


//to get all books
router.get('/api/books', function(req, res){
	return res.json({
		books: global.books,
		error: false
	});
});

//to get a particular book
router.get('/api/books/:id', function(req, res){
	for(let i=0; i < global.books.length; i++){
		if(global.books[i].id === parseInt(req.params.id, 10)){
			return res.json({
				book: global.books[i],
				message: 'success',
				error: false
			});
		}
	}
	return res.status(404).json({
		message:'book not found',
		error: true
	});
});

module.exports = router;