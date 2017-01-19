function generateGrid(width, height){

	//initiate var
	var grid = "";
	var movable = "";

	//construct grid
	for(var i = 1; i <= height; i++ ){
		matrice[i] = [];
		grid += "<tr>";
		for(var j = 1; j <= width; j++ ){
			grid += "<td></td>";
			matrice[i][j] = "*";
		}
		grid += "</tr>";
	}
	
	movable += "<tr class='movable'>";
	for(var k = 1; k <= width; k++ ){
		movable += "<td></td>";
	}
	movable += "</tr>";

	//display grid and return array representation of grid
	$('#gameGrid').append(movable + grid );
}


function newNumber(posX){
	nextNumber = Math.floor(Math.random() * roofNum) + 1
	$('.item').remove();
	$('.movable td:nth-child(' + ( posX + 1 ) + ')').html('<span class="item">' + nextNumber + '</span>')
	return nextNumber;
}

function dropItem(item, posX){

	var returning = true;

	gridColumn = $('#gameGrid tr:not(".movable") td:nth-child(' + ( posX + 1 ) + ')');

	$.each(matrice, function(key, value){
		if(matrice != "*" ){
			//if we are on top of the grid
			if(key == 1){
				returning = false;
			}
			$(gridColumn[key - 1]).html(item.html());
			returning = key;
			return false;
		}
		//specific case if the column is empty
		if( key == matrice.length - 1 && value == "*" ){
			$(gridColumn[key]).html(item.html());
			returning = key + 1;
			return false;
		}
	});
	return returning;
}