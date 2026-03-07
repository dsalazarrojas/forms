<thinking>
We need to ensure that the form is used correctly to avoid confusion and miscommunication with the customer. The form is for customers to request carpet cleaning services, and we want to make sure they understand what information is required and what the different fields mean. This will help us provide the best possible service to our customers.
The form is designed to collect contact information, service details, and other relevant data that will help us tailor our services to the customer's needs.
</thinking>

# Carpet Cleaning Request Form - Help Guide
## Purpose
This form is designed for customers to request carpet cleaning services, providing us with necessary contact and service details to tailor our services to their needs.

## How To Complete This Form
1. **Section 1: Contact Information** - Please provide your name, email address, and phone number so we can get in touch with you.
2. **Section 2: Service Details** - Choose your preferred date and time for the cleaning service, specifying the number of rooms to be cleaned and whether you need us to move furniture.
3. **Section 3: Additional Services** - If you have specific stains or issues with your carpet, select all applicable options.
4. **Section 4: Quote and Confirmation** - If you have an estimated budget, please provide it for a quote.
5. **Section 5: Final Steps** - Review your request and acknowledge that this is a request and not a final booking.

## Field-by-Field Explanation
* **Customer Name** (`full_name`, `text`, required): The name of the person requesting the service.
* **Email Address** (`email`, `email`, required): The email address where we can contact you.
* **Phone Number** (`phone`, `text`, required): The phone number where we can contact you.
* **Service Address** (`address`, `text`, required): The address where the cleaning will take place.
* **Preferred Cleaning Date** (`preferred_date`, `date`, required): The date you would like to have the service performed.
* **Preferred Time of Day** (`preferred_time`, `select_one`, required): Choose the time slot you prefer for the service.
* **Number of Rooms to Clean** (`number_of_rooms`, `number`, required): The number of rooms that need cleaning.
* **Hallways and Stairs** (`hallways_and_stairs`, `select_multiple`, optional): Select all that apply for hallways, stairs, and landing areas to be cleaned.
* **Furniture Moving Needed** (`furniture_moving_needed`, `select_one`, required): Let us know if you need us to move furniture.
* **Types of Stains** (`stain_types`, `select_multiple`, optional): Select all applicable stains types to be treated.
* **Pet Odor Treatment** (`pet_odor_treatment`, `select_one`, required): Check if you need deep sanitizing and deodorizing.
* **Carpet Fabric Type** (`carpet_fabric_type`, `select_one`, required): If you know, please let us know the type of carpet fabric.
* **Add-on Services** (`add_on_services`, `select_multiple`, optional): Select any additional services you would like to combine with the cleaning service.
* **Parking or Access Information** (`accessibility_notes`, `text`, optional): Provide any parking or access information if applicable.
* **Estimated Budget** (`estimated_budget`, `number`, optional): If you have an estimated budget, please provide it for a quote.
* **How did you find our service?** (`referral_source`, `text`, optional): How did you hear about us?
* **Booking Confirmation** (`booking_confirmation`, `select_one`, required): Acknowledge that this is a request and not a final booking.
* **Digital Signature** (`digital_signature`, `text`, required): Type your name as digital signature.
* **Submission Date** (`submission_date`, `date`, required): The date of submission of this form.
