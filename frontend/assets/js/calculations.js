//JNj5BWxhpi 

Parse.initialize("w2BDzv0cFr6I32ojesQdTd8RBhW4QPI4hh2xgPww", "Pzb9febt2haOjkldiKR0wdHvXxsI1otEIGfkZLBA");
var schoolObjects = new Array();

schoolObjects['Texas State'] = 84470;
schoolObjects['Texas Tech'] = 84570;
schoolObjects['Rice'] = 194000;
schoolObjects['UNT'] = 81590;
schoolObjects['Stanford'] = 230100;
schoolObjects['Harvard']  = 218200;
schoolObjects['SMU'] = 215900;
schoolObjects['UTD'] = 96800;
schoolObjects['A&M'] = 88920;
schoolObjects['UTA'] = 101500;



function yearlyAmounts(principal, monthly)	{
	
	var list = new Array();
	var interest = 0;
	var monthlyInterest = .00388;
	var currentPrincipal = principal;
	var count = 0;

	while(currentPrincipal > 0)	{
		if (count % 12 == 0)	{
			list.push(currentPrincipal);
		}
		interest = currentPrincipal * monthlyInterest;
		currentPrincipal = currentPrincipal - monthly + interest;
		count++;
	}
	list.push(0.0);

	return list;

}

function calcUnsub(principal)	{

	var monthlyInterest = .00388;
	list = new Array();
	var perYear = principal/4;
	var currentAmount = principal/4;
	list.push(currentAmount);

	for(var i = 0; i < 48; i++)	{
		currentAmount += (currentAmount * monthlyInterest);
		if(i %12 == 0 && i != 0)	{
			currentAmount += perYear;
			list.push(currentAmount);
		}
	}

	return list;

}

function calcTotal(school, percentSub, monthly)	{

	var principal = schoolObjects[school];
	var unsub = calcUnsub((principal * (1-percentSub)));
	var total = yearlyAmounts((unsub[3] + percentSub*principal), monthly);

	return total;
}

// function recursem(school)	{
	// var schoolinfo = Parse.Object.extend("SchoolInfo")
	// var query = new Parse.Query(schoolinfo);
	// var schoolObj = schoolObjects[school]; 
	// //console.log(schoolObj);
	// query.get(schoolObj, {
	// 	success: function(schoolCost)	{
	// 		console.log(schoolCost.get("Total"));
	// 	},
	// 	error: function(object, error)	{
	// 		console.log('Woah gg');
	// 	}
	// });