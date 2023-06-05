##youtube-validate

It validates wether a given url or id are valid youtube videos.
Based on the [*youtube-validator*](https://github.com/gpestana/youtube-validator/) module.

---

####how to install
`npm install youtube-validate`

####what is valid and invalid url/id?
* valid url/id are all strings that do match with an existent youtube video url or id, depending on the function called. ex:

```javascript
var validUrl1 = 'youtube.com/watch?v=2XH5_qafR8k'
var validUrl2 = 'www.youtube.com/watch?v=2XH5_qafR8k'
var validUrl3 = 'http://www.youtube.com/watch?v=2XH5_qafR8k'
var validUrl4 = 'www.YOUTUBE.COM/watch?v=2XH5_qafR8k'
var validID = '2XH5_qafR8k'
```

* invalid url/id are the same as above, but on the other way around.  ex:  

```javascript
var invalidUrl1 = 'random_stuff_here'
var invalidUrl2 = 'www.youtube.com/'
var invalidUrl3 = 'www.youtube.com'
var invalidUrl44 = 'www.youtube.com/watch?v=2XH5_qafR8k'.toUpperCase() //video ids are case sensitive
var invalidID = 'id_that_does_not_exist'  
```

###how to use

```javascript
import {validateUrl} from 'youtube-validate'
//..
validateUrl(url)
.then(res => {
  //do something with the results
}).catch({
  // log the error
})
```

```javascript
import {validateVideoID} from 'youtube-validate'
//..
validator.validate(videoID) // a standard youtube id
.then(res => {
  //do something with the results
}).catch({
  // log the error
})
```
