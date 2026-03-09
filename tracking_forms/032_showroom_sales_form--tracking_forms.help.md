# Showroom Sales Form - Help Guide
## Purpose
The Showroom Sales Form is used to log sales data for each vehicle sold in the showroom. This data includes customer and sales details, vehicle specifics, and other relevant information for reporting and analytics purposes.

## How To Complete This Form
1. Complete all required fields (indicated by a asterisk \* in the field label) for accurate tracking and analysis.
2. Enter the transaction ID to associate the sale with a specific transaction.
3. Enter the customer's name, phone number, email, and address for contact information.
4. Select the sales agent who made the sale.
5. Enter the vehicle ID, purchase price, sales amount, and sales date for vehicle specifics.
6. Choose the vehicle condition (like new, used, or certified pre-owned).
7. Select the sales type (sale or trade).
8. Determine the warranty status (active or inactive) and enter the warranty start and end dates if applicable.
9. Enter the sales notes for additional comments or context.
10. Review and complete any other relevant fields as needed.

## Field-by-Field Explanation
* **Transaction ID (1)** (`transaction_id`, number, required): The unique identifier for this sale.
* **Customer Name (2)** (`customer_name`, text, optional): The customer's name.
* **Sales Agent (3)** (`sales_agent`, select_one, optional): The sales agent who made the sale.
* **Customer Phone (4)** (`customer_phone`, text, optional): The customer's phone number.
* **Sales Date (5)** (`sales_date`, date, optional): The date of the sale.
* **Vehicle ID (6)** (`vehicle_id`, number, optional): The vehicle's ID.
* **Purchase Price (7)** (`purchase_price`, number, optional): The sale price of the vehicle.
* **Sales Amount (8)** (`sales_amount`, number, optional): The total sales amount (including tax and fees).
* **Customer Email (9)** (`customer_email`, email, optional): The customer's email.
* **Vehicle Condition (10)** (`vehicle_condition`, select_one, optional): The vehicle condition (like new, used, or certified pre-owned).
* **Vehicle Year (11)** (`vehicle_year`, number, optional): The year of the vehicle.
* **Sales Agent Comments (12)** (`sales_agent_comments`, text, optional): Additional comments from the sales agent.
* **Customer Comments (13)** (`customer_comments`, text, optional): Comments or feedback from the customer.
* **Sales Notes (14)** (`sales_notes`, text, optional): Additional comments or context for the sale.
* **Payment Terms (15)** (`payment_terms`, select_multiple, optional): The payment terms for the sale (terms 1, terms 2, terms 3).
* **Sales Type (16)** (`sales_type`, select_one, optional): The type of sale (sale or trade).
* **Warranty Status (17)** (`warranty_status`, select_one, optional): The warranty status (active or inactive).
* **Warranty End Date (18)** (`warranty_end_date`, date, optional): The end date of the warranty if inactive.
* **Warranty Start Date (19)** (`warranty_start_date`, date, optional): The start date of the warranty if active.
* **Sales Person (20)** (`sales_person`, select_one, optional): The sales person who made the sale.
* **Customer Address (21)** (`customer_address`, text, optional): The customer's address.
* **Customer City (22)** (`customer_city`, text, optional): The customer's city.
* **Sales Location (23)** (`sales_location`, text, optional): The location of the sale.
* **Customer State (24)** (`customer_state`, text, optional): The customer's state.
* **Customer Zip (25)** (`customer_zip`, text, optional): The customer's zip code.
