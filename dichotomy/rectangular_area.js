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

//　获取列表中的最小值及其位置
function getMinOfArray(array) {
	if(array.length == 0) {
		return 'array is empty';
	}
	var min = array[0];
	var minIndex = 0;
	for(var index in array) {
		if(array[index] < min) {
			min = array[index];
			minIndex = parseInt(index);
		}
	}
	return [minIndex, min];
}

// 获取最大矩形面积
function maxRecTangularArea(n, array) {
	if(array.length != n) {
		return 'Input error';
	}
	if(n == 0) {
		return 0;
	}
	if(n == 1) {
		return array[0];
	} else {
		var minList = getMinOfArray(array);
		var left = array.slice(0, minList[0]);
		var right = array.slice(minList[0] + 1);
		return Math.max(maxRecTangularArea(left.length, left), minList[1]*array.length, maxRecTangularArea(right.length, right));
	}
}