# Financial Planning Records Release Form - Help Guide
## Purpose
This form is used to collect information from clients about their financial planning records, including their personal and professional details, access types, and signature.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your personal and professional information in the "Client Information" section.
2. Select the authorized entities that will have access to your financial records in the "Authorized Entities" section.
3. Choose the type of access you wish to grant to the authorized entities in the "Access Type" section.
4. Specify the date when you want the access to start in the "Release Date" section.
5. If applicable, choose the date when you want the access to end in the "End Date" section.
6. If applicable, choose the date when you want the access to end in the "Access Until" section.
7. Provide a reason for the access in the "Access Reason" section.
8. Finally, sign and date the form in the "Signature" section.

## Field-by-Field Explanation
* **Client Information (Client Name, Client Address, Contact Number, Email)** (`client_info`, `text`, required): Enter your personal and professional details to identify yourself as a client.
* **Authorized Entities (First Name, Last Name, Entity Name)** (`authorized_entities`, `select_multiple`, optional): Choose the entities that will have access to your financial records, such as your spouse, children, or business partners.
* **Access Type (Financial Adviser, Financial Planner, Tax Professional)** (`access_type`, `select_one`, optional): Select the type of access you wish to grant to the authorized entities.
* **Release Date (date)** (`release_date`, `date`, optional): Specify the date when you want the access to start.
* **End Date (date)** (`end_date`, `date`, optional): If applicable, choose the date when you want the access to end.
* **Access Until (date)** (`access_until`, `date`, optional): If applicable, choose the date when you want the access to end.
* **Access Reason (text)** (`access_reason`, `text`, optional): Provide a reason for the access, such as tax filing or financial planning.
* **Signature (text)** (`signature`, `note`, optional): Sign and date the form to confirm your consent.
