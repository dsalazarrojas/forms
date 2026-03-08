# exclusive_tour_pre_order_form - Help Guide
## Purpose
The "exclusive_tour_pre_order_form" is used to collect contact information and travel preferences for tour operators and their clients. It is essential for the tour operator to provide their contact details and for the client to provide their contact information and travel preferences for a smooth and accurate booking process.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the tour operator's contact information (tour_operator, tour_operator_email, tour_operator_phone).
2. Enter your name (first_name, last_name).
3. Enter your contact email (email).
4. Enter your phone number (phone).
5. Select the type of tour you are interested in (tour_type).
6. Enter the departure date and time (departure_date, departure_time).
7. Enter the return date and time (return_date, return_time).

## Field-by-Field Explanation
* **tour_operator** (`text`, required): Enter the tour operator's name.
* **tour_operator_email** (`email`, optional): Enter the tour operator's email address.
* **tour_operator_phone** (`text`, required): Enter the tour operator's phone number.
* **first_name** (`text`, required): Enter your first name.
* **last_name** (`text`, required): Enter your last name.
* **email** (`email`, required): Enter your email address.
* **phone** (`text`, required): Enter your phone number.
* **tour_type** (`select_one`, required): Select the type of tour you are interested in (Land, Sea, or River).
* **departure_date** (`date`, required): Enter the date you would like to depart.
* **departure_time** (`time`, required): Enter the time you would like to depart.
* **return_date** (`date`, required): Enter the date you would like to return.
* **return_time** (`time`, required): Enter the time you would like to return.

## Tips
- Ensure that the tour operator's contact information is accurate and up-to-date.
- Double-check your contact information and travel preferences for accuracy.
- If you have any special requests or requirements, please include them in the "tour_operator" field.
