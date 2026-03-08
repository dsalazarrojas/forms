# Travel Information Form - Help Guide
## Purpose
The Travel Information Form is designed to collect and update travel information for employees and travelers within the organization. It is used by travel staff to gather details about travel plans, itineraries, and associated contact information.

## How To Complete This Form
To complete this form, simply follow the steps below:

1. Select the travel purpose (e.g., Business, Meetings, Events, or Other).
2. Choose the travel type (e.g., Business Class, Economy Class, First Class, or Other).
3. Select the destination(s) of your trip.
4. Enter your travel dates.
5. Provide any additional notes about your trip.
6. If you are traveling as part of a group, provide details about the group.
7. Specify whether you are assigned to someone or not.

## Field-by-Field Explanation
- **Travel Details** (`travel_details`): Describe your travel plans and itineraries.
  - *Type:* text, *Required:* No
- **Flight Info** (`flight_info`): Provide any flight-related information.
  - *Type:* text, *Required:* No
- **Arrival Info** (`arrival_info`): Describe arrival details.
  - *Type:* text, *Required:* No
- **Return Info** (`return_info`): Provide return information.
  - *Type:* text, *Required:* No
- **Travel Dates** (`travel_dates`): Enter your travel dates.
  - *Type:* text, *Required:* No
- **Travel Duration** (`travel_duration`): Enter the duration of your trip.
  - *Type:* number, *Required:* No
- **Travel Purpose** (`travel_purpose`): Select the purpose of your travel (e.g., Business, Meetings, Events, or Other).
  - *Type:* select_multiple, *Required:* No
- **Travel Type** (`travel_type`): Choose the class of your travel (e.g., Business Class, Economy Class, First Class, or Other).
  - *Type:* select_one, *Required:* No
- **Destination** (`destination`): Select the destination(s) of your trip.
  - *Type:* select_multiple, *Required:* No
- **Departure Time** (`departure_time`): Enter the departure time.
  - *Type:* time, *Required:* No
- **Arrival Time** (`arrival_time`): Enter the arrival time.
  - *Type:* time, *Required:* No
- **Email** (`email`): Enter your email address.
  - *Type:* email, *Required:* No
- **Phone** (`phone`): Enter your phone number.
  - *Type:* text, *Required:* No
- **Notes** (`notes`): Provide any additional notes about your trip.
  - *Type:* note, *Required:* No
- **Travel Frequency** (`travel_frequency`): Describe your travel frequency.
  - *Type:* text, *Required:* No
- **Travel Status** (`travel_status`): Specify your travel status (e.g., Pending, Confirmed, Cancelled).
  - *Type:* select_one, *Required:* No
- **Travel Status Reason** (`travel_status_reason`): Provide the reason for your travel status.
  - *Type:* note, *Required:* No
- **Travel Group** (`travel_group`): Specify whether you are traveling as part of a group.
  - *Type:* select_multiple, *Required:* No
- **Group Name** (`travel_group_name`): Enter the name of your travel group.
  - *Type:* text, *Required:* No
- **Group Size** (`travel_group_size`): Enter the size of your travel group.
  - *Type:* number, *Required:* No
- **Contact** (`travel_group_contact`): Specify whether you have a contact for your travel group.
  - *Type:* select_multiple, *Required:* No
- **Contact Name** (`travel_group_contact_name`): Enter the name of your group contact.
  - *Type:* text, *Required:* No
- **Contact Email** (`travel_group_contact_email`): Enter the email of your group contact.
  - *Type:* email, *Required:* No
- **Group Comment** (`travel_group_comment`): Provide any additional comments about your travel group.
  - *Type:* note, *Required:* No
- **Assigned To** (`assigned_to`): Specify whether you are assigned to someone.
  - *Type:* select_one, *Required:* No
