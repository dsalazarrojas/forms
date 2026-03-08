# Assembly Line Quality Evaluation Form - Help Guide
## Purpose
The Assembly Line Quality Evaluation Form is used to assess the quality of products on an assembly line. It helps quality supervisors and evaluators to identify issues, track defects, and provide recommendations for improvements.

## How To Complete This Form
1. Fill in the Quality Supervisor Name field with your name and title.
2. Enter the Product Model Number in the corresponding field.
3. Select the start date of the evaluation period from the calendar.
4. Enter the total number of defective units found in the Number of Defective Units Found field.
5. Choose the Primary Defect Category from the drop-down menu.
6. Select the Overall Defect Severity from the drop-down menu.
7. Identify the Initial Root Cause Analysis from the options provided.
8. Enter your Quality Standard Compliance Score (on a scale of 1-10).
9. (Optional) Rate the Assembly Team Productivity using a score of 1-5.
10. (Optional) Provide any recommended training updates in the Recommended Training Updates field.
11. Write a brief Final Evaluation Summary and Notes.

## Field-by-Field Explanation
* **Quality Supervisor Name** (`evaluator_name_qual`, text, **required**): Enter your name and title.
* **Product Model Number** (`model_number_eval`, text, **required**): Enter the product's model number.
* **Evaluation Period Start** (`evaluation_period_start`, date, **required**): Select the start date of the evaluation period from the calendar.
* **Number of Defective Units Found** (`defective_units_count`, number, **required**): Enter the total number of defective units found.
* **Primary Defect Category** (`primary_defect_cat`, select_one, **required**): Select the most frequent issue from the options provided.
* **Overall Defect Severity** (`defect_severity_qual`, select_one, **required**): Select the overall defect severity from the options provided.
* **Initial Root Cause Analysis** (`root_cause_analysis_qual`, select_one, **required**): Identify the initial root cause analysis from the options provided.
* **Quality Standard Compliance Score** (`compliance_score_qual`, number, **required**): Enter a score from 1-10 representing the level of quality standard compliance.
* **Assembly Team Productivity Rating** (`team_performance_rating`, number, **optional**): (Optional) Rate the Assembly Team Productivity using a score of 1-5.
* **Recommended Training Updates** (`training_needs_qual`, text, **optional**): (Optional) Provide any recommended training updates.
* **Final Evaluation Summary and Notes** (`evaluation_summary`, text, **required**): Write a brief summary and notes on the evaluation.
