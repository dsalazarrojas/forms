# Assembly Line Quality Evaluation Form - Help Guide
## Purpose
The Assembly Line Quality Evaluation Form is a tool used to assess the overall quality of an assembly line in the manufacturing process.

## How To Complete This Form
1. Evaluator Name: Enter your full name.
2. Department: Select the department you are affiliated with.
3. Evaluation Date: Enter the date of the evaluation.
4. Assembly Line: Enter the specific assembly line being evaluated.
5. Product Family: Select the product category being evaluated.
6. Evaluation Type: Choose the type of quality check performed.
7. Sample Quantity: Enter the number of items checked.
8. Overall Quality Score: Rate the quality of the assembly line from 1 to 100.
9. Dimensional Accuracy Rating: Choose how well the dimensions match the specifications.
10. Surface Finish Quality: Choose the appearance and texture of the product.
11. Assembly Integrity: Choose how well the components fit together.
12. Functional Test Result: Choose whether the product works as intended.
13. Defect Rate Percentage: Enter the percentage of defective units.
14. Types of Defects Found: Select all types of defects found (e.g., scratches, misalignment, etc.).
15. Process Capability Index (optional): Enter the Cpk value if known.
16. Operator Performance: Choose how well the operators are performing.
17. Equipment Calibration Status: Choose the status of the equipment (e.g., all calibrated, some due soon, etc.).
18. Is Documentation Complete: Choose whether all records are properly maintained.
19. Number of Non-Conformances: Enter the total number of non-conformance issues.
20. Corrective Action Needed (optional): Describe the required actions.
21. Has Root Cause Been Identified (optional): Choose whether the root cause of defects has been identified.
22. Is Rework Required: Choose whether items need rework.
23. Potential Customer Impact: Choose the potential impact on customers.
24. Evaluation Status: Choose the final status of the evaluation (e.g., approved, pending review, etc.).
25. Evaluator Signature: Type your name to sign the form.

## Field-by-Field Explanation

* **Evaluator Name** (`evaluator_name`, text, required): Enter your full name as the quality evaluator.
* **Department** (`evaluator_department`, select_one, required): Select the department you are affiliated with.
* **Evaluation Date** (`evaluation_date`, date, required): Enter the date of the evaluation.
* **Assembly Line** (`assembly_line`, text, required): Enter the specific assembly line being evaluated.
* **Product Family** (`product_family`, select_one, required): Choose the product category being evaluated.
* **Evaluation Type** (`evaluation_type`, select_one, required): Choose the type of quality check performed.
* **Sample Quantity** (`sample_quantity`, number, required): Enter the number of items checked.
* **Overall Quality Score** (`quality_score`, number, required): Rate the quality of the assembly line from 1 to 100.
* **Dimensional Accuracy Rating** (`dimensional_accuracy`, select_one, required): Choose how well the dimensions match the specifications.
* **Surface Finish Quality** (`surface_finish_quality`, select_one, required): Choose the appearance and texture of the product.
* **Assembly Integrity** (`assembly_integrity`, select_one, required): Choose how well the components fit together.
* **Functional Test Result** (`functional_test_result`, select_one, required): Choose whether the product works as intended.
* **Defect Rate Percentage** (`defect_rate_percent`, number, required): Enter the percentage of defective units.
* **Types of Defects Found** (`defects_found`, select_multiple, required): Select all types of defects found (e.g., scratches, misalignment, etc.).
* **Process Capability Index (optional)** (`process_capability`, number, optional): Enter the Cpk value if known.
* **Operator Performance** (`operator_performance`, select_one, required): Choose how well operators are performing.
* **Equipment Calibration Status** (`equipment_calibration`, select_one, required): Choose the status of the equipment (e.g., all calibrated, some due soon, etc.).
* **Is Documentation Complete** (`documentation_complete`, select_one, required): Choose whether all records are properly maintained.
* **Number of Non-Conformances** (`non_conformance_count`, number, required): Enter the total number of non-conformance issues.
* **Corrective Action Needed (optional)** (`corrective_action_needed`, text, optional): Describe the required actions.
* **Has Root Cause Been Identified (optional)** (`root_cause_identified`, select_one, optional): Choose whether the root cause of defects has been identified.
* **Is Rework Required** (`rework_required`, select_one, required): Choose whether items need rework.
* **Potential Customer Impact** (`customer_impact`, select_one, required): Choose the potential impact on customers.
* **Evaluation Status** (`evaluation_status`, select_one, required): Choose the final status of the evaluation (e.g., approved, pending review, etc.).
* **Evaluator Signature** (`evaluator_signature`, text, required): Type your name to sign the form.

Note: Fields marked as required must be completed.
