# Clinic Tour Interest Survey - Help Guide

## Purpose
The Clinic Tour Interest Survey is designed to gather information from visitors about their interests and preferences for a tour of the clinic. This information will help us tailor the tour to your needs and ensure that you receive a personalized experience during your visit.

## How To Complete This Form

1. Please fill out the form completely and accurately.
2. Select your preferred options for the tour, including the date, time, and areas you would like to see.
3. If you have any specific departments of interest, please specify them in the text field.
4. Choose how you would like to be contacted after completing the form.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): This is the name you would like to be known by during the tour. Please enter your full name, including your first and last name.
* **Email Address** (`email`, email, required): This is the email address we will use to contact you about the tour. Please enter a valid email address.
* **Phone Number** (`phone`, text, required): This is the phone number we will use to contact you about the tour. Please enter a valid phone number.
* **Type of Visitor** (`visitor_type`, select_one, required): This option allows you to select the type of visitor you are. Please choose from the following options:
	+ Prospective patient
	+ Current patient
	+ Family member
	+ Healthcare professional
	+ Student
	+ Other
* **Interested in facility tour?** (`tour_interest`, select_one, required): This option allows you to select how interested you are in taking a tour of the facility. Please choose from the following options:
	+ Very interested
	+ Somewhat interested
	+ Neutral
	+ Not interested
* **Preferred tour date** (`preferred_date`, date, required): This is the date you would like to take the tour. Please enter a valid date.
* **Preferred time** (`preferred_time`, select_one, required): This option allows you to select the time you would prefer to take the tour. Please choose from the following options:
	+ Morning (8am-12pm)
	+ Afternoon (12pm-5pm)
	+ Evening (5pm-8pm)
	+ Flexible
* **Number of people in group** (`group_size`, number, required): This is the number of people that will be in your group for the tour. Please enter a valid number.
* **Areas of Interest** (`areas_interest`, select_multiple, required): This option allows you to select the areas of the facility you would like to see during the tour. Please select all that apply:
	+ Emergency department
	+ Patient rooms
	+ Operating room
	+ Diagnostic imaging
	+ Laboratory
	+ Cafeteria/Amenities
	+ Administrative offices
	+ All areas
* **Specific departments of interest** (`specific_departments`, text, required): This is the opportunity to specify any specific departments you would like to see during the tour. If none, please leave blank.
* **Preferred tour duration** (`tour_duration`, select_one, required): This option allows you to select the length of time you would like the tour to be. Please choose from the following options:
	+ 30 minutes
	+ 1 hour
	+ 1.5 hours
	+ 2 hours
	+ Flexible
* **Tour guide preference** (`guide_preference`, select_one, required): This option allows you to select who you would prefer to be your tour guide. Please choose from the following options:
	+ Clinical staff
	+ Administrative staff
	+ Volunteer
	+ No preference
* **Any accessibility accommodations needed?** (`accessibility_needs`, text, required): This is the opportunity to inform us of any accessibility needs you may have. If none, please leave blank.
* **Mobility assistance needed?** (`mobility_assistance`, select_one, required): This option allows you to inform us if you need mobility assistance during the tour. Please choose from the following options:
	+ Yes
	+ No
* **Special requests or considerations** (`special_requests`, text, required): This is the opportunity to provide any special requests or considerations you may have for the tour. If none, please leave blank.
* **How would you like to be contacted?** (`communication_preference`, select_one, required): This option allows you to select how you would like to be contacted about the tour. Please choose from the following options:
	+ Email
	+ Phone
	+ Text message
	+ Mail
