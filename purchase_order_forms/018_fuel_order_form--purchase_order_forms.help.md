<thinking>
This form is likely used for ordering fuel, possibly for a fleet management system or for an individual's personal vehicle. This form may be used for submitting orders for fuel deliveries or for requesting fuel-related services. It's essential to understand that the form's purpose and fields might be subject to internal business logic and constraints, which I will assume are already known and respected in the guide below.
</thinking>

# Fuel Order Form - Help Guide

## Purpose
This form is used to submit orders for fuel deliveries or fuel-related services.

## How To Complete This Form
1. Fill in all required fields (none are required in this version)
2. Choose the correct options for each field

## Field-by-Field Explanation

* **Vehicle Information** (`vehicle_info`, text, optional): Enter any relevant details about the vehicle, such as its make and model.
* **Vehicle Type** (`vehicle_type`, select_one, optional): If you're ordering fuel for a vehicle, select 'Yes'. If you're ordering for a non-vehicle use case, select 'No'.
* **Fuel Type** (`fuel_type`, select_multiple, optional): Select all applicable types of fuel you'd like to order.
* **Amount Ordered** (`amount_ordered`, number, optional): Enter the quantity of fuel you'd like to order.
* **Order Date** (`order_date`, date, optional): Select the date for the fuel delivery.
* **Order Time** (`order_time`, time, optional): Select the time for the fuel delivery.
* **Notes** (`notes`, note, optional): Leave any additional comments or details for the fuel order.
* **Email** (`email`, email, optional): Enter your email address for contact purposes.
* **Phone** (`phone`, text, optional): Enter your phone number for contact purposes.
* **Assigned Tool** (`assigned_tool`, text, optional): Enter any relevant information about the tool being used for the fuel order.
* **Category** (`category`, select_one, optional): If applicable, select the category for the fuel order.
* **Description** (`description`, note, optional): Enter any additional comments or details for the fuel order.

Note: Each field's explanation attempts to convey the intended use based on the provided YAML fields, without inventing business logic.
