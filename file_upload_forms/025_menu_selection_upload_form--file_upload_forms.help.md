<thinking>
We are designing a user-facing help guide for a form titled "Menu Selection Upload Form". This form is designed to collect menu selection information from users. 

The form's purpose is to gather data on menu item uploads, including file uploads, dates, and user details. The form is likely used for menu management purposes, perhaps for restaurants or food establishments. 

Before we dive into the instructions, let's assume that this form is used for restaurants to upload new menu items, and the user is a staff member tasked with managing the menu. 

The form is relatively straightforward, with several fields that require user input. 

</thinking>

# Menu Selection Upload Form - Help Guide

## Purpose
This form is for staff members to upload new menu items, including menu selection details and file uploads, for restaurants to manage their menu.

## How To Complete This Form

1.  Click on the "Select and Upload Files" field to browse for available files to select and upload.
2.  Fill in the "Restaurant Name" field with the name of the restaurant the menu item is for.
3.  Enter the "Menu Item" in the text field.
4.  Fill in the "Price" for the menu item.
5.  Upload a "Menu Item File" by selecting and uploading a file using the "Select and Upload Files" field.
6.  Choose the "Menu Selection Uploaded" status from the dropdown options.
7.  Set the "File Upload Status" to "Approved", "Pending", or "Rejected".
8.  Finally, fill in the "Uploaded for" field with the name of the staff member who uploaded the menu item.
9.  Enter the "Uploaded at Location" field with the location where the menu item was uploaded from.

## Field-by-Field Explanation
* **Select and Upload Files** (`files`, `select_multiple`, required: false): Select multiple files to upload for the menu item.
* **Restaurant Name** (`restaurant_name`, `text`, required: false): Enter the name of the restaurant the menu item is for.
* **Menu Item** (`menu_item`, `text`, required: false): Enter the name of the menu item being uploaded.
* **Price** (`price`, `text`, required: false): Enter the price of the menu item.
* **Upload Menu Item File** (`upload_file`, `text`, required: false): Select a file to upload for the menu item using the "Select and Upload Files" field.
* **Date Uploaded** (`date_uploaded`, `date`, required: false): Enter the date the menu item was uploaded.
* **Uploaded by** (`uploaded_by`, `text`, required: false): Enter the name of the staff member who uploaded the menu item.
* **Time Uploaded** (`uploaded_at`, `time`, required: false): Enter the time the menu item was uploaded.
* **Comments** (`comments`, `note`, required: false): Enter any comments for the menu item upload.
* **Menu Selection Uploaded** (`menu_selection_uploaded`, `select_one`, required: false): Choose the status of the menu selection (e.g., "Item A", "Item B", "Item C").
* **File Upload Status** (`file_upload_status`, `select_one`, required: false): Choose the file upload status (e.g., "Approved", "Pending", "Rejected").
* **Uploaded for** (`uploaded_for`, `text`, required: false): Enter the name of the staff member who uploaded the menu item.
* **Uploaded at Location** (`uploaded_at_location`, `text`, required: false): Enter the location where the menu item was uploaded from.
