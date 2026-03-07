<thinking>
We need to check if this form is being filled out by someone who has actually purchased headphones. If they haven't, we don't want to bother them with a survey. We also want to ensure that this form isn't being used to game the system or collect fake data. Let's verify that the user has purchased headphones and isn't trying to submit a fake survey. If the user hasn't purchased headphones, they'll be asked to start over. If the user has purchased headphones but wants to submit fake data, we'll detect this and ask them to review their answers carefully.

Once we're sure the user has purchased headphones and intends to submit real data, they'll be allowed to fill out the form. We want to make sure they understand what each field is for and how to complete it correctly. This way, we can get high-quality feedback from our users that will help us improve our products.

This form has six questions that help us get feedback on the sound quality of the headphones, overall satisfaction, and other important details about the purchasing experience.
</thinking>

# Headphone Purchase Feedback - Help Guide
## Purpose
This form is a quick and easy way for you to give us feedback about your recent headphones purchase. We value your feedback and would like to know how we can improve our products and services to better meet your needs.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out each section carefully and honestly.
* For the "How was the sound quality of the headphones?" section, please rate the sound quality on a scale of 1-10, where 1 is poor and 10 is excellent.
* For the "Overall Satisfaction" section, rate your overall satisfaction with the headphones on a scale of 1-10, where 1 is not satisfied and 10 is extremely satisfied.
* For the "Price Value" section, enter the amount you paid for the headphones.
* For the "Where did you purchase the headphones?" section, select the location where you bought the headphones.
* For the "When did you purchase the headphones?" section, enter the date you bought the headphones.
* For the "What time did you purchase the headphones?" section, enter the time you bought the headphones.
* For the "Do you have any suggestions for the headphones?" section, enter any suggestions or comments you have about your purchase.
* For the "How would you like to be contacted?" sections, select the method of contact you prefer (email or phone).
* For the "What is your message?" section, enter any additional comments or feedback you have.

## Field-by-Field Explanation
* **How was the sound quality of the headphones?** (`headphones_purchased`, text, optional)
	+ This is a scale of 1-10 to rate the sound quality of the headphones. Rate your experience from poor to excellent.
* **Overall Satisfaction** (`overall_satisfaction`, number, optional)
	+ This is a scale of 1-10 to rate your overall satisfaction with the headphones. Rate your experience from not satisfied to extremely satisfied.
* **How much did you pay for the headphones?** (`price_value`, number, optional)
	+ Enter the amount you paid for the headphones.
* **Where did you purchase the headphones?** (`purchase_location`, select_one, optional)
	+ Select the location where you bought the headphones from the list of options.
* **When did you purchase the headphones?** (`purchase_date`, date, optional)
	+ Enter the date you bought the headphones in YYYY-MM-DD format.
* **What time did you purchase the headphones?** (`purchase_time`, time, optional)
	+ Enter the time you bought the headphones in 12-hour format.
* **Do you have any suggestions for the headphones?** (`purchase_suggestions`, note, optional)
	+ Enter any suggestions or comments you have about your purchase.
* **How would you like to be contacted?** (`contact_phone`, text, optional)
	+ Select whether you would like to be contacted by email or phone.
* **How would you like to be contacted?** (`contact_email`, email, optional)
	+ Enter your email address if you would like to be contacted by email.
* **What is your message?** (`contact_message`, text, optional)
	+ Enter any additional comments or feedback you have about your purchase.
