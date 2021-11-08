# WebProject

Story of the Project and its Details: 
The main idea behind this application is a story of a person in Covid Pandemic. I witnessed the 
story of a person who is affected by Corona. When he tested with COVID Positive, he isolated 
himself in a room. But one day when he faced breathing difficulty, his family members took him 
to the hospital which is near but there are no beds with oxygen facility. Due to the increase in 
the number of Covid cases, many hospitals are not equipped with all the facilities to treat Covid 
Patients, so there is a huge demand for beds. Owing to the lack of transparency on the availability 
of beds in hospitals, many suspected COVID-19 patients, especially those who suffer from 
breathlessness, are left to die at the gates of the hospitals or in the ambulances. This person who 
is in search of a bed was taken to more than 5 hospitals, but there were no beds and he passed 
away in transit. 
This happened due to the lack of transparency on bed availability and many private hospitals 
started charging more for admitting COVID Patients. The ones who cannot afford that 
amount started losing their lives, but the government and many other organizations started 
helping the needy people. Due to the lack of awareness about the places with all facilities are 
available, many people left roaming around hospitals. So, we have decided to develop an 
application that will help the patients. 
What is this Application about? 
This application will help the patients who are in need of a bed with all the facilities and showing 
the cost that they are charging. It also shows the nearest hospital according to the patient’s 
emergency. It will be developed only for COVID-19 bed availability first, later this can be scaled 
to all types of diseases, doctor availability, etc. The second module of the application will help 
the users to book a slot for covid vaccination at the nearest center. 
The application will provide various privileges based on the user role. Any user can search for the 
hospitals with the minimum distance from their current location and the users can navigate to 
the Google maps directly on one click. This application allows the user to Search for: 
 Nearest Hospitals
 Hospitals filter with Area
 Bed-Availability
 Cost/Free-of-cost 
 Facilities like Oxygen, ventilator, ICU 
Who will benefit out of this? 
This platform helps people to search for hospitals with all the facilities they want. And it also 
helps hospitals to reach a large group of people. Anyone who wants to admit in an emergency 
can use this application and find out the details very fast. 
People will benefit from: 
 Available hospitals 24 x 7 with facilities 
 Emergency Admit information 
 Slot booking for vaccination. 
Why?
It aids the people in an emergency to reach the right hospital at right time. So, this saves both 
time and lives. It also helps to get the right treatment on time. This will benefit people in 
pandemic times where there is a huge demand for beds in hospitals. By using this application, we 
can: 
 Save our life 
 Save our time 
 Easily accessible from anywhere. 
 Prevention is better than cure(This application will help the users to book a slot for 
vaccination.) 
Where? 
As it is online, anyone who has internet can access it from their mobiles, desktops and laptops. 
 
