# School Year Itinerary Survey - Help Guide

## Purpose
The School Year Itinerary Survey is a form designed to gather information from students about their school year plans, interests, and accomplishments. This survey helps students reflect on their goals and activities for the upcoming school year and provides a snapshot of their interests and achievements.

## How To Complete This Form
1. Start by filling out the student information page with your name, email, and other contact details.
2. Select the correct school year you are currently in.
3. On the courses page, choose all the courses you plan to take this school year.
4. Describe any extracurricular activities you are involved in, and provide details about your academic plans.
5. On the emergency contact page, provide your emergency contact's name, phone number, and relationship.
6. Select your emergency contact's relationship to you (parent, guardian, sibling, or other).
7. If you have more than three accomplishments, select them on the more accomplishments page.
8. On the student interests page, select your top interests.
9. Add any additional comments or notes about yourself on the comments page.

## Field-by-Field Explanation

* **Student Information** (`student_information`, text, required): This is where you'll enter your name, email, and other contact details.
* **School Year** (`school_year`, select_one, required): Select the correct school year you are currently in.
* **Courses** (`courses`, select_multiple, required): Choose all the courses you plan to take this school year.
* **Activities** (`activities`, text, required): Describe any extracurricular activities you are involved in.
* **Academic Plans** (`academic_plans`, note, required): Describe your academic plans for the upcoming school year.
* **Contact Information** (`contact_information`, text, required): Enter your contact information to help us reach you.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Address** (`address`, text, required): Enter your address.
* **Emergency Contact** (`emergency_contact`, text, required): Provide your emergency contact's name.
* **Relationship** (`emergency_contact_relationship`, select_one, required): Select your emergency contact's relationship to you.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter your emergency contact's phone number.
* **Emergency Contact Email** (`emergency_contact_email`, email, required): Enter your emergency contact's email address.
* **Emergency Contact Address** (`emergency_contact_address`, text, required): Enter your emergency contact's address.
* **Emergency Contact Notes** (`emergency_contact_notes`, text, required): Add any additional notes about your emergency contact.
* **Student Accomplishments** (`student_accomplishments`, text, required): Describe any accomplishments you've achieved.
* **Accomplishment 1** (`student_accomplishment_1`, note, required): Describe the first accomplishment you've achieved.
* **Accomplishment 2** (`student_accomplishment_2`, note, required): Describe the second accomplishment you've achieved.
* **Accomplishment 3** (`student_accomplishment_3`, note, required): Describe the third accomplishment you've achieved.
* **More Accomplishments** (`student_accomplishments_4`, select_multiple, required): Select any additional accomplishments you've achieved.
* **Student Interests** (`student_interests`, text, required): Describe your student interests.
* **Interest 1** (`student_interest_1`, select_one, required): Select your primary student interest.
* **More Interests** (`student_interests_2`, select_multiple, required): Select any additional student interests.
* **Submission** (`submission`, text, required): Add any additional comments or notes about yourself.
* **Comments** (`comments`, text, required): Add any additional comments or notes about yourself.
