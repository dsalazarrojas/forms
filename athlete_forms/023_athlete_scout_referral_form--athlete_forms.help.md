<thinking>
This guide will help users understand the purpose and usage of the Athlete Scout Referral Form. The form is designed to collect relevant information about an athlete's skills and abilities, providing a detailed assessment of their potential for evaluation. Users should ensure they complete the form for the right purpose and with the athlete's consent. Referrals should not be duplicated, as this can lead to unnecessary evaluations and potential confusion.

This form is intended for individuals who wish to refer an athlete for evaluation. It gathers information from the referrer, including their contact details and relationship with the athlete, as well as the athlete's details and performance data. The form is essential for the athlete development process and should be completed accurately and thoroughly.
</thinking>

# Athlete Scout Referral Form - Help Guide
## Purpose
The Athlete Scout Referral Form is designed to collect information about an athlete's skills, abilities, and potential for evaluation. This form is used to identify promising athletes and provide them with guidance and resources for their development.

## How To Complete This Form
1. Fill out your personal details: Start by entering your name, role in relation to the athlete, and contact email and phone number.
2. Enter the athlete's details: Provide the athlete's full name, email, and phone number (if available).
3. Complete the athlete's performance section: Enter their date of birth, school, grade level, primary sport, position, height, and weight.
4. List their strengths and achievements: Describe the athlete's key strengths and list any notable achievements.
5. Assess their potential: Provide a character assessment of the athlete and estimate their competition and projected potential level.
6. Confirm your referral: Check the urgency of the evaluation and indicate whether you have informed the athlete about the referral.

## Field-by-Field Explanation

### 1. **Your Name** (`referrer_name`, `text`, `required`: `true`)
Enter your name, which will be used as the referrer's name for the evaluation process.

### 2. **Your Role** (`referrer_role`, `select_one`, `required`: `true`)
Select your relationship with the athlete from the options: Coach, Teacher, Parent or Guardian, Teammate, Friend, Scout, or Other.

### 3. **Your Email** (`referrer_email`, `email`, `required`: `true`)
Enter your contact email, which will be used for further communication about the evaluation process.

### 4. **Your Phone** (`referrer_phone`, `text`, `required`: `true`)
Enter your contact phone number, which will be used for follow-up questions or additional information.

### 5. **Athlete Full Name** (`athlete_name`, `text`, `required`: `true`)
Enter the athlete's full name, including first and last names.

### 6. **Athlete Email** (`athlete_email`, `email`, `required`: `false`)
Enter the athlete's email, if available.

### 7. **Athlete Phone** (`athlete_phone`, `text`, `required`: `false`)
Enter the athlete's phone number, if available.

### 8. **Athlete Date of Birth** (`athlete_date_of_birth`, `date`, `required`: `true`)
Enter the athlete's date of birth in MM-DD-YYYY format.

### 9. **Athlete School** (`athlete_school`, `text`, `required`: `true`)
Enter the athlete's current school.

### 10. **Athlete Grade Level** (`athlete_grade`, `select_one`, `required`: `true`)
Select the athlete's current grade level from the options: 9th Grade, 10th Grade, 11th Grade, 12th Grade, College, or Post-Graduate.

### 11. **Sport** (`sport`, `select_one`, `required`: `true`)
Select the athlete's primary sport from the options: Football, Basketball, Soccer, Track and Field, Swimming, Volleyball, Baseball, Softball, Tennis, or Other.

### 12. **Primary Position** (`position`, `text`, `required`: `true`)
Enter the athlete's primary position played.

### 13. **Height** (`height`, `text`, `required`: `true`)
Enter the athlete's height in feet and inches or cm.

### 14. **Weight** (`weight`, `number`, `required`: `true`)
Enter the athlete's weight in pounds or kg.

### 15. **Current Team** (`team_name`, `text`, `required`: `true`)
Enter the athlete's current team, whether school or club.

### 16. **Coach Name** (`coach_name`, `text`, `required`: `true`)
Enter the athlete's current coach's name.

### 17. **Coach Contact Information** (`coach_contact`, `text`, `required`: `false`)
Enter the coach's contact email or phone number.

### 18. **Reason for Referral** (`referral_reason`, `text`, `required`: `true`)
Describe why you are referring this athlete.

### 19. **Athlete Strengths** (`athlete_strengths`, `text`, `required`: `true`)
List the athlete's key strengths.

### 20. **Athletic Achievements** (`athletic_achievements`, `text`, `required`: `true`)
List any notable achievements, awards, or honors.

### 21. **Relevant Stats** (`stats_or_numbers`, `text`, `required`: `false`)
Enter any key statistics or performance numbers.

### 22. **Academic Information** (`academic_info`, `text`, `required`: `false`)
Enter the athlete's GPA, test scores, or academic honors.

### 23. **Character Assessment** (`character_assessment`, `text`, `required`: `true`)
Describe the athlete's work ethic, leadership qualities, and teamwork.

### 24. **Video Footage Available** (`video_available`, `select_one`, `required`: `true`)
Select whether you have available video footage of the athlete.

### 25. **Video Link** (`video_link`, `text`, `required`: `false`)
Provide a link to the video footage, if available.

### 26. **Competition Level Observed** (`competition_level`, `select_one`, `required`: `true`)
Select the level at which you have observed the athlete compete from the options: High School Varsity, Club Level, Regional, State, National, or International.

### 27. **Projected Potential Level** (`potential_level`, `select_one`, `required`: `true`)
Estimate the athlete's potential competition level from the options: College Division III, College Division II, College Division I, Professional, Olympic, or Too Early to Tell.

### 28. **Referral Urgency** (`urgency`, `select_one`, `required`: `true`)
Select the urgency of the evaluation from the options: Immediate Attention, Within This Month, This Season, or No Rush.

### 29. **Additional Comments** (`additional_comments`, `text`, `required`: `false`)
Enter any other relevant information.

### 30. **Permission to Contact Athlete** (`permission_to_contact`, `select_one`, `required`: `true`)
Indicate whether you have informed the athlete about this referral from the options: Yes - They Are Aware, Yes - Please Contact Them, or No - Contact Me First.
