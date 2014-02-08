/**
 * try to write a regexp for US phone numbers... 
 * this should not be so fucking difficult
 */

var r = new RegExp('([1-9]\\d\\d).\\d\\d\\d.');

function test(x) {
	return null;
}

alert(r.test('(124) 123-1322'));

/**
 * http://www.w3schools.com/jsref/jsref_obj_regexp.asp
 * var patt=new RegExp(pattern,modifiers);
 * or more simply:
 * var patt=/pattern/modifiers;
 */

/**
 * Test.assertEquals(validPhoneNumber("(123) abc"), false);
Test.assertEquals(validPhoneNumber("(023) 456-9223"), false);

  var r = new RegExp('([1-9]\\d\\d).\\d\\d\\d\\-\\d\\d\\d\\d');


http://stackoverflow.com/questions/9011524/javascript-regexp-number-only-check
http://www.w3schools.com/jsref/jsref_obj_regexp.asp

 */