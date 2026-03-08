# Catering Cutlery Supply Booking Form - Help Guide
## Purpose
The Catering Cutlery Supply Booking Form is designed to assist clients in booking catering cutlery supplies for their events. This form helps to gather essential information for accurate quotes, logistics, and order fulfillment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the client or event name in the "Client or Event Name" field.
2. Enter the date of the event in the "Date of Event" field.
3. Choose your preferred delivery or pickup option from the "Delivery or Pickup Preference" dropdown menu.
4. If you have selected delivery, enter the delivery address in the "Delivery Address (if applicable)" field.
5. Choose the style of cutlery you would like to rent from the "Cutlery Style Selection" dropdown menu.
6. Enter the quantity of each type of cutlery you would like to rent in the corresponding quantity fields (e.g., "Quantity of Dinner Forks", "Quantity of Dinner Knives", etc.).
7. If you would like to add the cleaning service, select "Yes, add cleaning fee" from the "Would you like to add the cleaning service" dropdown menu.
8. Finally, acknowledge that you understand that lost or broken items will be charged at replacement cost by selecting "I Acknowledge" from the "I acknowledge that lost or broken items will be charged at replacement cost" dropdown menu.

## Field-by-Field Explanation
* **Client or Event Name** (`order_name_ref`, text, required): Please fill in the name of the client or event.
* **Date of Event** (`event_date`, date, required): Enter the date of the event.
* **Delivery or Pickup Preference** (`delivery_pickup_choice`, select_one, required): Choose how you would like to receive the cutlery: "Delivery to Venue" or "Client Pickup from Warehouse".
* **Delivery Address (if applicable)** (`delivery_address_field`, text, required if delivery is chosen): If you have selected "Delivery to Venue", enter the address where the cutlery should be delivered.
* **Cutlery Style Selection** (`cutlery_style`, select_one, required): Choose the style of cutlery you would like to rent from the available options.
* **Quantity of Dinner Forks** (`forks_quantity`, number, required): Enter the quantity of dinner forks needed, ordered in packs of 10.
* **Quantity of Dinner Knives** (`knives_quantity`, number, required): Enter the quantity of dinner knives needed, ordered in packs of 10.
* **Quantity of Soup/Table Spoons** (`spoons_quantity`, number, required): Enter the quantity of soup/table spoons needed, ordered in packs of 10.
* **Quantity of Dessert/Tea Spoons** (`dessert_spoons_quantity`, number, optional): Enter the quantity of dessert/tea spoons needed, ordered in packs of 10.
* **Quantity of Salad/Appetizer Forks** (`salad_forks_quantity`, number, optional): Enter the quantity of salad/appetizer forks needed, ordered in packs of 10.
* **Would you like to add the cleaning service** (`cleaning_service_requested`, select_one, required): Select "Yes, add cleaning fee" if you would like to have the cutlery cleaned before return.
* **I acknowledge that lost or broken items will be charged at replacement cost** (`replacement_cost_ack`, select_one, required): Acknowledge that you understand that lost or broken items will be charged at replacement cost.
* **Estimated Total Rental Fee** (`total_estimated_rental_fee`, number, optional): This field will be filled in automatically after review of your order.
