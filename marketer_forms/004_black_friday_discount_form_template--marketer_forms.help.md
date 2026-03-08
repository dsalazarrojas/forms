# Black Friday Discount Form Template - Help Guide
## Purpose
This form is a Black Friday discount template designed to collect campaign details for promotional purposes. It helps ensure accurate and efficient campaign management by providing a structured format for campaign creators to input their campaign specifics.

## How To Complete This Form
To complete this form, follow these steps:

1.  Start by filling out the campaign details section on page 1.
2.  Enter the campaign name and discount code in their respective fields.
3.  Choose the discount type (Percentage or Fixed amount) and enter the corresponding value in the "Discount value" field.
4.  Set the start and end dates for the campaign.
5.  If applicable, select the eligible products or categories for the discount.
6.  Specify the minimum purchase value to apply the discount, if any.
7.  Update the approval status and enter the campaign owner's email for follow-up purposes.

## Field-by-Field Explanation
- **Campaign name** (`campaign_name`, text, required): Enter the internal name for this discount campaign.
  - This field is required to identify the campaign internally.
- **Discount code** (`discount_code`, text, required): Enter the code customers will use at checkout.
  - This field is required and will be used for customer redemption.
- **Discount type** (`discount_type`, select_one, required): Choose between Percentage or Fixed amount.
  - This field determines the type of discount, which affects how the discount value is applied.
- **Discount value** (`discount_value`, number, required): Enter the discount value, depending on the selected type.
  - This field requires a numerical value, which will be applied according to the chosen discount type (Percentage or Fixed amount).
- **Start date** (`start_date`, date, required): Select the date the campaign begins.
  - This field sets the start date for the campaign, marking the beginning of the promotional period.
- **End date** (`end_date`, date, required): Choose the date the campaign ends.
  - This field marks the end date for the campaign, ending the promotional period.
- **Eligible products or categories** (`eligible_products`, text, optional): List SKUs or categories eligible for the discount (if applicable).
  - This field is optional but provides an opportunity to specify which products or categories are included in the campaign.
- **Minimum purchase value** (`minimum_purchase`, number, optional): Set the minimum cart value to apply the discount (if applicable).
  - This field is optional and allows specifying a minimum purchase requirement for the discount.
- **Approval status** (`approval_status`, select_one, required): Update the approval status of the campaign (Pending, Approved, or Rejected).
  - This required field tracks the campaign's approval status for internal use.
- **Campaign owner email** (`campaign_owner_email`, email, required): Enter the email address for the campaign owner.
  - This field is required for follow-up purposes and contact.

## Tips
- Double-check your input for accuracy before submitting the form.
- Ensure all required fields are filled correctly to avoid errors.
- Review the campaign details carefully to avoid duplication or missing crucial information.
