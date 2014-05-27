

// on affiche les zones touchées par le multitouch

if(!Hammer.HAS_TOUCHEVENTS && !Hammer.HAS_POINTEREVENTS) {
		Hammer.plugins.showTouches();
}

// on simule le multitouch grâce à SHIFT + MOUSE
if(!Hammer.HAS_TOUCHEVENTS && !Hammer.HAS_POINTEREVENTS) {
		Hammer.plugins.fakeMultitouch();
}


var hammer = Hammer($("#a"), {
		transform_always_block: true,
        drag_block_horizontal: true,
        drag_block_vertical: true,
		tap_always: false,
		drag_min_distance: 0
});

hammer.on("touch tap doubletap transformstart transform dragstart drag hold", function(event) {
	ballAction(event);
});

function ballAction(event) {
	switch(event.type) {

		case "touch" :
			if( event.gesture.deltaX % 200 == 0) {
				console.log("->"+event.gesture.deltaX);
				goRight(0);
			}
			goLeft(2);
			//positionY = lastPositionY + event.gesture.deltaY;
		break;
	}
	refreshGrid();
}

