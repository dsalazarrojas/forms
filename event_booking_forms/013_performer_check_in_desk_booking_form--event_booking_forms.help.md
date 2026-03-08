> <thinking>...</thinking>

# performer_check_in_desk_booking_form - Help Guide

## Purpose
This form is used to book a performer check-in desk. It is intended to gather information required for a smooth check-in process of performers, allowing them to reserve arrival slots and provide contact details for communication.

## How To Complete This Form
1. Fill in the required fields:
	* Choose the first arrival slot in the **arrival_slot_1** field.
	* Choose the second arrival slot in the **arrival_slot_2** field.
2. Optionally, you can provide additional contact information in the **contact_name**, **contact_phone**, and **special_requirements** fields.
3. If applicable, select the arrival time window for the performer in the **arrival_time_window** field.
4. Fill in the **event_name** field with the name of the event.

## Field-by-Field Explanation
* **arrival_slot_1** (`arrival_slot_1`, select multiple, required): Select the first arrival slot for the performer.
	+ Choose one or multiple arrival slots for the first available time slot.
* **arrival_slot_2** (`arrival_slot_2`, select multiple, required): Select the second arrival slot for the performer.
	+ Choose one or multiple arrival slots for the second available time slot.
* **arrival_slot_3** (`arrival_slot_3`, select multiple, optional): Select the third arrival slot for the performer.
	+ Choose one or multiple arrival slots for the third available time slot (not required).
* **arrival_time_window** (`arrival_time_window`, select one, optional): Select if the performer has a time window for arrival.
	+ Choose 'Yes' or 'No' to indicate if the performer has a time window.
* **contact_name** (`contact_name`, text, optional): Provide the contact name for the performer.
* **contact_phone** (`contact_phone`, text, optional): Provide the contact phone number for the performer.
* **performer_arrival_date** (`performer_arrival_date`, date, optional): Select the arrival date for the performer.
	+ Leave blank if not applicable.
* **event_name** (`event_name`, text, optional): Provide the name of the event.
* **performer** (`performer_id`, text, optional): Provide the performer ID.
* **special_requirements** (`special_requirements`, text, optional): Provide any special requirements for the performer.
* **arrival_slot** (`arrival_slot`, time, optional): Select the arrival slot for the performer.
	+ Choose from the available time slots.
