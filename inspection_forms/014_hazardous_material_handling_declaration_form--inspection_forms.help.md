# Hazardous Material Handling Declaration Form - Help Guide
## Purpose
This form is used to declare the handling of hazardous materials by a company. It ensures the company provides accurate information about its handling of potentially dangerous substances to regulatory bodies and auditors.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the **Company Name** field with your company's full name as it appears on official documents.
2. Enter the **Address** of your company in the required format (Street, City, State, ZIP).
3. Enter the **Contact Person** who is responsible for the declaration.
4. Confirm whether you **use hazardous materials** by selecting the corresponding option.
5. If you **use hazardous materials**, enter the **Amount Used**.
6. Enter the **Declaration Date** in the required format (MM/DD/YYYY).
7. Enter the **Declaration Time** in the 24-hour format (HH:MM).
8. Confirm your **Certification** status regarding the use of hazardous materials.
9. If necessary, provide any **Comments** about the declaration.

## Field-by-Field Explanation
* **Company Name** (`company_name`, text, required): Enter your company's full name as it appears on official documents.
* **Address** (`address`, text, required): Enter the company address in the required format (Street, City, State, ZIP).
* **Contact Person** (`contact_person`, text, required): Enter the contact person's name who is responsible for the declaration.
* **Material Used** (`material_used`, select_one, required): Select "Yes" if you use hazardous materials.
* **Amount Used** (`amount_used`, number, required): Enter the quantity used.
* **Declaration Date** (`declaration_date`, date, required): Enter the date of the declaration in the format MM/DD/YYYY.
* **Declaration Time** (`declaration_time`, time, required): Enter the time of the declaration in 24-hour format (HH:MM).
* **Certification** (`certification`, select_multiple, required): Confirm whether you are certified for handling hazardous materials (Select "Yes" or "No").
* **Comments** (`comments`, note, optional): Provide any additional comments or information about the declaration.
