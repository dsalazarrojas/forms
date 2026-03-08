# it_license_purchase_request_form - Help Guide

## Purpose
The IT License Purchase Request Form is designed to capture information from employees or team members who wish to purchase a license for a specific product. This form serves as a formal request for approval from management to ensure that license purchases align with company policies and are properly tracked for accounting and inventory purposes.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name and email address in the "Requestor" and "Requestor Email" fields, respectively.
2. If you are requesting a license, select "Yes" for the "License Product" field.
3. Indicate the quantity of licenses you are requesting in the "Quantity" field.
4. If you are requesting a specific type of license, choose the correct type from the drop-down menu in the "License Type" field.
5. Enter your business unit name in the "Business Unit" field.
6. Enter the date and time you requested the license in the "Request Date" and "Request Time" fields, respectively.
7. Enter the date and time you expect approval for the license in the "Approval Date" and "Approval Time" fields, respectively.
8. Add any additional notes or comments about your license request in the "Notes" field.

## Field-by-Field Explanation
* **Requestor** (`requestor_label`, text, required): Enter your name as the person requesting the license.
* **Requestor Email** (`requestor_email`, email, required): Enter your email address as the person requesting the license.
* **Requestor Phone** (`requestor_phone`, text, optional): Enter your phone number if you want to be contacted directly about your license request.
* **License Product** (`license_product`, select_one, optional): Select "Yes" if you are requesting a license, otherwise select "No".
* **Quantity** (`license_quantity`, number, optional): Enter the number of licenses you are requesting.
* **License Type** (`license_type`, select_one, optional): If you are requesting a specific type of license, choose the correct type from the drop-down menu.
* **Business Unit** (`business_unit`, text, optional): Enter your business unit name.
* **Request Date** (`request_date`, date, required): Enter the date you requested the license.
* **Request Time** (`request_time`, time, required): Enter the time you requested the license.
* **Approval Date** (`approval_date`, date, optional): Enter the date you expect approval for the license.
* **Approval Time** (`approval_time`, time, optional): Enter the time you expect approval for the license.
* **Notes** (`notes`, note, optional): Add any additional comments or notes about your license request.
