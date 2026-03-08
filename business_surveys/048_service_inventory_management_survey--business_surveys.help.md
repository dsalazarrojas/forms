# Service Inventory Management Survey - Help Guide
## Purpose
This form is designed to help you collect and manage information about the services provided within your organization. It helps keep track of services, their categories, status, owners, review dates, and any additional notes.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Start by filling in the service name in the **Service** field.
2. Select the relevant category of the service from the **category** field.
3. Choose the current status of the service from the **Status** field.
4. Enter the owner of the service in the **owner** field.
5. If applicable, select the review date for the service in the **Review Date** field.
6. Provide any additional notes regarding the service in the **notes** field.

## Field-by-Field Explanation
* **Service** (`service_inventory_management_survey`, text, required): Enter the name of the service to be managed.
* **category** (`service_category`, text, optional): Select the category of the service, if applicable.
* **Status** (`service_status`, select_one, optional): Choose the current status of the service, which can be **Active**, **Inactive**, or **Archived**.
* **owner** (`service_owner`, text, optional): Enter the owner of the service.
* **Review Date** (`review_date`, date, optional): If applicable, select the review date for the service.
* **notes** (`notes`, note, optional): Provide any additional notes or comments regarding the service.
* **Submit** (`submit`, text, optional): Click this button to submit the form and save the information.
