# property_release_form - Help Guide
## Purpose
The property release form is used to gather information about a property release, including details about the property, the owner, and the release process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the property identifier, which is a unique identifier for the property.
2. Enter the name of the owner of the property.
3. Provide the owner's contact information in the "Owner Contact" field.
4. Select the release date for the property.
5. Enter the name of the buyer of the property.
6. Provide the buyer's contact information in the "Buyer Contact" field.
7. Select the acknowledgement option to confirm the seller's understanding of the release process.
8. Enter the release amount for the property.
9. Select the property type from the available options.
10. Provide a description of the property if necessary.
11. Select any other terms that apply to the property release.
12. Enter the name of the person signing the release document.
13. Enter the date and time the release document was signed.
14. Select the location where the release document was signed.

## Field-by-Field Explanation
* **Property Identifier** (`property_identifier`, text, required): Enter the unique identifier for the property.
* **Owner** (`owner_name`, text, required): Enter the name of the property owner.
* **Owner Contact** (`owner_contact`, email, required): Enter the owner's contact information.
* **Release Date** (`release_date`, date, required): Select the release date for the property.
* **Buyer** (`buyer_name`, text, required): Enter the name of the buyer.
* **Buyer Contact** (`buyer_contact`, text, required): Enter the buyer's contact information.
* **Seller Acknowledgement** (`seller_acknowledgement`, select_one, required): Select the option to confirm the seller's understanding of the release process.
* **Release Amount** (`release_amount`, number, required): Enter the release amount for the property.
* **Property Type** (`property_type`, select_multiple, required): Select the type(s) of property being released.
* **Property Description** (`property_description`, note, optional): Provide a description of the property if necessary.
* **Other Terms** (`other_terms`, select_multiple, optional): Select any other terms that apply to the property release.
* **Signed By** (`signed_by`, text, required): Enter the name of the person signing the release document.
* **Signed On** (`signed_on`, date, required): Enter the date the release document was signed.
* **Signed At** (`signed_at`, time, optional): Enter the time the release document was signed.
* **Signed** (`signed_location`, select_one, required): Select the location where the release document was signed.
