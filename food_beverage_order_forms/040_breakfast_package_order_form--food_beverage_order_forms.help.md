# Breakfast Package Order Form - Help Guide
## Purpose
This form is designed to collect information from customers to place a breakfast order. Please fill out the form carefully to ensure that your order is processed correctly.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill out the required fields, marked with an asterisk (*).
2. Select your options carefully, especially for package type and delivery address.
3. Make sure to check the "I Accept" box to agree to the terms and conditions.

## Field-by-Field Explanation
* **Customer Full Name** (`customer_name`, text, required): Please enter your full name as it should be written on the order confirmation and delivery labels.
* **Email Address** (`customer_email`, email, required): Enter your email address to receive order confirmation and delivery updates.
* **Phone Number** (`customer_phone`, text, required): Enter your contact phone number in case we need to reach you.
* **Company Name** (`company_name`, text, optional): If you are ordering for a company, please enter the company name.
* **Order Date** (`order_date`, date, required): Enter the date you need the order delivered.
* **Delivery Time** (`delivery_time`, time, required): Select your preferred delivery time.
* **Package Type** (`package_type`, select_one, required): Choose from the following options:
	+ Continental Package
	+ Hot Breakfast Package
	+ Healthy Start Package
	+ Executive Package
	+ Team Celebration Package
	+ Custom Package
* **Number of People** (`number_of_people`, number, required): Enter the number of people the order is for.
* **Continental Package Includes** (`continental_includes`, note, optional): Please describe the items you would like included in the continental package.
* **Assorted Pastries** (`pastries`, select_one, optional): Select to include or exclude pastries in the package.
* **Fresh Fruit Platter** (`fresh_fruit`, select_one, optional): Select to include or exclude a fresh fruit platter in the package.
* **Hot Package Includes** (`hot_package_includes`, note, optional): Please describe the items you would like included in the hot package.
* **Hot Entree Selection** (`hot_entree`, select_one, optional): Choose your main hot item.
* **Breakfast Meats** (`breakfast_meats`, select_multiple, optional): Select your breakfast meats.
* **Beverages Included** (`beverages_included`, select_multiple, required): Select your beverages.
* **Dietary Accommodations** (`dietary_accommodations`, select_multiple, required): Select any special dietary needs.
* **Delivery Address** (`delivery_address`, text, required): Enter your full delivery address.
* **Setup Requirements** (`setup_requirements`, select_one, required): Select if you need setup service.
* **Serving Supplies** (`serving_supplies`, select_one, required): Select if you need plates and utensils.
* **Special Requests** (`special_requests`, text, optional): Enter any special requests.
* **Payment Method** (`payment_method`, select_one, required): Select your payment method.
* **Terms and Conditions** (`terms_accepted`, select_one, required): Accept our terms and conditions.
