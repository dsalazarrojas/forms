<thinking>
The purpose of this form is to collect data for tracking and analysis. It's used to create a pivot table with various data sources, aggregation methods, and types of data. This form helps ensure that the data collected is accurate and reliable. It's used by data analysts and engineers to collect and analyze data for various business purposes. It's a critical component of the data collection and analysis process, and it's essential to fill it out accurately.
</thinking>

# pivot_data_collection_form - Help Guide
## Purpose
The purpose of this form is to collect data for tracking and analysis. It is used to create a pivot table with various data sources, aggregation methods, and data types.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose your data source from the available options.
2. Select the aggregation method for your data.
3. Define your row fields and column fields, including their types (numeric, text, date).
4. Select a data storage location (on-premises, cloud).
5. Choose security measures for your data.
6. Set the data collection frequency (daily, weekly, monthly).
7. Select the data collection method (manual, automatic).
8. Choose the data type (numeric, text, date).

## Field-by-Field Explanation

* **Data Sources** (`data_sources`, `text`, required: false): 
  This field is used to select the source of the data.
* **Aggregation Method** (`aggregation_method`, `text`, required: false):
  This field is used to specify how the data is aggregated.
* **Aggregation Type** (`aggregation_type`, `select_one`, required: false):
  This field is used to select the type of aggregation (True or False).
* **Row Fields** (`row_fields`, `select_multiple`, required: false):
  This field is used to select which fields to include as row fields.
* **Column Fields** (`column_fields`, `text`, required: false):
  This field is used to select which fields to include as column fields.
* **Data Storage Location** (`data_storage_location`, `select_one`, required: false):
  This field is used to select where the data is stored (cloud or on-premises).
* **Data Security** (`data_security`, `select_one`, required: false):
  This field is used to select security measures for the data.
* **Data Collection Frequency** (`data_collection_frequency`, `select_one`, required: false):
  This field is used to select how often data is collected (daily, weekly, monthly).
* **Data Collection Method** (`data_collection_method`, `select_one`, required: false):
  This field is used to select how data is collected (manual or automatic).
* **Data Type** (`data_type`, `select_one`, required: false):
  This field is used to select the type of data (numeric, text, date).
* **Row Fields Type** (`row_fields_type`, `select_one`, required: false):
  This field is used to select the type of row fields (numeric, text, date).
* **Column Fields Type** (`column_fields_type`, `select_one`, required: false):
  This field is used to select the type of column fields (numeric, text, date).
