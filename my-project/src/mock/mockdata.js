import Mock from 'mockjs'
export default Mock.mock('mock/getmockdata', {
	'results|1-10': [{
		'num': '@integer(0,10)',
		'sent': '@sentence',
		'name': '@name',
		'date': '@date',
		'image': '@image',
		'ext|1-10': [{
			'date': '@date',
			'cost': '@integer(100,1000)',
			'image': '@image(100x100)'
		}]
	}]
})

Mock.mock('mock/getone', {
	'one|6': [{
		'date': '@date',
		'cost': '@integer(100,1000)',
		'image': '@image(100x100)'
	}]
})

Mock.mock('mock/gettwo', {
	'two|5-9': [{
		'date': '@date',
		'cost': '@integer(100,1000)',
		'image': '@image(100x100)',
		'name': '@name'
	}]
})