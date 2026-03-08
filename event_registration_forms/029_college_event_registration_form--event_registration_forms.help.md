# College Event Registration Form - Help Guide
## Purpose
This form is for college students to register for events hosted by their college or university. It's essential to provide accurate information to ensure proper processing of your registration.

## How To Complete This Form
1. **First Name** (`student_first_name`, text, required) - Enter your first name as it appears on your official documents.
2. **Last Name** (`student_last_name`, text, required) - Enter your last name as it appears on your official documents.
3. **Email Address** (`student_email`, email, required) - Enter your college email address.
4. **Phone Number** (`student_phone`, text, required) - Enter your college-provided phone number or a valid phone number where you can be reached.
5. **College or University Name** (`college_name`, text, required) - Enter the name of your institution.
6. **Department or School** (`department`, text, required) - Enter the name of your department or school.
7. **Year in School** (`year_in_school`, select_one, required) - Select your current academic year.
8. **Program or Major** (`program_major`, text, required) - Enter your major or program name.
9. **Event Name** (`event_name`, text, required) - Enter the name of the event you're registering for.
10. **Event Date** (`event_date`, date, required) - Enter the date of the event.
11. **Event Start Time** (`event_time`, time, required) - Enter the start time of the event.
12. **Type of Attendance** (`attendance_type`, select_one, required) - Select the type of attendance for your event (Full Day, Partial Day, Virtual, In-Person, Hybrid).
13. **Activities or Sessions Attending** (`activities_attending`, select_multiple, required) - Select all the activities or sessions you plan to attend.
14. **Dietary Restrictions** (`dietary_restrictions`, select_multiple, required) - Select any dietary restrictions you have (None, Vegetarian, Vegan, Gluten-free, Kosher, Halal, Other).
15. **Other Dietary Restrictions** (`dietary_other`, text, optional) - Enter any other dietary restrictions not listed above.
16. **Accessibility or Accommodation Needs** (`accessibility_needs`, select_multiple, required) - Select any accessibility needs you have (None, Wheelchair Access, Interpreter Services, Closed Captioning, Mobility Assistance, Other).
17. **Other Accommodation Details** (`accessibility_other`, text, optional) - Enter any other accommodation details not listed above.
18. **T-Shirt Size Preference** (`tshirt_size`, select_one, optional) - Select your preferred t-shirt size.
19. **Parking Needed** (`parking_required`, select_one, required) - Select if you need parking.
20. **Will You Be Bringing a Guest?** (`guest_attending`, select_one, required) - Select yes or no for guest attendance.
21. **Guest Details** (`guest_details`, text, optional) - Enter guest name and email if attending.
22. **What Do You Hope to Gain From This Event?** (`event_goals`, text, required) - Enter your expectations and goals for the event.
23. **Preferred Communication Method** (`communication_preferences`, select_one, required) - Select your preferred communication method (Email, Phone, Text Message).
24. **I Agree to the Event Terms and Conditions** (`agreement_and_consent`, select_one, required) - Select yes or no to agree to the terms and conditions.

## Field-by-Field Explanation
- **First Name**: Enter your first name as it appears on your official documents.
  • Type: `text`
  • Required: `True`
  • Hint: This is your first name.
- **Last Name**: Enter your last name as it appears on your official documents.
  • Type: `text`
  • Required: `True`
  • Hint: This is your last name.
- **Email Address**: Enter your college email address.
  • Type: `email`
  • Required: `True`
  • Hint: Please use your college email address for communication.
- **Phone Number**: Enter your college-provided phone number or a valid phone number where you can be reached.
  • Type: `text`
  • Required: `True`
  • Hint: Ensure it's a valid phone number where you can be contacted.
- **College or University Name**: Enter the name of your institution.
  • Type: `text`
  • Required: `True`
  • Hint: This is your college or university name.
- **Department or School**: Enter the name of your department or school.
  • Type: `text`
  • Required: `True`
  • Hint: This is your department or school name.
- **Year in School**: Select your current academic year.
  • Type: `select_one`
  • Required: `True`
  • Hint: Choose your current academic year.
- **Program or Major**: Enter your major or program name.
  • Type: `text`
  • Required: `True`
  • Hint: Enter your major or program name.
- **Event Name**: Enter the name of the event you're registering for.
  • Type: `text`
  • Required: `True`
  • Hint: Enter the event name correctly.
- **Event Date**: Enter the date of the event.
  • Type: `date`
  • Required: `True`
  • Hint: Enter the event date correctly.
- **Event Start Time**: Enter the start time of the event.
  • Type: `time`
  • Required: `True`
  • Hint: Enter the event start time correctly.
- **Type of Attendance**: Select the type of attendance for your event.
  • Type: `select_one`
  • Required: `True`
  • Hint: Choose your type of attendance.
- **Activities or Sessions Attending**: Select all the activities or sessions you plan to attend.
  • Type: `select_multiple`
  • Required: `True`
  • Hint: Choose all sessions you plan to attend.
- **Dietary Restrictions**: Select any dietary restrictions you have.
  • Type: `select_multiple`
  • Required: `True`
  • Hint: Choose your dietary restrictions.
- **Other Dietary Restrictions**: Enter any other dietary restrictions not listed above.
  • Type: `text`
  • Optional: `False`
  • Hint: Enter any other dietary restrictions.
- **Accessibility or Accommodation Needs**: Select any accessibility needs you have.
  • Type: `select_multiple`
  • Required: `True`
  • Hint: Choose your accessibility needs.
- **Other Accommodation Details**: Enter any other accommodation details not listed above.
  • Type: `text`
  • Optional: `False`
  • Hint: Enter any other accommodation details.
- **T-Shirt Size Preference**: Select your preferred t-shirt size.
  • Type: `select_one`
  • Optional: `False`
  • Hint: Choose your preferred t-shirt size.
- **Parking Needed**: Select if you need parking.
  • Type: `select_one`
  • Required: `True`
  • Hint: Choose whether you need parking.
- **Will You Be Bringing a Guest?**: Select yes or no for guest attendance.
  • Type: `select_one`
  • Required: `True`
  • Hint: Choose yes or no for guest attendance.
- **Guest Details**: Enter guest name and email if attending.
  • Type: `text`
  • Optional: `False`
  • Hint: Enter guest details if applicable.
- **What Do You Hope to Gain From This Event?**: Enter your expectations and goals for the event.
  • Type: `text`
  • Required: `True`
  • Hint: Enter your expectations and goals.
- **Preferred Communication Method**: Select your preferred communication method.
  • Type: `select_one`
  • Required: `True`
  • Hint: Choose your preferred communication method.
- **I Agree to the Event Terms and Conditions**: Select yes or no to agree to the terms and conditions.
  • Type: `select_one`
  • Required: `True`
  • Hint: Agree or disagree to the event terms and conditions.

## Tips
- Please fill in all required fields accurately and honestly.
- Be precise with your event name, date, and start time.
- Choose your attendance type and dietary restrictions carefully.
- If you have any accessibility needs, ensure to specify them correctly.
- If you're attending with a guest, provide their name and email accurately.
- Review the event terms and conditions before agreeing.
- If you have any questions or concerns, reach out to the event organizers for clarification.
- This form is for college students only, so please ensure you're registered with your college or university before completing this form.
