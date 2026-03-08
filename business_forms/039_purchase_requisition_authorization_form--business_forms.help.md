<thinking>

To create a user-facing help guide for the Purchase Requisition Authorization Form, let's first understand its purpose and how it can be used by the end-user. The form is intended to gather information and track the status of purchase requisitions within a business. It allows users to input details about a purchase request, such as employee details, approver ID, requisition date, total value, vendor details, and more.

This form will help users to provide accurate and relevant information for the purchase process, making it a useful tool for business operations. It's essential to ensure that all required fields are filled out correctly to avoid any issues with the purchase process.

Before proceeding, we should check if there are any similar forms or documents that might be used for the same purpose within the company. This will help us to determine whether this form is redundant or not. If a similar form exists, we might need to modify or merge the information from this form to avoid duplication of efforts.

Now, let's create the user-facing help guide.

# Purchase Requisition Authorization Form - Help Guide

## Purpose

The Purchase Requisition Authorization Form is designed to collect and track information about purchase requisitions within a business. It helps ensure accurate and relevant data is provided for the purchase process, reducing potential issues.

## How To Complete This Form

1. Fill out the "Purchase Request" field with a brief description of the purchase request.
2. Provide employee details, including the name and department where applicable.
3. Select whether the "Approver ID" is "Yes" or "No".
4. Enter the "Requisition Date" in the correct format (MM/DD/YY).
5. Enter the "Total Value" of the purchase.
6. Enter vendor details, including name, address, phone number, and email.
7. Select the "Purchase Type" (Capital Expenditure or Operating Expenditure).
8. Select the "Purchase Status" (Authorized, Rejected, or In Progress).
9. Enter the "Purchase Amount".

## Field-by-Field Explanation

* **Purchase Request** (`purchase_request`, text, optional): Enter a brief description of the purchase request.
* **Employee Details** (`employee_details`, text, optional): Provide details about the employee, including their name and department.
* **Approver ID** (`approver_id`, select_multiple, optional): Select whether the approver ID is "Yes" or "No".
* **Requisition Date** (`requisition_date`, date, optional): Enter the date of the requisition in the correct format (MM/DD/YY).
* **Total Value** (`total_value`, number, optional): Enter the total value of the purchase.
* **Vendor Details** (`vendor_details`, text, optional): Enter the name, address, phone number, and email of the vendor.
* **Purchase Order** (`purchase_order`, select_one, optional): Select whether the purchase is "Yes" or "No".
* **Purchase Date** (`purchase_date`, time, optional): Not applicable for this form as it seems to be an error in the schema.
* **Status** (`status`, select_one, optional): Select the status of the purchase (Approved, Rejected, or Pending).
* **Reason for Rejection** (`reason_for_rejection`, text, optional): Enter the reason for rejection if the purchase is rejected.
* **Notes** (`notes`, note, optional): Enter any additional notes about the purchase.
* **Approver Name** (`approver_name`, text, optional): Enter the name of the approver.
* **Email** (`email`, email, optional): Enter the email of the approver.
* **Phone** (`phone`, text, optional): Enter the phone number of the approver.
* **Department** (`department`, select_one, optional): Select the department of the approver.
* **Location** (`location`, text, optional): Enter the location of the vendor.
* **Requisition ID** (`requisition_id`, text, optional): Enter the requisition ID.
* **Purchase Number** (`purchase_number`, text, optional): Enter the purchase number.
* **Vendor** (`vendor`, text, optional): Enter the name of the vendor.
* **Vendor Address** (`vendor_address`, text, optional): Enter the address of the vendor.
* **Vendor Phone** (`vendor_phone`, text, optional): Enter the phone number of the vendor.
* **Vendor Email** (`vendor_email`, email, optional): Enter the email of the vendor.
* **Purchase Type** (`purchase_type`, select_one, optional): Select the type of purchase (Capital Expenditure or Operating Expenditure).
* **Purchase Status** (`purchase_status`, select_one, optional): Select the status of the purchase (Authorized, Rejected, or In Progress).
* **Purchase Amount** (`purchase_amount`, number, optional): Enter the amount of the purchase.

Note that some fields may have been removed or modified as per the provided schema, as they were not applicable or were not properly configured.
