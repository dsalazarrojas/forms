# Product Test Revalidation Request Form - Help Guide
## Purpose
The Product Test Revalidation Request Form is used to request revalidation of a product that has failed or has been re-tested. This form is essential for ensuring that products are thoroughly evaluated and revalidated to maintain quality and accuracy.

## How To Complete This Form
1. Fill in the product name and description to ensure accurate identification of the product.
2. Select the correct category and subcategory for the product.
3. Provide a reason for revalidation in the "Retest Reason" field.
4. Choose the desired revalidation status (Pending, Revalidated, or Cancelled).
5. Add any additional notes or comments about the product.
6. Enter the email and phone number of the company or contact person responsible.
7. Select the correct test type and test result.
8. Enter the phone number and email of the re-test requestor and their manager.
9. Review and submit the form for approval.

## Field-by-Field Explanation

* **Product Name** (`product_name`, text, required): Enter the name of the product being revalidated.
* **Product Description** (`product_description`, text, required): Provide a brief description of the product.
* **Product Category** (`product_category`, select_one, required): Select the category of the product.
* **Product Subcategory** (`product_subcategory`, select_multiple, required): Select the subcategory of the product.
* **Retest Reason** (`retest_reason`, text, required): Provide a brief reason for revalidation.
* **Retest Date** (`retest_date`, date, required): Enter the date when the product needs to be revalidated.
* **Revalidation Status** (`revalidation_status`, select_one, required): Select the desired revalidation status (Pending, Revalidated, or Cancelled).
* **Notes** (`notes`, text, required): Add any additional comments or notes about the product.
* **Email** (`email`, email, required): Enter the company email address.
* **Phone** (`phone`, text, required): Enter the company phone number.
* **Re-Test Requester** (`retest_requester`, select_one, required): Select the person requesting the revalidation.
* **Re-Test Requester Phone** (`retest_requester_phone`, text, required): Enter the phone number of the re-test requestor.
* **Re-Test Requester Email** (`retest_requester_email`, email, required): Enter the email address of the re-test requestor.
* **Manager Re-Test Requester** (`manager_retest_requester`, text, required): Enter the name of the manager of the re-test requestor.
* **Manager Re-Test Requester Phone** (`manager_retest_requester_phone`, text, required): Enter the phone number of the manager of the re-test requestor.
* **Manager Re-Test Requester Email** (`manager_retest_requester_email`, email, required): Enter the email address of the manager of the re-test requestor.
* **Test Type** (`test_type`, select_one, required): Select the type of test being performed.
* **Test Result** (`test_result`, text, required): Enter the result of the test.
* **Test Notes** (`test_notes`, text, required): Add any additional comments or notes about the test.
