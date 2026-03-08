# Fence Estimation Form - Help Guide

## Purpose
The Fence Estimation Form is designed to collect necessary information from customers to estimate the project requirements and provide a quote for a fence installation. This form helps us to gather data about the customer's property and project details, including material type, width, and location.

## How To Complete This Form
1. Fill out the form by providing the following information:
   * Customer's name and address
   * Description of the project
   * Material type (Cedar, Cypress, Pine, Redwood, or Spruce)
   * Width of the material (in feet)
   * Customer's phone number and email (for communication purposes)
   * Whether the project is located on a residential or commercial property
   * Estimated project cost (optional)
   * Payment method (Bank Transfer, Check, or Credit Card)
   * Status of the project (Active or Inactive)
   * Any additional notes about the project

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required=false): Enter the customer's name as it should appear on the quote.
* **Property Address** (`property_address`, text, required=false): Enter the customer's property address where the fence will be installed.
* **Project Description** (`project_description`, text, required=false): Briefly describe the project, including the type of fence and any specific details about the installation.
* **Material Type** (`material_type`, select_one, required=true): Select the type of material to be used for the fence (Cedar, Cypress, Pine, Redwood, or Spruce).
* **Material Width** (`material_width`, number, required=false): Enter the width of the material in feet.
* **Customer Phone** (`customer_phone`, text, required=false): Enter the customer's phone number for communication purposes.
* **Customer Email** (`customer_email`, email, required=false): Enter the customer's email address for communication purposes.
* **Project Location** (`project_location`, select_one, required=false): Indicate whether the project is located on a residential or commercial property.
* **Project Cost** (`project_cost`, number, required=false): Enter the estimated project cost (if known).
* **Payment Method** (`payment_method`, select_one, required=true): Select the payment method for the project (Bank Transfer, Check, or Credit Card).
* **Project Status** (`project_status`, select_multiple, required=false): Select the current status of the project (Active or Inactive).
* **Notes** (`notes`, text, required=false): Add any additional notes about the project.
* **Assigned Tool** (`assigned_tool`, text, required=false): Enter any specific tools or equipment assigned to the project.
* **Payment Method** (`payment_method`, select_one, required=true) is a required field as it is marked as `required: true` in the form YAML. This field is used to determine the payment method for the project, ensuring accurate accounting and billing.
