# Custom Printing Order Form - Help Guide
## Purpose
The Custom Printing Order Form is designed to collect information for a custom printing order, gathering details about the customer, printing process, and submission requirements.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **Customer Details** (page 1).
2. Enter your **Printing Details** (page 2).
3. Provide your **Submission Details** (page 3).
4. Add any **Submission Info** (page 4), if applicable.

## Field-by-Field Explanation

### Customer Details
* **Customer Name** (`customer_details`, string, required): Please enter your name.
* **Email Address** (`customer_details`, string, required): Enter your email address to allow us to communicate with you regarding your order.
* **Phone Number** (`customer_details`, string, optional): If you would like to be contacted via phone, please provide your phone number.
* **Address** (`customer_details`, string, optional): Enter your address for delivery or pickup purposes.

### Printing Details
* **Print Type** (`printing_details`, string, required): Choose the type of print you would like to order (e.g., photograph, art, etc.).
* **Print Size** (`printing_details`, string, required): Select the size of the print you need.
* **Paper Type** (`printing_details`, string, required): Choose the type of paper you prefer for your print.

### Submission Details
* **Submission Date** (`submission_details`, string, required): Enter the date you would like to submit your work.
* **Submission Time** (`submission_details`, string, required): Specify a time slot for your submission.
* **Submission Location** (`submission_details`, string, required): Choose a location for your submission.

### Submission Info
* **Additional Instructions** (`submission_info`, note, optional): If there are any special instructions or requirements you'd like to share with us, please add them here.
