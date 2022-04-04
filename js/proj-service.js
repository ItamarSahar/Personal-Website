'use strict'

var gId = 101

var gProjects = _createProjects()

function _createProjects() {
	var projects = []
	projects.push(
		_createProject(
			'MineSweeper',
			'The MineSweeper game',
			'img/proj1.png',
			['game', 'project'],
			'I bulid the game in the first sprint in the Bootcamp it was really fun!',
			'https://itamarsahar.github.io/Mine-Sweeper/'
		)
	)
	projects.push(
		_createProject(
			'Collect the balls',
			'Collect the balls game',
			'img/proj2.png',
			['game', 'project'],
			'This is the first game i build in my life!',
			'https://itamarsahar.github.io/CollectTheBalls/'
		)
	)
	projects.push(
		_createProject(
			'The Book Store',
			'The Book Store',
			'img/proj3.png',
			['store', 'project'],
			'This web-site function as a store manegment system and can be convert to stores of many kinds.',
			'https://itamarsahar.github.io/BookStore/'
		)
	)
	return projects
}

function _createProject(name, title, img, labels, desc, url) {
	return {
		id: gId++,
		name,
		title,
		desc,
		img,
		publishedAt: new Date(),
		labels,
		url,
	}
}

function getProjects() {
	return gProjects
}

function getProjectById(id) {
	return gProjects.find((project) => project.id === id)
}
