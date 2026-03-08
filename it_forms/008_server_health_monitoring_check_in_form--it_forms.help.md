# server_health_monitoring_check_in_form - Help Guide
## Purpose
The purpose of this form is to check in on the health status of servers, helping to maintain server reliability and efficiency.

## How To Complete This Form
To complete this form, follow these steps:

1. Select one of the options for "Health Status": "up", "down", or "running".
2. For "Maintenance Status", select all applicable options from the list (e.g., "active" and "inactive" if the server is currently undergoing both active and inactive maintenance).
3. Enter any notes about the server's current status in the "Notes" field.
4. If you are the server administrator, enter their name in the "Server Admin" field.
5. Enter the contact information and phone number for the server owner or administrator in the "Contact Info" and "Phone Number" fields.
6. If applicable, select the "Assigned Tool" from the list (e.g., "chatjimmy").

## Field-by-Field Explanation
* **Server Information (General Information)** (`server_information`, `text`, required: false): Enter a brief description of the server or any other relevant information.
* **Health Status** (`health_status`, `select_one`, required: false): Select the current health status of the server: "up", "down", or "running".
* **Maintenance Status** (`maintenance_status`, `select_multiple`, required: false): Select all applicable maintenance statuses for the server (e.g., "active" and "inactive" if the server is undergoing both).
* **Notes** (`notes`, `note`, required: false): Enter any notes or comments about the server's current status.
* **Server Admin** (`server_admin`, `text`, required: false): If you are the server administrator, enter their name.
* **Contact Info** (`contact_info`, `email`, required: false): Enter the contact information for the server owner or administrator.
* **Phone Number** (`phone_number`, `text`, required: false): Enter the phone number for the server owner or administrator.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Select the tool assigned to the server if applicable (e.g., "chatjimmy").
