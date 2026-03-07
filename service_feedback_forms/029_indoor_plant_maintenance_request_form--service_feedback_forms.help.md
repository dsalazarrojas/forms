<thinking>
This form is for submitting maintenance requests for indoor plants within the facility. 
The purpose of this form is to provide information about the maintenance required for each plant, including the ID of the plant, its type, location, notes, and other relevant details.
Before proceeding, ensure that this form is not being duplicated, and that the necessary maintenance for the specific plant has not already been recorded.
If you are unsure, you can check with the facilities management team or review previous maintenance records.
</thinking>

# indoor_plant_maintenance_request_form - Help Guide
## Purpose
This form is for submitting maintenance requests for indoor plants within the facility. It ensures that the correct information is gathered for each plant, including its ID, type, and location, to facilitate efficient maintenance management.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the `plant_id` field with the ID of the plant in question.
2. Select the correct `plant_type` from the provided options.
3. Choose the location of the plant from the `location` options.
4. Provide any additional notes about the maintenance required in the `notes` field.
5. Select whether the maintenance is currently assigned to a tool from the `assigned_tool` options.
6. Indicate whether the form has been submitted by a specific person from the `submitted_by` options.
7. Enter the date and time the form was submitted using the `submitted_on` and `submitted_at` fields.
8. Choose the category of maintenance required for the plant from the `category` options.
9. Select the person assigned to perform the maintenance from the `assigned_to` options.
10. Enter a detailed description of the maintenance in the `description` field.
10. Finally, fill in the unique identifier for this form in the `form_id` field.

## Field-by-Field Explanation

* **plant_id** (`plant_id`, `number`, required): Enter the ID number of the indoor plant in question.
* **plant_type** (`plant_type`, `select_one`, required): Choose the type of plant (e.g., flowering, cactus, fern).
* **location** (`location`, `select_multiple`, required): Indicate where the plant is located within the facility (e.g., office, lobby, break room).
* **notes** (`notes`, `text`, required): Provide any additional comments or details about the maintenance required.
* **assigned_tool** (`assigned_tool`, `select_one`, required): Determine if a specific tool is currently assigned to perform the maintenance.
* **submitted_by** (`submitted_by`, `select_multiple`, required): Identify who submitted this form (e.g., John, Jane).
* **submitted_on** (`submitted_on`, `date`, required): Enter the date the form was submitted.
* **submitted_at** (`submitted_at`, `time`, required): Enter the time the form was submitted.
* **category** (`category`, `select_multiple`, required): Choose the category of maintenance required (e.g., pruning, watering, fertilization).
* **assigned_to** (`assigned_to`, `select_multiple`, required): Select who is assigned to perform the maintenance (e.g., Bob, Carol).
* **description** (`description`, `text`, required): Enter a detailed description of the maintenance required.
* **form_id** (`form_id`, `number`, required): Fill in the unique identifier for this form.
