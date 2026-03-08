# Conservation Volunteer Check In Form - Help Guide
## Purpose

The Conservation Volunteer Check In Form is used to capture essential information from conservation volunteers, including check-in and check-out dates and times, personal details, project-specific information, and other relevant data.

## How To Complete This Form

1. Fill out all required fields, marked with an asterisk (\*) in the label.
2. Enter your Check-In Date and Check-In Time using the date and time input fields.
3. Provide your Full Name, Volunteer ID (if assigned), Contact Email, and Phone Number.
4. Select the Event or Project you are volunteering for.
5. Specify the Project Location where you will be working.
6. If applicable, select your Team Assignment and Site Supervisor's Name.
7. Choose your Volunteer Role for the day, which can be one of the listed options or Other if not listed.
8. If you selected Other, provide a brief description of your role.
9. Answer Yes or No questions regarding your first-time volunteer status, total volunteer hours, actual hours worked, waiver and photo release signing, and your health status.
10. Select how you got here, such as by personal vehicle, carpool, or public transit.
11. If you are interested in carpooling, select Yes to offer or need rides for future events.
12. Choose your preferred lunch type, if provided, and if you have any special dietary needs.
13. If a T-Shirt is provided, select your T-Shirt size.
14. List any special skills you can share with others.
15. Specify when you are available to volunteer again.
16. Answer Yes or No to whether you will refer others to volunteer.
17. Finally, enter the Departure Time and sign the form with your full name.

## Field-by-Field Explanation

* **Check-In Date** (`check_in_date`, date, required): Enter the date you are checking in for the volunteer session.
* **Check-In Time** (`check_in_time`, time, required): Enter the time you are checking in for the volunteer session.
* **Full Name** (`volunteer_name`, text, required): Enter your full name.
* **Volunteer ID** (`volunteer_id`, text, optional): If you have been assigned a Volunteer ID, enter it here.
* **Email Address** (`email`, email, required): Enter your contact email address.
* **Phone Number** (`phone`, text, required): Enter your contact phone number.
* **Event or Project** (`event_or_project`, text, required): Select the event or project you are volunteering for.
* **Project Location** (`project_location`, text, required): Enter the location where you will be working.
* **Team Assignment** (`team_assignment`, text, optional): If applicable, select your team assignment.
* **Site Supervisor** (`supervisor_name`, text, optional): If applicable, enter the name of your site supervisor.
* **Your Role Today** (`volunteer_role`, select_one, required): Select one of the listed volunteer roles or Other if not listed. If you selected Other, provide a brief description.
* **Other Role** (`volunteer_role_other`, text, optional): If you selected Other, enter a brief description of your role.
* **Is This Your First Time** (`first_time_volunteer`, select_one, required): Answer Yes or No to whether this is your first-time volunteer session.
* **Total Sessions Volunteered** (`total_sessions`, number, optional): Enter the total number of volunteer sessions you have completed, including this one.
* **Total Hours Volunteered** (`total_hours`, number, optional): Enter the total number of hours you have volunteered in the past.
* **Hours Planned Today** (`hours_today`, number, required): Enter the number of hours you plan to work today.
* **Did You Attend Safety Briefing** (`safety_briefing`, select_one, required): Answer Yes or No to whether you attended a safety briefing.
* **PPE Received** (`ppe_received`, select_multiple, required): Select the personal protective equipment (PPE) you received.
* **Are You Feeling Well Today** (`health_status`, select_one, required): Answer Yes or No to whether you are feeling well today.
* **Health Limitations** (`health_limitations`, text, optional): If you are not feeling well, provide any health limitations.
* **Waivers Signed** (`waivers_signed`, select_one, required): Answer Yes or No to whether you signed a waiver.
* **Photo Release Signed** (`photo_release_signed`, select_one, required): Answer Yes or No to whether you signed a photo release.
* **How Did You Get Here** (`transportation_method`, select_one, optional): Select how you got here, such as by personal vehicle or public transit.
* **Interested in Carpooling** (`carpool_interest`, select_one, optional): Answer Yes to offer or need rides for future events.
* **Lunch Preference** (`lunch_preference`, select_one, optional): Choose your preferred lunch type, if provided.
* **T-Shirt Size** (`t_shirt_size`, select_one, optional): If a T-Shirt is provided, select your T-Shirt size.
* **Special Skills to Share** (`skills_to_share`, text, optional): List any special skills you can share with others.
* **Next Availability** (`availability_next`, text, optional): Specify when you are available to volunteer again.
* **Will You Refer Others** (`referral_interest`, select_one, required): Answer Yes or No to whether you will refer others to volunteer.
* **Departure Time** (`check_out_time`, time, optional): Enter your departure time.
* **Actual Hours Worked** (`actual_hours`, number, optional): Enter the actual hours you worked today.
* **Your Signature** (`volunteer_signature`, text, required): Sign the form with your full name.
* **Supervisor Initials** (`supervisor_initials`, text, optional): Enter the supervisor's initials for administrative use.
* **Check-In Status** (`check_in_status`, select_one, required): Select your check-in status for administrative use.
