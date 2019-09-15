var AppModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule, TowerModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
});