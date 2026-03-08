# Residence Maintenance Request Form - Help Guide

## Purpose

This form is designed to collect information from residents regarding their maintenance request for their residence. It allows them to provide essential details about the issue they are experiencing, their contact information, and their preferred contact method. The form is intended for maintenance staff to address the issue efficiently and effectively.

## How To Complete This Form

To complete this form, follow these steps:

1. On the first page, enter your **Maintenance Request** in the text box provided.
2. On the second page, provide your **Contact Details** in the space provided.
3. In the **Issue Description** field, describe the issue you are experiencing with your residence.
4. Select your **Preferred Contact Method** (Phone, Email, or In Person).
5. In the **Property Details** field, select the relevant details about your property (Address, City, State, or Zip).
6. Choose the **Date of Visit** when you would like a maintenance staff member to visit your residence.
7. Select the **Maintenance Staff** member you would like to address your issue (Technician 1, 2, or 3).

## Field-by-Field Explanation

* **Maintenance Request**: (`maintenance_request`, `text`, required) A brief description of the issue you are experiencing with your residence.
* **Contact Details**: (`contact_details`, `note`, required) Enter your contact details in this space.
* **Issue Description**: (`issue_description`, `text`, required) Describe the issue you are experiencing with your residence in this text box.
* **Preferred Contact Method**: (`preferred_contact_method`, `select_one`, required) Select how you would like to be contacted (Phone, Email, or In Person).
* **Property Details**: (`property_details`, `select_multiple`, required) Select the relevant details about your property (Address, City, State, or Zip).
* **Date of Visit**: (`date_of_visit`, `date`, required) Enter the date you would like a maintenance staff member to visit your residence.
* **Maintenance Staff**: (`maintenance_staff`, `select_one`, required) Select the maintenance staff member you would like to address your issue (Technician 1, 2, or 3).
