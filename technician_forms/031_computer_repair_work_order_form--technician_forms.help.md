# Computer Repair Work Order Form - Help Guide
## Purpose
The Computer Repair Work Order Form is designed for technicians to collect and document information needed to complete computer repairs.

## How To Complete This Form

1. Fill out the form completely and accurately before submitting it to the repair team.
2. Select the problem category and operating system of the device from the dropdown menus.
3. Provide a detailed description of the problem and any error messages displayed.
4. Indicate how often the issue occurs.
5. Select the priority level and preferred turnaround time for the repair.
6. Confirm if a current backup exists and its status.
7. Check if the device is under warranty.
8. Indicate the maximum amount willing to spend on repair.
9. Confirm if you agree to the diagnostic fee.
10. Enter the name of the assigned technician and a brief description of the diagnosis results.
11. Update the repair status as the repair progresses.
12. Sign and date the form to confirm submission.

## Field-by-Field Explanation

* **Work Order ID** (`1`, `text`, required): A unique identifier for the work order.
* **Order Date** (`2`, `date`, required): The date the work order was created.
* **Customer Name** (`3`, `text`, required): The full name of the customer.
* **Customer Email** (`4`, `email`, required): The email address for contact.
* **Customer Phone** (`5`, `text`, required): The contact phone number.
* **Company Name** (`6`, `text`, not required): The name of the company if applicable.
* **Device Type** (`7`, `select_one`, required): The type of device needing repair (e.g., desktop, laptop, tablet, server).
* **Device Brand** (`8`, `text`, required): The brand or manufacturer of the device.
* **Device Model** (`9`, `text`, required): The model number of the device.
* **Serial Number** (`10`, `text`, not required): The device's serial number.
* **Operating System** (`11`, `select_one`, required): The operating system of the device (e.g., Windows 11, Windows 10, macOS, Linux).
* **Problem Category** (`12`, `select_one`, required): The problem category (e.g., hardware failure, software issue, virus or malware, network issue).
* **Problem Description** (`13`, `text`, required): A detailed description of the problem.
* **Error Messages** (`14`, `text`, not required): Any error messages displayed on the device.
* **Issue Frequency** (`15`, `select_one`, required): How often the issue occurs (e.g., constant, frequent, intermittent).
* **Priority Level** (`16`, `select_one`, required): The priority level of the repair (e.g., low, medium, high, critical).
* **Data Backup Status** (`17`, `select_one`, required): The status of the backup for the device.
* **Warranty Status** (`18`, `select_one`, not required): Whether the device is under warranty.
* **Preferred Turnaround** (`19`, `select_one`, required): The preferred time for repair completion.
* **Repair Estimate Limit** (`20`, `text`, not required): The maximum amount willing to spend on repair.
* **Diagnostic Fee Agreed** (`21`, `select_one`, required): Confirmation of agreeing to the diagnostic fee.
* **Technician Assigned** (`22`, `text`, not required): The name of the assigned technician.
* **Diagnostic Results** (`23`, `text`, not required): A description of the diagnosis results.
* **Repair Status** (`24`, `select_one`, required): The current status of the repair (e.g., received, in diagnosis, waiting for parts, in repair).
* **Customer Signature** (`25`, `text`, required): The customer's signature.

**Tips**

* Ensure accuracy and completeness in filling out the form to prevent errors and delays in service.
* Review each field carefully before submitting the form.
* Keep the form updated as the repair progresses.
* Sign and date the form after submission to confirm completion.
* The repair team will use this form to guide the repair process and communicate with the customer.
