<thinking>...This form is used for managing properties, collecting information about addresses, names, types, creation dates, and statuses of properties. It seems that properties can be either residential, commercial, or industrial. Users need to fill in the address and name of the property, which is mandatory. They also have to select the property type and status, which are also required. The date created is optional but might be useful for historical data. The form seems to be used for various property management processes. The field types and options seem to be sufficient for the form's purpose. The fields do not seem to be duplicated, and the labels are clear. I will now create the final help guide based on the provided YAML fields.</thinking>

# Property Management Processes - Help Guide
## Purpose
This form is used for collecting and managing information about properties, including addresses, names, types, creation dates, and statuses.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the property's address in the **Address** field.
2. Provide the property's **Name**.
3. Select the property's **Type** from the options: **Residential**, **Commercial**, or **Industrial**.
4. (Optional) Fill in the **Date Created** if you know it.
5. Select the **Status** of the property from the options: **Active** or **Inactive**.

## Field-by-Field Explanation
* **Address** (`property_management_address`, text, required): This field is used to collect the address of the property.
* **Name** (`property_management_name`, text, optional): This field is used to collect the name of the property.
* **Type** (`property_management_type`, select_one, required): This field is used to select the type of the property (Residential, Commercial, or Industrial).
* **Date Created** (`property_management_date_created`, date, optional): This field is used to collect the date the property was created.
* **Status** (`property_management_status`, select_multiple, required): This field is used to select the status of the property (Active or Inactive).
