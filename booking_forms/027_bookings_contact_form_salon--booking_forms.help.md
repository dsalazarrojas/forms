<thinking>
This form is designed to collect information from customers interested in booking a service at the salon. It is intended for clients who want to schedule an appointment and provide necessary details to ensure a smooth and personalized experience. This form will guide users through the process of providing their contact information, selecting a preferred location and service type, choosing a preferred appointment date and time, and specifying any specific requests or notes they may have. The form should only be completed once per appointment and not multiple times for the same service.
</thinking>

# Bookings Contact Form Salon - Help Guide
## Purpose
The purpose of this form is to collect information from clients to facilitate a smooth and personalized booking experience at our salon.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill out the required fields with your full name, email address, and phone number.
2. Select your preferred salon location, service type, and appointment date and time.
3. Specify any specific requests or notes for your appointment.
4. Confirm your appointment with a preferred method (phone call, email, or SMS).
5. Optionally, provide any specific stylist preference or hair type if applicable.

## Field-by-Field Explanation
- **Full Name** (`client_name`, text, required): Enter your full name to help us identify you properly.
- **Email Address** (`client_email`, email, required): We will use this email address to send you booking confirmation and other related updates.
- **Phone Number** (`client_phone`, text, required): Provide your best contact number for us to reach out to you.
- **Preferred Salon Location** (`preferred_salon_location`, select_one, required): Select the location from which you would like to book your appointment.
  • Downtown
  • Uptown
  • Shopping mall
  • Suburb location
- **Service Type** (`service_type`, select_one, required): Choose the service you are looking to book.
  • Haircut
  • Hair color
  • Highlights
  • Hair treatment
  • Styling
  • Manicure
  • Pedicure
  • Other
- **Preferred Stylist** (`preferred_stylist`, text, optional): If you have a specific stylist in mind, please enter their name here.
- **Appointment Date** (`appointment_date`, date, required): Enter the date you would like to book your appointment.
- **Preferred Time** (`appointment_time`, select_one, required): Select the time slot you would like to book.
  • 8:00 AM - 9:00 AM
  • 9:00 AM - 10:00 AM
  • 10:00 AM - 11:00 AM
  • 11:00 AM - 12:00 PM
  • 2:00 PM - 3:00 PM
  • 3:00 PM - 4:00 PM
  • 4:00 PM - 5:00 PM
  • 5:00 PM - 6:00 PM
- **Expected Duration** (`service_duration`, select_one, required): Choose the length of time you expect the service to take.
  • 30 minutes
  • 1 hour
  • 1.5 hours
  • 2 hours
  • 2.5 hours
  • 3 hours
- **First Time Client** (`first_time_client`, select_one, required): Confirm if this is your first time visiting our salon.
  • True
  • False
  • Not sure
- **Specific Requests or Notes** (`specific_requests`, text, optional): Enter any special requests or notes for your appointment here.
- **Hair Type** (`hair_type`, select_one, optional): If you know your hair type or texture, please select from the options provided.
  • Straight
  • Wavy
  • Curly
  • Coily
  • Not sure
- **Confirmation Method** (`confirmation_method`, select_one, required): How would you like to be confirmed for your appointment?
  • Phone call
  • Email
  • SMS
  • Either
- **How Did You Hear About Us** (`referral_source`, select_one, optional): Where did you hear about our salon?
  • Google search
  • Social media
  • Friend recommendation
  • Previous visit
  • Advertising
  • Other
