# Wedding Consultation Form - Help Guide
## Purpose

This form is used to collect and store information about wedding events. It helps event coordinators and planners organize and plan the event successfully.

## How To Complete This Form

To fill out this form, follow these steps:

1. Start by filling out the basic event information: select the wedding planner, set the date and time for the wedding, and enter the location of the wedding.
2. Next, add the guest list by selecting whether each guest has been invited ("Yes" or "No"), and enter their email and phone number.
3. Specify any dietary restrictions for guests by selecting whether they have dietary restrictions ("Yes" or "No") and entering a note to describe the restriction.
4. Add any food items to the list by selecting whether they are included ("Yes" or "No") and entering a description of the food item, its price, and the quantity needed.
5. Finally, enter the total number of guests attending the wedding.

## Field-by-Field Explanation

* **Wedding Planner** (id: 2, <name>: wedding_planner, <type>: number, required: false): Select the person responsible for planning and organizing the wedding event.
* **Wedding Date** (id: 3, <name>: wedding_date, <type>: date, required: false): Enter the date of the wedding event.
* **Wedding Time** (id: 4, <name>: wedding_time, <type>: time, required: false): Enter the time of the wedding event.
* **Wedding Location** (id: 5, <name>: wedding_location, <type>: text, required: false): Enter the location of the wedding event.
* **Wedding Guests** (id: 6, <name>: wedding_guests, <type>: select_multiple, required: false): Select whether each guest has been invited ("Yes" or "No").
* **Guest List** (id: 7, <name>: wedding_guests_label, <type>: text, required: false): Enter the names of the guests.
* **Guest Email** (id: 8, <name>: wedding_guests_email, <type>: email, required: false): Enter the email address of each guest.
* **Guest Phone** (id: 9, <name>: wedding_guests_phone, <type>: text, required: false): Enter the phone number of each guest.
* **Guest Relation** (id: 10, <name>: wedding_guests_relation, <type>: select_one, required: false): Select the relation of each guest ("Yes" or "No").
* **Guest Has Diet** (id: 11, <name>: wedding_guests_diet, <type>: select_one, required: false): Select whether each guest has dietary restrictions ("Yes" or "No").
* **Guest Has Food Restriction** (id: 14, <name>: wedding_guests_has_food_restrictions, <type>: text, required: false): Enter a note to describe any dietary restrictions.
* **Food Items** (id: 15, <name>: wedding_food_items, <type>: select_multiple, required: false): Select whether each food item is included ("Yes" or "No").
* **Food Items List** (id: 16, <name>: wedding_food_items_label, <type>: text, required: false): Enter a description of each food item.
* **Food Description** (id: 17, <name>: wedding_food_items_description, <type>: text, required: false): Enter a description of the food item.
* **Food Price** (id: 18, <name>: wedding_food_items_price, <type>: number, required: false): Enter the price per item.
* **Price per Item** (id: 19, <name>: wedding_food_items_price_label, <type>: text, required: false): Enter the description of the price.
* **Food Quantity** (id: 20, <name>: wedding_food_items_quantity, <type>: number, required: false): Enter the quantity of each food item needed.
* **Number of Items** (id: 21, <name>: wedding_food_items_quantity_label, <type>: text, required: false): Enter the description of the quantity.
* **Food Notes** (id: 22, <name>: wedding_food_items_notes, <type>: text, required: false): Enter any notes about the food item.
* **Note About Food** (id: 23, <name>: wedding_food_items_notes_label, <type>: text, required: false): Enter a description of the note.
* **Total Guests** (id: 24, <name>: wedding_total_guests, <type>: text, required: false): Enter the total number of guests attending the wedding.
* **Total Guests** (id: 25, <name>: wedding_total_guests_label, <type>: number, required: false): Enter the number of guests attending the wedding.

## Tips

This form is designed to be completed by the person in charge of the wedding event. Make sure to fill out all the required fields to ensure that the event is organized and planned successfully.
