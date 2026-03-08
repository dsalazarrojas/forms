# Material Specification Approval Request - Help Guide
## Purpose
The Material Specification Approval Request form is used to collect and manage information about material specifications. This includes requesting approval for materials, tracking the status of material specifications, and logging relevant dates and times.

## How To Complete This Form
1. Fill in the Material ID and Name fields with the relevant information.
2. Enter the Supplier Name and Supplier Email for the material supplier.
3. Provide the Supplier Phone number if available.
4. Select the Specification Approved option to indicate whether the specification is approved or not.
5. Enter the Date Submitted and Time Submitted to record when the request was submitted.
6. Add any relevant Notes if needed.
7. Enter the Submitter name for your reference.
8. If applicable, select the Approver name.
9. Enter the Date Approved and Time Approved if the specification is approved.
10. Provide a Reason for Rejection if the specification is rejected.
11. Select the Approval Status to indicate whether the material specification is Approved, Rejected, or Pending.
12. Enter any Comments regarding the material specification.
13. Choose the Material Status as Active, Inactive, or Pending.
14. Select the Material Type from the available options.
15. Enter the Spec Version and Spec Rev Num if applicable.
16. Record the Spec Rev Date and Spec Rev Time if the specification has been revised.
17. Enter the Spec Approved By if the specification is approved.
18. Enter the Spec Approved Date if the specification is approved.

## Field-by-Field Explanation

* **Material Specification** (`material_specification`, text, required): Enter a brief description of the material specification.
* **Material ID** (`material_id`, number, required): Enter the unique identifier for the material.
* **Material Name** (`material_name`, text, required): Enter the name of the material.
* **Supplier Name** (`supplier_name`, text, required): Enter the name of the material supplier.
* **Supplier Email** (`supplier_email`, email, required): Enter the email address of the material supplier.
* **Supplier Phone** (`supplier_phone`, text, optional): Enter the phone number of the material supplier.
* **Specification Approved** (`specification_approved`, select_one, required): Select whether the specification is approved or not.
* **Date Submitted** (`date_submitted`, date, optional): Enter the date when the request was submitted.
* **Time Submitted** (`time_submitted`, time, optional): Enter the time when the request was submitted.
* **Notes** (`notes`, text, optional): Add any relevant notes about the material specification.
* **Submitter** (`submitter`, text, required): Enter your name for reference.
* **Approver** (`approver`, text, optional): If applicable, select the name of the approver.
* **Date Approved** (`date_approved`, date, optional): Enter the date when the specification was approved.
* **Time Approved** (`time_approved`, time, optional): Enter the time when the specification was approved.
* **Reason for Rejection** (`reason_for_rejection`, text, optional): If the specification is rejected, provide a reason for rejection.
* **Approval Status** (`approval_status`, select_multiple, required): Select whether the material specification is Approved, Rejected, or Pending.
* **Comments** (`comments`, text, optional): Enter any comments regarding the material specification.
* **Material Status** (`material_status`, select_multiple, required): Select the Material Status as Active, Inactive, or Pending.
* **Material Type** (`material_type`, select_one, required): Select the type of material from the available options.
* **Spec Version** (`spec_version`, number, optional): Enter the version of the material specification.
* **Spec Rev Num** (`spec_rev_num`, number, optional): Enter the revision number of the material specification.
* **Spec Rev Date** (`spec_rev_date`, date, optional): Enter the date when the material specification was revised.
* **Spec Rev Time** (`spec_rev_time`, time, optional): Enter the time when the material specification was revised.
* **Spec Approved By** (`spec_approved_by`, text, optional): If the specification is approved, enter the name of the person who approved it.
* **Spec Approved Date** (`spec_approved_date`, date, optional): Enter the date when the specification was approved.

## Tips
- Make sure to fill in all required fields before submitting the form.
- Review the form carefully to ensure accuracy and completeness of information.
- Use the form to track and manage material specifications throughout the approval process.
