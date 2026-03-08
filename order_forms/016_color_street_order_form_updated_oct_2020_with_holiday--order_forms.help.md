<thinking>...</thinking>

# Color Street Order Form - Updated Oct 2020 With Holiday - Help Guide
## Purpose
This form is designed to allow users to order sets from the Color Street collection, with options specific to each holiday season.

## How To Complete This Form
To complete this form, follow these steps:

* Enter your name and email address in the "Your Full Name" and "Email Address" fields.
* If you're ordering for a B3G1 Deal, select "True" in the "Is this order for a B3G1 Deal?" field.
* Choose the sets you want to order from the options below.
* Select your preferred shipping speed.
* Enter your payment method and username.
* If you're ordering for a host, enter the host's name.
* Enter any holiday wishes or special instructions.

## Field-by-Field Explanation
### Section 1: Holiday Selection
* **Your Full Name** (`holiday_customer_name`, text, required): Enter your full name as it appears on your identification.
* **Email Address** (`holiday_email`, email, required): Enter your email address associated with your Color Street account.
* **Is this order for a B3G1 Deal?** (`b3g1_holiday`, select_one, required): Select "True" if you're ordering for a B3G1 Deal, "False" otherwise.
* **Total Number of Sets** (`total_sets_holiday`, number, required): Enter the total number of sets you're ordering.
* **Payment Method and Username** (`payment_handle_holiday`, text, required): Enter your payment method and username (e.g., Venmo @User).
* **Shipping Speed** (`shipping_choice_holiday`, select_one, required): Select your preferred shipping speed.
* **Host Name (If for a party)** (`host_name_holiday`, text, optional): Enter the host's name if this order is for a party.
* **Holiday Wishes or Special Instructions** (`notes_holiday`, text, optional): Enter any holiday wishes or special instructions.
* **Select Halloween Sets** (`halloween_sets`, select_multiple, optional): Choose the Halloween sets you want to order.
* **Select Thanksgiving Sets** (`thanksgiving_sets`, select_multiple, optional): Choose the Thanksgiving sets you want to order.
* **Select Winter/Holiday Sets** (`christmas_sets`, select_multiple, optional): Choose the Winter/Holiday sets you want to order.
* **List any Standard Sets (Solids, Glitters, etc.)** (`standard_sets_list`, text, optional): List any standard sets you want to order.
* **Shipping Address** (`holiday_address`, text, required): Enter your shipping address.
