# Baked Goods Subscription Order Form - Help Guide
## Purpose
The Baked Goods Subscription Order Form is a tool for customers to select and subscribe to various types of baked goods from a business that offers a subscription service. The form gathers information about the customer, their preferences, and their subscription details.

## How To Complete This Form
1.  Select the "New or Returning Customer" option to indicate whether you are a new or returning customer.
2.  Fill out the "Full Name", "Email Address", and "Phone Number" fields with your contact information.
3.  Choose your preferred delivery frequency (Weekly, Bi-Weekly, Monthly, or Custom Schedule) and subscription duration (3 Months, 6 Months, 12 Months, or Ongoing).
4.  Select all the baked goods you would like to receive in your subscription (Sourdough, Whole Wheat, Rye, etc.).
5.  If you have any custom or special requests, type them in the "Custom or Special Requests" field.
6.  Choose the number of items you would like to receive per delivery.
7.  If you have any dietary restrictions or allergies, select the "Yes" or "No" option.
8.  If you would like vegan options, select "Yes" or "No".
9.  Choose your preferred delivery day and time (optional).
10.  Review and agree to the Subscription Terms and Conditions.

## Field-by-Field Explanation
* **Full Name** (`customer_name`, text, required): Enter your full name as it appears on your identification documents.
* **Email Address** (`customer_email`, email, required): Enter your email address where you would like to receive updates and notifications.
* **Phone Number** (`customer_phone`, phone, required): Enter your phone number where you can be reached for delivery or order updates.
* **New or Returning Customer** (`customer_type`, select_one, required): Select "New Customer" or "Returning Customer" to indicate your status.
* **Delivery Frequency** (`subscription_frequency`, select_one, required): Choose from Weekly, Bi-Weekly, Monthly, or Custom Schedule for your delivery frequency.
* **Subscription Duration** (`subscription_duration`, select_one, required): Choose from 3 Months, 6 Months, 12 Months, or Ongoing for your subscription duration.
* **Bread Items** (`bread_selection`, select_multiple, optional): Select all the bread items you would like to receive (Sourdough, Whole Wheat, Rye, etc.).
* **Pastry Items** (`pastry_selection`, select_multiple, optional): Select all the pastry items you would like to receive (Croissants, Danish, etc.).
* **Cake Options** (`cake_selection`, select_multiple, optional): Select all the cake options you would like to receive (Chocolate Cake, Vanilla Cake, etc.).
* **Cookies and Brownies** (`cookie_brownie_selection`, select_multiple, optional): Select all the cookies and brownies you would like to receive (Chocolate Chip, Oatmeal, etc.).
* **Custom or Special Requests** (`custom_items`, text, optional): Type any custom or special requests you may have.
* **Number of Items Per Delivery** (`items_per_delivery`, integer, required): Choose the number of items you would like to receive per delivery.
* **Dietary Restrictions or Allergies** (`dietary_restrictions`, text, optional): Type any dietary restrictions or allergies you may have.
* **Vegan Options Needed?** (`vegan_preference`, select_one, optional): Select "Yes" or "No" if you require vegan options.
* **Delivery Address** (`delivery_address`, text, required): Enter the address where you would like to receive your deliveries.
* **Preferred Delivery Day** (`delivery_date_preference`, select_one, optional): Choose your preferred delivery day (Monday, Tuesday, etc.).
* **Preferred Delivery Time** (`delivery_time_preference`, text, optional): Enter your preferred delivery time (Morning, Afternoon, or Evening).
* **Subscription Confirmation** (`subscription_confirmation`, select_one, required): Select "I Agree" to confirm that you agree to the Subscription Terms and Conditions.

## Tips
- Make sure to fill out the form accurately and completely to ensure that your subscription is set up correctly.
- If you have any questions or concerns, contact the business for assistance.
- Review the Subscription Terms and Conditions before agreeing to them.
- Be sure to enter your preferred delivery address and schedule accurately.
- If you have any custom or special requests, type them in the "Custom or Special Requests" field.
- If you have any dietary restrictions or allergies, type them in the "Dietary Restrictions or Allergies" field.
