# Halloween Candy Donation Form - Help Guide
## Purpose
This form is for individuals or organizations interested in donating Halloween candies for an event. Please fill out this form to provide details about yourself and your donation.

## How To Complete This Form
1. Fill in your First Name, Last Name, and Email address in the required fields.
2. Enter your Phone Number and Address in the required fields.
3. Provide your Zip Code in the required field.
4. Enter the Quantity of candies you are willing to donate and the Quantity you would like to have.
5. Choose how you will be donating the candies (Online, In Person, or Mail).
6. If you are a store owner, enter your Store Name.
7. Select the date for the event.
8. If you have any additional notes or comments, you can provide them in the Note field.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, `required`): Enter your first name here.
* **Last Name** (`last_name`, `text`, `required`): Enter your last name here.
* **Email** (`email`, `email`, `required`): Enter your email address here.
* **Phone Number** (`phone_number`, `text`, `required`): Enter your phone number here.
* **Address** (`address`, `text`, `required`): Enter your address here.
* **Zip Code** (`zip_code`, `number`, `required`): Enter your zip code here.
* **Quantity Donated** (`quantity_donated`, `number`, `required`): Enter the number of candies you are willing to donate.
* **Quantity Wanted** (`quantity_wanted`, `number`, `required`): Enter the number of candies you would like to have.
* **Donation Method** (`donation_method`, `select_one`, `required`):
	+ Select Online if you will be donating through the website.
	+ Select In Person if you will be donating directly to the event organizers.
	+ Select Mail if you will be sending the candies by post.
* **Store Name** (`store_name`, `text`, `required`): If you are a store owner, enter your store name here.
* **Event Date** (`event_date`, `date`, `required`): Select the date for the event.
* **Note** (`note`, `note`, `optional`): If you have any additional comments or notes, you can provide them here.
