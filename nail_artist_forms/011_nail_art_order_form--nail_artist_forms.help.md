# Nail Art Order Form - Help Guide
## Purpose
This form is used to gather information about nail art orders for internal purposes. It is intended for business-to-business use only and is not meant to be used for external communication with clients.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Select the type of service you wish to order by choosing one of the options for "Service Type".
2. Enter the details of your order in the "Nail Art Service" text field.
3. If the service you are ordering is not listed in the "Nail Art Service" options, please use the "Other Nail Art" text field to provide more information.
4. Enter the price of the service in the "Price" field.
5. If you are ordering from an individual artist, enter the artist's name in the "Artist Name" field.
6. If you are contacting the business by phone, enter your phone number in the "Phone" field. 
7. Enter your email address in the "Email" field.
8. Provide any additional notes or comments about your order in the "Note" field.
9. If the service will be provided at your location, select "Yes" in the "Service Location" field. If not, select "No".
10. Enter the date and time you would like to schedule the service in the "Service Date" and "Service Time" fields, respectively.
11. If applicable, select "Yes" in the "Nail Type" field to indicate the type of nail service required.

## Field-by-Field Explanation
* **Service Type** (`service_type`, select_one, required: false):
	+ Select the type of service you wish to order.
* **Nail Art Service** (`nail_art_service`, text, required: false):
	+ Enter the details of your order, including any specific requests or notes.
* **Other Nail Art** (`nail_art_service_other`, text, required: false):
	+ Enter any additional information about the service you are ordering if it is not listed in the "Nail Art Service" options.
* **Price** (`nail_art_price`, number, required: false):
	+ Enter the price of the service you are ordering.
* **Artist Name** (`nail_artist_name`, text, required: false):
	+ Enter the name of the artist providing the service if you are working with an individual.
* **Phone** (`phone`, text, required: false):
	+ If you are contacting the business by phone, enter your number.
* **Email** (`email`, email, required: false):
	+ Enter your email address for communication with the business.
* **Note** (`note`, note, required: false):
	+ Provide any additional comments or notes about your order.
* **Service Location** (`service_location`, select_multiple, required: false):
	+ Select "Yes" if the service will be provided at your location.
* **Service Date** (`service_date`, date, required: false):
	+ Enter the date you would like to schedule the service.
* **Service Time** (`service_time`, time, required: false):
	+ Enter the time you would like to schedule the service.
* **Nail Type** (`nail_type`, select_one, required: false):
	+ Select "Yes" if the nail type is required.

## Tips
- Please ensure that all required fields are completed accurately to ensure efficient service.
- If you have any questions or concerns about your order, please contact the business directly.
- If the form does not fit your needs, please contact the business to discuss alternative arrangements.
