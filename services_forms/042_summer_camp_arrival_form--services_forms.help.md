<thinking>
To ensure this form is relevant and non-duplicitous, we need to understand its purpose: The "Summer Camp Arrival Form" is a form designed to collect information from campers about their arrival time, contact details, and other important aspects of their summer camp experience. This form helps camp staff and organizers prepare for the arrival of campers and ensure a smooth transition for the camper's stay at the camp.

The following fields are likely to be used for both the parent/guardian and the camper to fill out the form, hence the duplication of fields for contact details.

Considering the fields provided in the form YAML, it's likely that this form will be used for both campers and their parents/guardians, so we'll need to make sure the instructions and explanations cover both use cases.

</thinking>

# Summer Camp Arrival Form - Help Guide
## Purpose
The Summer Camp Arrival Form is a form used to collect information from campers and their parents/guardians about their arrival time, contact details, and other essential aspects of their summer camp experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose the arrival time of the camper at the camp.
2. Select the location where the camper will be picked up.
3. Specify the transportation method used to get to the camp.
4. Provide the contact name and phone number of the person responsible for the camper.
5. Enter the contact email of the person responsible for the camper.
6. Add any special requirements for the camper's stay, if any.
7. Provide any additional comments or notes about the camper's stay.

## Field-by-Field Explanation
* **Camper Arrival Time** (`camper_arrival_time`, time, required: false): Enter the estimated time when the camper will arrive at the camp. This is an optional field, but it helps camp staff plan for the arrival.
* **Pick up Location** (`pick_up_location`, text, required: false): Select the location where the camper will be picked up after their stay at the camp.
* **Pick up Time** (`pick_up_time`, time, required: false): Enter the time when the camper will be picked up from the camp.
* **Transportation Method** (`transportation_method`, select_one, required: false): Select how the camper will get to the camp (Walking, Driving, Bus, Train, or Other).
* **Contact Name** (`contact_name`, text, required: false): Enter the name of the person who is responsible for the camper's contact and pick-up.
* **Contact Phone** (`contact_phone`, text, required: false): Enter the phone number of the person who is responsible for the camper's contact and pick-up.
* **Contact Email** (`contact_email`, email, required: false): Enter the email address of the person who is responsible for the camper's contact and pick-up.
* **Notes** (`notes`, note, required: false): Add any additional comments or notes about the camper's stay.
* **Special Requirements** (`special_requirements`, text, required: false): Enter any special requirements or allergies that the camper may have.
* **Campsite** (`campsite`, text, required: false): Enter the campsite name or location where the camper will be staying.

## Tips
* Make sure to double-check the contact information provided to ensure accurate and up-to-date contact information.
* If the camper has any special requirements or allergies, please make sure to list them carefully in the "Special Requirements" field.
