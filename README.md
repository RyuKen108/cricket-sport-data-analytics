Cricket Data analytics Report

In this Project I have analyzed the data on the famous sport called Cricket. I have done this project using web scrapping, python, pandas and power BI.
First I have collected the data from the official cricket website named ESPN. Specifically, I have collected the T20 cricket format data from this website.

1) Data Collection : To collect the Data there are various options either you can collect the data manually into the excel sheet or using the Python and it's libraries you can fetch the data. In this particular project I have fetched the data via a web application called "Bright Data". Bright data allows to fetch the data using simple JavaScript code and HTML elements and stored it in the json format. I have fetched 4 types of data and stored it in 4 different types of json files, 1st is match summary, 2nd batting summary, 3rd bowling summary and 4th player info.

2) Data cleaning and transformation: imoported pandas and json in notebook. And cleaned the data, connected one table to another based no the unique ids. then converted json files to csv files.

3) Data transformation using power query: imported the csv files into powerBI and performed the data transformation like removing the duplicates, changing the name of some columns, removed some keywords such as (c) captain, trimmed the data, and basically small things to keep the data clean and more clearly visible.

4) Data modelling and built parameters using DAX: in this step, performed the modelling in the power BI itself ie connected the data of table with each tables and built all the required paramters using DAX to store all the calculations and operation that we will need to perform.

5) Generating Dashboards using Power BI: After modeling the data and building the parameters I created some Dashboards using various different visualization charts etc.
