# radiology_requisition_form - Help Guide
## Purpose
The radiology_requisition_form is used to collect information for radiology orders such as X-ray, MRI, CT, and other medical imaging tests.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Select the relevant options for the following orders:
	* Order X-ray: Choose if an X-ray is required.
	* Order MRI: Choose if an MRI is required.
	* Order CT: Choose if a CT scan is required.
2. Provide the Radiologist's name and the patient's name as requested.
3. Enter the patient's date of birth.
4. Enter the date of the order.
5. Enter the details of the order.
6. Select the test location and test date for each test ordered.
7. Choose the order status.

## Field-by-Field Explanation
- **Order X-ray** (`order_xray`, select_one, required/optional): Select "Yes" if an X-ray is required.
- **Order MRI** (`order_mri`, select_one, required/optional): Select "Yes" if an MRI is required.
- **Order CT** (`order_ct`, select_one, required/optional): Select "Yes" if a CT scan is required.
- **Radiologist** (`radiologist_name`, text, required/optional): Enter the radiologist's name as required.
- **Patient** (`patient_name`, text, required/optional): Enter the patient's name as required.
- **Date of Birth** (`date_of_birth`, date, required/optional): Enter the patient's date of birth.
- **Date of Order** (`date_of_order`, date, required/optional): Enter the date of the order.
- **Order Details** (`order_details`, note, required/optional): Provide additional details about the order as needed.
- **Test Location** (`test_location`, select_multiple, required/optional): Select the test locations for each ordered test.
- **Test Date** (`test_date`, date, required/optional): Enter the date of the test.
- **Test Time** (`test_time`, time, required/optional): Enter the time of the test if needed.
- **Order Status** (`order_status`, select_one, required/optional): Choose the order status as required.

## Tips
* Make sure to select the correct options for each ordered test.
* Enter accurate and complete information for the radiologist, patient, and other fields.
* If a field is required, make sure to fill it in accordingly.
* Double-check the order details for any special instructions or requirements.
* Review and submit the form carefully before saving to ensure all fields have been completed correctly.
