<thinking>
The form is intended to collect information from real estate sellers regarding their listings. It captures various details such as property type, square footage, price, contact information, and listing status. The form is likely to be used by real estate agents or brokers to manage listings and track seller information.

It's worth noting that some fields might not be entirely clear or well-defined, like "Listing Agency". This is probably a field meant to capture the name of the company listing the property. However, without further explanation or examples, the label "Listing Agency" could be confused with the "listing_agency" field of the same name. To avoid confusion, we might want to rename one of these fields to make their purpose clear. For instance, "Listing Firm" instead of "Listing Agency" could be used for the field that is meant to capture the company name, while keeping "Listing Agency" for the actual agency the seller is working with. 

However, this could be a field that doesn't need any change as it is used to collect the actual listing agency the seller is working with which is a bit confusing as there are two fields with the same label and name but one is required and the other not. 

For this guide, it will be assumed that the field "Listing Agency" is the one that captures the actual agency the seller is working with and the other "Listing Agency" field is for the company name of the contact.

It's also worth noting that the form seems to be missing some fields that are typically present in such forms like property features, amenities, etc.

</thinking>

# Real Estate Seller Information Form - Help Guide
## Purpose
This form is designed to collect information from real estate sellers about their listings. It includes fields for property details, contact information, and listing status.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by selecting the "Listing Agency" field, which is the agency the seller is working with.
2. Enter the seller's address in the "Seller Address" field.
3. Choose the type of property by selecting one or multiple options in the "Property Type" field.
4. Enter the number of bedrooms and bathrooms in the "Number Of Bedrooms" and "Number Of Bathrooms" fields respectively.
5. Enter the square footage of the property in the "Square Footage" field.
6. Enter the price of the property in the "Price" field.
7. Enter the seller's contact phone number in the "Contact Phone" field.
8. Enter the seller's contact email address in the "Contact Email" field.
9. Provide any additional information in the "Additional Info" field.
10. Select the current status of the property in the "Property Status" field.
11. Indicate if the listing price has increased, decreased, or remained the same in the "Listing Price Change" field.
12. Provide a reason for the price change in the "Reason For Price Change" field (if applicable).
13. Enter the name of the contact person in the "Contact Name" field.
14. Enter the title of the contact person in the "Contact Title" field.
15. Enter the name of the contact person's company in the "Contact Company" field.
16. Enter the name of the agent handling the property listing in the "Agent Name" field.
17. Enter the title of the agent handling the property listing in the "Agent Title" field.
18. Enter the name of the agent's company in the "Agent Company" field.
19. Enter the agent's contact phone number in the "Agent Contact Phone" field.
20. Enter the agent's email address in the "Agent Email" field.
21. If applicable, enter the listing price per square foot in the "Listing Price Per SQFT" field.
22. Select the sold status of the property in the "Sold Status" field.
23. Enter the number of days the property has been on the market in the "Days On Market" field.

## Field-by-Field Explanation
* **Listing Agency** (`listing_agency`, `text`, required): Enter the name of the agency the seller is working with.
* **Seller Address** (`seller_address`, `text`, required): Enter the seller's address.
* **Property Type** (`property_type`, `select_multiple`, required): Select one or multiple options for the type of property (e.g., Apartment, House, Townhouse, etc.).
* **Number Of Bedrooms** (`number_of_bedrooms`, `number`, optional): Enter the number of bedrooms in the property.
* **Number Of Bathrooms** (`number_of_bathrooms`, `number`, optional): Enter the number of bathrooms in the property.
* **Square Footage** (`square_footage`, `number`, required): Enter the square footage of the property.
* **Price** (`price`, `number`, required): Enter the price of the property.
* **Contact Phone** (`contact_phone`, `text`, required): Enter the seller's contact phone number.
* **Contact Email** (`contact_email`, `email`, required): Enter the seller's contact email address.
* **Additional Info** (`additional_info`, `text`, optional): Provide any additional information about the property.
* **Property Status** (`property_status`, `select_one`, required): Select the current status of the property (e.g., Active, Sold, etc.).
* **Listing Price Change** (`listing_price_change`, `select_one`, required): Indicate if the listing price has increased, decreased, or remained the same.
* **Reason For Price Change** (`reason_for_price_change`, `text`, optional): Provide a reason for the price change (if applicable).
* **Contact Name** (`contact_name`, `text`, required): Enter the name of the contact person.
* **Contact Title** (`contact_title`, `text`, optional): Enter the title of the contact person.
* **Contact Company** (`contact_company`, `text`, optional): Enter the name of the contact person's company.
* **Agent Name** (`agent_name`, `text`, optional): Enter the name of the agent handling the property listing.
* **Agent Title** (`agent_title`, `text`, optional): Enter the title of the agent handling the property listing.
* **Agent Company** (`agent_company`, `text`, optional): Enter the name of the agent's company.
* **Agent Contact Phone** (`agent_contact_phone`, `text`, optional): Enter the agent's contact phone number.
* **Agent Email** (`agent_email`, `email`, optional): Enter the agent's email address.
* **Listing Price Per SQFT** (`listing_price_per_sqft`, `number`, optional): If applicable, enter the listing price per square foot.
* **Sold Status** (`sold_status`, `select_one`, required): Select the sold status of the property (e.g., Sold, Under Contract, etc.).
* **Days On Market** (`days_on_market`, `number`, optional): Enter the number of days the property has been on the market.

## Tips
* Make sure to fill out all required fields to ensure accurate and complete information.
* Double-check the fields for correct and accurate information.
* If a field is not applicable, you can leave it empty.
* If you have any questions or concerns, contact the relevant authorities or support team.
