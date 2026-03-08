# vendor_inspection_slot_booking_form - Help Guide

## Purpose
This form is designed to book a slot for a vendor inspection. It collects details for scheduling and assigning personnel for the inspection process.

## How To Complete This Form
1. Fill out the form completely, ensuring you've assigned all the required personnel and selected the correct inspection schedule.
2. Choose the correct day of inspection from the "Inspection Schedule" dropdown menu.
3. Select your preferred time for the inspection from the "Preferred Time" field.
4. Enter the start and end dates for the inspection in the "Start Date" and "End Date" fields.
5. Enter the contact details for the inspection, including the contact's name, email, and phone number.
6. Select the correct status and type of inspection from the "Vendor Inspection Status" and "Vendor Inspection Type" dropdown menus.
7. Assign the required personnel for the inspection, including inspectors, technicians, and supervisors.

## Field-by-Field Explanation

* **Inspection Schedule** (id: 3, type: select_one, required: true): Select the day of inspection that suits your schedule.
* **Preferred Time** (id: 4, type: number, required: true): Choose your preferred time for the inspection between 09:00 AM and 06:00 PM.
* **Start Date** (id: 5, type: date, required: true): Enter the start date of the inspection.
* **End Date** (id: 6, type: date, required: true): Enter the end date of the inspection.
* **Contact Details** (id: 7, type: text, required: false): Enter any additional contact details as needed.
* **First Name of Contact** (id: 8, type: text, required: true): Enter the contact's first name.
* **Last Name of Contact** (id: 9, type: text, required: true): Enter the contact's last name.
* **Email of Contact** (id: 10, type: email, required: true): Enter the contact's email address.
* **Phone Number of Contact** (id: 11, type: text, required: true): Enter the contact's phone number.
* **Notes** (id: 12, type: note, required: false): Enter any additional notes for the inspection.
* **Assigned Inspector** (id: 13, type: select_one, required: true): Select the assigned inspector for the inspection.
* **Assigned Technician** (id: 14, type: select_one, required: true): Select the assigned technician for the inspection.
* **Assigned Supervisor** (id: 16, type: select_one, required: true): Select the assigned supervisor for the inspection.
* **Assigned Manager** (id: 17, type: select_one, required: false): Select the assigned manager for the inspection.
* **Assigned Area** (id: 18, type: select_one, required: true): Select the assigned area for the inspection.
* **Assigned Team** (id: 19, type: select_one, required: true): Select the assigned team for the inspection.
* **Vendor Inspection Status** (id: 23, type: select_one, required: true): Select the status of the inspection.
* **Vendor Inspection Type** (id: 24, type: select_one, required: true): Select the type of inspection.
