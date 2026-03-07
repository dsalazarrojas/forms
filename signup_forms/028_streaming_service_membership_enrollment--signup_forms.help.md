<thinking>
We need to create a user-facing help guide for a form used for streaming service membership enrollment. The form should be straightforward, easy to understand, and provide clarity on its purpose, completion, and field explanations. This will ensure that end-users can quickly and accurately fill out the form. We also need to ensure that each field label is clear, concise, and doesn't require deep business logic understanding. The final guide should be in Markdown format, with a consistent structure and tone.
</thinking>

# Streaming Service Membership Enrollment - Help Guide
## Purpose
This form is designed for new users to enroll in our streaming service membership. Please fill out the form below to create or manage your membership account.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields with your details.
2. Choose your preferred subscription term (Yes or No).
3. Select your plan from the provided options (Yes or No).
4. Review your answers before submitting the form.
5. Click submit to complete your membership enrollment.

## Field-by-Field Explanation

### First Name
**First Name** (`first_name`, text, required: false)
Your first name will be used to personalize your account and streaming experience.

### Last Name
**Last Name** (`last_name`, text, required: false)
Your last name will be used to personalize your account and streaming experience.

### Email
**Email** (`email`, email, required: false)
Enter your email address. This will be used as your account login.

### Phone Number
**Phone Number** (`phone`, text, required: false)
Enter your phone number. This can be used for streaming-related updates and notifications.

### Subscription Term
**Subscription Term** (`subscription_term`, select_one, required: false)
Choose if you want to subscribe or not.

* Yes: You will be automatically enrolled in the membership program for a subscription term.
* No: You will not be subscribed to the membership program.

### Plan Selection
**Plan Selection** (`plan_selection`, select_multiple, required: false)
Select the plans you want to subscribe to.

* Yes: You will be enrolled in the selected plan.
* No: You will not be enrolled in the selected plan.

## Tips
* Make sure to fill out all required fields correctly.
* Double-check your answers before submitting the form.
* If you have any issues or concerns, contact us for assistance.
