# prospective_travel_client_vacation_form - Help Guide
## Purpose
This form collects information from prospective clients about their travel plans and preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the client information on page 1, which includes their basic details.
2. On page 2, provide travel-related information, such as travel agency and agent.
3. On page 3, enter travel dates, duration, and other relevant details.

## Field-by-Field Explanation

* **Client Info (page 1)** (`client_info`, text, optional):
	+ Enter the client's name and other essential details.
* **Travel Details (page 1)** (`travel_details`, text, optional):
	+ Describe the client's travel plans and preferences.
* **Travel Dates (page 1)** (`travel_dates`, text, optional):
	+ Enter the dates of the travel.
* **Travel Agency (page 2)** (`travel_agency`, select_one, optional):
	+ Choose the travel agency that will be handling the client's travel.
* **Travel Agent (page 2)** (`travel_agent`, select_one, optional):
	+ Select the travel agent who will be assisting the client.
* **Travel Type (page 2)** (`travel_type`, select_one, required):
	+ Choose the type of travel (e.g., business, leisure, etc.).
* **Travel Destination (page 2)** (`travel_destination`, select_multiple, optional):
	+ Select the destinations the client is traveling to.
* **Travel Duration (page 3)** (`travel_duration`, number, optional):
	+ Enter the length of the client's trip.
* **Travel Budget (page 3)** (`travel_budget`, number, optional):
	+ Enter the client's budget for the trip.
* **Travel Preferences (page 3)** (`travel_preferences`, number, optional):
	+ Select the client's travel preferences (e.g., accommodation type, etc.).
* **Travel Frequency (page 3)** (`travel_frequency`, number, optional):
	+ Enter the frequency of the client's travel.
* **Travel Status (page 3)** (`travel_status`, select_one, optional):
	+ Check the client's travel status.
* **Travel Notes (page 3)** (`travel_notes`, note, optional):
	+ Add any additional notes or comments about the client's travel.
* **Travel Email (page 3)** (`travel_email`, email, optional):
	+ Enter the client's email address.
* **Travel Phone (page 3)** (`travel_phone`, text, optional):
	+ Enter the client's phone number.
* **Travel Date (page 3)** (`travel_date`, date, optional):
	+ Enter the date of the travel.
* **Travel Time (page 3)** (`travel_time`, time, optional):
	+ Enter the time of the travel.
* **Travel Note (page 3)** (`travel_note`, note, optional):
	+ Add any additional notes or comments about the client's travel.
* **Travel File (page 3)** (`travel_file`, text, optional):
	+ Upload or enter a file related to the client's travel.
