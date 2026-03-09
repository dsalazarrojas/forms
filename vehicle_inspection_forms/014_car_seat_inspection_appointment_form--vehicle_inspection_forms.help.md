# Car Seat Inspection Appointment Form - Help Guide
## Purpose
The Car Seat Inspection Appointment Form is designed to gather information from parents or guardians to schedule a car seat inspection. This form will help the inspection team understand the necessary details for the inspection and schedule an appointment at a convenient time and location.

## How To Complete This Form
1. Fill out the form with the required information.
2. Ensure that all required fields are filled out.
3. If you have any specific concerns or questions, you can mention them in the "Specific concerns or questions" field.

## Field-by-Field Explanation

* **Parent or Guardian Name** (`parent_guardian_name`, text, required): Please enter your name.
* **Email Address** (`email_address`, email, required): Enter your email address.
* **Phone Number** (`phone_number`, text, required): Enter your phone number.
* **Preferred Contact Method** (`preferred_contact_method`, select_one, optional): Choose your preferred contact method (Phone, Email, Text Message, or Either).
* **Number of Children** (`number_of_children`, number, required): Enter the number of children that will be having their car seats inspected.
* **Child 1 - Age** (`child_1_age`, number, required): Enter the age of the first child.
* **Child 1 - Weight** (`child_1_weight`, number, required): Enter the weight of the first child in pounds.
* **Child 1 - Height** (`child_1_height`, number, optional): Enter the height of the first child in inches.
* **Child 1 - Car Seat Type** (`car_seat_type_1`, select_one, required): Choose the type of car seat for the first child (Infant Rear-Facing, Convertible Rear-Facing, Forward-Facing, Booster Seat, Combination, or Other).
* **Child 1 - Car Seat Brand and Model** (`car_seat_brand_model_1`, text, optional): Enter the brand and model of the first child's car seat.
* **Child 2 - Age** (`child_2_age`, number, optional): Enter the age of the second child.
* **Child 2 - Weight** (`child_2_weight`, number, optional): Enter the weight of the second child in pounds.
* **Child 2 - Car Seat Type** (`car_seat_type_2`, select_one, optional): Choose the type of car seat for the second child (Infant Rear-Facing, Convertible Rear-Facing, Forward-Facing, Booster Seat, Combination, or Other).
* **Vehicle Year, Make, Model** (`vehicle_make_model`, text, required): Enter the year, make, and model of the vehicle.
* **Vehicle Color** (`vehicle_color`, text, optional): Enter the color of the vehicle.
* **Preferred Appointment Date** (`preferred_appointment_date`, date, required): Choose a preferred appointment date.
* **Preferred Appointment Time** (`preferred_appointment_time`, time, required): Choose a preferred appointment time.
* **Alternative Appointment Dates** (`alternative_dates`, text, optional): If the preferred date is not available, enter alternative dates.
* **Appointment Location Preference** (`appointment_location`, select_one, required): Choose a preferred location for the appointment (Our Facility, Your Home, Your Vehicle Location, Mobile Service, or Online Consultation).
* **Appointment Address (if applicable)** (`appointment_address`, text, optional): Enter the address where the appointment will take place (if it's not at our facility).
* **Specific Concerns or Questions** (`concerns_questions`, text, optional): Enter any specific concerns or questions you may have.
* **Has this Car Seat Been Inspected Before?** (`previous_inspection`, select_one, optional): If the car seat has been inspected before, choose 'True'. Otherwise, choose 'False' or 'Not Sure'.
* **Any Current Issues with the Car Seat?** (`seat_issues`, text, optional): Enter any current issues with the car seat.
* **Assistance Needed** (`assistance_needed`, select_multiple, optional): Select all that apply for assistance needed (Installation Help, Correct Harness Adjustment, Recline Angle Check, Seat Positioning, Replacement Recommendations, Vehicle Safety Assessment).
* **Parent Availability** (`parent_availability`, text, optional): Enter the days and times you are available for the appointment.
