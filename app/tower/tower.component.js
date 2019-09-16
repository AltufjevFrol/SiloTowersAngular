
var TowerComponent = ng.core.Component({
	selector: 'tower',
	styles: [` 
            
		.silo {
			width: 154px;
			margin: 0 5px 0 5px;
		}
		.middle3 {
			position: relative;
		}
		.indicator {
		position: absolute;
		bottom: 0;
		width: 122px;
		
		background: #0eff0e63;
		left: 16px;
		}
		svg {
			display: block;
		}
		.section {
			margin-bottom: 3px;
		}
		.title {
			font: 14px 'Roboto-Regular', serif;
			color: white;
			text-align: center;
			margin-bottom: 10px;
		}
		.value {
			font: 26px 'Roboto-Regular', serif;
			color: white;
			text-align: center;
			width: fit-content;
			margin: 0 auto 20px auto;
			padding: 0 5px;
			border-bottom: 5px solid green;
		}
    `],
	template:  `<div [id]="ident" class="silo" (updateLevel)="update()" >
		<div class="title">Уровень карналита в силосной башне №{{ident}}</div>
		<div class="value">{{value}}%</div>
		<div class="top section">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			 width="154px" height="105px">
				<line stroke="#8B959F" stroke-width="8" x1="53" y1="0" x2="101" y2="0"/>
				<rect x="0" y="5" fill="#CBCBCB" width="154" height="5"/>
				<linearGradient id="SVGR_TOP" gradientUnits="userSpaceOnUse" x1="8" y1="66" x2="146" y2="66">
						<stop offset="0" style="stop-color:#616166"/>
						<stop offset="0.21" style="stop-color:#9B9B9B"/>
						<stop offset="1" style="stop-color:#48484F"/>
					</linearGradient>
				<rect x="8" y="13" style="fill:url(#SVGR_TOP);" width="138" height="92"/>
			</svg>
		</div>
		<div class="middle1 section">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			 width="154px" height="100px">
				<rect x="0" y="0" fill="#CBCBCB" width="154" height="5"/>
				<linearGradient id="SVGR_MIDDLE1" gradientUnits="userSpaceOnUse" x1="8" y1="56" x2="146" y2="56">
						<stop offset="0" style="stop-color:#616166"/>
						<stop offset="0.21" style="stop-color:#9B9B9B"/>
						<stop offset="1" style="stop-color:#48484F"/>
					</linearGradient>
				<rect x="8" y="8" style="fill:url(#SVGR_MIDDLE1);" width="138" height="92"/>
			</svg>
		</div>
		<div class="middle2 section">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			 width="154px" height="100px">
				<rect x="0" y="0" fill="#CBCBCB" width="154" height="5"/>
				<linearGradient id="SVGR_MIDDLE2" gradientUnits="userSpaceOnUse" x1="8" y1="56" x2="146" y2="56">
						<stop offset="0" style="stop-color:#616166"/>
						<stop offset="0.21" style="stop-color:#9B9B9B"/>
						<stop offset="1" style="stop-color:#48484F"/>
					</linearGradient>
				<rect x="8" y="8" style="fill:url(#SVGR_MIDDLE2);" width="138" height="92"/>
			</svg>
		</div>
		<div class="middle3 section">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			 width="154px" height="100px">
				<rect x="0" y="0" fill="#CBCBCB" width="154" height="5"/>
				<linearGradient id="SVGR_MIDDLE3" gradientUnits="userSpaceOnUse" x1="8" y1="56" x2="146" y2="56">
						<stop offset="0" style="stop-color:#616166"/>
						<stop offset="0.21" style="stop-color:#9B9B9B"/>
						<stop offset="1" style="stop-color:#48484F"/>
					</linearGradient>
				<rect x="8" y="8" style="fill:url(#SVGR_MIDDLE3);" width="138" height="92"/>
			</svg>
			<div class="indicator" [style.height]="height"></div>
		</div>
		<div class="bottom section">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			 width="154px" height="79px">
				<rect x="0" y="0" fill="#CBCBCB" width="154" height="5"/>
				<polygon style="fill:url(#SVGR_BOTTOM);" points="68,79 8,8 146,8 86,79"/>
				<linearGradient id="SVGR_BOTTOM" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="138" y2="0">
								<stop offset="0" style="stop-color:#616166"/>
								<stop offset="0.21" style="stop-color:#9B9B9B"/>
								<stop offset="1" style="stop-color:#48484F"/>
				</linearGradient>
			</svg>
		</div>
		<div class="karn">
			<div class="title">Масса карналита</div>
		<div class="value">{{mass}}</div>
		</div>
	</div>`,

	
	inputs : ['mass', 'ident'],
	})
  .Class({
	constructor: function() { 
	
	this.value=50;
	this.height='200px';
	}
});
  TowerComponent.prototype.update = function(){
  	
  	let prop = getIndicator(this.ident);
  	this.value = prop.value;
  	this.height = 400*prop.value/100+'px';
  };




