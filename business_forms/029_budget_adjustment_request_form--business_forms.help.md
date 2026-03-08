# Budget Adjustment Request Form - Help Guide
## Purpose
The Budget Adjustment Request Form is used to request adjustments to the budget for a specific fiscal year or budget period. This form is intended to help employees and management make informed decisions about budget adjustments and ensure that the requested changes are properly documented and approved.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your full name and department as the requester.
2. Enter your email address and phone number so that we can contact you if needed.
3. Specify the fiscal year or budget period for which you are requesting the adjustment.
4. Enter the current budget amount for the relevant period.
5. Select the type of adjustment you are requesting (Increase Request, Decrease Request, Reallocation, or Line Item Modification).
6. Enter the amount you are requesting as an adjustment.
7. Enter the new total budget amount after the adjustment.
8. Specify the specific line items affected by the adjustment.
9. Provide a business justification for the request, explaining why this adjustment is necessary.
10. (Optional) Provide a cost-benefit analysis, expected impact, and outcomes of the adjustment.
11. Indicate if the request is urgent.
12. Specify the approval authority needed for approval.
13. Enter the date when the adjustment should take effect.
14. (Optional) If this request is denied, describe your contingency plan.
15. Indicate if supporting documentation is attached.
16. (Optional) If you have made previous budget adjustments this year, provide the amount and dates.

## Field-by-Field Explanation

### 1. **Requester Name (Required)** (`requester_name`, text, required)
Your full name as the requester of this budget adjustment.

### 2. **Department (Required)** (`requester_department`, text, required)
The department that you belong to, relevant to this budget adjustment request.

### 3. **Email Address (Required)** (`requester_email`, email, required)
Your email address so that we can contact you regarding this request.

### 4. **Phone Number (Required)** (`requester_phone`, text, required)
Your phone number for contact purposes.

### 5. **Fiscal Year or Budget Period (Required)** (`budget_period`, text, required)
Specify the fiscal year or budget period for which you are requesting the adjustment.

### 6. **Current Budget Amount (Required)** (`current_budget`, number, required)
Enter the current budget amount for the relevant period.

### 7. **Type of Adjustment (Required)** (`adjustment_type`, select_one, required)
Select the type of adjustment you are requesting:
*   Increase Request
*   Decrease Request
*   Reallocation
*   Line Item Modification

### 8. **Requested Adjustment Amount (Required)** (`requested_amount`, number, required)
Enter the amount of the requested adjustment.

### 9. **New Total Budget After Adjustment (Calculated)** (`new_total`, number, required)
This field is calculated based on your input, it shows the total budget after the adjustment.

### 10. **Specific Line Items Affected (Required)** (`line_items`, text, required)
Enter the specific line items affected by the adjustment.

### 11. **Business Justification (Required)** (`business_justification`, text, required)
Provide a clear and concise reason for this adjustment.

### 12. **(Optional) Cost-Benefit Analysis (Cost-Benefit Analysis, text, required)** (`cost_benefit`, text, optional)
If you have a cost-benefit analysis, it's beneficial to include it.

### 13. **Is this request Urgent? (Required)** (`urgent_justification`, select_one, required)
Indicate if this request is urgent:
*   Yes, critical
*   Yes, high priority
*   Normal priority
*   Can wait

### 14. **Approval Authority Needed (Required)** (`approval_authority`, text, required)
Specify the approval authority needed for this request.

### 15. **Requested Effective Date (Required)** (`effective_date`, date, required)
Enter the date when the adjustment should take effect.

### 16. **Contingency Plan if Request Denied (Optional)** (`contingency_plan`, text, optional)
If this request is denied, describe your plan.

### 17. **Supporting Documentation Attached (Required)** (`supporting_docs`, select_one, required)
Indicate if supporting documentation is attached:
*   Yes, attached
*   No documentation

### 18. **Previous Budget Adjustments This Year (Optional)** (`previous_adjustments`, text, optional)
If this is not your first request, provide the amount and dates of previous adjustments.
