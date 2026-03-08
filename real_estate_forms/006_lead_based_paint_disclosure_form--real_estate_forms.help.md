# Lead Based Paint Disclosure Form - Help Guide
## Purpose
The Lead Based Paint Disclosure Form is a mandatory form used to collect information about the presence or absence of lead-based paint on a property. The form helps to:

* Inform buyers and sellers about the potential risks associated with lead-based paint
* Ensure that all parties involved in the sale are aware of the necessary procedures to be followed
* Record the disclosure of lead-based paint information

## How To Complete This Form
1. Fill out the Home Information page with the following:
	* Enter the address of the property
	* Select the type of property (e.g. single-family home, condominium, etc.)
2. For the Lead Paint Information page:
	* Choose one of the options to indicate the presence or absence of lead-based paint
3. On the Contact Information page:
	* Enter your contact information (name, phone number, email, etc.)
4. On the Agreement page:
	* Select the agreement option that applies to your situation
5. Sign and date the form to indicate your acceptance of the agreement

## Field-by-Field Explanation
### Home Information
* **Home Information** (`id: 1`, `name: home_info`, `type: text`, required: true): Enter the address of the property.

### Lead Paint Information
* **Lead Paint Information** (`id: 2`, `name: lead_paint_info`, `type: select_one`, required: true): Choose one of the options to indicate the presence or absence of lead-based paint.

### Contact Information
* **Contact Information** (`id: 3`, `name: contact_info`, `type: text`, required: true): Enter your contact information (name, phone number, email, etc.).

### Homebuyers Information
* **Homebuyers Information** (`id: 4`, `name: homebuyers_info`, `type: select_multiple`, required: false): Select all options that apply to you. (Note: This field is not required but provides additional information about the homebuyers.)

### Additional Information
* **Additional Information** (`id: 5`, `name: additional_info`, `type: note`, required: false): You may enter any additional information that is relevant to the disclosure of lead-based paint.

### Lead-Based Paint Disclosure
* **Lead-Based Paint Disclosure** (`id: 6`, `name: lead_based_paint_disclosure`, `type: note`, required: false): This field is not visible, as it's a note type field.

### Agreement
* **Agreement** (`id: 7`, `name: agreement`, `type: select_one`, required: true): Select the agreement option that applies to your situation.

### Signature
* **Signature** (`id: 8`, `name: signature`, `type: text`, required: true): Sign and date the form to indicate your acceptance of the agreement.

### Additional Information
* **Additional Information** (`id: 9`, `name: additional_info`, `type: select_multiple`, required: false): Select all options that apply to provide additional information.

### Lead-Based Paint Disclosure
* **Lead-Based Paint Disclosure** (`id: 10`, `name: lead_based_paint_disclosure`, `type: text`, required: false): This field is not visible, as it's a note type field.

### Signature
* **Signature** (`id: 11`, `name: signature`, `type: text`, required: false): This field is not visible, as it's a note type field.

### Additional Information
* **Additional Information** (`id: 12`, `name: additional_info`, `type: note`, required: false): You may enter any additional information that is relevant to the disclosure of lead-based paint.

### Contact Information
* **Contact Information** (`id: 13`, `name: contact_info`, `type: select_multiple`, required: false): Select all options that apply to you. (Note: This field is not visible, as it's a note type field.)
