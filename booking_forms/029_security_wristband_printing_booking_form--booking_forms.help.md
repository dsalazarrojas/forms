# Security Wristband Printing Booking Form - Help Guide
## Purpose
This form is used to collect client information, order details, and payment information for printing security wristbands.

## How To Complete This Form
To complete this form, follow the steps below:
1. Review the form carefully to ensure you have all the required information.
2. Fill out the client information fields (Client Information, First Name, Last Name, Company, and Address) if applicable.
3. Enter the order details (Order Date, Order Time, Wristband Info, Shipping, Payment Method, Total Wristbands, Price, Subtotal, Tax Rate, and Tax Amount) accurately.
4. Fill out the payment information (Email, Phone) correctly.
5. Select the payment status (Active or Inactive) and order type (Yes or No) as per your requirements.
6. Add any additional notes about the order.
7. Review your entries carefully before submitting the form.

## Field-by-Field Explanation

* **Client Information** (`client_info`, `text`, required/optional): This field is used to enter any additional information about the client.
* **Order Date** (`order_date`, `date`, required/optional): Enter the date of the order in the format `YYYY-MM-DD`.
* **Order Time** (`order_time`, `time`, required/optional): Enter the time of the order in the format `HH:MM`.
* **Email** (`client_email`, `email`, required/optional): Enter the client's email address.
* **Phone** (`phone`, `text`, required/optional): Enter the client's phone number.
* **Wristband Info** (`wristband_info`, `text`, required/optional): Enter any additional information about the wristbands ordered.
* **Shipping** (`shipping`, `select_one`, required/optional): Select whether shipping is required or not.
* **Payment Method** (`payment_method`, `select_one`, required/optional): Select the payment method used (Yes or No).
* **Total Wristbands** (`total_wristbands`, `number`, required/optional): Enter the total number of wristbands ordered.
* **Payment Status** (`payment_status`, `select_multiple`, required/optional): Select the payment status (Active or Inactive).
* **Order Type** (`order_type`, `select_multiple`, required/optional): Select the order type (Yes or No).
* **Quantity** (`quantity`, `number`, required/optional): Enter the quantity of wristbands ordered.
* **Price** (`price`, `number`, required/optional): Enter the price of the wristbands.
* **Subtotal** (`subtotal`, `number`, required/optional): Enter the subtotal of the order.
* **Tax Rate** (`tax_rate`, `number`, required/optional): Enter the tax rate of the order.
* **Tax Amount** (`tax_amount`, `number`, required/optional): Enter the tax amount of the order.
* **Grand Total** (`grand_total`, `number`, required/optional): Enter the grand total of the order.
* **First Name** (`first_name`, `text`, required/optional): Enter the first name of the client.
* **Last Name** (`last_name`, `text`, required/optional): Enter the last name of the client.
* **Company** (`company`, `text`, required/optional): Enter the client's company name.
* **Address 1** (`address1`, `text`, required/optional): Enter the client's address line 1.
* **Address 2** (`address2`, `text`, required/optional): Enter the client's address line 2.
* **Submit** (`submit`, `select_one`, required/optional): Select whether to submit the form or not.

Note: All fields marked as "required/optional" are not strictly required, but filling them out will help to ensure the order is processed correctly.
