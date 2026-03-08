# room_entry_inspection_report - Help Guide
## Purpose
The room entry inspection report form is designed to document the condition and status of a room in a property or building. This form helps in maintaining accurate records and facilitating communication between stakeholders.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling out the property address field, which will help identify the location of the room being inspected.
2. Enter the date of the inspection in the inspection date field. This will help in tracking the progress of the room's condition over time.
3. If the room has any photos taken during the inspection, upload them in the photo fields (Photo 1, Photo 2, Photo 3). These photos can be useful in providing visual evidence of the room's condition.
4. Evaluate the room's condition by selecting the appropriate option in the room condition field. This field is a multiple-select field with options "Clean", "Damaged", and "Missing".
5. Identify the type of room by selecting the appropriate option in the room type field. This field is a select-one field with options "Single", "Double", "Suite", "Suite (Multiple Bedrooms)", "King", "Queen", "Queen (Shared Bed)".
6. Report the room's status by selecting the appropriate option in the room status field. This field is a select-one field with options "Vacant", "Occupied", "Reserved", "In Progress".
7. Provide a brief description of the room's condition in the room description field.
8. Add any additional inspection details in the inspection details field.

## Field-by-Field Explanation

* **Property Address** (`property_address`, text, required/optional): Enter the address of the property or building being inspected.
* **Inspection Date** (`inspection_date`, date, required/optional): Enter the date of the inspection.
* **Room Number** (`room_number`, text, required/optional): Enter the room number being inspected.
* **Photo 1** (`photo_1`, text, required/optional): Upload a photo of the room.
* **Photo 2** (`photo_2`, text, required/optional): Upload another photo of the room.
* **Photo 3** (`photo_3`, text, required/optional): Upload a third photo of the room.
* **Room Condition** (`room_condition`, select_multiple, required/optional): Select the room's condition from the options "Clean", "Damaged", or "Missing".
* **Room Type** (`room_type`, select_one, required/optional): Select the type of room from the options "Single", "Double", "Suite", "Suite (Multiple Bedrooms)", "King", "Queen", "Queen (Shared Bed)".
* **Room Status** (`room_status`, select_one, required/optional): Select the room's status from the options "Vacant", "Occupied", "Reserved", "In Progress".
* **Room Description** (`room_description`, text, required/optional): Provide a brief description of the room's condition.
* **Inspection Details** (`inspection_details`, text, required/optional): Add any additional inspection details.
* **Inspection Date** (`inspection_date`, date, required/optional): Enter the date of the inspection (same as the inspection date field).
* **Room Status** (`room_status`, select_one, required/optional): Select the room's status (same as the room status field).
* **Room Condition** (`room_condition`, select_multiple, required/optional): Select the room's condition (same as the room condition field).
