<thinking>This form is meant to collect information from athletes who wish to qualify for speed and endurance events. The form will collect details about the athlete's personal information, emergency contact, event categories, and other relevant information. This form should not be filled out by individuals without prior approval, as the information collected is sensitive. Before filling out this form, please ensure that you have received the necessary approval from the relevant authorities. Please note that this form is not meant for general information collection, but rather for a specific purpose. Ensure that you are filling out this form for the correct purpose and that you have the necessary permissions to do so.</thinking>

# speed_and_endurance_qualifier_registration - Help Guide
## Purpose
The speed and endurance qualifier registration form is used to collect information from athletes who wish to participate in speed and endurance events. This form helps to gather necessary details about the athlete, emergency contact, and event categories.

## How To Complete This Form

To fill out this form, follow these steps:

1. Enter your personal details in the `athlete_details` field.
2. In the `emergency_contacts` field, provide information about your emergency contacts.
3. Choose whether you have emergency contacts or not in the `emergency_contacts_list` field.
4. If you have emergency contacts, provide their details in the subsequent fields.
5. Select whether you have any of the provided event categories in the `event_categories` field.
6. If you have selected any event categories, provide their details in the `event_categories_list` fields.

## Field-by-Field Explanation

* **athlete_details** (`athlete_details`, `text`, required): This field is used to collect your personal details.
* **emergency_contacts** (`emergency_contacts`, `text`, required): This field is used to collect information about your emergency contacts.
* **emergency_contacts_list** (`emergency_contacts_list`, `select_multiple`, required): This field is used to indicate whether you have emergency contacts or not.
* **emergency_contacts_first_name** (`emergency_contacts_first_name`, `text`, required): This field is used to collect the first name of your emergency contact.
* **emergency_contacts_last_name** (`emergency_contacts_last_name`, `text`, required): This field is used to collect the last name of your emergency contact.
* **emergency_contacts_phone** (`emergency_contacts_phone`, `text`, required): This field is used to collect the phone number of your emergency contact.
* **event_categories** (`event_categories`, `select_multiple`, required): This field is used to select event categories.
* **event_categories_list** (`event_categories_list`, `text`, required): This field is used to collect event categories details.
* **event_categories_list_options** (`event_categories_list_options`, `text`, required): This field is used to collect event categories options.
* **event_categories_list__options** (`event_categories_list__options`, `select_one`, required): This field is used to select event categories options.
* **event_categories_list__options__option** (`event_categories_list__options__option`, `text`, required): This field is used to collect event categories options details.
* **event_categories_list__options__option__name** (`event_categories_list__options__option__name`, `text`, required): This field is used to collect event categories options name.
* **event_categories_list__options__option__label** (`event_categories_list__options__option__label`, `text`, required): This field is used to collect event categories options label.
* **event_categories_list__options__option__description** (`event_categories_list__options__option__description`, `text`, required): This field is used to collect event categories options description.
* **event_categories_list__options__option__value** (`event_categories_list__options__option__value`, `text`, required): This field is used to collect event categories options value.
* **athlete_details_list** (`athlete_details_list`, `text`, required): This field is used to collect athlete details list.
* **athlete_details_list_first_name** (`athlete_details_list_first_name`, `text`, required): This field is used to collect the first name of athlete.
* **athlete_details_list_last_name** (`athlete_details_list_last_name`, `text`, required): This field is used to collect the last name of athlete.
* **athlete_details_list_gender** (`athlete_details_list_gender`, `text`, required): This field is used to collect the gender of athlete.
* **athlete_details_list_dob** (`athlete_details_list_dob`, `date`, required): This field is used to collect the date of birth of athlete.
* **athlete_details_list_ems_id** (`athlete_details_list_ems_id`, `text`, required): This field is used to collect emergency contact id.
* **athlete_details_list_ems_name** (`athlete_details_list_ems_name`, `text`, required): This field is used to collect emergency contact name.
* **athlete_details_list_ems_phone** (`athlete_details_list_ems_phone`, `text`, required): This field is used to collect emergency contact phone.
* **athlete_details_list_ems_first_name** (`athlete_details_list_ems_first_name`, `text`, required): This field is used to collect the first name of emergency contact.
* **athlete_details_list_ems_last_name** (`athlete_details_list_ems_last_name`, `text`, required): This field is used to collect the last name of emergency contact.
* **athlete_details_list_ems_relationship** (`athlete_details_list_ems_relationship`, `text`, required): This field is used to collect the relationship with emergency contact.

## Tips

* Please ensure that you have filled out this form for the correct purpose.
* This form is meant for speed and endurance events, so please only fill out this form if you are participating in such events.
* Double-check your emergency contact details for accuracy.
* Make sure to select all necessary event categories for your event.
