# Pivot Data Collection Form - Help Guide

## Purpose
This form is designed to collect information necessary to construct pivot tables, which are used to summarize and analyze data by combining multiple fields. The form gathers data sources, row fields, column fields, and aggregation details for multiple tables.

## How To Complete This Form
To complete this form, follow these steps:
- Select the relevant data sources for your pivot table(s) in the "Data Sources" section.
- Choose the fields to be included in each row and column of your pivot table(s) in the "Row Fields" and "Column Fields" sections, respectively.
- Specify the aggregation details for your pivot table(s) in the "Aggregation Details" section.
- Repeat the process for each additional pivot table by selecting "Yes" in the "Pivot Table Requirements" section.

## Field-by-Field Explanation

* **Data Sources** (`data_sources`, `select_multiple`, required: false): Select all the data sources relevant to your pivot table(s).
* **Row Fields** (`row_fields`, `select_one`, required: false): Choose the fields that you want to include in each row of your pivot table(s).
* **Column Fields** (`column_fields`, `select_one`, required: false): Choose the fields that you want to include in each column of your pivot table(s).
* **Aggregation Details** (`aggregation_details`, `select_multiple`, required: false): Specify the aggregation details for your pivot table(s), such as sum, count, or average.
* **Pivot Table Requirements** (`pivot_table_requirements`, `note`, required: false): This section is for any additional information about your pivot table(s) that does not fit into the other categories.

Note: This form is designed to be flexible, and you can repeat the process for each additional pivot table by selecting "Yes" in the "Pivot Table Requirements" section.
