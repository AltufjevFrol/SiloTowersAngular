var AppComponent = ng.core.Component({
	selector: 'my-app',
	styles: [`
		.towers {
			background: #2D2D32;
			display: flex;
			justify-content: space-around;
		}
	`],
	template:`<div class="towers">
							<tower></tower>
							<tower></tower>
							<tower></tower>
							<tower></tower>
							<tower></tower>
							<tower></tower>
							<tower></tower>
							<tower></tower>
						</div>`,
	})
  .Class({
  	constructor: function(){

  	},
  });

