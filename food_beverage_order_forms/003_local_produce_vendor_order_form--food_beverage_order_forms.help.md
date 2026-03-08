# Local Produce Vendor Order Form - Help Guide
## Purpose
The Local Produce Vendor Order Form is a tool for collecting order information from local produce vendors. This form helps the farm collect and process order data for efficient processing and communication with vendors.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the Order Date field to record the date of the order.
2. Enter your Vendor Name and Farm Name to identify yourself and your farm.
3. Provide detailed information about the Order Details, including any specific produce items ordered and their quantities.
4. Enter the Order Amount, which should be the total value of the order.
5. Indicate the Order Frequency, or how often you plan to place orders with the farm.
6. Select the Payment Method you prefer for payment.
7. Enter your Contact Number for easy communication.
8. Enter your Email Address for further communication and updates.

## Field-by-Field Explanation
### 1. Order Date
* **Order Date** (`order_date`, date, required: false): Enter the date of the order in date format (month/day/year) to record the order's timeline.

### 2. Vendor Name
* **Vendor Name** (`vendor_name`, text, required: false): Enter your name as a vendor to identify yourself in the farm's records.

### 3. Farm Name
* **Farm Name** (`farm_name`, text, required: false): Enter your farm's name for easy identification and reference.

### 4. Order Details
* **Order Details** (`order_details`, text, required: false): Enter specific details about the produce items ordered, including quantities, for accurate processing and delivery.

### 5. Order Amount
* **Order Amount** (`order_amount`, number, required: false): Enter the total value of the order, which helps with billing and accounting.

### 6. Order Frequency
* **Order Frequency** (`order_frequency`, select_one, required: false): Indicate how often you plan to place orders with the farm, which helps with inventory planning and supply chain management.

### 7. Payment Method
* **Payment Method** (`payment_method`, select_multiple, required: false): Select the preferred payment method for payment processing and accounting.

### 8. Contact Number
* **Contact Number** (`contact_number`, text, required: false): Enter your contact number for easy communication and updates on order status and payment.

### 9. Email Address
* **Email Address** (`email_address`, email, required: false): Enter your email address for further communication and updates on order status, payment, and promotions.
