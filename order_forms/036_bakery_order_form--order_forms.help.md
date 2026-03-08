<thinking>...</thinking>

# Bakery Order Form - Help Guide
## Purpose
The Bakery Order Form is a simple form designed to collect customer information, order details, and preferences for placing an order with a bakery. This form is intended to gather essential information to ensure accurate and efficient order processing.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your **Full Name**, **Email Address**, and **Phone Number** in the corresponding fields.
2. Specify the **Bread Items and Quantities**, **Sweet Items and Quantities**, and **Specialty Items** you would like to order.
3. Choose your **Flavor Preferences** and **Decoration or Design Preferences** if applicable.
4. If you have any **Allergens or Dietary Restrictions**, please note them down.
5. Select the **Pickup or Delivery** option for your order.
6. Choose your **Pickup or Delivery** method (Customer Pickup, Store Delivery, or Custom Arrangement).
7. Enter the **Order Placement Date** and **Desired Pickup Date** for your order.
8. Choose your **Preferred Pickup Time** if applicable.
9. Finally, confirm and submit your order by selecting **Confirm and Submit**.

## Field-by-Field Explanation
* **Full Name** (`customer_full_name`, text, required): Enter your name as it appears on your government-issued ID.
* **Email Address** (`customer_contact_email`, email, required): Enter a valid email address for communication.
* **Phone Number** (`customer_contact_phone`, phone, required): Enter your phone number for further communication.
* **Delivery Address** (`customer_delivery_address`, text, optional): If you are choosing store delivery, provide the address where you would like your order delivered.
* **Bread Items and Quantities** (`bread_items`, text, optional): List the types and quantities of bread items you would like to order.
* **Sweet Items and Quantities** (`sweet_items`, text, optional): List the types and quantities of sweet items you would like to order.
* **Specialty Items** (`specialty_items`, text, optional): Specify any custom or specialty items you would like to order.
* **Total Number of Items** (`total_items`, integer, required): Enter the total number of items you are ordering.
* **Flavor Preferences** (`flavor_preferences`, text, optional): Specify your preferred flavors for the items.
* **Decoration or Design Preferences** (`decoration_preferences`, text, optional): Specify any decoration or design preferences for the items.
* **Special Requests or Notes** (`special_requests`, text, optional): If you have any special requests or notes for the order.
* **Allergens or Dietary Restrictions** (`allergen_info`, text, optional): Specify any allergens or dietary restrictions you may have.
* **Order Placement Date** (`order_placement_date`, date, required): Enter the date you would like to place the order.
* **Desired Pickup Date** (`desired_pickup_date`, date, required): Enter the date you would like to pick up your order.
* **Preferred Pickup Time** (`preferred_pickup_time`, time, optional): Specify your preferred pickup time if applicable.
* **Pickup or Delivery** (`pickup_or_delivery`, select_one, required): Choose how you would like to receive your order (Customer Pickup, Store Delivery, or Custom Arrangement).
* **Estimated Total Cost** (`estimated_total`, decimal, optional): Enter the estimated total cost of your order.
* **Confirm and Submit** (`order_submit`, select_one, required): Confirm and submit your order to complete the process.
