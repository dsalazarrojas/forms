# Continuing Education Enrollment Form - Help Guide

## Purpose
This form is designed for students to enroll in continuing education courses offered by the institution. It collects relevant information for course enrollment, payment, and authorization purposes.

## How To Complete This Form
1. Please fill in your student information, including Student ID Number, Student Full Name, and Preferred Email for Course Material.
2. Select the term for which you wish to enroll.
3. Choose the courses you wish to enroll in, considering any prerequisites required.
4. Enter your estimated total tuition fee.
5. Select your preferred payment method.
6. Confirm if your employer is paying for this course.
7. Confirm your agreement with the tuition refund policy and terms.
8. Provide the date of your enrollment.
9. Sign the form digitally with your full name.

## Field-by-Field Explanation

- **Student ID Number (If known)** (`student_id_number`, text, optional): This field is for students who are already enrolled in the institution or wish to identify themselves. If you do not have a student ID number, you may skip this field.
- **Student Full Name** (`student_full_name`, text, required): This is your full name as per your student record.
- **Preferred Email for Course Material** (`contact_email_edu`, email, required): This is the email address we will use for sending course materials and updates.
- **Enrollment Term** (`enrollment_term`, select_one, required): Choose the term for which you wish to enroll (e.g., Spring 2026, Summer 2026, Fall 2026, Winter 2026).
- **Select Course(s)** (`courses_to_enroll`, select_multiple, required): Choose one or more of the listed courses to enroll in. Please note that some courses may have prerequisites that you must satisfy before enrolling.
  - **CE-101 - Principles of Digital Marketing**: This course covers the fundamentals of digital marketing.
  - **CE-205 - Advanced Project Management**: This course delves into advanced project management techniques.
  - **CE-310 - Python for Data Science**: This course introduces Python for data science applications.
  - **CE-415 - Leadership in Global Teams**: This course explores leadership in global teams.
  - **CE-500 - Professional Ethics**: This course examines professional ethics.
- **Estimated Total Tuition (USD)** (`total_tuition_estimated`, number, required): Enter the estimated total tuition fee for the selected courses. Please refer to the course catalog for exact pricing.
- **Preferred Payment Method** (`payment_method_preference`, select_one, required): Choose how you wish to pay for your course enrollment:
  - **Credit/Debit Card (Online)**: Use your credit or debit card to pay online.
  - **Electronic Bank Transfer**: Transfer funds electronically from your bank account.
  - **Employer Direct Billing**: Your employer pays for this course directly.
  - **Scholarship/Grant Coverage**: The course is covered by a scholarship or grant.
- **Is your employer paying for this course** (`employer_reimbursement_program`, select_one, required): Confirm if your employer is paying for this course:
  - **Yes - Reimbursement**: Your employer reimburses you for this course.
  - **Yes - Direct Bill**: Your employer pays directly for this course.
  - **No - Self Funded**: You are paying for this course yourself.
- **I agree to the tuition refund policy and terms** (`terms_and_conditions_agreed`, select_one, required): Confirm your agreement with the tuition refund policy and terms.
- **Date of Enrollment** (`enrollment_date`, date, required): Provide the date you are enrolling in the course.
- **Student Digital Signature** (`student_signature`, text, required): Type your full name as it appears on your student record for digital signature.
