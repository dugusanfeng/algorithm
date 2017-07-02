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

function medianOfSortArray(arrayA, arrayB) {
	var m = arrayA.length;
	var n = arrayB.length;
	if(m > n) {
		return medianOfSortArray(arrayB, arrayA);
	} else {
		var min_i = 0;
		var max_i = m;
		var half = parseInt((m+n+1)/2);
		while(min_i <= max_i) {
			var i = parseInt((min_i+max_i)/2);
			var j = half - i;
			if(i<max_i && arrayB[j-1] > arrayA[i]) {
				min_i = i+1;
			} else if(i>0 && arrayA[i-1] > arrayB[j]) {
				max_i = i-1;
			} else {
				if(i==0) {
					var max_left = arrayB[j-1];
				} else if(j==0) {
					max_left = arrayA[i-1];
				} else {
					max_left = Math.max(arrayA[i-1], arrayB[j-1]);
				}
				if((m+n)%2 == 1) {
					return max_left;
				}
				if(i==m) {
					var min_right = arrayB[j];
				}else if(j == n) {
					min_right =arrayA[i];
				} else {
					min_right = Math.min(arrayA[i], arrayB[j])
				}
				return (max_left+min_right)/2;
			}
		}
	}
}