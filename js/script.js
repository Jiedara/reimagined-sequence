$( document ).ready(function() {
	//game parameters
	roofNum = 3;
	score = 0;
	width = 6;
	height = 10;
	matrice = [];
	
	generateGrid(6, 10);
	
	newNumber(1);

	//move item
	$('html').on('keydown',function(event){
		item = $('.movable .item');
		itemHTML = item[0].outerHTML;
		posX = item.parent().index();

		//controls
		switch (event.which){
			//left
			case 37:
				if(posX != 0){
					item.parent().prev().html(itemHTML);
					item.parent().html('');
					posX = posX - 1;
				}
			break;

			//right
			case 39:
				if(posX != width - 1){
					item.parent().next().html(itemHTML);
					item.parent().html('');
					posX = posX + 1;
				}
			break;

			//dropping an item
			case 40:
				if(posY = dropItem(item,posX)){
					calcPosX = posX + 1;
					checkBlock({'posX' : calcPosX,posY});
					newNumber(posX);
				}else {
					lose();
				}
			break;
		}
	});

});