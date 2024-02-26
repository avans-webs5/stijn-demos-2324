var router = require('express').Router();

/*
----------------------------------------------
				Helpers
----------------------------------------------
*/
function getEasterSunday(year) {
    var C = Math.floor(year/100);
    var N = year - 19*Math.floor(year/19);
    var K = Math.floor((C - 17)/25);
    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    var J = year + Math.floor(year/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);
    var L = I - J;
    var month = 3 + Math.floor((L + 40)/44);
    var date = L + 28 - 31*Math.floor(month/4);

    return new Date(year, month - 1 /* Months are zero based */, date);
};

function getDateString(date){
    var curr_date = date.getDate();
    var curr_month = date.getMonth() + 1;
    var curr_year = date.getFullYear();
    return (curr_date < 10 ? '0' : '') + curr_date + "-" + (curr_month < 10 ? '0' : '') + curr_month + "-" + curr_year;
}

function getDayNameNL(date){
	switch (date.getDay())
	{
		case 0: return 'Maandag';
		case 1: return 'Dinsdag';
		case 2: return 'Woensdag';
		case 3: return 'Donderdag';
		case 4: return 'Vrijdag';
		case 5: return 'Zaterdag';
		case 6: return 'Zondag';

		
	}
};

function getHolidayNL(date){
	var dd = date.getDate();
	var mm = date.getMonth();
	var yyyy = date.getFullYear();
	var easterSunday = getEasterSunday(yyyy);

	var daysfterEasterSunday = (date - easterSunday);

	// TODO: Fill the right holidays
	//example: new year
	if(dd == 1 && mm == 0)
	{
		return 'new year';
	}
	
	return undefined;
}
/*
----------------------------------------------
				/Helpers
----------------------------------------------
*/

/*
----------------------------------------------
				Build response
----------------------------------------------
*/
function sendHoliday(date, res){
	var holidayNL = getHolidayNL(date);

	var toReturn = {
		date: getDateString(date),
		dayNameNL: getDayNameNL(date),
		isHolidayNL: (holidayNL !== undefined),
		holidayNameNL: holidayNL
	};

	res.json(toReturn);
};

function validateDate(year, month, date){
	var returnDate = new Date(year, month - 1, date);

	if(returnDate.getFullYear() != year || returnDate.getMonth() + 1 != month || returnDate.getDate() != date){
		return undefined;
	} else {
		return returnDate;
	}
};

/*
----------------------------------------------
				/Build response
----------------------------------------------
*/

/*
----------------------------------------------
				Routing
----------------------------------------------
*/
router.route('/').get(function(req, res){
	sendHoliday(new Date(), res);
});

router.route('/:date/:month/:year').get(function(req, res){
	var date = validateDate(req.params.year, req.params.month, req.params.date);
	if(!date) {
		return res.status(400).end('Wrong date format');
	}

	sendHoliday(date, res);
});

/*
----------------------------------------------
				Exports
----------------------------------------------
*/
module.exports = router;