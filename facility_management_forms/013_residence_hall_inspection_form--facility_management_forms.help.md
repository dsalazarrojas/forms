<thinking>As a form designer and technical writer, I need to create a user-facing help guide for the "Residence Hall Inspection Form" to ensure that end-users understand its purpose, how to complete it, and what each field means. I'll follow the provided YAML structure and ensure that the explanations are concrete, concise, and practical. Before I start writing the help guide, I'd like to confirm that the form is for inspecting residence halls, and it's designed to gather information on various aspects of the halls, including cleanliness, safety, and equipment. It's essential to note that some fields are select-one or select-multiple, which means users will choose one or multiple options from the provided list. I'll also make sure to highlight any required fields that users must fill out. After confirming the form's purpose and structure, I'll proceed to create the help guide.</thinking>

# Residence Hall Inspection Form - Help Guide
## Purpose
The Residence Hall Inspection Form is designed to help inspect and evaluate the condition of residence halls, focusing on cleanliness, safety, and equipment. This form gathers information on various aspects of the halls, ensuring that they are properly maintained and meet the required standards.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields:
	* Room Number
	* Building Name
	* Date
	* Time
	* Room Number (Contact)
	* Contact Name
	* Contact Phone
	* Contact Email
	* Contact Department
2. Choose the condition of each item from the provided options:
	* Common Areas: Select all the items that apply (Cleanliness, Safety, Emergency Equipment)
	* Dorm Room: Choose one of the four options (Cleanliness, Safety, Good Condition, Poor Condition)
	* Electrical Outlets: Select all the items that apply (Working, Not Working, Partially Working)
	* Bathroom Fixtures: Select all the items that apply (Present, Absent, Partially Present)
	* Kitchen Equipment: Select all the items that apply (Working, Not Working, Partially Working)
	* Trash Can: Choose one of the three options (Full, Empty, Half Full)
	* Clean Lights: Choose one of the three options ('True', 'False', Partially On)
	* Clean Toilets: Choose one of the three options (Clean, Dirty, Partially Clean)
	* Clean Sinks: Choose one of the three options (Clean, Dirty, Partially Clean)
	* Clean Showers: Choose one of the three options (Clean, Dirty, Partially Clean)
	* Clean Doors: Choose one of the three options (Clean, Dirty, Partially Clean)
	* Clean Windows: Choose one of the three options (Clean, Dirty, Partially Clean)
	* Clean Floor: Choose one of the three options (Clean, Dirty, Partially Clean)
	* Common Areas - Stairs: Choose one of the three options (Clean, Dirty, Partially Clean)
	* Fire Stations: Choose one of the three options (Present, Absent, Partially Present)
	* Fire Exits: Choose one of the three options (Present, Absent, Partially Present)
	* Smoke Detectors: Choose one of the three options (Present, Absent, Partially Present)
	* Fire Extinguisher: Choose one of the three options (Present, Absent, Partially Present)
	* Fire Alarm System: Choose one of the three options (Present, Absent, Partially Present)
	* First Aid Kit: Choose one of the three options (Present, Absent, Partially Present)

## Field-by-Field Explanation

* **Room Number** (`room_number`, text, required): Enter the room number that you are inspecting.
* **Building Name** (`building_name`, text, required): Enter the name of the building where you are inspecting the room.
* **Date** (`date`, date, required): Enter the date of the inspection.
* **Time** (`time`, time, required): Enter the time of the inspection.
* **Common Areas** (`common_areas`, select_multiple, required): Select all the items that apply to the common areas (Cleanliness, Safety, Emergency Equipment).
* **Dorm Room** (`dorm_room`, select_one, required): Choose one of the four options (Cleanliness, Safety, Good Condition, Poor Condition) to describe the condition of the dorm room.
* **Electrical Outlets** (`electrical_outlets`, select_multiple, required): Select all the items that apply to the electrical outlets (Working, Not Working, Partially Working).
* **Bathroom Fixtures** (`bathroom_fixtures`, select_multiple, required): Select all the items that apply to the bathroom fixtures (Present, Absent, Partially Present).
* **Kitchen Equipment** (`kitchen_equipment`, select_multiple, required): Select all the items that apply to the kitchen equipment (Working, Not Working, Partially Working).
* **Trash Can** (`trash_can`, select_one, required): Choose one of the three options (Full, Empty, Half Full) to describe the condition of the trash can.
* **Clean Lights** (`clean_lights`, select_one, required): Choose one of the three options ('True', 'False', Partially On) to describe the condition of the lights.
* **Clean Toilets** (`clean_toilets`, select_one, required): Choose one of the three options (Clean, Dirty, Partially Clean) to describe the condition of the toilets.
* **Clean Sinks** (`clean_sinks`, select_one, required): Choose one of the three options (Clean, Dirty, Partially Clean) to describe the condition of the sinks.
* **Clean Showers** (`clean_shower`, select_one, required): Choose one of the three options (Clean, Dirty, Partially Clean) to describe the condition of the showers.
* **Clean Doors** (`clean_doors`, select_one, required): Choose one of the three options (Clean, Dirty, Partially Clean) to describe the condition of the doors.
* **Clean Windows** (`clean_windows`, select_one, required): Choose one of the three options (Clean, Dirty, Partially Clean) to describe the condition of the windows.
* **Clean Floor** (`clean_floor`, select_one, required): Choose one of the three options (Clean, Dirty, Partially Clean) to describe the condition of the floor.
* **Common Areas - Stairs** (`clean_common_areas_stairs`, select_one, required): Choose one of the three options (Clean, Dirty, Partially Clean) to describe the condition of the common areas - stairs.
* **Fire Stations** (`fire_stations`, select_one, required): Choose one of the three options (Present, Absent, Partially Present) to describe the condition of the fire stations.
* **Fire Exits** (`fire_exits`, select_one, required): Choose one of the three options (Present, Absent, Partially Present) to describe the condition of the fire exits.
* **Smoke Detectors** (`smoke_detectors`, select_one, required): Choose one of the three options (Present, Absent, Partially Present) to describe the condition of the smoke detectors.
* **Fire Extinguisher** (`fire_extinguisher`, select_one, required): Choose one of the three options (Present, Absent, Partially Present) to describe the condition of the fire extinguisher.
* **Fire Alarm System** (`fire_alarm_system`, select_one, required): Choose one of the three options (Present, Absent, Partially Present) to describe the condition of the fire alarm system.
* **First Aid Kit** (`first_aid_kit`, select_one, required): Choose one of the three options (Present, Absent, Partially Present) to describe the condition of the first aid kit.
* **Contact Name** (`contact_name`, text, required): Enter the name of the contact person.
* **Contact Phone** (`contact_phone`, text, required): Enter the phone number of the contact person.
* **Contact Email** (`contact_email`, email, required): Enter the email of the contact person.
* **Contact Department** (`contact_department`, text, required): Enter the department of the contact person.
* **Room Number (Contact)** (`contact_room`, text, required): Enter the room number of the contact person.

## Tips
* Make sure to fill out all the required fields.
* Choose the correct options for each field to provide accurate information.
* If you are unsure about any field, ask the contact person for clarification.
* Review the form carefully before submitting it to ensure that all fields are completed accurately.
