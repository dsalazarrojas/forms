# Technical Work Log Form - Help Guide

## Purpose
The Technical Work Log Form is used to track and document technical work performed on work orders. This form is designed to collect information about the start and end dates of work, details about the work performed, and other relevant details. By using this form, technical teams can accurately record their work activities, track progress, and provide valuable insights for future reference.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the required information, indicated by an asterisk (\*).
2. Enter the **Work Order ID** and **Work Order Name**, which can be found on the work order document or by contacting the work order owner.
3. Select the **Start Date** and **End Date** of the work performed, using the calendar picker to ensure accuracy.
4. Provide a brief description of the **Work Details**, including a summary of the work performed.
5. Choose the correct **Work Category** from the dropdown list to indicate the type of technical work done.
6. Check the **Assigned Tool** field to indicate if a tool was used during the work.
7. Fill out any additional information in the **Notes** field as needed.
8. Enter your name in the **Submitted By** field, which will be used to track who submitted the form.

## Field-by-Field Explanation

* **Work Order ID** (id: 2, type: number, required: false)
	+ Enter the unique identifier for the work order.
* **Work Order Name** (id: 3, type: text, required: false)
	+ Enter the name of the work order.
* **Start Date** (id: 4, type: date, required: false)
	+ Select the date the work started.
* **End Date** (id: 5, type: date, required: false)
	+ Select the date the work ended.
* **Work Details** (id: 6, type: text, required: false)
	+ Enter a brief description of the work performed.
* **Notes** (id: 7, type: text, required: false)
	+ Add any additional comments or observations about the work performed.
* **Assigned Tool** (id: 8, type: select_one, required: false)
	+ Check the box if a tool was assigned for the work.
* **Submitted By** (id: 9, type: text, required: false)
	+ Enter your name, which will be used to track who submitted the form.
* **Submitted On** (id: 10, type: date, required: false)
	+ Select the date the form was submitted.
* **Submitted By User** (id: 11, type: text, required: false)
	+ Enter your name, which will be used to track who submitted the form.
* **Work Category** (id: 12, type: select_multiple, required: false)
	+ Select the category of technical work performed, such as 'Yes' or 'No'.
