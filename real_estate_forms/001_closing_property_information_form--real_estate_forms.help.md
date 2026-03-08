# Closing Property Information Form - Help Guide
## Purpose
This form is designed to collect essential information about a property during a closing transaction. It ensures that all relevant details are documented and verified for accurate record-keeping.

## How To Complete This Form

1.  Start by ensuring you are the authorized representative for the property's closing transaction.
2.  Fill out the property address in the **Property Address** field.
3.  In the **City, State and ZIP Code** field, type the city, state, and ZIP code of the property.
4.  Select the type of property from the options provided in the **Property Type** field.
5.  Enter the **Sale Price** of the property as the total agreed-upon price.
6.  Type in the **Seller Full Name** for the party selling the property.
7.  Enter the **Seller Phone Number** for the seller's contact information.
8.  Provide the **Seller Email Address** for the seller's contact information.
9.  Enter the **Scheduled Closing Date** for the property's closing.
10. If applicable, enter the **Year Built** of the property.
11. If necessary, enter the **Square Footage** of the property.
12. If relevant, indicate the **Number of Bedrooms** and **Number of Bathrooms** for the property.
13. Check the **Mortgage Status** to indicate if there is an existing mortgage.
14. If relevant, provide any **Special Conditions or Disclosures** for the property.
15. Indicate whether the property has had an **Inspection Completed** by selecting the appropriate status.

## Field-by-Field Explanation

*   **Property Address** (`property_address`, text, required): Enter the complete street address of the property.
*   **City, State and ZIP Code** (`city_state_zip`, text, required): Type in the city, state, and ZIP code of the property.
*   **Property Type** (`property_type`, select_one, required): Select the type of property from the options provided.
*   **Sale Price** (`sale_price`, number, required): Enter the total agreed-upon sale price of the property.
*   **Seller Full Name** (`seller_name`, text, required): Type in the full name of the seller.
*   **Seller Phone Number** (`seller_phone`, text, required): Enter the seller's phone number.
*   **Seller Email Address** (`seller_email`, email, required): Provide the seller's email address.
*   **Scheduled Closing Date** (`closing_date`, date, required): Enter the scheduled closing date for the property.
*   **Year Built** (`year_built`, number, optional): If applicable, enter the year the property was built.
*   **Square Footage** (`square_footage`, number, optional): If necessary, enter the total living area of the property.
*   **Number of Bedrooms** (`bedrooms`, number, optional): If relevant, indicate the number of bedrooms in the property.
*   **Number of Bathrooms** (`bathrooms`, number, optional): If relevant, indicate the number of bathrooms in the property.
*   **Mortgage Status** (`mortgage_status`, select_one, required): Check if there is an existing mortgage.
*   **Special Conditions or Disclosures** (`special_conditions`, text, optional): If relevant, provide any known issues or conditions.
*   **Has Inspection Been Completed** (`inspection_completed`, select_one, optional): Indicate if an inspection has been completed.
