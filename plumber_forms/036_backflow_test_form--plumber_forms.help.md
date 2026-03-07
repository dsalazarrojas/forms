<thinking>

This form is used for collecting and recording data from backflow tests performed on plumbing fixtures. The form is meant to capture information about the tester, the device being tested, and the test results. This guide will help end-users understand the purpose and usage of each field in the form.

</thinking>

# Backflow Test Form - Help Guide
## Purpose
This form is used to record backflow test data from certified testers and their associated tests.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the tester information fields, including tester name, company, phone number, email, and certification ID.
2. Select the correct device type, manufacturer, and size from the provided options.
3. Enter the date of the test and the property address where the test was performed.
4. Select the location where the device is installed.
5. Record the first and second check valve readings.
6. If a relief valve was used, record the reading.
7. Indicate whether repairs are needed and provide a description if applicable.
8. Indicate if a retest is required after repairs.
9. Enter any additional comments or observations.
10. Sign and date the form.

## Field-by-Field Explanation
- **Tester Full Name** (`tester_name`, text, required): Enter the name of the certified tester performing the test.
- **Testing Company** (`tester_company`, text, required): Enter the name of the company the tester works for.
- **Tester Phone Number** (`tester_phone`, text, required): Enter the tester's contact phone number.
- **Tester Email** (`tester_email`, email, required): Enter the tester's email address.
- **Certification Number** (`tester_certification`, text, required): Enter the tester's certification ID.
- **Test Date** (`test_date`, date, required): Enter the date of the test performed.
- **Property Address** (`property_address`, text, required): Enter the full address of the test location.
- **Property Owner Name** (`property_owner`, text, required): Enter the name of the property owner or business name.
- **Device Type** (`device_type`, select_one, required): Select the type of backflow device being tested (e.g., Reduced Pressure Zone, Double Check Valve, etc.).
- **Device Manufacturer** (`device_manufacturer`, text, required): Select the brand or manufacturer of the device.
- **Device Model** (`device_model`, text, required): Enter the model number of the device.
- **Device Serial Number** (`device_serial`, text, optional): Enter the serial number of the device if available.
- **Device Size** (`device_size`, select_one, required): Select the size of the device (e.g., 1/2 inch, 3/4 inch, etc.).
- **Device Location** (`device_location`, select_one, required): Select the location where the device is installed (e.g., Inside building, Outside in vault, etc.).
- **Test Result** (`test_result`, select_one, required): Select the test result (Pass or Fail).
- **First Check Valve Reading** (`first_check_reading`, number, required): Record the first check valve reading in PSI.
- **Second Check Valve Reading** (`second_check_reading`, number, required): Record the second check valve reading in PSI.
- **Relief Valve Opening Reading** (`relief_valve_reading`, number, optional): Record the relief valve opening reading in PSI if applicable.
- **Repairs Needed** (`repairs_needed`, select_one, required): Indicate if repairs are needed (True or False).
- **Repair Description** (`repair_description`, text, optional): Provide a description of the repairs needed.
- **Retest Required** (`retest_required`, select_one, required): Indicate if a retest is required after repairs (True or False).
- **Additional Comments** (`comments`, text, optional): Enter any other observations or comments.
- **Tester Signature** (`tester_signature`, text, required): Sign and date the form with the tester's digital signature or typed name.
