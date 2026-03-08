<thinking>
The purpose of this form is to capture user input for ordering sandwiches. The form is a template for creating sandwich orders, allowing users to select various options for their desired sandwich configuration. It appears this form is intended for capturing boolean answers for sandwich attributes, such as whether or not to include specific features like meat or cheese.
</thinking>

# Sandwich Order Form Template - Help Guide
## Purpose
The Sandwich Order Form Template is a form designed to capture user input for ordering sandwiches with various customizable options.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form to understand the available options.
2. Select 'Yes' or 'No' for each option that applies to your desired sandwich configuration.

## Field-by-Field Explanation
* **Sandwich Order Form** (`sandwich_order_form`, text, not required):
	+ Enter a brief description or notes about the sandwich order.
* **Sandwich Type** (`sandwich_type`, select_multiple, true):
	+ Select 'Yes' if you want a sandwich with meat or not.
* **Bread Type** (`bread_type`, select_multiple, true):
	+ Select 'Yes' if you want a certain type of bread or not.
* **Meat** (`meat`, select_multiple, true):
	+ Select 'Yes' if you want meat in your sandwich or not.
* **Cheese** (`cheese`, select_multiple, false):
	+ Select 'Yes' if you want cheese in your sandwich or not.
* **Condiments** (`condiments`, select_multiple, false):
	+ Select 'Yes' if you want condiments in your sandwich or not.

## Tips
- Be sure to review your selections to ensure they accurately reflect your desired sandwich configuration.
- If you're unsure about any option, select 'No' or leave it blank.
