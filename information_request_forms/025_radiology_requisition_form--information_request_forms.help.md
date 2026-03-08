</thinking>

# Radiology Requisition Form - Help Guide
## Purpose
The Radiology Requisition Form is used to request radiology tests for patient care. It collects information necessary for test ordering and helps healthcare professionals coordinate patient care.

## How to Complete This Form
To complete the form, simply fill out the required fields with the relevant information about the patient and the test order. Make sure to select the correct test type and location from the drop-down menus. If you're unsure about any field, refer to the field-by-field explanation below.

## Field-by-Field Explanation

* **Medical Professional** (`medical_professional`, email, optional): Enter the email address of the medical professional requesting the test.
* **Medical Department** (`medical_department`, text, optional): Enter the department name where the patient is being treated.
* **Test Ordering Date** (`test_ordering_date`, date, optional): Enter the date the test was ordered.
* **Test Ordering Time** (`test_ordering_time`, time, optional): Enter the time the test was ordered.
* **Reason for Ordering** (`reason_for_ordering`, text, optional): Enter a brief reason for ordering the test.
* **Test Type** (`test_type`, select_one, optional): Select the type of test being ordered from the options: X-ray, MRI, CT, Ultrasound, or Other.
* **Test Location** (`test_location`, text, optional): Enter the location of where the test will be performed.
* **Test Notes** (`test_notes`, note, optional): Enter any additional notes about the test.
* **Patient Name** (`patient_name`, text, optional): Enter the patient's name.
* **Date Ordered** (`date_ordered`, date, optional): Enter the date the test was ordered.
* **Test Ordered** (`test_ordered`, select_one, optional): Select the type of test being performed from the options: X-ray, MRI, CT, Ultrasound, or Other.
* **Time Ordered** (`time_ordered`, select_one, optional): Select the time of day the test was ordered.
* **Medical Department Name** (`medical_department_name`, text, optional): Enter the name of the medical department.
* **Test Ordered By** (`test_ordered_by`, select_multiple, optional): Select the doctor who ordered the test from the options.
* **Patient DOB** (`patient_dob`, date, optional): Enter the patient's date of birth.
* **Contact Name** (`contact_name`, text, optional): Enter the name of the contact person.
* **Contact Phone** (`contact_phone`, text, optional): Enter the contact phone number.
* **Contact Email** (`contact_email`, email, optional): Enter the contact email address.
* **Facility** (`facility`, text, optional): Enter the facility name.
* **Facility Location** (`facility_location`, text, optional): Enter the facility location.
* **Test Location Notes** (`test_location_notes`, note, optional): Enter any additional notes about the test location.
* **Test Status** (`test_status`, select_one, optional): Select the status of the test from the options: Ordered, Pending, Cancelled, Complete.
* **Test Ordered Status** (`test_ordered_status`, select_one, optional): Select the status of the test from the options: Ordered, Pending, Cancelled, Complete.
* **Reason for Cancellation** (`reason_for_cancellation`, select_multiple, optional): Select the reason for cancellation from the options.
* **Patient Address** (`patient_address`, text, optional): Enter the patient's address.

Note: Fields with `optional` in the type description are not required to be filled out.
