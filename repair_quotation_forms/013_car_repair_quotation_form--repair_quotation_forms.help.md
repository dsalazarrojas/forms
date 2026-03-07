<thinking>
I will review the provided YAML form definition to understand the form's purpose and ensure that I'm designing a help guide that accurately reflects its intent and structure.
... 
The form is used for creating a repair quotation for a vehicle. It appears to be designed to gather information about the customer, their vehicle, the repair details, and quotation details.
The form does not seem to be duplicating any other form, and the structure is clear and organized into various sections.
</thinking>

# Car Repair Quotation Form - Help Guide
## Purpose
The Car Repair Quotation Form is designed to gather information about a vehicle that needs to be repaired. This form helps to capture details about the customer, their vehicle, the problem description, and estimated repair costs.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the customer's personal information, including their name, email address, and phone number. These details are required fields.
2. Provide the vehicle's year, make, model, and color. These details are also required.
3. Describe the problem with the vehicle in the "Problem description" field. This is a required field.
4. Select the primary repair category and priority level for the repair.
5. If applicable, indicate if there have been any previous repairs on this issue and provide details about them.
6. Estimate the labor hours and labor rate for the repair.
7. Enter the estimated parts cost for the repair.

## Field-by-Field Explanation

* **Customer name** (`customer_name`, `text`, required): Enter the customer's name as it appears on their identification.
* **Email address** (`customer_email`, `email`, required): Enter the customer's email address for communication purposes.
* **Phone number** (`customer_phone`, `text`, required): Enter the customer's phone number for contact.
* **Street address** (`customer_address`, `text`, optional): Enter the customer's street address.
* **City** (`customer_city`, `text`, optional): Enter the customer's city.
* **Vehicle year** (`vehicle_year`, `number`, required): Enter the vehicle's year.
* **Vehicle make** (`vehicle_make`, `text`, required): Enter the vehicle's make.
* **Vehicle model** (`vehicle_model`, `text`, required): Enter the vehicle's model.
* **Vehicle color** (`vehicle_color`, `text`, optional): Enter the vehicle's color.
* **Vehicle Identification Number (VIN)** (`vehicle_vin`, `text`, optional): Enter the vehicle's VIN if available.
* **Current mileage** (`vehicle_mileage`, `number`, optional): Enter the vehicle's current mileage.
* **License plate number** (`license_plate`, `text`, optional): Enter the vehicle's license plate number.
* **Problem description** (`problem_description`, `text`, required): Describe the problem with the vehicle.
* **Symptoms or warning signs** (`symptoms`, `text`, optional): Describe any symptoms or warning signs related to the problem.
* **Primary repair category** (`repair_type`, `select_one`, required): Select the primary category of the repair (e.g., Engine Repair, Transmission, etc.).
* **Repair priority** (`repair_priority`, `select_one`, required): Select the priority level of the repair (e.g., Urgent - Safety Issue, High - Soon, etc.).
* **Any previous repairs** (`previous_repairs`, `select_one`, optional): Indicate if there have been any previous repairs on this issue.
* **Details of previous repairs** (`previous_repair_details`, `text`, optional): Provide details about previous repairs if applicable.
* **Estimated labor hours** (`labor_hours_estimate`, `number`, required): Estimate the labor hours required for the repair.
* **Labor rate per hour** (`labor_rate`, `number`, required): Enter the labor rate per hour.
* **Estimated parts cost** (`parts_estimated_cost`, `number`, required): Enter the estimated parts cost for the repair.

## Tips

* Ensure that all required fields are filled in before submitting the form.
* If you are unsure about any of the fields, please contact us for assistance.
* The form is designed to be completed by the customer, but please review it with them to ensure accuracy and completeness.
