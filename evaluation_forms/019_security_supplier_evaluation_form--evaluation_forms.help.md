# security_supplier_evaluation_form - Help Guide
## Purpose
The "security_supplier_evaluation_form" is a tool used to evaluate security suppliers. Its primary goal is to assess the supplier's performance based on the provided criteria. This form will help you gather relevant data to make informed decisions.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the "Supplier Name" field with the name of the security supplier you are evaluating.
2. Select the "Evaluation Date" of when you last interacted with the supplier.
3. Rate the supplier's performance using a score from 1 to 5 in the "Score" field.
4. Provide any comments about your experience with the supplier in the "Comments" field.
5. Choose whether you would "Recommended" or "Not Recommended" the supplier.
6. If you chose "Not Recommended", please provide additional comments in the "Comments Not Recommended" field.
7. Select relevant categories for the supplier in the "Category" field.
8. Add any comments about your evaluation in the "Evaluation Form Comments" field.

## Field-by-Field Explanation
- **Supplier Name** (`supplier_name`, text, required: false): The name of the supplier you are evaluating.
- **Evaluation Date** (`evaluation_date`, date, required: false): The date of your last interaction with the supplier.
- **Score** (`score`, number, required: false): Your rating of the supplier's performance on a scale of 1-5.
- **Comments** (`comments`, text, required: false): Your personal experience and feedback about the supplier.
- **Recommended** (`recommended`, select_one, required: false): A binary choice indicating whether you would recommend or not recommend the supplier.
- **Not Recommended** (`not_recommended`, select_one, required: false): A binary choice indicating whether you would not recommend the supplier.
- **Comments Not Recommended** (`comments_not_recommended`, text, required: false): If you choose not to recommend, please provide an explanation.
- **Category** (`category`, select_multiple, required: false): Select one or more categories that describe your evaluation.
- **Evaluation Form Comments** (`evaluation_form_comments`, text, required: false): Additional comments about your evaluation.
