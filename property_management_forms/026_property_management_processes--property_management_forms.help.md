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
