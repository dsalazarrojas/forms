<thinking>
We need to ensure that the user understands the purpose of this form, which is to report on the results of a pressure test performed on equipment. This form is likely used for quality control or maintenance purposes.

Before proceeding with the instructions, let's review the form fields. The form has multiple pages with a mix of select multiple, date, number, text, note, email, and other types of fields. Each page seems to be designed to collect specific information about the equipment being tested. The fields include selections for test status, test result, inspector's contact information, test frequency, test method, test duration, and so on.

Let's make sure the form isn't used for any other purpose. Based on the fields, it seems like the form is only for recording pressure tests on equipment.

With that clarity, we can proceed with writing the help guide.
</thinking>

# equipment_pressure_test_report_form - Help Guide
## Purpose
This form is designed to collect information on the results of a pressure test performed on equipment. It's used to record the test status, test result, and other details about the test.

## How To Complete This Form

1. Select the appropriate options for "Test Status" from the list provided.
2. Enter the date of the test using the date field.
3. Enter the pressure reading from the test in the "Pressure Reading" field.
4. Describe the test location in the "Test Location" field.
5. Enter the equipment ID in the "Equipment ID" field.
6. Add any additional notes about the test in the "Notes" field (if applicable).
7. Enter the inspector's ID, name, phone number, and email address in their respective fields.
8. Enter the test frequency, interval, method, duration, pressure, temperature, and pressure drop values in their respective fields.
9. Select the unit for the pressure reading and temperature in their respective fields.
10. Enter the pressure rise value and its unit.

## Field-by-Field Explanation

* **Test Status** (`test_status`, text, required): Select "Yes" or "No" to indicate whether the test was performed.
* **Test Date** (`test_date`, date, required): Enter the date of the test.
* **Pressure Reading** (`pressure_reading`, number, required): Enter the pressure reading from the test.
* **Test Location** (`test_location`, text, required): Describe the location where the test was performed.
* **Equipment ID** (`equipment_id`, text, required): Enter the ID of the equipment being tested.
* **Notes** (`notes`, note, optional): Add any additional notes about the test.
* **Inspector ID** (`inspector_id`, text, required): Enter the ID of the inspector who performed the test.
* **Inspector Name** (`inspector_name`, text, required): Enter the name of the inspector who performed the test.
* **Inspector Phone** (`inspector_phone`, text, required): Enter the phone number of the inspector who performed the test.
* **Inspector Email** (`inspector_email`, email, required): Enter the email address of the inspector who performed the test.
* **Test Frequency** (`test_frequency`, number, required): Enter the frequency of the test.
* **Test Interval** (`test_interval`, text, required): Enter the interval at which the test was performed.
* **Test Method** (`test_method`, text, required): Describe the method used to perform the test.
* **Test Duration** (`test_duration`, text, required): Enter the duration of the test.
* **Test Pressure** (`test_pressure`, text, required): Enter the test pressure value.
* **Pressure Unit** (`pressure_unit`, text, required): Select the unit for the pressure reading.
* **Test Temperature** (`test_temperature`, text, required): Enter the test temperature value.
* **Temperature Unit** (`temperature_unit`, text, required): Select the unit for the temperature reading.
* **Test Pressure Drop** (`test_pressure_drop`, text, required): Enter the test pressure drop value.
* **Pressure Drop Unit** (`pressure_drop_unit`, text, required): Select the unit for the pressure drop reading.
* **Test Pressure Rise** (`test_pressure_rise`, text, required): Enter the test pressure rise value.
* **Pressure Rise Unit** (`pressure_rise_unit`, text, required): Select the unit for the pressure rise reading.
