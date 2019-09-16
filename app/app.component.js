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
							<tower [ident]="id1" [mass]="mass1"></tower>
							<tower [ident]="id2" [mass]="mass2"></tower>
							<tower [ident]="id3" [mass]="mass3"></tower>
							<tower [ident]="id4" [mass]="mass4"></tower>
							<tower [ident]="id5" [mass]="mass5"></tower>
							<tower [ident]="id6" [mass]="mass6"></tower>
							<tower [ident]="id7" [mass]="mass7"></tower>
							<tower [ident]="id8" [mass]="mass8"></tower>
						</div>`,
	directives : [TowerComponent],
	})
  .Class({
  	constructor: function(){
  		this.id1 = 1;
  		this.mass1 = 1065;
  		this.id2 = 2;
  		this.mass2 = 998;
  		this.id3 = 3;
  		this.mass3 = 578;
  		this.id4 = 4;
  		this.mass4 = 967;
  		this.id5 = 5;
  		this.mass5 = 1365;
  		this.id6 = 6;
  		this.mass6 = 1143;
  		this.id7 = 7;
  		this.mass7 = 856;
  		this.id8 = 8;
  		this.mass8 = 956;
  	},
  });

