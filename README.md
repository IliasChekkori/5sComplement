README


**What is our project?**

We wanted to create a website where farmers can buy, sell, and view, waste produced by other farmers. Users will be able to Log-in (sign-up), see the home page which consists of listings from other farmers, and either buy or add their own listing. If they see one that intrests them, (note, what they will buy is another farmers waste) they will contact the seller. They will see that farmers contact info, and by doing that we help connect farmers. 




**Why did we pick it?**

First we feel it is important to define Sustainability. Sustainability is the ability to meet the needs of the present without compromising the ability of future generations to meet their own needs. In the context of agriculture, sustainability means producing food in a way that is environmentally, socially, and economically responsible.

Food waste is a significant challenge to achieving sustainability in agriculture. Farmers are responsible for producing the majority of the world's food supply, but they also generate a significant amount of food waste. According to the Food and Agriculture Organization of the United Nations, around one-third of all food produced globally is lost or wasted every year. This amounts to approximately 1.3 billion tons of food wasted annually.



**Documentation:**
How to Open Our Website?
1) Open the terminal and move into the server directory, and run npm install
2) Then run the command "node index.js", you should see the database being connected
3) Then in a new terminal window, open client 
4) run "npm i"
5) After everything is installed, run npm start

Drive: All of our documents are on the google drive.


API EndPoints and Database Schema: [https://docs.google.com/document/d/1vl05qW_4gAOcyTET7IWTpvNcY7j3cFF_xGbdxLLq5EM/edit?usp=sharing](https://docs.google.com/document/d/1vl05qW_4gAOcyTET7IWTpvNcY7j3cFF_xGbdxLLq5EM/edit?usp=sharing)
This document consitsts of our website's Databse Schema, and the API endpoints. Each route will have the specified JSON that it expects or is going is to output. For example:
```
POST user request:    
POST localhost:8000/users
Content-Type: application/json
Request: 
{
    name: "Bruce Wayne",
    address: "123 Manor St",
    email: "naa224",
    phone-number: 484-159-4921
}
```
Brainstorm: Where we did most of our brainstorm. [https://docs.google.com/document/d/1N18YaJRKcYf4lUxsjB8ZmNzj5gygyvKnjAitiFkAzFY/edit?usp=sharing](https://docs.google.com/document/d/1N18YaJRKcYf4lUxsjB8ZmNzj5gygyvKnjAitiFkAzFY/edit?usp=sharing)
Here we also created a brainstorm, where brainstormed how the specific website would look. We include the different landing pages, and what they purpose of them would be. 

**Runthrough of Website**
```
- Initially, users are prompted to login using Google Oauth.
- The home and any other page can only be accessed once a user has successfully logged in
- Next, the home page is presented to the user, in which they are able to see various postings, contact the seller, and list their own waste.
- This page will also allow users to see and edit their profile
- Essentially, our website fucntions as a market place for farmers
- However, the app is not exclusive to farmers, corporations, individuals, and various other entities can also manage their waste through our app
```

**Next Steps:**
We do see a future for this idea. It is an innovative product that helps a niche group, and can become really helpful in the agricultural industry. Below are some additional features the website could incorporate:
   ```
   1. Incorporate a messaging system in the website
   2. Incorporate AI response 
   3. Sort based on location
   4. Create categories to work
   ```


