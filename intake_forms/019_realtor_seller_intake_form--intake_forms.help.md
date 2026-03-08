<thinking>Before generating the user-facing help guide, I'll review the form and its purpose. This form is designed to collect information from realtors and sellers for the purpose of listing properties. The main fields cover property details such as address, type, price, and features. There's also a section for agent information, including name, email, phone number, and verification methods. This form is likely used in a real estate context, where accurate and precise data is crucial for marketing and sales purposes. The form is designed to be completed by realtors and sellers who want to showcase their properties on a platform or website. The purpose of this form is to gather essential details about each property, making it easier for potential buyers or agents to find and compare properties. Before proceeding, I'll ensure that the form fields are well-explained and easily understandable to the end-users.</thinking>

# realtor-seller-intake-form - Help Guide
## Purpose
This form is designed for realtors and sellers to provide accurate and detailed information about their properties for marketing and sales purposes. It helps showcase properties on a platform or website, making it easier for potential buyers or agents to find and compare properties.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the property address where you want to list your property.
2. Choose the type of property you are listing (e.g., Residential, Commercial, Mixed Use, Industrial, Land).
3. Enter the asking price of your property.
4. Specify the number of bedrooms and bathrooms in your property.
5. Provide the property's square footage.
6. Enter the year your property was built.
7. If applicable, add any additional property features or types.
8. Briefly describe your property.
9. Enter the asking date and time of your property.
10. You can add a photo URL to showcase your property (optional).
11. Add a photo description for searchability and accessibility.
12. Add an alternative text for the photo (e.g., for screen readers).
13. Add a caption for your photo to provide context.
14. Enter your name as the listing agent.
15. Provide your email address so potential buyers can contact you directly.
16. Enter your phone number so potential buyers can reach out to you.
17. Indicate whether the property owner is available for verification (true or false).
18. Choose the verification method you have used for the property owner (e.g., Online Verification, Offline Verification, No Verification).
19. Attach any relevant verification documents for the property owner.
20. Add any notes about the property or owner (optional).

## Field-by-Field Explanation

* **Property Address (1)** (`property_address`, text, required): Enter the exact address of the property you want to list.
* **Property Type (2)** (`property_type`, select_multiple, required): Select the type of property you are listing (e.g., Residential, Commercial, Mixed Use, Industrial, Land).
* **Asking Price (3)** (`asking_price`, number, required): Enter the price you are asking for your property.
* **Number of Beds (4)** (`number_beds`, number, required): Specify the number of bedrooms in your property.
* **Number of Baths (5)** (`number_baths`, number, required): Specify the number of bathrooms in your property.
* **Property Square Footage (6)** (`property_square_footage`, number, required): Enter the total square footage of your property.
* **Year Built (7)** (`year_built`, number, required): Enter the year your property was built.
* **Lot Size (8)** (`lot_size`, number, required): If applicable, enter the lot size of your property.
* **Lot Features (8)** (`lot_features`, text, optional): Specify any notable features of your property (e.g., parking, yard, etc.).
* **Additional Property Type (9)** (`property_type_additional`, text, optional): If your property has unique features that don't fit in the standard categories, describe them here.
* **Property Description (10)** (`property_description`, text, optional): Briefly describe your property to attract potential buyers.
* **Asking Date (11)** (`asking_date`, date, required): Enter the date you are asking for your property.
* **Asking Time (12)** (`asking_time`, time, required): Enter the time you are asking for your property.
* **Photo URL (13)** (`photo_url`, text, optional): Add a photo URL to showcase your property (optional).
* **Photo Description (14)** (`photo_description`, text, optional): Add a description for your photo to improve searchability and accessibility.
* **Photo Alt (15)** (`photo_alt`, text, optional): Enter a brief text describing the photo for screen readers.
* **Photo Caption (16)** (`photo_caption`, text, optional): Add a caption for your photo to provide context.
* **Agent Name (17)** (`agent_name`, text, required): Enter your name as the listing agent.
* **Agent Email (18)** (`agent_email`, email, required): Provide your email address so potential buyers can contact you.
* **Agent Phone (19)** (`agent_phone`, text, required): Enter your phone number for potential buyers to reach out to you.
* **Property Owner (20)** (`property_owner`, select_one, required): Indicate whether the property owner is available for verification (true or false).
* **Owner Verification Method (21)** (`owner_verification_method`, select_multiple, required): Choose the verification method you used for the property owner (e.g., Online Verification, Offline Verification, No Verification).
* **Owner Verification Docs (22)** (`owner_verification_docs`, text, required): Attach relevant verification documents for the property owner.
* **Owner Notes (23)** (`owner_notes`, text, optional): Add any notes about the property or owner (optional).
* **Owner Signature (24)** (`owner_signature`, text, optional): Add your signature, if required or requested by the platform.
