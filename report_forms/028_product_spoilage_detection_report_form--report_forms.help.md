> thinking
Internal reasoning block for form purpose and non-duplication:
This form is used for reporting product spoilage incidents, where products have become unusable due to contamination, degradation, or other reasons. It's essential to maintain accurate records of spoiled products to address quality control issues and prevent further quality problems. Before filling out this form, please confirm that it's a new incident and not a repeated issue, as duplicate reports may lead to unnecessary resources being used.

</thinking>

# Product Spoilage Detection Report Form - Help Guide

## Purpose
The purpose of this form is to report incidents of product spoilage, allowing for accurate tracking of quality control issues and enabling prompt action to prevent further quality problems.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the product name in the "Product Name" field, which should match the product's description.
2. Select the date the incident occurred using the "Incident Date" field.
3. Enter the product's ID number in the "Product ID" field, if applicable.
4. Choose the type of spoilage that occurred using the "Spoilage Type" field. Options include Leaking, Moldy, Rotten, Sour, Swollen, and Other.
5. Provide a detailed description of the spoilage evidence, if applicable, in the "Spoilage Evidence" field.
6. Select the product's condition at the time of spoilage using the "Product Condition" field. Options include New, Used, Damaged, Expiration, and Other.
7. Specify the location where the spoilt product was found using the "Location" field. Options include Warehouse, Retail, Manufacturing, Transportation, and Other.
8. Choose the action taken to address the spoilt product using the "Action Taken" field. Options include Replaced, Reboxed, Discarded, and None.
9. Enter any additional notes about the incident using the "Notes" field.

## Field-by-Field Explanation

* **Product Name** (`product_name`, text, required): Enter the product name that was spoiled.
* **Incident Date** (`incident_date`, date, required): Select the date the incident occurred.
* **Product ID** (`product_id`, number, optional): Enter the product's ID number, if available.
* **Spoilage Type** (`spoilage_type`, select_one, required): Choose the type of spoilage that occurred, such as Leaking, Moldy, Rotten, etc.
* **Spoilage Evidence** (`spoilage_evidence`, note, required): Provide a detailed description or photo of the spoilt product.
* **Product Condition** (`product_condition`, select_multiple, required): Select the product's condition at the time of spoilage, such as New, Used, Damaged, etc.
* **Location** (`location`, select_one, required): Specify the location where the spoilt product was found, such as Warehouse, Retail, etc.
* **Action Taken** (`action_taken`, select_multiple, required): Choose the action taken to address the spoilt product, such as Replaced, Reboxed, Discarded, etc.
* **Notes** (`notes`, note, optional): Enter any additional notes about the incident, if necessary.
