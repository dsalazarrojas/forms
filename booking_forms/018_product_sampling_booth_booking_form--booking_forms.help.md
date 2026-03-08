# Product Sampling Booth Booking Form - Help Guide
## Purpose
This form is used to book a product sampling booth at a specified event, or make changes to an existing booking. If you have a previous booking, please do not submit this form. If you are unsure or have questions about booking a product sampling booth, please contact us directly.

## How To Complete This Form
1. Fill in your personal details, including:
	* User Name: Your name as the representative of the company.
	* Booth Type: Select the type of booth you need.
	* Booth Location: Choose the location within the event area.
	* Event Date: Choose the date of the event.
	* Start and End Time: Enter the start and end time of your event.
2. Add your product details, including:
	* Product Description: A brief description of the product being sampled.
	* Company: The name of your company.
	* Contact Person: Your name and title.
3. Enter your contact information, including:
	* Email: Your company email address.
	* Phone Number: Your company phone number.

## Field-by-Field Explanation
- **User Name** (`user_name`, text, required: false): Enter your name as the representative of your company.
- **Booth Type** (`booth_type`, select_one, required: false): Choose the type of booth you need.
- **Booth Location** (`booth_location`, select_multiple, required: false): Select the location where you would like to have your booth located.
- **Event Date** (`event_date`, date, required: false): Choose the date of the event.
- **Start Time** (`start_time`, time, required: false): Enter the start time of your event.
- **End Time** (`end_time`, time, required: false): Enter the end time of your event.
- **Product Description** (`product_description`, note, required: false): Provide a brief description of the product being sampled.
- **Company** (`company`, text, required: false): Enter your company name.
- **Contact Person** (`representative`, text, required: false): Enter your name and title.
- **Email** (`email`, email, required: false): Enter your company email address.
- **Phone Number** (`phone`, text, required: false): Enter your company phone number.
