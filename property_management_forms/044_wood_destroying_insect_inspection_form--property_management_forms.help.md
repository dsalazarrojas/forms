# Wood Destroying Insect Inspection Form - Help Guide
## Purpose
The Wood Destroying Insect Inspection Form is a tool used by pest inspectors to gather information about a property's condition and presence of wood destroying insects. It helps in identifying and recording the presence or absence of such insects, and is used for inspection reports and other documentation.

## How To Complete This Form
1. Enter the Property Name and Date of Inspection to identify the location and time of the inspection.
2. Provide your name as the Inspector.
3. Enter your Pest Inspector Number, a unique identifier issued to you.
4. Select the Property Type (Single Family, Multi Family, or Commercial) to specify the type of property being inspected.
5. Provide the Inspection Location, but this is not always required.
6. If the property has multiple units or rooms, enter the Number of Rooms and Number of Units.
7. Indicate whether or not pest sighting was observed during the inspection.
8. Additional Notes can be provided if you have any further information about the inspection.

## Field-by-Field Explanation
* **Property Name** (`property_name`, `text`, `required=false`): Enter the name of the property being inspected.
* **Date of Inspection** (`date_of_inspection`, `date`, `required=true`): Enter the date the inspection was conducted.
* **Inspector Name** (`inspector_name`, `text`, `required=true`): Enter your official name.
* **Pest Inspector Number** (`pest_inspector_number`, `text`, `required=true`): Enter your unique inspector number.
* **Property Type** (`property_type`, `select_one`, `required=true`): Select one of the options provided (Single Family, Multi Family, Commercial).
* **Inspection Location** (`inspection_location`, `text`, `required=false`): Enter the location of the inspection, but this is optional.
* **Number of Rooms** (`number_of_rooms`, `number`, `required=false`): Enter the total number of rooms in the property, if applicable.
* **Number of Units** (`number_of_units`, `number`, `required=false`): Enter the total number of units in the property, if applicable.
* **Pest Sighting** (`pest_sighting`, `select_multiple`, `required=true`): Select one or both options to indicate whether or not pest was sighted.
* **Notes** (`notes`, `note`, `required=false`): Add any additional information or observations about the inspection.
