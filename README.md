
# Banking Demo

  

## Login

  

When user click login button make API call and after that change device id with customer ID;

  

[https://support.count.ly/hc/en-us/articles/360037441932-Web-analytics-JavaScript-#changing-device-id](https://support.count.ly/hc/en-us/articles/360037441932-Web-analytics-JavaScript-#changing-device-id)

  
  

There are 2 option here :

  

1 - Merge prelogin and current user profile in Countly.

  

Countly.q.push(['change_id', "customerID"],true);

  

2 - Create new profile with ID

  

Countly.q.push(['change_id', "customerID"]);

  
  

Note : ID stores in local storage of browser. You can check easily.

![local storage](https://i.hizliresim.com/Rxn3f9.png)

  

And after change id user :

  

![user profile after change id](https://i.hizliresim.com/XGUqdQ.png)

## Custom Event

Custom event sample for transfering money with duration
    
Start transfer event for calculating duration. (ex: start event when user enter transfer page)

    Countly.start_event("Transfer");


End transfer event. (ex: after user sent money)

    Countly.end_event(
		  { 
	      "key": "Transfer",
	      "sum": 50,
	      "segmentation": { 
		       "type": "EFT"
		  } 
	});
	       
