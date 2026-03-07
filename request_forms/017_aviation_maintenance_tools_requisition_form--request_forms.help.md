<thinking>

This form is designed to collect information from employees and teams in various departments to request and requisition tools and equipment for maintenance tasks. It ensures that the correct tools are provided to the right personnel at the right time, reducing delays and improving the overall efficiency of maintenance operations. The form should only be filled out for tools that are not already in stock or available for immediate issue. Requisitioning the same tool multiple times for the same purpose is not recommended and may result in delays or cancellations.

</thinking>

# Aviation Maintenance Tools Requisition Form - Help Guide
## Purpose
This form is designed to collect information from employees and teams in various departments to request and requisition tools and equipment for maintenance tasks.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your personal information, including your name, email address, and department.
2. Provide details about the tool you are requesting, including its description, part number, and quantity.
3. Specify the type of tool you need and any other relevant details.
4. Select the project and work order information, including the aircraft tail number and required date.
5. Indicate the level of urgency for the request, as well as the desired pickup or delivery method.
6. Enter your supervisor's name for approval.

## Field-by-Field Explanation

* **Requester Full Name** (`requester_name`, text, required): Fill out your full name as it appears on your official documents.
* **Requester Email Address** (`requester_email`, email, required): Enter your official email address.
* **Department** (`department`, select_one, required): Select your primary department, such as Airframe, Powerplant, Avionics, etc.
* **Employee ID** (`employee_id`, text, required): Enter your unique employee or badge number.
* **Tool Description** (`tool_description`, text, required): Clearly state the name of the tool being requested.
* **Part Number or Tool ID** (`tool_id_part`, text, required): Enter the specific identifier for the tool from the catalog.
* **Quantity** (`tool_quantity`, number, required): Enter the number of units being requested.
* **Tool Category** (`tool_category`, select_multiple, required): Select all that apply for the tool category, such as Hand Tools, Power Tools, etc.
* **Aircraft Tail Number** (`tail_number`, text, required): Enter the tail number of the aircraft the tool is needed for.
* **Work Order Number** (`work_order`, text, required): Enter the internal project tracking number for the maintenance task.
* **Urgency Level** (`urgency_level`, select_one, required): Select the level of urgency for the request, such as Low (Routine stock), Medium (Next scheduled maintenance), High (Imminent need), etc.
* **Required Date** (`required_date`, date, required): Enter the date when the tool is needed.
* **Pickup or Delivery** (`logistics_preference`, select_one, required): Select how you would like to receive the tool, such as Tool Room Pickup, Delivery to Hangar, etc.
* **Supervisor Approval Name** (`supervisor_approval`, text, required): Enter the name of your supervisor for approval.
