<thinking>
To create a comprehensive help guide for the "halloween_event_registration_form", we need to consider the following:
- The form is designed for individuals to register for a Halloween event, likely a party or gathering.
- It collects contact information, such as name, email, phone number, and date of birth.
- It inquires about the person's interest in the event, specifically whether they want to participate in a costume contest, spooky scavenger hunt, or trick-or-treat.
- It captures the name of any child attending the event and the name of the child's parent or guardian.
- It asks for the event date and time.
- It includes a note field for any additional information.
- It requests email and phone number confirmations for the person registering.
- It asks how they would like to be contacted (phone, email, or text message).
- It allows the person to leave a message.
- It includes terms and conditions, which are typically a required checkbox to accept or decline.

We need to ensure that the form is completed correctly and that the user understands the purpose and requirements. The fields should be filled in a logical order, and each field's meaning should be explained clearly.

After considering these points, we'll create the help guide.

</thinking>

# halloween_event_registration_form - Help Guide

## Purpose
This is a registration form for a Halloween event, where you can provide your contact information, event interest, child's details, and other relevant details.

## How To Complete This Form
1. Fill out the contact information section with your details.
2. Indicate your interest in the event by selecting one or more of the available options.
3. Provide the name and age of any child attending the event.
4. Select how you would like to be contacted for event updates.
5. Enter any additional notes or comments.
6. Review and accept the terms and conditions.

## Field-by-Field Explanation

* **Contact Information** (`contact_information`, text, required): Enter your name and any other contact information you'd like to provide.
* **Name** (`name`, text, required): Enter your name.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth.
* **Age** (`age`, number, required): Enter your age.
* **Event Interest** (`event_interest`, select_one, required): Select the event activities you're interested in:
	+ Costume Contest
	+ Spooky Scavenger Hunt
	+ Trick or Treating
* **Name of Child** (`name_of_child`, text, required): Enter the name of the child attending the event.
* **Parent Name** (`parent_name`, text, required): Enter the name of the child's parent or guardian.
* **Event Date** (`event_date`, date, required): Enter the date of the event.
* **Event Time** (`event_time`, time, required): Enter the time of the event.
* **Note** (`note`, text, required): Enter any additional notes or comments about the event.
* **Email Confirmation** (`email_confirmation`, email, required): Enter your email address to confirm your registration.
* **Phone Confirmation** (`phone_confirmation`, text, required): Enter your phone number to confirm your registration.
* **Contact Method** (`contact_method`, select_multiple, required): Select how you would like to be contacted for event updates:
	+ Phone
	+ Email
	+ Text Message
* **Message** (`message`, text, required): Enter a message for the event organizers.
* **Terms and Conditions** (`terms_and_conditions`, text, required): Check the box to accept the terms and conditions.

By following this guide, you'll be able to complete the form correctly and provide the necessary information for a successful Halloween event registration.
