require("application.css");
require("bootstrap/dist/css/bootstrap.css");
var coreJS          = require('core-js');
var zoneJS          = require('zone.js');
var ng              = {
  core:                   require("@angular/core"),
  common:                 require("@angular/common"),
  compiler:               require("@angular/compiler"),
  forms:                  require("@angular/forms"),
  platformBrowser:        require("@angular/platform-browser"),
  platformBrowserDynamic: require("@angular/platform-browser-dynamic"),
  router:                 require("@angular/router"),
  http:                   require("@angular/http")
};

var RESULTS = [
  {
    first_name: "Pat",
    last_name: "Smith",
    username: "psmith",
    email: "pat.smith@somewhere.net",
    created_at: "2016-02-05",  
  },
  {
    first_name: "Patrick",
    last_name: "Jones",
    username: "pjpj",
    email: "jones.p@business.net",
    created_at: "2014-03-05",  
  },
  {
    first_name: "Patricia",
    last_name: "Benjamin",
    username: "pattyb",
    email: "benjie@aol.info",
    created_at: "2016-01-02",  
  },
  {
    first_name: "Patty",
    last_name: "Patrickson",
    username: "ppat",
    email: "pppp@freemail.computer",
    created_at: "2016-02-05",  
  },
  {
    first_name: "Jane",
    last_name: "Patrick",
    username: "janesays",
    email: "janep@company.net",
    created_at: "2013-01-05",  
  },
];

var CustomerAppComponent     = require("./CustomerAppComponent");
var CustomerSearchComponent  = require("./CustomerSearchComponent");
var CustomerDetailsComponent = require("./CustomerDetailsComponent");
var AddressComponent         = require("./AddressComponent");
var CreditCardComponent      = require("./CreditCardComponent");
var CustomerInfoComponent    = require("./CustomerInfoComponent");

// router configuration...


var routing = ng.router.RouterModule.forRoot( 
  [
    {
      path: "",
      component: CustomerSearchComponent
    }, 
    {
      path: ":id",
      component: CustomerDetailsComponent
    }
  ] 
);

var CustomerSearchAppModule = ng.core.NgModule({
  imports: [ 
    ng.platformBrowser.BrowserModule, 
    ng.forms.FormsModule,
    ng.http.HttpModule,
    routing
  ],
  declarations: [ 
    CustomerSearchComponent,
    CustomerDetailsComponent,
    AddressComponent,
    CreditCardComponent,
    CustomerInfoComponent,
    CustomerAppComponent
  ],
  bootstrap: [ CustomerAppComponent ]
})
.Class({
  constructor: function() {}
});

var AngularTestComponent = ng.core.Component({
  selector: "shine-angular-test",
  template: '\
  <h2 *ngIf="name">Hello {{name}}!</h2> \
  <form> \
    <div class="form-group"> \
      <label for="name">Name</label> \
      <input type="text" id="name" class="form-control" \
             name="name" bindon-ngModel="name"> \
    </div> \
  </form> \
  '
}).Class({
  constructor: function() {
    this.name = null;
  }
});


// AngularTestComponent to be defined...

var AngularTestAppModule = ng.core.NgModule({
  imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ],
  declarations: [ AngularTestComponent ],
  bootstrap: [ AngularTestComponent ]
})
.Class({
  constructor: function() {}
});

document.addEventListener('DOMContentLoaded', function() {
  var shouldBootstrap = document.getElementById("angular-test");
  if (shouldBootstrap) {
    ng.platformBrowserDynamic.
      platformBrowserDynamic().
      bootstrapModule(AngularTestAppModule);
  }

  if (document.getElementById("shine-customer-search")) {
    ng.platformBrowserDynamic.
      platformBrowserDynamic().
      bootstrapModule(CustomerSearchAppModule);
  }
});

