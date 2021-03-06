const express = require('express')
const router = express.Router();

// Habit Model
const Habit = require('../../models/Habit.js');

//@route 	POST api/items
//@desc 	Create a habit
//@access	Public
router.post('/newhabit', (req, res) => {
	const newHabit = new Habit({
		name: req.body.name,
		habit: req.body.habit,
		smart: req.body.smart,
		length: req.body.length,
		intervals: req.body.intervals,
		reward: req.body.reward
	});
	newHabit.save().then(habit => res.json(habit));
});

//@route 	POST api/checkin
//@desc 	Perform a checkin for one of your habits
//@access	Public
router.post('/checkin', (req, res) => {
	const checkin = {
		effort: req.body.effort,
		mood: req.body.mood,
		selfEval: req.body.selfEval,
		notes: req.body.notes,
		checkinDate: req.body.date
	}
	// Just to get this off the ground - request should include habit id
	// Probably better use combination of user id + habit name
	Habit.findOneAndUpdate({_id: req.body.habit}, {$push: {checkins: checkin}},{new: true})
		.then(habit => res.json(habit));
});

// Delete a habit by id
//@route	 DELETE api/habit
//@desc 	 Delete a given habit
//@access 	 Public
router.delete('/habit/:id', (req, res) => {
	const id = req.params.id

	Habit.findByIdAndDelete(id)
		.then(habit => {
			res.json({
				confimration: 'success',
				data: habit
			})
		})
		.catch(err => {
			res.json({
				confimration: 'fail',
				message: 'Habit not found!'
			})
		})

});

// Get first habit for a given user
//@route	 GET api/first-habit
//@desc 	 Get the first habit that exists for the given user
//@access    Public
router.get('/first-habit/:user', (req, res) => {
	const user = req.params.user
	
	Habit.findOne({name: user})
		.then(habit => {
			res.json({
				confirmation: 'success',
				data: habit
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: 'No habits found for user'
			})
		})

});


module.exports = router;