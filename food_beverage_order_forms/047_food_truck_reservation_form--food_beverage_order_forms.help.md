# Food Truck Reservation Form - Help Guide
## Purpose
This form is used to input event information for a food truck reservation. It's essential to provide accurate and complete information about the event, food preferences, and menu items.

## How To Complete This Form
To fill out this form, follow these steps:

* Start by providing the event name, date, time, location, and details in the respective fields. These fields are required for the food truck to know when and where to serve your event.
* Next, select whether a food truck will be present at the event ('Yes' or 'No'). This field helps the food truck plan its operations.
* Choose the menu items you'd like to have available at your event from the options provided. Select 'Yes' for items you'd like to have, and 'No' for items you'd not be interested in.
* Finally, list the specific menu items you'd like to have available for your guests. This field allows you to specify additional menu items not listed in the previous field.

## Field-by-Field Explanation
* **Event Name** (`event_name`, text, required): Provide the name of the event, such as a festival, wedding, or corporate event.
* **Event Date** (`event_date`, date, required): Enter the date of the event in the correct format (YYYY-MM-DD).
* **Event Time** (`event_time`, time, required): Enter the time of the event in 24-hour format (HH:MM).
* **Event Location** (`event_location`, text, required): Provide the location of the event, including the address or venue name.
* **Event Details** (`event_details`, text, optional): Provide any additional information about the event, such as the number of attendees or specific dietary restrictions.
* **Food Truck Presence** (`food_truck_name`, select_one, required): Indicate whether a food truck will be present at the event ('Yes' or 'No').
* **Menu Preferences** (`menu_preferences`, select_multiple, required): Choose the menu items you'd like to have available at your event by selecting 'Yes' for each item. This field is a guide to help you make your selection.
* **Menu Items** (`menu_items`, text, required): List any additional menu items you'd like to have available for your guests, excluding the ones selected in the previous field.
