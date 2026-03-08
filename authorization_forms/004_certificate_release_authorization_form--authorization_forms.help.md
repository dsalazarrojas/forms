# Certificate Release Authorization Form - Help Guide
## Purpose
This form is designed to obtain authorization from the certificate holder to release the certificate to a designated recipient or organization.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name as the requester.
2. Provide your contact email address for release confirmation.
3. Enter the name of the certificate holder.
4. Enter the certificate ID or reference number if available.
5. Specify the name of the recipient or organization receiving the certificate.
6. Indicate your relationship to the certificate holder.
7. Select the type of ID provided for verification.
8. Provide your consent signature name.

## Field-by-Field Explanation
* **requester name** (`requester_name`, `text`, required): Enter your full name as the person requesting the release of the certificate.
* **requester email** (`requester_email`, `email`, required): Enter your contact email address for release confirmation.
* **certificate holder name** (`certificate_holder_name`, `text`, required): Enter the name of the person holding the certificate.
* **certificate ID** (`certificate_id`, `text`, required): Enter the ID or reference number for the certificate.
* **release to** (`release_to`, `text`, required): Enter the name of the recipient or organization receiving the certificate.
* **relationship to holder** (`relationship_to_holder`, `select_one`, required): Choose one of the following options:
	+ Self
	+ Employer
	+ Authorized Representative
	+ Other
* **ID verification** (`id_verification`, `select_one`, required): Choose one of the following options:
	+ Government ID
	+ Employee ID
	+ Not provided
* **consent signature name** (`consent_signature`, `text`, required): Enter your typed name, which constitutes consent for the release of the certificate.
* **additional instructions** (`additional_instructions`, `text`, optional): Add any special handling or delivery notes if necessary.
