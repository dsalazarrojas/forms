# Black Friday Promotional Signage Request Form - Help Guide
## Purpose
This form is used to request and coordinate Black Friday promotional signage for marketing purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure that you are requesting signage for a Black Friday promotion.
2. Fill in your name and department.
3. Provide your contact email address.
4. Select the type of signage needed.
5. Enter the quantity of signs required.
6. Specify the date by which the signage must be installed.
7. Choose the store locations where the signage will be displayed.
8. (Optional) Provide any additional artwork notes or instructions.
9. Enter the name of the approver or coordinator.

## Field-by-Field Explanation

- **-- Signage Request --** (`signage_request_header`, note, required/optional): This is the header for the form, indicating that this is a request for Black Friday promotional signage.
- **Requester name** (`requester_name`, text, required): Provide your full name as a marketing contact.
- **Department** (`department`, select_one, required): Select the department requesting the signage (Marketing, Store operations, Visual merchandising).
- **Contact email** (`email`, email, required): Enter your email address for proof approval and coordination.
- **Signage type** (`signage_type`, select_one, required): Choose the type of signage needed (Window poster, Shelf wobbler, Floor decal, Banner).
- **Quantity required** (`quantity_required`, number, required): Enter the number of signs needed.
- **Required by date** (`required_by_date`, date, required): Enter the date by which the signage must be installed.
- **Store locations** (`store_locations`, select_multiple, required): Choose the store locations where the signage will be displayed (All stores, Regional stores, Specific stores).
- **Artwork notes** (`artwork_notes`, text, optional): Provide any additional artwork notes or instructions (e.g., file names or instructions).
- **Approval signature name** (`approval_signature`, text, required): Enter the name of the approver or coordinator.
