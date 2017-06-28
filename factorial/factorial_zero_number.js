/* global process */
/* global __dirname */
/*******************************************************************************
 * Copyright (c) 2016 arxanfintech.com
 *
 * All rights reserved.
 *
 * Contributors:
 *   Steven Xu (steven@arxanfintech.com)
 *******************************************************************************/

// get zero numbers about factorial of n
// for example: n = 10, n!=3628800, so the result should return 2

// 37=3*10+7
function getZeroNumOfFactor(n) {
	if(n < 0) {
		return 'number: ' + n + ' is a negative number';
	} else if(n%1 != 0) {
		return 'number: ' + n + ' is not a Integer number';
	} else {
		var digits = generateDigit(n);
		var numList = generateList(digits.length);
		var result = 0;
		for(var i = 0; i < numList.length; i++) {
			result += numList[i]*digits[i+1];
		}
		if(digits[0] >= 5) {
			result += 1;
		}
		return result;
	}
}

//将各个位数的阶乘尾数0的个数取出来,从十位数开始
function generateList(numBit){
	var result = [];
	if(numBit >= 2) {
		result.push(2);
		var i = 0;
		while(numBit > 2) {
			result.push(result[i] * 10 + 1);
			i++;
			numBit--;
		}
	}
	return result;
}

//将数的各个位数的值取出来
function generateDigit(n) {
	var num_digit = [];
	n = n.toString();
	console.log(n, typeof n)
	for(var i = n.length -1; i >= 0; i--) {
		num_digit.push(parseInt(n[i]));
	}
	return num_digit;
}