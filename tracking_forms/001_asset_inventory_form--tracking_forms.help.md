<thinking>...</thinking>

# Asset Inventory Form - Help Guide

## Purpose
This form is used to record and track information about assets in your inventory. Assets can be physical items such as equipment, furniture, or vehicles, or intangible items such as software or intellectual property. The goal of this form is to provide a centralized location to store and manage information about each asset, including its details, location, and status.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the asset tag or inventory ID, which is a unique identifier used by the organization to track the asset.
2. Provide a descriptive name or description of the asset.
3. Select the category that best fits the asset (e.g. Electronics, Furniture, Vehicle, Software, or Other).
4. Enter the purchase date, serial number, and purchase cost of the asset, if applicable.
5. Specify the current location of the asset (e.g. a specific building and room).
6. Describe the asset's current condition (e.g. New, Good, Fair, or Poor).
7. Identify the person or department responsible for the asset.
8. Indicate the current lifecycle or usage status of the asset (e.g. In use, In storage, Retired, or Under maintenance).
9. Provide any additional notes or special handling instructions for the asset.

## Field-by-Field Explanation

* **Asset Tag or Inventory ID** (asset_tag, text, required): Enter the unique identifier assigned to the asset by the organization.
* **Asset Name or Description** (asset_name, text, required): Provide a descriptive name or description of the asset.
* **Asset Category** (category, select_one, required): Select the category that best fits the asset from the following options: Electronics, Furniture, Vehicle, Software, or Other.
* **Serial Number** (serial_number, text, optional): Enter the manufacturer or vendor serial number if applicable.
* **Purchase Date** (purchase_date, date, optional): Enter the date the asset was purchased or received.
* **Purchase Cost** (purchase_cost, number, optional): Enter the acquisition cost in local currency.
* **Current Location** (current_location, text, required): Specify the building and room or storage location where the asset is currently located.
* **Asset Condition** (condition, select_one, required): Select the current physical or operational condition of the asset from the following options: New, Good, Fair, or Poor.
* **Assigned To** (assigned_to, text, optional): Name of the employee or department responsible for the asset.
* **Asset Status** (status, select_one, required): Select the current lifecycle or usage status of the asset from the following options: In use, In storage, Retired, or Under maintenance.
* **Additional Notes** (additional_notes, text, optional): Enter any other relevant information or special handling instructions for the asset.
