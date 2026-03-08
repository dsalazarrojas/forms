# Water Usage Questionnaire - Help Guide

## Purpose
This form is designed to collect information about household water usage. It helps us understand how much water your household uses, your water source, household size, and other related details. Please note that this form is intended for your internal purposes only, and the information collected will not be shared publicly. If you have already submitted this form, please do not submit it again to avoid duplication of effort.

## How To Complete This Form

To complete this form, follow these steps:

1. Answer all questions truthfully and thoroughly.
2. Make sure to provide accurate information about your household.
3. Choose the correct option for each question.
4. Submit the form once you have completed all the questions.

## Field-by-Field Explanation

### Household Information

* **Household Information** (`household_info`, text, required: false): Please provide a brief description of your household, including the number of people living there and any other relevant details.

### Household Water Use

* **Household Water Use** (`household_use`, number, required: false): Estimate the amount of water your household uses per day (in liters or gallons).

### Water Source

* **Water Source** (`water_source`, select_one, required: false): Choose your primary water source:
	+ Water Meter
	+ Well
	+ Pond
	+ Lake/River
	+ Rainwater
	+ Other (please specify)

### Household Size

* **Household Size** (`household_size`, select_multiple, required: false): Select the approximate number of people living in your household:
	+ 1-5
	+ 6-10
	+ 11-20
	+ More than 20

### Water Usage

* **Water Usage** (`water_usage`, time, required: false): Estimate the total amount of time spent on water usage per day (in hours and minutes).

### Water Bill

* **Water Bill** (`water_bill`, number, required: false): Enter your estimated monthly water bill (in dollars).

### Conservation Actions

* **Conservation Actions** (`conservation_actions`, select_multiple, required: false): Check all actions taken to conserve water:
	+ Fixing Leaks
	+ Using Low-Flow Fixtures
	+ Using Water-Efficient Appliances
	+ Installing a Water-Efficient Washing Machine
	+ Other (please specify)

### Follow-ups

* **Follow-ups** (`follow_ups`, select_multiple, required: true): Select the frequency of follow-up questions:
	+ Every 3 months
	+ Every 6 months
	+ Every 12 months
	+ Never

### Contact Info

* **Contact Info** (`contact_info`, email, required: false): Enter your email address for follow-up questions or concerns.

Note: Please make sure to enter accurate information and provide complete answers to help us better understand your household's water usage.
