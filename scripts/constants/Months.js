export const stringMonths = month =>
	({
		"01": "JANUARY",
		"02": "FEBRUARY",
		"03": "MARCH",
		"04": "APRIL",
		"05": "MAY",
		"06": "JUNE",
		"07": "JULY",
		"08": "AUGUST",
		"09": "SEPTEMBER",
		"10": "OCTOBER",
		"11": "NOVEMBER",
		"12": "DECEMBER"
	}[month]);

export const monthDays = month => {
	return {
		JANUARY: 31,
		FEBRUARY: 29,
		MARCH: 31,
		APRIL: 30,
		MAY: 31,
		JUNE: 30,
		JULY: 31,
		AUGUST: 31,
		SEPTEMBER: 30,
		OCTOBER: 31,
		NOVEMBER: 30,
		DECEMBER: 31
	}[month];
};

export const intMonths = month => {
	return [
		"JANUARY",
		"FEBRUARY",
		"MARCH",
		"APRIL",
		"MAY",
		"JUNE",
		"JULY",
		"AUGUST",
		"SEPTEMBER",
		"OCTOBER",
		"NOVEMBER",
		"DECEMBER"
	][month - 1];
};
