/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
			classes: 'default everyone'
		},
		{
			module: "updatenotification",
			position: "top_bar",
			classes: 'default everyone'
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'default everyone'
		},
		{
			module: "calendar",
			header: "Efrei Paris",
			position: "top_left",
			config: {
				maximumEntries: 3,
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "https://www.myefrei.fr/api/public/student/planning/8sqV6mgtHSnr0wpwBNpp6w"
					}
				]
			},
			classes: 'Antoine'
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				compliments: {
					anytime: [
						"Hola !"
					],
					morning: [
						"Plop !",
						"Morning mood ?",
						"Bonne journée !"
					],
					evening: [
						"Bonne soirée !",
						"No procrastination",
						"Oyasumi nasai"
					]
				}
			},
			classes: 'default everyone'
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Paris",
				locationID: "6942553",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "5bd986a09bcd8bfcde14db24e6997fb9"
			},
			classes: 'default everyone'
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Paris",
				locationID: "6942553",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "5bd986a09bcd8bfcde14db24e6997fb9"
			},
			classes: 'default everyone'
		},
		{
		   module: 'MMM-Traffic',
		   position: 'bottom_left',
		   classes: 'bright medium', //optional, default is 'bright medium', only applies to commute info not route_name
		   config: {
		      api_key: 'AIzaSyBBxBGUsK8YAixx-gNCmVFuk-j2-JmJFLU',
		      mode: 'driving',
		      origin: '97 Rue du Génie, Vitry-sur-Seine',
		      destination: '30-32 Avenue de la République, 94800 Villejuif',
		      route_name: 'Ecole',
		      changeColor: true,
		      showGreen: false,
		      limitYellow: 5, //Greater than 5% of journey time due to traffic
		      limitRed: 20, //Greater than 20% of journey time due to traffic
		      traffic_model: 'best_guess',
		      interval: 120000, //2 minutes
		      showWeekend: false,
		      allTime: false,
		      startHr: 8,
		      endHr: 10,
		      hideOffHours: true,
		      loadingText: "Chargement...",
		      prependText: "Trajet",
		   },
		   classes: 'Antoine'
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "France 24",
						url: "http://www.france24.com/fr/france/rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			},
			classes: 'default everyone'
		},
		{
		    module: 'MMM-Facial-Recognition',
		    config: {
		        // 1=LBPH | 2=Fisher | 3=Eigen
		        recognitionAlgorithm: 1,
		        lbphThreshold: 80,
		        fisherThreshold: 250,
		        eigenThreshold: 3000,
		        useUSBCam: false,
		        trainingFile: 'modules/MMM-Facial-Recognition/training.xml',
		        interval: 2,
		        logoutDelay: 20,
		        // Array with usernames (copy and paste from training script)
		        users: ['Antoine'],
		        defaultClass: "default",
		        everyoneClass: "everyone",
		        welcomeMessage: true
		    }
		},
		

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
