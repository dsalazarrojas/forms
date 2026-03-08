# Maintenance Inspection Request Form - Help Guide
## Purpose
The Maintenance Inspection Request Form is used to request maintenance inspections on tanks, pumps, and other equipment. This form helps maintenance personnel to gather necessary information for efficient and effective maintenance.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields, indicated by the * required* label.
2. Take photos of the tank and pump for reference, and upload them in the Tank Photos and Pump Photos sections.
3. Provide a description of the tank and its current visual condition in the Tank Description and Visual Condition fields.
4. Add any additional comments or notes in the Engineer Comments field.
5. Select the assigned tool or engineer responsible for the inspection in the Assigned Tool field.
6. Enter the date and start/finish time of the inspection in the Date of Inspection, Start Time, and Finish Time fields.
7. Indicate whether the inspection is completed or not in the Completed field.
8. Add any additional notes or photos in the Notes and Additional Photos fields.
9. Finally, select the person who submitted the request (engineer, supervisor, or manager) and the submitted date and time in the Submitted By, Submitted Date, and Submitted Time fields.

## Field-by-Field Explanation
* **Tank Photos** (`tank_photos`, `text`, required): Upload photos of the tank for reference.
* **Pump Photos** (`tank_photos`, `text`, required): Upload photos of the pump for reference.
* **Tank Description** (`tank_description`, `text`, required): Briefly describe the tank's current condition.
* **Visual Condition** (`visual_condition`, `text`, required): Describe the tank's current visual condition.
* **Engineer Comments** (`engineer_comments`, `text`, required): Provide any additional comments or notes.
* **Assigned Tool** (`assigned_tool`, `select_one`, required): Select the assigned tool or engineer responsible for the inspection.
* **Date of Inspection** (`date_of_inspection`, `date`, required): Enter the date of the inspection.
* **Start Time** (`start_time`, `time`, required): Enter the start time of the inspection.
* **Finish Time** (`finish_time`, `time`, required): Enter the finish time of the inspection.
* **Completed** (`completed`, `text`, required): Indicate whether the inspection is completed.
* **Notes** (`notes`, `text`, optional): Add any additional notes or comments.
* **Additional Photos** (`additional_photos`, `text`, optional): Upload additional photos for reference.
* **Additional Photos Section** (`additional_photos_section`, `note`, optional): This is a section for additional photos.
* **Submitted By** (`submitted_by`, `select_one`, required): Select the person who submitted the request (engineer, supervisor, or manager).
* **Submitted Date** (`submitted_date`, `date`, required): Enter the submitted date.
* **Submitted Time** (`submitted_time`, `time`, required): Enter the submitted time.
