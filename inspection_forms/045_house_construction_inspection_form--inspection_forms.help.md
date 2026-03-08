# House Construction Inspection Form - Help Guide
## Purpose
This form is designed to collect information about a house's construction status and inspection details.

## How To Complete This Form
1. Fill in the form with the required information for the house under inspection.
2. Enter the inspection date and time in the respective fields.
3. Select the building size and construction status from the available options.
4. Provide any additional notes or comments about the inspection in the inspection notes and comments sections.
5. Fill in the required fields for the house address and inspection ID.
6. Enter your name and title as the inspector.

## Field-by-Field Explanation
* **Construction Inspection Form** (`house_construction_inspection_form`, text, required: false)
	+ This is the primary text field where you can enter any information about the house under inspection.
* **House Construction Inspection** (`house_construction_inspection`, text, required: false)
	+ This field allows you to provide a brief description of the house construction inspection.
* **House Construction Completed** (`house_construction_completed`, text, required: false)
	+ This field is for indicating if the construction is completed or not.
* **Inspection Date** (`inspection_date`, date, required: false)
	+ Enter the date of the inspection in the format mm/dd/yyyy.
* **Inspection Time** (`inspection_time`, time, required: false)
	+ Enter the time of the inspection in the format hh:mm AM/PM.
* **House Address** (`house_address`, text, required: false)
	+ Enter the address of the house under inspection.
* **Building Size** (`building_size`, text, required: false)
	+ Select the building size from the available options.
* **House Construction Status** (`house_construction_status`, select_multiple, required: true)
	+ Select all applicable statuses for the house construction, such as Foundation Work, Framing, etc.
	+ Options include: Foundation Work, Framing, Electrical, Plumbing, HVAC, etc.
* **Inspection Notes** (`inspection_notes`, note, required: false)
	+ Enter any notes or comments about the inspection.
* **Inspection Comments** (`inspection_comments`, text, required: false)
	+ Enter any comments or observations about the inspection.
* **House Construction Inspection ID** (`house_construction_inspection_id`, text, required: false)
	+ Enter the ID of the house under inspection.
* **Inspector** (`house_construction_inspector`, text, required: false)
	+ Enter your name and title as the inspector.

## Tips
- Make sure to fill in all required fields accurately.
- Review your answers carefully before submitting the form.
- If you need more information, feel free to contact us.
