# Client Exit Survey Form - Help Guide
## Purpose
This form is designed to collect feedback from clients who have closed their accounts or ended their service with us. The data collected will help us identify areas of improvement and make informed decisions to refine our services.

## How To Complete This Form
To complete this form, please follow these steps:

1. **Read each section carefully** and ensure you provide the most accurate information possible.
2. **Complete all required fields** (marked as "required" in the form).
3. **Select the most relevant reason for leaving** from the options provided in the "Primary Reason for Leaving" section.
4. **Rate your overall satisfaction** using the scale provided in the "Overall Satisfaction Rating" section.
5. **Briefly describe your primary concern** if applicable.
6. **Choose whether or not we can contact you for a follow-up** discussion.

## Field-by-Field Explanation
### 1. <label> **-- Client Exit Feedback --** </label>
**-- This section is for your comments on your recent experience with us. --**

* **2. account id or reference** (`<name>`, `text`, required: false)
	+ Optional internal reference for our records.
* **3. last service received** (`<name>`, `text`, required: true)
	+ Describe the main service or product involved.
* **4. primary reason for leaving** (`<name>`, `select_one`, required: true)
	+ Select the most relevant reason for leaving from the options provided: Price concerns, Product or service issues, Found alternative, Poor customer service, Other.
* **5. overall satisfaction rating** (`<name>`, `select_one`, required: true)
	+ Rate your overall satisfaction using the scale: 1 (very dissatisfied), 2, 3, 4, 5 (very satisfied).
* **6. most important issue experienced** (`<name>`, `text`, required: false)
	+ Brief description of the primary concern.
* **7. would you recommend us to others** (`<name>`, `select_one`, required: true)
	+ Choose whether or not you would recommend us to others: Yes or No.
* **8. suggestions for improvement** (`<name>`, `text`, required: false)
	+ What could we do differently to retain clients.
* **9. permission to follow up** (`<name>`, `select_one`, required: false)
	+ May we contact you to discuss further.
* **10. exit date** (`<name>`, `date`, required: false)
	+ Date the account was closed or service ended.
