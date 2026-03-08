# Backstage Access Booking Form - Help Guide
## Purpose
The Backstage Access Booking Form is a tool used by event organizers to manage requests for backstage access during events. This form is designed to gather necessary information from individuals or groups requesting access to the backstage area.

## How To Complete This Form
To complete this form accurately and efficiently, please follow these steps:
1. Fill out the required fields with your information and the details of your request.
2. Select the appropriate options for your access type, duration, and purpose of visit.
3. If necessary, list any special requests or equipment you will bring.
4. Review and agree to the terms and conditions before submitting the form.

## Field-by-Field Explanation
* **1. Full Name** (`requester_name`, text, required): Your first and last name.
* **2. Email Address** (`email`, email, required): Your email address for booking confirmation and further communication.
* **3. Phone Number** (`phone`, text, required): Your contact number in case of emergencies.
* **4. Company or Organization** (`company_organization`, text, required): The name of your media outlet or organization.
* **5. Role or Title** (`role_title`, text, required): Your position or title.
* **6. Event Name** (`event_name`, text, required): The name of the event you are requesting access for.
* **7. Event Date** (`event_date`, date, required): The date of the event.
* **8. Venue Name** (`venue_name`, text, required): The location of the event.
* **9. Type of Access Requested** (`access_type`, select_one, required): Select the level of access you need (e.g. Full backstage, Meet and Greet only, etc.).
* **10. Access Duration** (`access_duration`, select_one, required): Choose how long you need access for (e.g. Pre-show only, Post-show only, etc.).
* **11. Specific Time Window** (`access_time`, text, optional): If you've selected a specific time window for access, provide the details here.
* **12. Number of People** (`number_of_people`, number, required): The total number of people needing access.
* **13. Names of All Attendees** (`attendee_names`, text, required): List the full names of all people needing access.
* **14. Purpose of Backstage Visit** (`purpose_of_visit`, select_one, required): Choose why you need access (e.g. Media interview, Photography, etc.).
* **15. Media Outlet or Publication** (`media_outlet`, text, optional): Where the content will appear.
* **16. Interview Request** (`interview_request`, select_one, optional): Are you requesting an interview?
* **17. Photography Allowed** (`photography_allowed`, select_one, required): Are you allowed to take photos?
* **18. Equipment You Will Bring** (`equipment_list`, text, optional): List any cameras, recording devices, etc. you will bring.
* **19. Special Requests** (`special_requests`, text, optional): Any specific needs or requests you have.
* **20. Dietary Requirements** (`dietary_requirements`, text, optional): If you have specific dietary requirements, list them here.
* **21. Emergency Contact Name and Phone** (`emergency_contact`, text, required): In case of an emergency, provide a contact name and number.
* **22. Terms and Conditions Agreement** (`terms_agreement`, select_one, required): Agree or disagree to the terms and conditions of the backstage area.
* **23. Liability Waiver** (`liability_waiver`, select_one, required): Release event organizers from liability.
* **24. Booking Date** (`booking_date`, date, required): The date you are making this request.
