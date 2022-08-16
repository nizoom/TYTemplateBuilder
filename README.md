# TYTemplateBuilder
An employee-facing web app that provides a user interface to fill out templated thank you emails for physical checks that come in the mail.

![tytemplate](https://user-images.githubusercontent.com/62722050/184931502-8c7e2993-33ed-4438-9a09-d478981da339.gif)

## Goal

The goal of this project was to create a tool for non-profits to expedite the process of sending acknowledgments for mailed checks. The need for such a tool arose when, after creating a backend app to automate intake of online donations, my director asked me to hard code data from a few checks to generate thank you emails. The backend Node app I made was built to take in data from a donation widget's API and so it didn't make much sense to continuously change and replace the feeding tube to the email generation function. So this React app became the UI that allowed employees to easily fill in custom information from an offline donation and send the resulting thank you email. 


## Features

The forms are designed to capture information from offline donations. That means there can be multiple donor names and donation types. Clicking the + button allows for the email to be addressed to multiple donors. Selecting from the dropdown of donation types will change the email template accordingly as well as the relevant form fields. 

The visualizer on the right side shows the changes to template as the employee fills out the form. Thereby, they have a better sense of what will ultimately be sent out. The pieces of text highlighted in yellow indicate dynamic content that can be changed through the input fields. Any new text will be added automatically and be grammatically correct which is important when listing multiple donors. 

The frontend is hosted on Netlify. The backend is built out of the NodeJS project mentioned above.

## Installation

This project was built custom for a specific non profit. Please email me at nissimram1812@gmail.com if you would like assistance in replicating some of its features.  
