-thinking>
The project resource allocation amendment form is used to update existing project resources and make adjustments to their quantity, cost, or status.

This form is likely intended for use by project managers, team leaders, or other authorized personnel to make changes to project resources after the initial allocation. The fields in this form will likely be used to provide details about the resources that need to be updated or changed.

Please ensure that the information in this form is accurate and up-to-date before submitting it, as it may be used for decision-making or other critical processes.</thinking>

# project_resource_allocation_amendment_form - Help Guide
## Purpose
This form is used to update or modify project resources such as quantity, cost, or status.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Resource ID of the resource you want to modify.
2. Enter the updated Resource Name if necessary.
3. Select the Resource Type from the options provided.
4. Enter the new Resource Quantity if necessary.
5. Enter the new Resource Cost if necessary.
6. Provide a Reason for Change.
7. Select the new Resource Status from the options provided.
8. Enter the name of the user assigning the change.
9. Enter the Project ID related to the resource.
10. Enter the resource Description (optional).
11. Enter the user ID of the user updating the resource.
12. Enter the Date Updated.
13. Enter the Time Updated.

## Field-by-Field Explanation

* **Resource ID** (`resource_id`, number, required): Enter the unique ID of the resource being modified.
* **Resource Name** (`resource_name`, text, required): Enter the name of the resource being modified.
* **Resource Type** (`resource_type`, select_one, required): Select from the options provided to indicate the type of resource being modified.
* **Resource Quantity** (`resource_quantity`, number, required): Enter the updated quantity of the resource.
* **Resource Cost** (`resource_cost`, number, required): Enter the updated cost of the resource.
* **Reason for Change** (`reason_for_change`, text, required): Describe the reason for modifying the resource.
* **New Resource Quantity** (`new_resource_quantity`, number, optional): Enter the new quantity of the resource if necessary.
* **New Resource Cost** (`new_resource_cost`, number, optional): Enter the new cost of the resource if necessary.
* **Resource Status** (`resource_status`, select_multiple, required): Select from the options provided to indicate the status of the resource.
* **Assigned User** (`assigned_user`, email, required): Enter the name of the user assigning the change.
* **Project ID** (`project_id`, number, required): Enter the ID of the related project.
* **Resource Description** (`resource_description`, text, optional): Enter a description of the resource being modified.
* **Updated By** (`updated_by`, number, required): Enter the ID of the user updating the resource.
* **Date Updated** (`date_updated`, date, required): Enter the date the resource was updated.
* **Time Updated** (`time_updated`, time, required): Enter the time the resource was updated.

## Tips
* Ensure that all required fields are completed accurately and thoroughly.
* Review the form before submitting to ensure all information is correct.
* Save a copy of the form for reference or further review.
