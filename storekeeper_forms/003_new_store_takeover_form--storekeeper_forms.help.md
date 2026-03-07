<thinking>Storekeepers use the "new-store-takeover-form" to facilitate the process of storing ownership of stores within the inventory management system. The primary intention is to accurately document the transfer of store ownership for future reference and auditing purposes. To ensure that all relevant stores are updated correctly, this form should be used for every new store that joins the inventory system or for stores that have changed ownership. Avoid submitting duplicate forms for the same store, as it leads to unnecessary data redundancy and potential discrepancies in reports and analytics.</thinking>

# new-store-takeover-form - Help Guide
## Purpose
The "new-store-takeover-form" is a critical tool for storekeepers to document the ownership transfer of stores within the inventory management system. It ensures accurate and up-to-date information about store ownership for future reference, auditing, and reporting purposes.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the **Store Name** of the store that is being transferred or added to the inventory management system.
2. Fill in the **Owner Name** of the current or new owner of the store.
3. Provide the **Store Address** where the store is located.
4. Indicate if the store **Store Ownership Transfer** is 'Yes' or 'No' and provide the details if required.
5. Enter the **New Owner** name and contact information if applicable.
6. Fill in the **Date of Transfer** and **Time of Transfer** accurately.
7. Provide the **Store Phone** number of the store.
8. Select if the store will be **Assigned to an Employee** and choose the employee from the options provided.

## Field-by-Field Explanation
* **Store Name** (`store_name`, text, required): Enter the name of the store to be added or transferred in the inventory management system.
* **Owner Name** (`owner_name`, text, required): Provide the name and contact information of the current or new owner of the store.
* **Store Address** (`address`, text, optional): Enter the physical address of the store location.
* **Store Ownership Transfer** (`store_ownership_transfer`, select_multiple, required): Indicate if the store ownership transfer is 'Yes' or 'No' and provide details if applicable.
* **New Owner** (`new_owner`, text, optional): If the store ownership transfer is 'Yes', provide the name and contact information of the new owner.
* **Date of Transfer** (`date_transfer`, date, required): Fill in the date of the store ownership transfer accurately.
* **Time of Transfer** (`time_transfer`, time, required): Fill in the time of the store ownership transfer accurately.
* **Store Phone** (`store_phone`, text, required): Enter the store's phone number for contact purposes.
* **Assigned Employee** (`assigned_employee`, select_one, optional): Select if the store will be assigned to an employee and choose the employee from the options provided.
