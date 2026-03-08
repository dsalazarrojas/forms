<thinking>
We are creating a help guide for the Pivot Data Collection Form. To ensure relevance and prevent duplication, we must understand that this form is likely used to collect various types of data related to pivot tables, which are used to summarize and analyze data by combining two or more field values. This form appears to be designed to collect information about data sources, row fields, column fields, and aggregation details for multiple pivot tables. The purpose of this form is to gather all the necessary information to construct a pivot table, including the data sources, the fields to be included in each row and column, and the aggregation details required for the table. This form seems to be a general-purpose data collection form for pivot tables, and the sections might be duplicated to accommodate different tables or data sources. Our goal is to create a clear and concise help guide that guides the user through the form's purpose and completion.
</thinking>

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
