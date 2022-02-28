let stripeWidth = 16;
let stripeSpacing = 16;
let color1 = '#339af9';
let color2 = '#ff5b42';

let canvas, ctx;

function onLoad() {
	canvas = document.getElementById('canvas');
	canvas.width = 800;
	canvas.height = 600;
	ctx = canvas.getContext('2d');

	paint();
	setInterval(paint, 800);
}

function paint() {
	ctx.fillStyle = color1;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	const center = {
		x: canvas.width / 2,
		y: canvas.height / 2,
	};
	const radius = 200;
	const grd = ctx.createRadialGradient(
		center.x,
		center.y,
		0,
		center.x,
		center.y,
		radius
	);
	grd.addColorStop(0, '#fff');
	grd.addColorStop(1, '#dcffbb');
	ctx.fillStyle = grd;
	// ctx.fillStyle = '#dcffbb';
	ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
	ctx.fill();

	ctx.fillStyle = color2;
	for (let y = 0; y < canvas.height; y += stripeWidth) {
		ctx.fillRect(0, y, canvas.width, stripeWidth);
		y += stripeSpacing;
	}
	stripeSpacing += 0.4;
	const colorTmp = color1;
	color1 = color2;
	color2 = colorTmp;
}
