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

function methodNum(n) {
	if (n < 0) {
		return 'number: ' + n + ' is a negative number';
	} else if (n % 1 != 0) {
		return 'number: ' + n + ' is not a Integer number';
	} else {
		if (n == 1) {
			return 1;
		}
		if (n % 2 == 1) {
			return Math.pow((n - 1), 2);
		} else {
			return 2 * methodNum(n - 1);
		}
	}
}