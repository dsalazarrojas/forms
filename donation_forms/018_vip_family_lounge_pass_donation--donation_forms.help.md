# vip_family_lounge_pass_donation - Help Guide
## Purpose
The "vip_family_lounge_pass_donation" form is designed to collect information for a VIP pass donation, which is a special pass for a family or individual. This form is used to capture details about the donor and the recipient of the pass, including donor contact information, recipient information, and a message if desired.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of VIP pass you want to donate, whether it's for one or a family.
2. Enter the name and email of the individual or family member donating the pass.
3. Enter the phone number and address of the donor.
4. Enter the number of VIP passes you want to donate.
5. Provide the name and contact information (phone and address) of the recipient of the pass.
6. Add any additional message you'd like to include with the donation.
7. Click the "Submit" button to complete the form.

## Field-by-Field Explanation
* **Donor Information**
	+ **VIP Pass Type** (`vip_pass_type`, select_one, required): Select the type of VIP pass you're donating, whether it's for one person or family.
	+ **Name** (`donor_name`, text, required): Enter the name of the individual or family member donating the pass.
	+ **Email Address** (`email`, email, required): Enter the email address of the donor.
	+ **Phone** (`donor_phone`, text, required): Enter the phone number of the donor.
	+ **Address** (`donor_address`, text, required): Enter the address of the donor.
	+ **Number of VIP Passes** (`number_of_passes`, number, required): Enter the number of VIP passes you're donating.
* **Recipient Information**
	+ **Recipient Name** (`recipient_name`, text, required): Enter the name of the recipient of the pass.
	+ **Recipient Phone** (`recipient_phone`, text, required): Enter the phone number of the recipient.
	+ **Recipient Address** (`recipient_address`, text, required): Enter the address of the recipient.
* **Additional Information**
	+ **Message** (`message`, note, optional): Add any additional message you'd like to include with the donation.
	+ **Submit** (`form_submit`, text, required): Click this button to complete the form.
