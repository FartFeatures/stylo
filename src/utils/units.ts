// Copyright 2015-2020 Parity Technologies (UK) Ltd.
// Modifications Copyright (c) 2021 Thibaut Sardan

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import BigNumber from 'bignumber.js';

/* eslint-disable sort-keys */
const unitMap: {
	[key: string]: string;
} = {
	noether: '0',
	wei: '1',
	kwei: '1000',
	Kwei: '1000',
	babbage: '1000',
	femtoether: '1000',
	mwei: '1000000',
	Mwei: '1000000',
	lovelace: '1000000',
	picoether: '1000000',
	gwei: '1000000000',
	Gwei: '1000000000',
	shannon: '1000000000',
	nanoether: '1000000000',
	nano: '1000000000',
	szabo: '1000000000000',
	microether: '1000000000000',
	micro: '1000000000000',
	finney: '1000000000000000',
	milliether: '1000000000000000',
	milli: '1000000000000000',
	ether: '1000000000000000000',
	kether: '1000000000000000000000',
	grand: '1000000000000000000000',
	mether: '1000000000000000000000000',
	gether: '1000000000000000000000000000',
	tether: '1000000000000000000000000000000'
};

function getValueOfUnit(unit?: string): BigNumber {
	unit = unit ? unit.toLowerCase() : 'ether';
	const unitValue = unitMap[unit] || 0;

	return new BigNumber(unitValue, 10);
}

export function fromWei(number: any, unit?: string): string {
	return new BigNumber(number || 0, 16)
		.dividedBy(getValueOfUnit(unit))
		.toString(10);
}
