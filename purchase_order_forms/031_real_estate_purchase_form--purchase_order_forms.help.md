# Real Estate Purchase Form - Help Guide
## Purpose
The Real Estate Purchase Form is designed to collect personal and purchase information from users. It is intended to be a general form and not specific to any particular business logic or proprietary content.

## How To Complete This Form
To complete the form, please follow these steps:

1.  Fill in the **Personal Info** section with your personal details (Page 1).
2.  Enter your **Contact Information** in the **Contact Information** section (Page 2).
3.  Provide **purchase details** in the **Purchase Details** section (Page 3).
4.  Enter information about the **Property** in the **Property Information** section (Page 4).
5.  Select the **Contract Of Sale** option, either accepting or not accepting the terms (Page 5).
6.  Read and accept or decline the **Cost Disclosure Statement** in the **Cost Disclosure Statement** section (Page 6).

## Field-by-Field Explanation
### **Personal Info** (Page 1, `personal_info`)
*   **Personal Info** (`title`, `text`, required: `false`):
    Please enter your personal details, such as name and contact information.

### **Contact Information** (Page 2, `contact_info`)
*   **Contact Information** (`title`, `text`, required: `false`):
    Enter your contact information, such as email and phone number.

### **Purchase Details** (Page 3, `purchase_details`)
*   **Purchase Details** (`title`, `text`, required: `false`):
    Please provide purchase details, such as purchase price and location.

### **Property Information** (Page 4, `property_info`)
*   **Property Information** (`title`, `text`, required: `false`):
    Enter information about the property you are purchasing, such as address and type.

### **Contract Of Sale** (Page 5, `contract_of_sale`)
*   **Contract Of Sale** (`title`, `select_one`, required: `false`):
    Select whether you accept or decline the terms of the Contract Of Sale.

### **Cost Disclosure Statement** (Page 6, `cost_disclosure_statement`)
*   **Cost Disclosure Statement** (`title`, `select_one`, required: `false`):
    Please read and select whether you accept or decline the terms of the Cost Disclosure Statement.
