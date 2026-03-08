# Cold Brew Coffee Pre Order Form - Help Guide
## Purpose
The Cold Brew Coffee Pre Order Form is designed to collect information for your cold brew coffee order. This form ensures that we have all the necessary details to fulfill your order accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **Customer Information**:
	* **Full Name**: Enter your full name as it appears on your identification.
	* **Email Address**: Enter your valid email address to receive updates on your order.
	* **Phone Number**: Enter your phone number to enable us to contact you with order updates (optional).
2. Choose your **Order Details**:
	* **Desired Order Date**: Select the date you would like to pick up your order.
	* **Cold Brew Type**: Select your preferred variety of cold brew coffee.
	* **Bottle Size**: Choose the size of bottle you would like to order.
	* **Number of Bottles**: Enter the number of bottles you would like to order.
3. Add any **Customization**:
	* **Milk Preference**: Select your preferred milk type.
	* **Sweetness Level**: Choose how sweet you like your cold brew.
	* **Ice Preference**: Select your preferred ice level.
4. Select your **Delivery Information**:
	* **Pickup Location**: Choose the location where you will pick up your order.
	* **Preferred Pickup Time**: Select the time that works best for you to pick up your order.
5. Add any **Special Instructions**:
	* **Special Requests**: Enter any special instructions or preferences you may have.
	* **Allergies or Restrictions**: Enter any dietary restrictions or allergies you may have.
6. Choose your **Payment Method**:
	* **Payment Method**: Select how you would like to pay for your order.

## Field-by-Field Explanation

* **Full Name** (`customer_name`, `text`, required): This is your full name as it appears on your identification.
* **Email Address** (`email`, `email`, required): This is your valid email address to receive updates on your order.
* **Phone Number** (`phone`, `text`, optional): This is your phone number to enable us to contact you with order updates.
* **Desired Order Date** (`order_date`, `date`, required): This is the date you would like to pick up your order.
* **Cold Brew Type** (`cold_brew_type`, `select_one`, required): This is the variety of cold brew coffee you would like to order.
* **Bottle Size** (`bottle_size`, `select_one`, required): This is the size of bottle you would like to order.
* **Number of Bottles** (`quantity`, `number`, required): This is the number of bottles you would like to order.
* **Milk Preference** (`milk_preference`, `select_one`, optional): This is your preferred milk type.
* **Sweetness Level** (`sweetness`, `select_one`, optional): This is how sweet you like your cold brew.
* **Ice Preference** (`ice_preference`, `select_one`, optional): This is your preferred ice level.
* **Pickup Location** (`pickup_location`, `select_one`, required): This is the location where you will pick up your order.
* **Preferred Pickup Time** (`pickup_time`, `time`, required): This is the time that works best for you to pick up your order.
* **Special Requests** (`special_requests`, `text`, optional): This is any special instructions or preferences you may have.
* **Allergies or Restrictions** (`allergies`, `text`, optional): This is any dietary restrictions or allergies you may have.
* **Payment Method** (`payment_method`, `select_one`, required): This is how you would like to pay for your order.
