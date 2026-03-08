# School Photography Order Form Template - Help Guide
## Purpose
This form is used to process and fulfill photography orders for events, sports teams, or other groups within a school.

## How To Complete This Form
To fill out this form, follow the steps below:

- First, ensure you have all the required information for the order before starting.
- Fill out the form completely and accurately.
- If you have any questions or concerns, contact the form owner or refer to internal documentation.

## Field-by-Field Explanation

* **First name** (`first_name`, text, required): Please enter the first name of the individual or group ordering the photos.
* **Last name** (`last_name`, text, required): Enter the last name of the individual or group ordering the photos.
* **Email** (`email`, email, optional): If you would like to be contacted about the order, please enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number so we can contact you about your order.
* **School ID** (`school_id`, number, required): Enter your school's ID number.
* **Order details** (`order_details`, text, optional): Add any relevant details about the order, such as the event name or photo request.
* **Date of event** (`date_of_event`, date, optional): Enter the date the event took place.
* **Event time** (`event_time`, time, optional): Enter the time of the event.
* **Payment method** (`payment_method`, select one, required): Select how you would like to pay for the photos:
	+ Stripe
	+ PayPal
	+ Square
* **Price** (`price`, number, required): Enter the total price for the photos.
* **Photo type** (`photo_type`, select multiple, optional): Select the type of photos you would like:
	+ Individual
	+ Class
	+ Group
* **Quantity** (`quantity`, number, required): Enter the number of photos you would like to order.
* **Total** (`total`, number, optional): This will be calculated automatically based on your previous answers.
* **Notes** (`notes`, text, optional): Add any additional notes or requests for your order.
