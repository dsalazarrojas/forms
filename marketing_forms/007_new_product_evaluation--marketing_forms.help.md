# new_product_evaluation - Help Guide
## Purpose
This form is designed to gather product evaluation data from customers or employees to assess the performance of a new product and identify areas for improvement.

## How To Complete This Form
1. Select the type of product (New or Existing) that you are evaluating.
2. Choose whether the product is a New or Existing product.
3. Select the launch status of the product (Not Yet Launched, Launching, or Launched).
4. Enter the date you expect to launch the product or leave blank if the product is not yet launched.
5. Enter the name of the product being evaluated.
6. Provide a brief description of the product being evaluated.
7. Identify the target audience for the product (Customer or Employee).
8. Select the rating of the product (Excellent, Good, Average, or Poor).
9. Provide comments on the product's performance.
10. Enter any additional comments you would like to add.

## Field-by-Field Explanation
* **New Product Evaluation Form Title** (`form_title`, text, required: false): Enter a brief title for the product evaluation.
* **Customer or Employees** (`customer_employees`, select_one, required: false): Select whether the product is for a Customer or an Employee.
* **Product Type** (`product_type`, select_one, required: false): Select whether the product is New or Existing.
* **Launch Status** (`launch_status`, select_one, required: false): Select the launch status of the product (Not Yet Launched, Launching, or Launched).
* **Launch Date** (`launch_date`, date, required: false): Enter the date you expect to launch the product or leave blank if the product is not yet launched.
* **Product Name** (`product_name`, text, required: false): Enter the name of the product being evaluated.
* **Product Description** (`product_description`, text, required: false): Provide a brief description of the product being evaluated.
* **Target Audience** (`target_audience`, text, required: false): Identify the target audience for the product.
* **Collected By** (`collected_by`, select_one, required: false): Select whether the product was collected by a Customer or an Employee.
* **Rating** (`rating`, select_multiple, required: false): Select the rating of the product (Excellent, Good, Average, or Poor).
* **Comments** (`comments`, text, required: false): Provide any additional comments on the product's performance.
* **Rating Comments** (`rating_comments`, text, required: false): Enter any comments on the product's rating.
* **Comments** (`form_comments`, text, required: false): Enter any additional comments on the product.
