# Homeownership Readiness Consultation Form - Help Guide
## Purpose
The Homeownership Readiness Consultation Form is designed to gather information about an individual's financial situation, employment status, and demographic details to assess their readiness to own a home.

## How To Complete This Form

1.  Please complete each field with your personal details.
2.  Ensure you provide accurate information to get a reliable assessment.
3.  If you're unsure about any field, please ask for clarification.

## Field-by-Field Explanation

* **What Is Your Income** (`income`, number, required): Enter your annual income range (0-20,000, 20,001-40,000, 40,001-60,000, 60,001-80,000, or more).
* **Where Do You Currently Reside** (`home_location`, text, required): Enter the city or region you currently reside in.
* **Employment Status** (`employment_status`, select_one, required): Select one of the following:
	+ **Active**: Currently employed.
	+ **Inactive**: Currently not employed.
* **Employed** (`employment_status_1`, number, optional): Not a field that needs to be filled in most cases. This field was likely a duplicate and should be removed or hidden from the form.
* **Unemployed** (`employment_status_2`, number, optional): Another duplicate field that shouldn't be filled. Please see **Employment Status** instead.
* **Retired** (`employment_status_3`, number, optional): Another duplicate field that shouldn't be filled. Please see **Employment Status** instead.
* **Home Ownership Status** (`home_ownership_status`, select_one, required): Select one of the following:
	+ **Active**: Currently own a home.
	+ **Inactive**: Currently do not own a home.
	+ **Lease**: Currently lease a home.
	+ **Both**: Own and lease a home.
	+ **Other**: Other home ownership status.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format `MM/DD/YYYY` (e.g., 01/01/1989).
* **Mortgage Status** (`mortgage_status`, select_one, required): Select one of the following:
	+ **Active**: Have a mortgage.
	+ **Inactive**: Do not have a mortgage.
* **None** (`mortgage_status_1`, number, optional): A duplicate field that shouldn't be filled. Please see **Mortgage Status** instead.
