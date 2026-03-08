# CNC Programming Toolset Order Form - Help Guide

## Purpose
The CNC Programming Toolset Order Form is used to collect information for a CNC programming toolset order. This form helps to gather essential details such as order date, customer information, toolset package selection, software components needed, and shipping details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the order date in the format MM/DD/YYYY.
2. Fill in the order number (if applicable).
3. Provide your full name, company name, and email address.
4. Enter your phone number for contact purposes.
5. Select the CNC Programming Toolset Package that suits your needs (Beginner, Professional, Enterprise, or Custom).
6. Choose the software components needed for your CNC programming.
7. Specify the quantity of toolsets required.
8. Select the machine types supported by the toolset.
9. Indicate if you require training and support.
10. If you need training, select the type of training required (Online, Live webinar, On-site, or Manual documentation).
11. Enter your billing address for payment purposes.
12. Enter your shipping address.
13. Choose the preferred shipping method (Standard, Expedited, Overnight, or Digital Download Only).
14. Enter any additional details or purchase order number.
15. Finally, choose your preferred payment method (Credit Card, Bank Transfer, Check, or Purchase Order).

## Field-by-Field Explanation

* **Order Date (1)** (`order_date`, `date`, `required`): Enter the date when you wish to order the CNC toolset in the format MM/DD/YYYY.
* **Order Number (2)** (`order_number`, `text`, `optional`): If you have a purchase order number, please enter it here for our reference.
* **Customer Full Name (3)** (`customer_name`, `text`, `required`): Provide your full name as the customer or the person ordering the toolset.
* **Company Name (4)** (`company_name`, `text`, `required`): Enter your company name as the customer or the company for whom you are ordering the toolset.
* **Email Address (5)** (`customer_email`, `email`, `required`): Enter your email address for contact and order confirmation purposes.
* **Phone Number (6)** (`customer_phone`, `text`, `required`): Provide your phone number for further contact and order details.
* **CNC Programming Toolset Package (7)** (`toolset_package`, `select_one`, `required`): Select the CNC programming toolset package that meets your needs (Beginner, Professional, Enterprise, or Custom).
* **Software Components Needed (8)** (`software_components`, `select_multiple`, `required`): Choose all the software components required for your CNC programming (CAM Software, G-Code Generator, Machine Simulator, Post-Processor, Tool Management Module, or Documentation).
* **Quantity of Toolsets (9)** (`quantity`, `number`, `required`): Specify the number of toolsets required.
* **Machine Types Supported (10)** (`machine_type`, `select_multiple`, `required`): Select all the machine types supported by the toolset (Mill, Lathe, Router, Wire EDM, Plasma Cutter, or Multi-axis Machine).
* **Training and Support Required (11)** (`training_required`, `select_one`, `required`): Check if you require training and support for the toolset.
* **Type of Training (12)** (`training_type`, `select_one`, `optional`): If you need training, select the type of training (Online, Live webinar, On-site, or Manual documentation).
* **Billing Address (13)** (`billing_address`, `text`, `required`): Enter your billing address for payment purposes.
* **Shipping Address (14)** (`shipping_address`, `text`, `required`): Enter your shipping address for delivery purposes.
* **Preferred Shipping Method (15)** (`shipping_method`, `select_one`, `required`): Choose the preferred shipping method (Standard, Expedited, Overnight, or Digital Download Only).
* **Purchase Order Number (16)** (`po_number`, `text`, `optional`): If you have a purchase order number, please enter it here for our reference.
* **Payment Method (17)** (`payment_method`, `select_one`, `required`): Select your preferred payment method (Credit Card, Bank Transfer, Check, or Purchase Order).
* **Special Requests or Notes (18)** (`special_requests`, `text`, `optional`): Enter any special requests or notes for your order.
