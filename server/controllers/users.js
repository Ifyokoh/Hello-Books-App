const express = require('express');
	router = express.Router();


global.users = [
{
	id:1,
	name: 'Jenny',
	schoolid: '178851'
},

{
	id:2,
	name: 'Jude',
	schoolid: '234567'
}
];

//to add a user
router.post('/api/users', function(req, res){
	if(!req.body.name){
		return res.json({
			message: 'name missing',
			error: true
		});
	}
	global.users.push(req.body);
	return res.json({
		message: 'Success',
		error: false
	});
});



//to get all users
router.get('/api/users', function(req, res){
	return res.json({
		users: global.users,
		error: false
	});
});

//to get a particular user
router.get('/api/users/:id', function(req, res){
	for(let i=0; i < global.users.length; i++){
		if(global.users[i].id === parseInt(req.params.id, 10)){
			return res.json({
				book: global.users[i],
				message: 'success',
				error: false
			});
		}
	}
	return res.status(404).json({
		message:'user not found',
		error: true
	});
});

module.exports = router;

//for user to borrow a book
router.post('/api/users/:id/borrow/:bookid', function(req, res){
	if(!req.body.name){
		return res.json({
			message: 'name missing',
			error: true
		});
	}
	global.users.push(req.body);
	return res.json({
		message: 'Success',
		error: false
	});
});