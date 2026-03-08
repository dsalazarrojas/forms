# drug-and-alcohol-testing-log - Help Guide
## Purpose
The "drug-and-alcohol-testing-log" form is designed to track and record employee drug and alcohol testing events, providing a structured format for collecting and storing relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the date of the test event.
2.  Enter the employee's information.
3.  Select the test method used.
4.  Select the test result(s) obtained.
5.  Enter the test date and time.
6.  Specify the test location.
7.  Add any additional notes related to the test event.

## Field-by-Field Explanation

* **Test Event** (`test_event`, date, required: false): Enter the date of the test event.
* **Employee** (`employee`, text, required: false): Enter the employee's information.
* **Test Method** (`test_method`, select_one, required: false): Select one of the following options:
	+ Testing Type
	+ Observation
	+ Other
* **Test Result** (`test_result`, select_multiple, required: false): Select one or more of the following options:
	+ Negative
	+ Positive
	+ Inconclusive
	+ Other
* **Test Date** (`test_date`, date, required: false): Enter the test date.
* **Test Time** (`test_time`, time, required: false): Enter the test time.
* **Test Location** (`test_location`, text, required: false): Specify the test location.
* **Notes** (`notes`, note, required: false): Add any additional notes related to the test event.
