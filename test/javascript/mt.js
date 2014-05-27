
if(!Hammer.HAS_TOUCHEVENTS && !Hammer.HAS_POINTEREVENTS) {
		Hammer.plugins.showTouches();
}

if(!Hammer.HAS_TOUCHEVENTS && !Hammer.HAS_POINTEREVENTS) {
		Hammer.plugins.fakeMultitouch();
}


var tactileA = Hammer($("#a"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});
var tactileB = Hammer($("#b"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileC = Hammer($("#c"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileD = Hammer($("#d"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileE = Hammer($("#e"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileF = Hammer($("#f"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileG = Hammer($("#g"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileH = Hammer($("#h"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileI = Hammer($("#i"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileJ = Hammer($("#j"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileK = Hammer($("#k"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileL = Hammer($("#l"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileM = Hammer($("#m"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileN = Hammer($("#n"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileO = Hammer($("#o"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});var tactileP = Hammer($("#p"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});

tactileA.on("touch drag drag", function(event) {
	ballAction(event, 0, 0);
});
tactileB.on("touch drag", function(event) {
	ballAction(event, 1, 0);
});
tactileC.on("touch drag", function(event) {
	ballAction(event, 2, 0);
});
tactileD.on("touch drag", function(event) {
	ballAction(event, 3, 0);
});
tactileE.on("touch drag", function(event) {
	ballAction(event, 0, 1);
});
tactileF.on("touch drag", function(event) {
	ballAction(event, 1, 1);
});
tactileG.on("touch drag", function(event) {
	ballAction(event, 2, 1);
});
tactileH.on("touch drag", function(event) {
	ballAction(event, 3, 1);
});
tactileI.on("touch drag", function(event) {
	ballAction(event, 0, 2);
});
tactileJ.on("touch drag", function(event) {
	ballAction(event, 1, 2);
});
tactileK.on("touch drag", function(event) {
	ballAction(event, 2, 2);
});
tactileL.on("touch drag", function(event) {
	ballAction(event, 3, 2);
});
tactileM.on("touch drag", function(event) {
	ballAction(event, 0, 3);
});
tactileN.on("touch drag", function(event) {
	ballAction(event, 1, 3);
});
tactileO.on("touch drag", function(event) {
	ballAction(event, 2, 3);
});
tactileP.on("touch drag", function(event) {
	ballAction(event, 3, 3);
});


function ballAction(event, coY, coX) {
	switch(event.type) {
		
		case "touch":
		break;
		
		case "drag":
			
			//console.log('x: ' + Math.abs(event.gesture.deltaX) + ', y: ' + Math.abs(event.gesture.deltaY) );
			
			if( Math.abs(event.gesture.deltaX) > Math.abs(event.gesture.deltaY) ) {
				
				if( Math.abs(event.gesture.deltaX) < 20 || Math.abs(event.gesture.deltaX) > 40 )break;
				
				if( event.gesture.deltaX < 0 ) {
					goLeft(coX);
				} else {
					goRight(coX);
				}
				
			} else {
				
				if( Math.abs(event.gesture.deltaY) < 20 || Math.abs(event.gesture.deltaY) > 40 )break;
				
				if( event.gesture.deltaY < 0 ) {
					goHigh(coY);
				} else {
					goDown(coY);
				}
			}

		break;
	}
	
	refreshGrid();
}

