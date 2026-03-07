</thinking>

# wedding_appearance_form - Help Guide

## Purpose

This form is used to gather information about the number of guests attending and not attending a wedding. This form is typically used for weddings where there are guests invited and not attending.

## How To Complete This Form

1. Fill in the Wedding Details section with any relevant information about the wedding, if any.
2. Enter the Number of Guests Attending by selecting the corresponding value from the options.
3. Enter the number of Guests Not Attending.
4. Indicate whether each guest not attending has a reason by selecting "Yes" or "No" in the Guest Attending section.
5. Enter the phone number of each guest not attending in the Guest Phone section.

## Field-by-Field Explanation

* **Wedding Details** (`wedding_details`, text, required: false):
	+ Enter any information about the wedding that you want to provide, such as the date, time, and location.
* **Number of Guests Attending** (`guests_attending`, number, required: false):
	+ Select the number of guests that are attending the wedding.
* **Guests Not Attending** (`guests_not_attending`, number, required: false):
	+ Enter the number of guests that are not attending the wedding.
* **Guest Attending** (`guests_attending_name`, select_multiple, required: false):
	+ Select "Yes" or "No" for each guest not attending to indicate if they have a reason for not attending.
* **Guest Phone** (`guests_attending_phone`, text, required: false):
	+ Enter the phone number of each guest not attending.

## Tips

* Make sure to fill in all the required fields accurately.
* If a guest not attending has a reason, select "Yes" in the Guest Attending section.
* If a guest not attending does not have a reason, select "No" in the Guest Attending section.
* Use the Guest Phone section to enter the phone number of each guest not attending.
