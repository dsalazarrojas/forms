# referee_jacket_order_form - Help Guide
## Purpose
This form is used to record referee jacket orders, which are a crucial part of our organization's operations. It helps to track and manage the status of referee jackets, ensuring accurate and efficient processing of orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the payment method for the order (page 1).
2. Provide a brief description of the order (page 2).
3. Enter the email address of the person or organization placing the order (page 3).
4. Enter the order date and time (page 4).
5. Enter the name of the referee (page 5).
6. Enter the jersey number of the referee (page 6).
7. Enter the total cost of the order (page 7).
8. Select the status of the order (page 8).
9. Select the type of referee (page 9).

## Field-by-Field Explanation

### Page 1: Payment Method
* **payment_method** (`Payment Method`, select_one, required): Select how you will be paying for the order. Options are 'Yes' and 'No', where 'Yes' indicates a payment has been made, and 'No' indicates no payment has been made.

### Page 2: Order Description
* **order_description** (`Order Description`, text, optional): Provide a brief description of the order.

### Page 3: Email Address
* **email** (`Email Address`, email, required): Enter the email address of the person or organization placing the order.

### Page 4: Order Date and Time
* **order_date** (`Order Date`, date, optional): Enter the date of the order.
* **order_time** (`Order Time`, time, optional): Enter the time of the order.

### Page 5: Referee Information
* **referee_name** (`Referee Name`, text, optional): Enter the name of the referee.

### Page 6: Referee Jersey Number
* **jersey_number** (`Jersey Number`, text, optional): Enter the jersey number of the referee.

### Page 7: Order Total
* **order_total** (`Order Total`, number, required): Enter the total cost of the order.

### Page 8: Order Status
* **order_status** (`Order Status`, select_one, required): Select the status of the order. Options are Active and Inactive.

### Page 9: Referee Type
* **referee_type** (`Referee Type`, select_one, optional): Select the type of referee. Options are 'Yes' and 'No'.

## Tips
* Ensure that you fill out all required fields accurately to avoid any issues with order processing.
* Double-check your email address to ensure it's correct.
* If you're unsure about any field, please contact our support team for assistance.
