# Foreclosure Property Inspection Form - Help Guide

## Purpose
The Foreclosure Property Inspection Form is used to collect information about properties undergoing foreclosure. This includes details such as address, type, and inspection conditions to help assess and manage properties in foreclosure.

## How To Complete This Form

1. Fill in the "Property Address" field with the accurate and complete address of the property being inspected.
2. Select the "Property Type" that best describes the type of property (e.g., Single Family, Multi Family, Condo, Townhouse, Apartment).
3. Enter the "Date of Inspection" when the inspection took place.
4. Enter the "Time of Inspection" when the inspection occurred (if applicable).
5. Provide a "Condition Rating" based on the property's current condition (likely a numerical value between 1 and 10).
6. If necessary, enter "Necessary Repairs" notes regarding any issues found during the inspection.
7. In the "Inspector Name" field, enter the name of the person performing the inspection.
8. Provide "Inspector Notes" regarding the inspection process and findings.
9. Select the "Assigned User" who is responsible for handling this property's case (e.g., "chatjimmy" or "other").
10. Choose the "Status" of the property (Active or Inactive).
11. Select all relevant "Property Status" options (Active, Sold, Bank-Owned).
12. Enter any additional "Notes" about the property or inspection process.

## Field-by-Field Explanation

* **Property Address** (`property_address`, text, required): Enter the exact address of the property being inspected.
* **Property Type** (`property_type`, select_one, required): Select the type of property (Single Family, Multi Family, Condo, Townhouse, Apartment).
* **Date of Inspection** (`date_of_inspection`, date, required): Enter the date the inspection took place.
* **Time of Inspection** (`time_of_inspection`, time, required): Enter the time of the inspection (if applicable).
* **Condition Rating** (`condition_rating`, number, required): Rate the property's condition using a numerical value between 1 and 10.
* **Necessary Repairs** (`necessary_repairs`, note, required): Enter notes about necessary repairs or issues found during the inspection.
* **Inspector Name** (`inspector_name`, text, required): Enter the name of the person performing the inspection.
* **Inspector Notes** (`inspector_notes`, note, required): Provide any additional notes about the inspection process and findings.
* **Assigned User** (`assigned_user`, select_one, required): Select the user assigned to handle this property's case.
* **Status** (`status`, select_one, required): Choose the status of the property (Active or Inactive).
* **Property Status** (`property_status`, select_multiple, required): Select all relevant property status options (Active, Sold, Bank-Owned).
* **Notes** (`notes`, note, required): Enter any additional notes about the property or inspection process.
