# travel-agency-template-cruise-packing-list-generator - Help Guide
## Purpose
This form is designed to help travel agencies generate a cruise packing list for their guests. It collects relevant information about the guest, including their name, contact details, travel plans, and special requirements.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Enter the Cruise Guest Name in the text field.
2. Enter the Cruise Guest Email in the email field.
3. Enter the Cruise Guest Phone in the text field.
4. Upload a Cruise Guest Passport Photo in the text field.
5. Select the Shore Excursions (yes or no).
6. (Optional) Enter the Cabin Number, if confirmed.
7. Enter the Travel Date in the date field.
8. Enter the Duration of Cruise in the number field.
9. Select the Port of Call from the dropdown menu.
10. (Optional) Select a preferred shore excursion from the dropdown menu.
11. (Optional) Select additional shore excursions from the dropdown menu.
12. Enter any Special Requirements in the text field.
13. Select the Ship Arrived field (if applicable).
14. Enter the Boarding Pass in the text field.
15. Enter the Cabin Confirmation in the text field.
16. (Optional) Enter the Sailing Date and Disembarkation Date in the date field.
17. (Optional) Enter the Boarding Time and Disembarkation Time in the time field.
18. Enter the Cruise Documents in the text field.
19. (Optional) Enter the Guest Arrival Time in the time field.
20. (Optional) Enter the Shore Excursion Duration in the number field.
21. (Optional) Enter the Shore Excursion Time in the time field.
22. (Optional) Enter the Guest Arrival Date in the date field.

## Field-by-Field Explanation

* **Cruise Guest Name** (`cruise_guest_name`, text, required): Enter the name of the cruise guest.
* **Cruise Guest Email** (`cruise_guest_email`, email, required): Enter the email address of the cruise guest.
* **Cruise Guest Phone** (`cruise_guest_phone`, text, required): Enter the phone number of the cruise guest.
* **Cruise Guest Passport Photo** (`cruise_guest_passport_photo`, text, required): Upload a scanned passport photo of the guest.
* **Shore Excursions** (`cruise_shore_excursions`, select_multiple, optional): Select whether the guest is interested in shore excursions (yes or no).
* **Cabin Number** (`cruise_cabin_number`, number, optional): Enter the cabin number, if confirmed.
* **Cabin Number Confirmed** (`cruise_cabin_number_confirmed`, note, optional): Note the cabin number confirmation status.
* **Travel Date** (`cruise_travel_date`, date, required): Enter the travel date.
* **Duration of Cruise** (`cruise_duration_of_cruise`, number, required): Enter the duration of the cruise.
* **Port of Call** (`cruise_port_of_call`, select_one, optional): Select the port of call from the dropdown menu.
* **Shore Excursion Preferred** (`cruise_shore_excursion_preferred`, select_one, optional): Select a preferred shore excursion from the dropdown menu.
* **Shore Excursion Secondary** (`cruise_shore_excursion_secondary`, select_multiple, optional): Select additional shore excursions from the dropdown menu.
* **Special Requirements** (`cruise_special_requirements`, text, optional): Enter any special requirements.
* **Ship Arrived** (`cruise_ship_arrived`, time, optional): Select the ship arrival time.
* **Boarding Pass** (`cruise_boarding_pass`, text, required): Enter the boarding pass details.
* **Cabin Confirmation** (`cruise_cabin_confirmation`, text, required): Enter the cabin confirmation details.
* **Sailing Date** (`cruise_sailing_date`, date, optional): Enter the sailing date.
* **Disembarkation Date** (`cruise_disembarkation_date`, date, optional): Enter the disembarkation date.
* **Boarding Time** (`cruise_boarding_time`, time, optional): Enter the boarding time.
* **Disembarkation Time** (`cruise_disembarkation_time`, time, optional): Enter the disembarkation time.
* **Cruise Documents** (`cruise_cruise_docs`, text, required): Enter the cruise documents details.
* **Guest Arrival Time** (`cruise_guest_arrival_time`, time, optional): Enter the guest arrival time.
* **Shore Excursion Duration** (`cruise_shore_excursion_duration`, number, optional): Enter the shore excursion duration.
* **Shore Excursion Time** (`cruise_shore_excursion_time`, time, optional): Enter the shore excursion time.
* **Guest Arrival Date** (`cruise_guest_arrival_date`, date, optional): Enter the guest arrival date.

Note: The fields marked optional are not required, and their presence or absence does not affect the generation of the packing list. However, providing accurate and complete information for these fields will enhance the packing list's relevance and utility.
