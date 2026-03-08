# Accumulation Declaration Form - Help Guide

## Purpose
This help guide is intended to assist users in understanding the requirements and process of completing the Accumulation Declaration Form (ADF). The ADF is a crucial document that helps in accurately recording the accumulation of assets for financial reporting and regulatory purposes.

## How To Complete This Form
To complete the ADF, follow these steps:

1. Ensure you have all the required information and supporting documents before starting the form.
2. Fill in the Declarant Name field with the full name of the individual or authorized representative of the organization making the declaration.
3. Select the correct Type of Declarant from the dropdown menu to indicate whether the declaration is being made by an individual or an organization.
4. Enter the Social Security Number or Tax ID (SSN/TIN) for the declarant.
5. Provide the complete residential or business address of the declarant.
6. Enter the contact phone number for any further contact regarding this declaration.
7. Enter the contact email address for correspondence.
8. Select the Declaration Period covered by this accumulation declaration.
9. Enter the total value of accumulated assets during the declaration period.
10. Select all the categories of assets being declared from the list of options.
11. Specify the primary source of the accumulated assets.
12. Choose the accumulation rate, which describes how the assets were accumulated.
13. (Optional) If applicable, enter the name of the primary financial institution where the assets are held.
14. (Optional) If applicable, enter the name of the financial advisor or professional certifying this declaration.
15. Enter the date when this declaration is signed.

## Field-by-Field Explanation

### 1. **Declarant Name** (`declarant_name`, text, required)
Enter the full name of the individual or authorized representative of the organization making the declaration.

### 2. **Type of Declarant** (`declarant_type`, select_one, required)
Select the type of the declarant from the dropdown menu:

*   **Individual**: For personal declarations.
*   **Corporation**: For corporate declarations.
*   **Partnership**: For partnership declarations.
*   **Trust**: For trust declarations.
*   **Non-profit Organization**: For non-profit organization declarations.
*   **Other**: For other types of declarations not listed above.

### 3. **Social Security Number or Tax ID** (`social_security_tax_id`, text, required)
Enter the Social Security Number or Tax ID for the declarant.

### 4. **Address** (`address`, text, required)
Provide the complete residential or business address of the declarant.

### 5. **Contact Phone** (`contact_phone`, text, required)
Enter the phone number for contact regarding this declaration.

### 6. **Contact Email** (`contact_email`, email, required)
Enter the email address for correspondence.

### 7. **Declaration Period** (`declaration_period`, text, required)
Select the time period covered by this declaration.

### 8. **Total Asset Value** (`total_asset_value`, number, required)
Enter the total value of accumulated assets during the declaration period.

### 9. **Asset Categories** (`asset_categories`, select_multiple, required)
Select all categories of assets being declared from the list of options:

*   **Real Estate**
*   **Stocks and Securities**
*   **Bank Accounts**
*   **Retirement Accounts**
*   **Business Interests**
*   **Personal Property**
*   **Investment Funds**
*   **Cryptocurrency**
*   **Other**

### 10. **Source of Funds** (`source_of_funds`, select_one, required)
Specify the primary source of the accumulated assets:

*   **Employment Income**
*   **Investment Returns**
*   **Business Income**
*   **Gifts/Inheritance**
*   **Sale of Assets**
*   **Other**

### 11. **Accumulation Rate** (`accumulation_rate`, select_one, required)
Choose the accumulation rate, which describes how the assets were accumulated:

*   **Consistent monthly**
*   **Irregular**
*   **Lump sum**
*   **Seasonal**
*   **Other**

### 12. **Primary Financial Institution** (`financial_institution`, text, required (optional))
(If applicable, enter the name of the primary financial institution where assets are held.)

### 13. **Certified By** (`certified_by`, text, required (optional))
(If applicable, enter the name of the financial advisor or professional certifying this declaration.)

### 14. **Declaration Date** (`declaration_date`, date, required)
Enter the date when this declaration is signed.
