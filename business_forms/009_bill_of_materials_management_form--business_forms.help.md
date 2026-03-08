# Bill Of Materials Management Form - Help Guide
## Purpose
The Bill Of Materials Management Form is used to collect and organize information about the components needed for a specific product or finished good. This form helps ensure accurate and up-to-date information about the materials and components used in the production process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the final product name.
2. Enter the SKU or product ID number.
3. Enter the revision or version number (if applicable).
4. Select the product category (e.g., Mechanical Assembly, Electronics, etc.).
5. Enter the component description, part number, and quantity per unit.
6. Select the unit of measure (e.g., Each, Grams, Meters, etc.).
7. Enter the supplier name.
8. Enter the estimated or actual cost per unit.
9. Enter the lead time in days.
10. Select the BOM status (e.g., Draft, In Review, Active, etc.).
11. Enter the manager's approval and approval date.
12. Enter any change history or notes.

## Field-by-Field Explanation

* **Final Product Name** (`product_name`, text, required): Enter the name of the final product or good.
* **SKU or Product ID** (`sku_number`, text, required): Enter the unique identifier for the product or good.
* **Revision or Version Number** (`product_version`, text, required): Enter the revision or version number of the product or good (if applicable).
* **Product Category** (`product_category`, select_one, required): Select the category of the product or good (e.g., Mechanical Assembly, Electronics, etc.).
* **Component Description** (`component_name`, text, required): Enter a brief description of the component or sub-assembly.
* **Part Number** (`part_number`, text, required): Enter the unique identifier for the component or sub-assembly.
* **Quantity per Unit** (`quantity_per_unit`, number, required): Enter the quantity of components needed for one finished product.
* **Unit of Measure** (`unit_of_measure`, select_one, required): Select the unit of measure for the component or sub-assembly (e.g., Each, Grams, Meters, etc.).
* **Primary Supplier** (`supplier_name`, text, required): Enter the name of the primary supplier.
* **Component Unit Cost** (`cost_per_unit`, number, optional): Enter the estimated or actual cost of the component or sub-assembly.
* **Lead Time (Days)** (`lead_time_days`, number, optional): Enter the expected delivery time from the supplier in days.
* **BOM Status** (`bom_status`, select_one, required): Select the status of the BOM (e.g., Draft, In Review, Active, etc.).
* **Department Manager Approval** (`manager_approval`, text, required): Enter the department manager's approval for the BOM.
* **Approval Date** (`approval_date`, date, required): Enter the date of the department manager's approval.
* **Change History or Notes** (`changelog_notes`, text, optional): Enter any recent updates or changes to the BOM.

Note: The fields marked as "required" are mandatory and must be filled out. The fields marked as "optional" can be left blank if not applicable.
