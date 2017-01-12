function generateGrid(target, width, height){

	//initiate var
	var grid = "";
	var aside = target.siblings('aside');

	//construct grid
	for(var i = 0; i <= height; i++ ){
		grid += "<tr>";
		for(var j = 1; j <= width; j++ ){
			grid += "<td></td>";
		}
		grid += "<tr>";
	}

	//display grid
	target.append(grid);

	//display aside
	aside.find('.next').append(Math.floor(Math.random() * 3) + 1);
}