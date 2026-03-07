<thinking>

To create a user-facing help guide for the Commission Tracker Form, I'll need to follow these steps:

1.  Understand the form purpose: This form is used to track commissions earned by sales representatives. It captures details about each commission, including the date of the commission, the sales representative involved, the commission rate, and the commission amount.
2.  Review the form fields: There are 25 fields in total, each with a specific label, type, hint, and options.
3.  Determine the required fields: Some fields are required (indicated by "required: true") while others are optional.
4.  Create a concise and practical explanation for each field: Based on the field label, hint, and type, I'll create a clear and concise explanation for each field.

**Commission Tracker Form - Help Guide**
====================================

## Purpose

This form is used to track commissions earned by sales representatives. It captures details about each commission, including the date of the commission, the sales representative involved, the commission rate, and the commission amount.

## How To Complete This Form

1.  Fill out the form with the following information:
    *   **Tracker Information**: Briefly describe the commission tracking entry.
    *   **Entry Date**: Enter the date of this commission tracking entry.
    *   **Tracking Period**: Enter the period this commission covers.
    *   **Sales Representative Information**: Provide details about the sales representative involved.
    *   **Sales Representative Name**: Enter the full name of the sales representative.
    *   **Sales Representative ID**: Enter the employee identification number of the sales representative.
    *   **Sales Representative Email**: Enter the contact email address of the sales representative.
    *   **Territory**: Enter the assigned sales territory.
    *   **Transaction Details**: Provide information about the sale or transaction.
    *   **Transaction ID**: Enter the unique transaction reference number.
    *   **Transaction Date**: Enter the date the sale was completed.
    *   **Client Name**: Enter the name of the client or customer.
    *   **Product Service**: Enter the product or service sold.
    *   **Sale Amount**: Enter the total sale amount in USD.
    *   **Commission Details**: Provide commission calculation information.
    *   **Commission Rate**: Enter the commission percentage applied.
    *   **Commission Amount**: Enter the calculated commission in USD.
    *   **Commission Type**: Select the type of commission earned (Base, Bonus, Override, Residual, SPIFF, or Other).
    *   **Payment Status**: Select the current status of commission payment (Pending, Approved, Processing, Paid, On Hold, or Denied).
    *   **Expected Payment Date**: Enter the expected payment date.
    *   **Actual Payment Date**: Enter the date payment was actually made.
    *   **Payment Method**: Select how commission was paid (Direct Deposit, Check, Payroll, Wire Transfer, or Not Yet Paid).
    *   **Notes**: Provide any additional notes or comments.
    *   **Manager Approval**: Select whether the manager has approved this commission (Pending, Approved, or Denied).
    *   **Manager Name**: Enter the name of the approving manager.

## Field-by-Field Explanation
### Tracker Information
*   **Tracker Information**: Briefly describe the commission tracking entry. (`note`, `tracker_information`, `optional`)
### Entry Date
*   **Entry Date**: Enter the date of this commission tracking entry. (`date`, `entry_date`, `required`)
### Tracking Period
*   **Tracking Period**: Enter the period this commission covers. (`text`, `tracking_period`, `required`)
### Sales Representative Information
*   **Sales Representative Information**: Provide details about the sales representative. (`note`, `sales_rep_info`, `optional`)
### Sales Representative Name
*   **Sales Representative Name**: Enter the full name of the sales representative. (`text`, `sales_rep_name`, `required`)
### Sales Representative ID
*   **Sales Representative ID**: Enter the employee identification number of the sales representative. (`text`, `sales_rep_id`, `required`)
### Sales Representative Email
*   **Sales Representative Email**: Enter the contact email address of the sales representative. (`email`, `sales_rep_email`, `required`)
### Territory
*   **Territory**: Enter the assigned sales territory. (`text`, `territory`, `required`)
### Transaction Details
*   **Transaction Details**: Provide information about the sale or transaction. (`note`, `transaction_details`, `optional`)
### Transaction ID
*   **Transaction ID**: Enter the unique transaction reference number. (`text`, `transaction_id`, `required`)
### Transaction Date
*   **Transaction Date**: Enter the date the sale was completed. (`date`, `transaction_date`, `required`)
### Client Name
*   **Client Name**: Enter the name of the client or customer. (`text`, `client_name`, `required`)
### Product Service
*   **Product Service**: Enter the product or service sold. (`text`, `product_service`, `required`)
### Sale Amount
*   **Sale Amount**: Enter the total sale amount in USD. (`number`, `sale_amount`, `required`)
### Commission Details
*   **Commission Details**: Provide commission calculation information. (`note`, `commission_details`, `optional`)
### Commission Rate
*   **Commission Rate**: Enter the commission percentage applied. (`number`, `commission_rate`, `required`)
### Commission Amount
*   **Commission Amount**: Enter the calculated commission in USD. (`number`, `commission_amount`, `required`)
### Commission Type
*   **Commission Type**: Select the type of commission earned (Base, Bonus, Override, Residual, SPIFF, or Other). (`select_one`, `commission_type`, `required`)
### Payment Status
*   **Payment Status**: Select the current status of commission payment (Pending, Approved, Processing, Paid, On Hold, or Denied). (`select_one`, `payment_status`, `required`)
### Expected Payment Date
*   **Expected Payment Date**: Enter the expected payment date. (`date`, `expected_payment_date`, `optional`)
### Actual Payment Date
*   **Actual Payment Date**: Enter the date payment was actually made. (`date`, `actual_payment_date`, `optional`)
### Payment Method
*   **Payment Method**: Select how commission was paid (Direct Deposit, Check, Payroll, Wire Transfer, or Not Yet Paid). (`select_one`, `payment_method`, `optional`)
### Notes
*   **Notes**: Provide any additional notes or comments. (`text`, `notes`, `optional`)
### Manager Approval
*   **Manager Approval**: Select whether the manager has approved this commission (Pending, Approved, or Denied). (`select_one`, `manager_approval`, `required`)
### Manager Name
*   **Manager Name**: Enter the name of the approving manager. (`text`, `manager_name`, `optional`)

## Tips

*   Make sure to fill out all required fields.
*   Enter accurate information to ensure accurate commission tracking.
*   Review and update information as needed.
*   Verify manager approval before payment is made.