How?
People can search from their devices with internet by using filters. The application will be 
developed with all the facilities, they can select the provided options and view the hospitals. 
Users can book a slot for covid-19 vaccination. 
Data of the Project and its details: 
As we are developing the Hospital Search application the database plays a crucial role. The data 
of each hospital should be maintained time to a time basis. We found the dataset of Pune from 
https://www.kaggle.com/. This data contains area-level hospitals, Cost that they are charging, 
Bed-Availability with various facilities like Oxygen, ICU, Ventilator, etc. This data will perfectly 
match our idea and we have decided to use this data for our application. 
Please find the below data related screenshots: 
1. We have taken the data from one website named Kaggle. We can be able to see the data 
page in the below screenshot. 
2. Downloaded data information is available in excel. And this is the data we have used to 
build our website. Data extracted from "Pune's covid-19 center care ". 
The dataset provides details of the available hospital beds for covid-19 in Pune, as on 31st 
august 2020. You can run the attached code in the note to scrap the latest data from the 
website. The dataset has 237 rows * 16 columns. 
3. In the below screenshot, we have all the details which are available in the data set. The 
information is about how many vacancy beds are available, how many oxygens, 
ventilators, ICU beds are available hospital. 
Vaccination centers information: 
By using this Application users can find nearby vaccination centers, as well as they, can book an 
appointment on a selected date. 
Please find the below Vaccination centers information screenshots: 
1. We have taken the data from one website named Kaggle. We can be able to see the data 
page in the below screenshot. 
Use Case Diagrams:
(img) Use case diagram for user actions with the application. 
(img)Use case diagram for slot booking 
Class Diagrams: 
Working screens from the project: 
Home Page: 
Below screenshot is the main page of the Application. 
Login Page:
Logged in as Haritha Andem: 
Maintenance team login to the account by using credentials. 
Search for the Hospital by Name:
Find the location of the hospital by clicking on maps icon: 
Side Menu:
Find Hospitals with Bed Availability using Filters: 
After applying filters, search for the beds: 
Book a slot for Covid vaccine:
Select the date to book a slot:
Booking confirmation: 
Improvement from the previous increment: 
In previous increment we have worked on: 
1. Downloaded Pune hospitals data from Kaggle and after data cleaning, loaded data into 
SQL data base. 
2. Integrated Front-end(React JS), Backend(NodeJS) and Database(SQL). 
3. Implemented the home page of the Application Which includes, Application logo, search 
bar, top menu bars. 
4. Finding nearby hospitals using current location and calculating the distance using 
latitude and longitude and providing all information about total bed availability and 
ventilators, oxygen bed availability in each hospital. 
5. As well as, providing the location of the hospital to the user. 
In current increment: 
1. We have implemented the login page using google cloud platform. 
2. Data for vaccination centers is collected and processed. Database setup for these centers, 
user details and booking details for covid vaccination is created. 
3. Implemented the side Menu, user can filter the hospitals based on area/category. 
Suppose If they want to check the availability in only government hospitals, they can apply 
the filters then search for the beds. 
4. This website will help the user to find nearest covid-19 vaccination centers and to book 
an appointment. 
5. We are providing brief information about this website in about tab and contact 
information also available in the webpage. 
6. Created separated tables in SQL to store user details, slot booking details, Vaccination 
centers details. 
Important code snippets from the project: 
Setting up the database: 
As we have used the current flowing data from Kaggle, we moved the csv data to the 
database(we have used Mysql database for our application) 
Backend setup & writing API calls: 
We choose node js along with express as a middleware, as the first step we have created server 
using express, we have installed express, mysql, cors, cookie-parser, path, http-errors packages, 
and connected to the database using the createPool(). 
We have used get method for fetching the details from the database by parsing the query 
params. 
Booking details table:
Covid bed vacancy data table: 
Covid Test centers data:
User-details data:
Index.js: 
Testing Api calls using postman:
Frontend setup 
We used react js framework for the frontend. The packages that we used for our application 
are geodistance, geolib, materialui, react-datepicker, react-goggle-login. We have implemented 
routing, fetching details by making Api calls using axios. 
Package.json
Routing Component: 
Application Logo Component:
Search Bar Component:
Top Menu: 
Homepage Component:
List of hospital components: 
Vaccination Booking:
Styles:
About.js
Index.js
Network call for Api:
Google Cloud Platform: 
Work-sharing/Module sharing between teams: 
Arun Kumar: Node js, Express 
Haritha: React js, CSS 
Divya: HTML, CSS, SQL, Data 
Any issues, Blockages with the project: 
No issues as of now, we had some challenges like finding the nearest hospitals, data cleaning. 
GitHub link for your reference: 
https://github.com/harithaandem/WebProject
Video link for your project: 
https://drive.google.com/drive/folders/1aOoc9eNA7--5KIA8hhKcybuzrM-e8cHf?usp=sharing
Presentation link for your project: 
https://drive.google.com/drive/folders/1ch1sFYqmLZaWxw7rr1_rbqiPZ7v9uEyu?usp=sharing
Packages Used: 
https://www.npmjs.com/package/geolib
https://www.npmjs.com/package/react-datepicker
https://www.npmjs.com/package/history
https://www.npmjs.com/package/moment
https://www.npmjs.com/package/axios
References: 
https://www.newindianexpress.com/states/andhra-pradesh/2020/jul/02/covid-19-confusionabout-hospital-beds-results-in-death-during-transit-for-patients-in-andhra-pradesh2163718.html 
https://www.kaggle.com/corinnevaz/pune-covid19-hospital-bed-availability-dataset 
https://www.divcommpunecovid.com/ccsbeddashboard/hsr 
https://medium.com/zero-equals-false/using-cors-in-expresscac7e29b005b#:~:text=Enabling%20CORS,using%20the%20cors%20npm%20module.&text=Tha
t's%20it.,CORS%20is%20now%20enabled.&text=The%20Access%2DControl%2DAllow%2D,allo
ws%20access%20from%20any%20origin
https://www.npmjs.com/package/geo-distance
https://www.latlong.net/convert-address-to-lat-long.html
https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
https://www.pmc.gov.in/en/covid-vaccination-center-list
