# CPR Certification Check Out Form - Help Guide
## Purpose
The CPR Certification Check Out Form is designed for participants who have completed a CPR course and want to request their certification. This form is used to verify the participant's information, certification details, and payment processing.

## How To Complete This Form
- Fill in your Participant Full Name in the Participant Full Name field.
- Enter your Email Address in the format `example@example.com`.
- Type your phone number in the Phone Number field.
- If required, enter your Date of Birth for age verification.
- Select the type of CPR course you completed from the list of options in the CPR Course Type field.
- Enter the date you completed the course in the Course Date Completed field.
- Enter the name of your instructor who taught the course in the Instructor Name field.
- If applicable, enter your CPR Skills Test Score and Written Exam Score.
- Select whether you passed or need to retake the course in the Course Passed field.
- Choose the type of certification you want (Digital, Printed, ID card, or All of the above) in the Type of Certification Requested field.
- Enter your Mailing Address and City, State, ZIP Code for physical certificates.
- Fill in the Certification Fee Amount in dollars.
- Select your payment method (Credit card, Debit card, Check, Money order, or Cash) in the Payment Method field.
- Choose your payment status (Paid, Unpaid, Pending) in the Payment Status field.
- If you're interested in additional courses, select True or False in the Interested in Additional CPR Courses field.
- Finally, add any Additional Notes or Comments in the Additional Notes or Comments field.

## Field-by-Field Explanation

* **Participant Full Name** (`participant_name`, text, required): Enter your full name as it appears on your identification.
* **Email Address** (`email`, email, required): Enter your email address in the format `example@example.com`.
* **Phone Number** (`phone`, text, required): Type your phone number.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth for age verification.
* **Organization or Institution** (`organization`, text, optional): If you're affiliated with a company or school, enter their name.
* **CPR Course Type** (`course_type`, select_one, required): Select the type of CPR course you completed from the options provided.
* **Course Date Completed** (`course_date`, date, required): Enter the date you completed the course.
* **Instructor Name** (`instructor_name`, text, required): Enter the name of your instructor who taught the course.
* **CPR Skills Test Score** (`testing_scores`, text, optional): If applicable, enter your CPR skills test score.
* **Written Exam Score** (`written_exam_score`, text, optional): If applicable, enter your written exam score.
* **Course Passed** (`course_passed`, select_one, required): Select whether you passed or need to retake the course.
* **Type of Certification Requested** (`certification_type`, select_one, required): Choose the type of certification you want (Digital, Printed, ID card, or All of the above).
* **Mailing Address** (`address`, text, optional): Enter your mailing address for physical certificates.
* **City, State, ZIP Code** (`city_state_zip`, text, optional): Enter your city, state, and ZIP code for physical certificates.
* **Certification Fee Amount** (`certification_fee`, number, required): Fill in the certification fee amount in dollars.
* **Payment Method** (`payment_method`, select_one, required): Select your payment method (Credit card, Debit card, Check, Money order, or Cash).
* **Payment Status** (`payment_status`, select_one, required): Choose your payment status (Paid, Unpaid, Pending).
* **Certification Renewal Date** (`renewal_date`, date, optional): Enter the certification renewal date.
* **Interested in Additional CPR Courses** (`additional_courses`, select_one, optional): Select True or False if you're interested in additional courses.
* **Additional Notes or Comments** (`notes`, text, optional): Enter any additional notes or comments.
