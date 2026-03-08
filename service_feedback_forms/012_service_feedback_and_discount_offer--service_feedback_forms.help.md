# Service Feedback And Discount Offer - Help Guide
## Purpose
This form is designed to help customers provide feedback about our service and potentially receive discounts or offers in return. It's a simple way for us to understand customer satisfaction and preferences.

## How To Complete This Form
- Please provide your email address for communication purposes.
- Share your feedback about our service.
- Choose any optional incentives you'd like to receive (e.g., a discount code, gift card, or price reduction).
- Select the category for this feedback (Service Feedback Forms or Discount Forms).
- Decide whether to send a incentive (yes or no).
- If you'd like to receive a follow-up, please provide a date and time you'd like us to send it.

## Field-by-Field Explanation

* **Customer Email** (`customer_email`, email, required: false): Enter your email address for us to contact you.
* **Customer Feedback** (`customer_feedback`, text, required: false): Share your thoughts about our service. Be as detailed as possible to help us improve.
* **Optional Incentive** (`optional_incentive`, select_one, required: false): Choose an incentive you'd like to receive from our service. Options are:
	+ Discount Code
	+ Gift Card
	+ Price Reduction
* **Service Feedback And Discount Offer Category** (`service_feedback_and_discount_offer_category`, select_one, required: true): Select the category for this feedback (Service Feedback Forms or Discount Forms).
* **Send Incentive** (`send_incentive`, select_multiple, required: true): Decide whether to send a incentive (yes or no).
* **Service Feedback And Discount Offer Sent** (`service_feedback_and_discount_offer_sent_at`, date, required: false): Enter a date when you'd like to receive the feedback response.
* **Service Feedback And Discount Offer Sent To** (`service_feedback_and_discount_offer_sent_to`, text, required: false): Provide a contact person or department that we should send the feedback response to.
* **Service Feedback And Discount Offer Sent At** (`service_feedback_and_discount_offer_sent_at`, time, required: false): Enter a time when you'd like to receive the feedback response.
