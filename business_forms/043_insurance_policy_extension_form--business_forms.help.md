# Insurance Policy Extension Form - Help Guide
## Purpose
The Insurance Policy Extension Form is used by clients to request an extension of their existing insurance policy. The form is designed to capture relevant details to facilitate the assessment and processing of the extension request.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your **Client Name** in the first field.
2. Provide your **Policy Number** in the second field.
3. Select the **Request Date** in the calendar format (MM/DD/YYYY).
4. Choose an **Extension Type** from the dropdown menu. This is a critical field as it will help us understand the reason for the extension request.
5. Write a brief **Extension Reason** explaining why you require an extension.
6. Add any additional **Client Notes** if you have any specific comments or concerns.
7. Add any additional **Business Notes** if you have any internal notes or comments for our team.
8. Choose the current **Extension Status** from the dropdown menu. You can select either **Open** or **Closed** to indicate the current state of your extension request.

## Field-by-Field Explanation
- **Client Name** (`client_name`, text, required: false): Please fill in your name as it appears on your policy document.
- **Policy Number** (`policy_number`, text, required: false): Enter your policy number as it is displayed on your policy document.
- **Request Date** (`request_date`, date, required: false): Select the date you are requesting the policy extension.
- **Extension Type** (`extension_type`, select_one, required: true): Choose the reason for your extension request from the dropdown menu:
  - **Extension 1**
  - **Extension 2**
  - **Extension 3**
- **Extension Reason** (`extension_reason`, text, required: false): Explain why you need an extension.
- **Client Note** (`client_note`, note, required: false): Add any additional comments or concerns you have regarding your extension request.
- **Business Note** (`business_note`, note, required: false): Add any internal comments or notes for our team.
- **Extension Status** (`extension_status`, select_multiple, required: false): Select the current status of your extension request from the dropdown menu:
  - **Open**
  - **Closed**
