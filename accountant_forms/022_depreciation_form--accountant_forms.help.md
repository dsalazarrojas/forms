# Depreciation Form - Help Guide

## Purpose
This form is used to calculate the depreciation of an asset over a specific period. It gathers information about the asset, its value, and the depreciation method to be used.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the asset details:
	* **Asset Description** (`asset_description`, text): Enter a brief description of the asset.
	* **Asset ID** (`asset_id`, number): Enter the unique identifier of the asset.
	* **Asset Category** (`asset_category`, select_one): Select the category of the asset (e.g., Asset, Asset 1, Asset 2).
	* **Asset Value** (`asset_value`, number): Enter the initial value of the asset.
	* **Depreciation Percentage** (`depreciation_percentage`, number): Enter the depreciation rate as a percentage.
2. Select the depreciation method:
	* **Depreciation Method** (`depreciation_method`, select_multiple): Select the depreciation method to be used (e.g., Straight-Line, Sum-of-the-Years, Acrual, Double Declining Balance).
3. Specify the depreciation period:
	* **Depreciation Start Date** (`depreciation_start_date`, date): Enter the date when the asset started being depreciated.
	* **Depreciation End Date** (`depreciation_end_date`, date): Enter the date when the asset will be fully depreciated.
4. Enter the asset's lifespan:
	* **Asset Life** (`asset_life`, number): Enter the total lifespan of the asset.
	* **Depreciation per Year** (`depreciation_per_year`, number): Enter the depreciation amount per year.
5. Calculate the depreciation:
	* **Total Depreciation Amount** (`total_depreciation_amount`, number): The system will calculate the total depreciation amount based on the provided information.
6. Check the remaining value:
	* **Remaining Value** (`remaining_value`, number): The system will calculate the remaining value of the asset after depreciation.

## Field-by-Field Explanation

* **Asset Description** (`asset_description`, text): A brief description of the asset.
* **Asset ID** (`asset_id`, number): The unique identifier of the asset.
* **Asset Category** (`asset_category`, select_one): Select the category of the asset.
* **Asset Value** (`asset_value`, number): The initial value of the asset.
* **Depreciation Percentage** (`depreciation_percentage`, number): The depreciation rate as a percentage.
* **Depreciation Method** (`depreciation_method`, select_multiple): Select the depreciation method to be used.
* **Depreciation Start Date** (`depreciation_start_date`, date): The date when the asset started being depreciated.
* **Depreciation End Date** (`depreciation_end_date`, date): The date when the asset will be fully depreciated.
* **Asset Life** (`asset_life`, number): The total lifespan of the asset.
* **Depreciation per Year** (`depreciation_per_year`, number): The depreciation amount per year.
* **Total Depreciation Amount** (`total_depreciation_amount`, number): The calculated total depreciation amount.
* **Remaining Value** (`remaining_value`, number): The remaining value of the asset after depreciation.
* **Asset Value Date** (`asset_value_date`, date): The date when the asset was purchased.
* **Asset Purchase Date** (`asset_purchase_date`, date): The date when the asset was purchased.
* **Asset Status** (`asset_status`, select_one): The status of the asset (active, inactive, or disposed).
* **Depreciation Start Date and Asset Purchase Date are interchangeable fields.**

### Thinking

To determine the correct asset category, check the asset's type or classification in your asset register. Make sure to enter the correct asset ID and asset status to ensure accurate results. If you are unsure about the depreciation method or the asset's lifespan, consult with an expert or the asset's manufacturer's documentation. Depreciation methods and asset status are critical in ensuring accurate calculations. The asset's purchase date and asset value date can be the same in most cases but may be different for assets that are replaced or re-purchased.

This form calculates depreciation using the formulas for each depreciation method. The asset's remaining value is calculated by subtracting the total depreciation amount from the initial asset value. The depreciation rate and total depreciation amount are based on the asset's lifespan and depreciation method.
