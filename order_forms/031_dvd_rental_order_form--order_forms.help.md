<thinking>
This form is used to capture user's preferences for DVD rental options. The form will help the user to select their preferred DVD type, pickup or delivery option, address, rental and return dates, and contact information. This form does not appear to be used for any other purpose. I will assume that the user can only select one DVD type and will only provide information for one address (pickup or delivery). I will also assume that if the user selects "Pickup" for the pickup or delivery option, only one address field will be required.
</thinking>

# DVD Rental Order Form - Help Guide
## Purpose
This form is used to capture user's preferences for DVD rental options.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Select your preferred DVD type from the options provided.
2. Choose whether you want to pick up or have the DVD delivered to your address.
3. If you selected "Pickup", provide your pickup address.
4. If you selected "Delivery", provide the delivery address where you want the DVD to be delivered.
5. Select the date you want to rent the DVD.
6. Select the date you want to return the DVD.
7. Enter your phone number for contact purposes.
8. Enter your email address for contact purposes.
9. Provide any additional comments you may have.

## Field-by-Field Explanation
* **Form 1** (`form_1`, text, not required): This field is not currently used. Please do not enter any information here.
* **DVD Type** (`dvd_type`, select_one, not required): Choose the type of DVD you are interested in renting (e.g. movie, documentary, etc.).
* **DVD Name** (`dvd_name`, text, not required): Enter the name of the DVD you are interested in renting.
* **Pickup or Delivery** (`pickup_or_delivery`, select_multiple, not required): Choose whether you want to pick up the DVD or have it delivered to your address.
	+ If you select "Pickup", provide your address for pickup.
* **Pickup Address** (`pickup_address`, text, not required): This field is only required if you selected "Pickup" for the pickup or delivery option.
* **Delivery Address** (`delivery_address`, text, not required): This field is only required if you selected "Delivery" for the pickup or delivery option.
* **Rental Date** (`rental_date`, date, not required): Select the date you want to rent the DVD.
* **Return Date** (`return_date`, date, not required): Select the date you want to return the DVD.
* **Phone Number** (`phone_number`, text, not required): Enter your phone number for contact purposes.
* **Email** (`email`, email, not required): Enter your email address for contact purposes.
* **Comment** (`comment`, text, not required): Provide any additional comments you may have.
