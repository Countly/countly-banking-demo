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
