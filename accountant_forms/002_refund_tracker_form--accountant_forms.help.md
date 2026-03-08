# Refund Tracker Form - Help Guide
## Purpose
The Refund Tracker Form is used to track refunds, enabling users to input information related to refunds, such as account numbers, refund dates, customer details, and refund status.

## How To Complete This Form
To complete the Refund Tracker Form, follow these steps:

1. Ensure you have all the necessary information ready before starting.
2. Select the relevant fields and input the required information.
3. Review and confirm your entries before submitting the form.

## Field-by-Field Explanation
### **Account Number** (`account_number`, text, false)
* This field is used to input the account number related to the refund.

### **Refund Date** (`refund_date`, date, false)
* This field is used to input the date of the refund.

### **Customer Name** (`customer_name`, text, false)
* This field is used to input the name of the customer associated with the refund.

### **Customer Email** (`customer_email`, email, false)
* This field is used to input the email address of the customer.

### **Refund Status** (`refund_status`, select_one, false)
* This field is used to select the status of the refund from the available options: "Processing", "Complete", or "Pending".

### **Notes** (`notes`, note, false)
* This field is used to add any additional notes or comments related to the refund.

### **Assigned User** (`assigned_user`, select_one, false)
* This field is used to select the user assigned to handle this refund from the available options.

### **Assigned User** (`assigned_user`, text, false)
* This field is used to input a text-based user assignment for this refund, but please note that this field is a duplicate and should not be used for the intended purpose. 

Note: The second "Assigned User" field is a duplication and should be removed for the form to function properly.
