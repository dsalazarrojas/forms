# Server Application Registration - Help Guide
## Purpose
The Server Application Registration form is used to collect information about a server application, which will be used to create a server application profile for further processing and analysis.

## How To Complete This Form

1. Enter the name of the server application.
2. Select the type of the server application.
3. Choose the operating system of the server application.
4. Select the number of CPUs for the server application.
5. Select the required memory options for the server application.
6. Select the storage options for the server application.
7. Choose the environment where the server application will run.
8. Enter a brief description of the server application.
9. Provide the contact information for the server application.
10. Enter the email address of the person responsible for the server application.
11. Enter the phone number of the person responsible for the server application.
12. Add any additional notes about the server application.
13. Select the tool assigned to manage the server application.
14. Choose the person who created the server application.

## Field-by-Field Explanation
* **Server Application Name** (`server_application_name`, text, required): Enter the name of the server application.
* **Application Type** (`application_type`, select_one, required): Select the type of the server application.
* **Server OS** (`server_os`, select_one, required): Choose the operating system of the server application.
* **CPU Count** (`cpu_count`, number, required): Enter the number of CPUs for the server application.
* **Memory** (`memory`, select_multiple, required): Select the required memory options for the server application.
* **Storage** (`storage`, select_multiple, required): Select the required storage options for the server application.
* **Environment** (`environment`, select_one, required): Choose the environment where the server application will run.
* **Description** (`description`, text, required): Enter a brief description of the server application.
* **Contact** (`contact`, text, required): Provide the contact information for the server application.
* **Email** (`email`, email, required): Enter the email address of the person responsible for the server application.
* **Phone** (`phone`, text, required): Enter the phone number of the person responsible for the server application.
* **Notes** (`notes`, note, required): Add any additional notes about the server application.
* **Assigned Tool** (`assigned_tool`, select_one, required): Select the tool assigned to manage the server application.
* **Created By** (`created_by`, select_one, required): Choose the person who created the server application.
