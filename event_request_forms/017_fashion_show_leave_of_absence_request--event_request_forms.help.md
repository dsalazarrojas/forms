# Fashion Show Leave Of Absence Request - Help Guide
## Purpose
The Fashion Show Leave Of Absence Request form is designed to collect necessary information from employees requesting leave during a fashion show production period.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the show name in the **Show Name** field.
2. Choose the **Start Date** and **End Date** for your leave of absence.
3. Select the **Production Status** to indicate where your show is currently at in the production process.
4. List the specific **Production Dates** when you will be taking your leave.
5. Enter your **Employee Name** and **Supervisor Name**, **Supervisor Email**, and **Supervisor Phone** for contact information.
6. Choose the **Request Type** that best describes your reason for request.
7. Provide a brief **Reason for Request** explaining your reason for leave.
8. Finally, click submit to send the request.

## Field-by-Field Explanation

* **Show Name** (`show_name`, text, required): Enter the name of the show you are requesting leave for.
* **Start Date** (`start_date`, date, required): Select the date you will begin your leave.
* **End Date** (`end_date`, date, required): Select the date you will end your leave.
* **Production Status** (`production_status`, select_one, optional): Select the current production status of your show (In Production, Pre-Production, Post-Production, Not Yet Started).
* **Production Dates** (`production_dates`, select_multiple, optional): Select the specific production dates when you will be taking your leave.
* **Employee Name** (`employee_name`, text, required): Enter your name as the employee requesting leave.
* **Supervisor Name** (`supervisor_name`, text, required): Enter your supervisor's name for contact information.
* **Supervisor Email** (`supervisor_email`, email, required): Enter your supervisor's email address for contact information.
* **Supervisor Phone** (`supervisor_phone`, text, optional): Enter your supervisor's phone number for contact information.
* **Request Type** (`request_type`, select_one, optional): Select the type of request (Time Off, Schedule Change, Request for Additional Time Off).
* **Reason for Request** (`reason_for_request`, text, optional): Provide a brief explanation for your reason for leave.
* **Approved By** (`approved_by`, text, optional): Enter the name of the person who approved your request.
* **Approved Date** (`approved_date`, date, optional): Select the date your request was approved.
