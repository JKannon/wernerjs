// Set Active Classes

if ( document.body.id !== "" ){
	var body_classes = $('body').attr('class').split(/\s+/);
	var section = $('body').attr('id').split(/\s+/);
	$.each(body_classes,function(index,classname) {
		// console.log (body_classes);
		if (body_classes[0] == "index" && body_classes[1] == "secondary_landing") {
			$('#sidenav li.' + section).addClass('active');
		} else {
			$('#sidenav li.' + classname).addClass('active');
		}
	});
}


// Change the viewport 
if(sessionStorage.isResponsive != 'true' && sessionStorage.isResponsive != null ){
	document.write('<meta name="viewport" content="width=992">');
}
else{
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
}


//Button at the bottom of mobile site to show the full site

function showFullSite(){ 
    sessionStorage.isResponsive = 'false';
    location.reload();
}

// Code to check where you are in the browser

var homeURL = window.location.protocol + '//' + window.location.hostname;
var thePath = window.location.pathname;

// Array of the allowed URLs

var safeURLs = ["/", "/content/solutions/", "/content/solutions/freight_management/integrated_tms.cfm", "/content/solutions/freight_management/supplier_diversity.cfm", "/content/solutions/freight_management/our_customers.cfm", "/content/solutions/freight_movement/van.cfm", "/content/solutions/global_implementation/global_services.cfm", "/content/solutions/global_implementation/cross_border_operations.cfm", "/content/solutions/technological_advantages/analysis_services.cfm", "/content/about/", "/content/drivers/", "/content/drivers/werner_advantages/veteran_benefits/", "/content/drivers/apply_now/driver_application.cfm", "/content/drivers/driver_services/", "/content/drivers/contact.cfm", "/content/drivers/driver_opportunities/", "/content/drivers/werner_advantages/", "/content/drivers/driver_resources/", "https://drivers.werner.com/", "https://iview.werner.com/SMART/GenericLogin.aspx?LoginType=SMART&ServerName=smart.wernervas.com", "/content/solutions/freight_quote/", "/content/carriers/available_loads/available_loads_state.cfm", "/content/carriers/available_loads/", "/content/solutions/contact.cfm", "/content/carriers/carrier_qualification_process/payment_options.cfm", "/content/teams/", "/content/new_career/", "/apps/",  "/apps", "/apps/index.cfm", "/apps/final-mile", "/apps/final-mile/", "/apps/final-mile/index.cfm", "/content/solutions/freight_movement/final_mile/", "/content/solutions/freight_movement/final_mile/index.cfm","/content/carriers/qualified_carrier_opportunities/final_mile_delivery_carrier.cfm"];

var youAreSafe = $.inArray(thePath, safeURLs);
if( youAreSafe > -1){
	//do nothing
}
else{
	if ((window.innerWidth <= 767 && sessionStorage.isResponsive != 'false') || (window.screen.width <= 767 && sessionStorage.isResponsive != 'false')) {
		window.location.replace('/');
	}
}

// The pop up video code on the http://www.werner.com/content/teams/ page

function openTeamFancybox() {
// launches fancybox after half second when called
	setTimeout(function () {
        $('#TeamVid').trigger('click');
    }, 500);
};

$(document).ready(function () {
    var teamPopUpVid = $.cookie('teamPopUpVid'); // create the cookie
    if (teamPopUpVid == 'yes') {
        return false; // second page load, cookie is active so do nothing
    } else {
        openTeamFancybox(); // first page load, launch fancybox
    };
    // assign cookie's value and expiration time
    $.cookie('teamPopUpVid', 'yes', {
        expires: 7 // the number of days the cookie will be effective
    });
    // your normal fancybox script
    $("#TeamVid").click(function () {
        $.fancybox();
    });
});
