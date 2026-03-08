<thinking>
To create the help guide for the Mechanical Maintenance Material Log form, I need to understand the purpose and functionality of this form. From the inputSchema, I see that the form is used to log information about mechanical maintenance operations, including the business form description, maintenance operation, material used, quantity used, unit price, total cost, date used, time used, assigned tool, and other details such as notes, email, phone, category, form ID, business ID, created by, date created, time created, last updated, time updated, submitted by, submitted date, submitted time, notes submitted, email submitted, and phone submitted.

It seems that this form is used to track and record information about maintenance operations in a business setting, and it requires specific details such as the maintenance operation, material used, quantity used, unit price, total cost, and category.

I will now output the help guide in Markdown.

# Mechanical Maintenance Material Log - Help Guide

## Purpose
The Mechanical Maintenance Material Log form is used to track and record information about mechanical maintenance operations in a business setting. This form helps to provide detailed records of maintenance activities, including the materials used, costs, and other relevant details.

## How To Complete This Form
1. Select the "Maintenance Operation" option that best describes the maintenance activity.
2. Choose the materials used for the maintenance operation from the available options.
3. Enter the quantity used for the selected material.
4. Enter the unit price for the material used.
5. Calculate the "Total Cost" by multiplying the quantity used and unit price.
6. Enter the "Date Used" for the maintenance operation.
7. Enter the time spent on the maintenance operation.
8. Select the "Assigned Tool" used for the maintenance operation.
9. Optionally, add any additional notes about the maintenance operation.
10. Enter the email address and phone number of the person submitting the form.

## Field-by-Field Explanation

* **Business Form Description** (`business_form_description`, text, optional): A brief description of the business form.
* **Maintenance Operation** (`maintenance_operation`, select_one, required): The type of maintenance operation being performed.
* **Material Used** (`material_used`, select_multiple, required): The materials used for the maintenance operation.
* **Quantity Used** (`quantity_used`, number, required): The quantity of material used for the maintenance operation.
* **Unit Price** (`unit_price`, number, required): The unit price of the material used.
* **Total Cost** (`total_cost`, number, required): The total cost of the material used, calculated as the product of quantity used and unit price.
* **Date Used** (`date_used`, date, required): The date the maintenance operation was performed.
* **Time Used** (`time_used`, time, required): The time spent on the maintenance operation.
* **Assigned Tool** (`assigned_tool`, select_one, required): The tool assigned for the maintenance operation.
* **Notes** (`notes`, note, optional): Any additional notes about the maintenance operation.
* **Email** (`email`, email, optional): The email address of the person submitting the form.
* **Phone** (`phone`, text, optional): The phone number of the person submitting the form.
* **Category** (`category`, select_one, required): The category of the maintenance operation.
* **Form Id** (`form_id`, number, required): A unique identifier for the form.
* **Business Id** (`business_id`, number, required): A unique identifier for the business.
* **Created By** (`created_by`, select_one, optional): The person who created the form.
* **Date Created** (`date_created`, date, optional): The date the form was created.
* **Time Created** (`time_created`, time, optional): The time the form was created.
* **Last Updated** (`last_updated`, date, optional): The date the form was last updated.
* **Time Updated** (`time_updated`, time, optional): The time the form was last updated.
* **Submitted By** (`submitted_by`, select_one, optional): The person who submitted the form.
* **Submitted Date** (`submitted_date`, date, optional): The date the form was submitted.
* **Submitted Time** (`submitted_time`, time, optional): The time the form was submitted.
* **Notes Submitted** (`notes_submitted`, note, optional): Additional notes submitted with the form.
* **Email Submitted** (`email_submitted`, email, optional): The email address submitted with the form.
* **Phone Submitted** (`phone_submitted`, text, optional): The phone number submitted with the form.

Note: This help guide assumes that the fields are used as described in the inputSchema. If any field has been modified or has additional functionality, please let me know so I can update the guide accordingly.
