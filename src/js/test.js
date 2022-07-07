$(document).ready(function(){
	$('#list').change(function(){
		calculator.tempArr = $(this).val;
		calculator.arrType.forEach(function (item, index, array) {
			if (calculator.tempArr == calculator.arrType[index]) {
				calculator.cost = index * 1000;
				console.log(calculator.cost);
			}
		})
	})
	
})