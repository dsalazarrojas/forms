# Auction Item Delivery Form - Help Guide

## Purpose
This form is used to collect necessary information for the delivery of auction items to purchasers. It helps us ensure that your item is delivered safely and efficiently to the correct address.

## How To Complete This Form

1. Fill in the required fields with the relevant information.
2. Select your preferred delivery method and date.
3. Provide any special delivery instructions if needed.
4. Choose whether a signature is required upon delivery.
5. Decide if you want to add shipping insurance for your item during transit.

## Field-by-Field Explanation

* **Purchaser Full Name** (`purchaser_full_name`, text, required): Please enter the legal name of the item purchaser.
* **Email Address** (`purchaser_email`, email, required): Enter the email address associated with the purchaser for delivery notifications and tracking.
* **Phone Number** (`purchaser_phone`, text, required): Provide the contact number of the purchaser for delivery coordination.
* **Auction Event Name** (`auction_event_name`, text, required): Enter the name of the auction where the item was purchased.
* **Auction Date** (`auction_date`, date, required): Select the date of the auction when the item was purchased.
* **Invoice Number** (`invoice_number`, text, required): Enter your auction invoice or receipt number.
* **Item Lot Number** (`item_lot_number`, text, required): Enter the lot number of the purchased item.
* **Item Description** (`item_description`, text, required): Briefly describe the purchased item.
* **Delivery Method** (`delivery_method`, select_one, required): Choose how you would like to receive your item (Standard Shipping, Express Shipping, White Glove Delivery, In-Person Pickup, Freight Shipping).
* **Delivery Address Line 1** (`delivery_address_line1`, text, required): Enter the street address where the item should be delivered.
* **Delivery Address Line 2** (`delivery_address_line2`, text, optional): Enter the apartment, suite, unit, or building number if applicable.
* **City** (`delivery_city`, text, required): Enter the city for delivery.
* **State or Province** (`delivery_state`, text, required): Enter the state or province for delivery.
* **ZIP or Postal Code** (`delivery_zip_code`, text, required): Enter the ZIP or postal code for delivery.
* **Country** (`delivery_country`, select_one, required): Choose the country for delivery (United States, Canada, United Kingdom, Australia, Other).
* **Preferred Delivery Date** (`preferred_delivery_date`, date, optional): Select your preferred delivery date if you have one.
* **Delivery Time Preference** (`delivery_time_preference`, select_one, optional): Choose your preferred time window for delivery (Morning, Afternoon, Evening, No preference).
* **Special Delivery Instructions** (`special_delivery_instructions`, text, optional): Provide any special delivery instructions, such as gate codes or building access.
* **Signature Required** (`signature_required`, select_one, required): Choose if a signature is required upon delivery (Yes, signature required, No, leave at door).
* **Shipping Insurance** (`insurance_option`, select_one, required): Choose if you want to add insurance for your item during transit (Yes, add insurance, No, decline insurance).
