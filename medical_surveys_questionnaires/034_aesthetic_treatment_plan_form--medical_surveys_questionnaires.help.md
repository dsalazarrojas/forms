<thinking>...</thinking>

# Aesthetic Treatment Plan Form - Help Guide

## Purpose
This form is used to create a personalized treatment plan for clients in the aesthetics industry. It collects information about the client's profile, medical history, and treatment goals, as well as recommends procedures, treatment frequency, and home care products. The form is completed by medical professionals to provide a comprehensive treatment plan for the client.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the client's name and consultation date.
2. Describe the client's skin type and concerns.
3. Specify the client's treatment goals.
4. Choose the recommended procedures and treatment frequency from the provided options.
5. List any recommended home care products.
6. Estimate the total cost of the treatment plan.
7. Choose a payment option (if applicable).
8. Outline the next steps to be taken.
9. Sign and approve the treatment plan.

## Field-by-Field Explanation

* **Client Name** (`id: 2`, `type: text`, `required: true`): Enter the client's name as they are known to you.
* **Consultation Date** (`id: 3`, `type: date`, `required: true`): Enter the date of the consultation.
* **Skin Type / Concerns** (`id: 4`, `type: text`, `required: true`): Describe the client's skin type and concerns, e.g., oily, acne-prone, aging.
* **Client Goals** (`id: 5`, `type: text`, `required: true`): Specify what the client wants to achieve through the treatment plan.
* **Recommended Procedures** (`id: 7`, `type: select_multiple`, `required: true`): Choose the recommended procedures from the options provided:
	+ Facial Rejuvenation
	+ Anti-Wrinkle Injections
	+ Volume Restoration (Fillers)
	+ Skin Tightening
	+ Pigmentation Correction
* **Recommended Frequency** (`id: 8`, `type: select_one`, `required: true`): Choose how often the client should receive the recommended treatments:
	+ One-time treatment
	+ Weekly
	+ Monthly
	+ Every 3 months
	+ Every 6 months
* **Recommended Home Care Products** (`id: 9`, `type: text`, `required: false`): List any home care products that support the treatment plan.
* **Estimated Total Cost** (`id: 11`, `type: number`, `required: false`): Estimate the total cost of the treatment plan in dollars.
* **Payment Options Discussed** (`id: 12`, `type: select_one`, `required: false`): Choose a payment option from the options provided:
	+ Pay Per Visit
	+ Package Upfront
	+ Membership
	+ Financing
* **Next Steps** (`id: 13`, `type: text`, `required: true`): Outline the next steps to be taken, such as scheduling an appointment or patch testing.
* **Provider Signature** (`id: 14`, `type: select_one`, `required: true`): Sign and approve the treatment plan by selecting "Signed" from the options provided.
