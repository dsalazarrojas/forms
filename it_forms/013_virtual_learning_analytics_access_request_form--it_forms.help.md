# virtual_learning_analytics_access_request_form - Help Guide
## Purpose
The virtual learning analytics access request form is designed to collect information from staff members to request access to virtual learning analytics. This form helps us understand the reasons behind each request and ensures that we can provide the right level of access to the requested data. **Please note that requests will be reviewed internally to prevent duplication and ensure consistency.**

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your first name in the **first_name** field. This is the name we will use to address your request internally.
2. Provide a brief description of your request in the **request_reason** field. This will help us understand the purpose of your access request.
3. Choose the appropriate **analytics_access_level** from the dropdown menu, which represents the level of access you need to virtual learning analytics:
	* **None**: No access is required.
	* **Basic**: Access to basic virtual learning analytics data.
	* **Advanced**: Access to more detailed virtual learning analytics data.
4. Select the relevant data **data_scope** to access:
	* **None**: No data scope selected.
	* **All Courses**: Access to all virtual learning analytics data.
	* **Option 3**: Custom scope selection (please note that this option requires a separate ticket or conversation with our team for custom scope definition)

## Field-by-Field Explanation
* **first_name** (`first_name`, text, optional): Your first name.
* **request_reason** (`request_reason`, text, optional): A brief description of the reason behind your access request.
* **analytics_access_level** (`analytics_access_level`, select_one, required): The level of access you need to virtual learning analytics.
	+ **None**: No access is required.
	+ **Basic**: Access to basic virtual learning analytics data.
	+ **Advanced**: Access to more detailed virtual learning analytics data.
* **data_scope** (`data_scope`, select_multiple, optional): The scope of data you need access to.
	+ **None**: No data scope selected.
	+ **All Courses**: Access to all virtual learning analytics data.
	+ **Option 3**: Custom scope selection (please note that this option requires a separate ticket or conversation with our team for custom scope definition)

## Tips
* Please make sure to provide clear and concise descriptions for each field to ensure that your request is handled correctly.
* If you need to select **Option 3** for custom scope, please submit a separate ticket or reach out to our team for further discussion.
