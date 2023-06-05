'use strict'

require('babel-core/register');
var test	= require('blue-tape'),
utils 		= require('../src/youtube-validator.js')

test('wrong urls 1', function(t) {
	var urlWrong1 = 'asdasd'
	t.shouldFail(utils.validateUrl(urlWrong1))
	t.end()
})

test('wrong urls 2', function(t) {
	var urlWrong2 = 'www.youtube.com/'
	t.shouldFail(utils.validateUrl(urlWrong2))
	t.end()
})

test('wrong urls 3', function(t) {
	var urlWrong3 = 'www.youtube.com'
	t.shouldFail(utils.validateUrl(urlWrong3))
	t.end()
})

test('wrong urls 4', function(t) {
	var urlWrong4 = 'www.youtube.com/watch?v=2XH5_qafR8k'.toUpperCase()
	t.shouldFail(utils.validateUrl(urlWrong4))
	t.end()
})

test('valid urls 1', function(t) {
	var urlCorr1 = 'youtube.com/watch?v=2XH5_qafR8k'
	return utils.validateUrl(urlCorr1)
})
test('valid urls 2', function(t) {
	var urlCorr2 = 'www.youtube.com/watch?v=2XH5_qafR8k'
	return utils.validateUrl(urlCorr2)
})
test('valid urls 3', function(t) {
	var urlCorr3 = 'http://www.youtube.com/watch?v=2XH5_qafR8k'
	return utils.validateUrl(urlCorr3)
})
test('valid urls 4', function(t) {
	var urlCorr4 = 'www.YOUTUBE.COM/watch?v=2XH5_qafR8k'
	return utils.validateUrl(urlCorr4)
})
test('valid urls 5', function(t) {
	var urlCorr5 =  'https://www.youtube.com/watch?v=BHOJ2814J9Q'
	return utils.validateUrl(urlCorr5)
})

test('ID validate adapter', function(t) {
  var wrongID = 'this is wrong'
  var correctID = '2XH5_qafR8k'

  t.shouldFail(utils.validateVideoID(wrongID))
  return utils.validateVideoID(correctID)
  t.end()
})
