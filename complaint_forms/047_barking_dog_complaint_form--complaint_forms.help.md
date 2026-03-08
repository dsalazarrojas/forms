# Barking Dog Complaint Form - Help Guide

## Purpose

The Barking Dog Complaint Form is designed to gather information about excessive barking dog complaints reported by residents of the community. This form helps animal control officers investigate and address the issue effectively. Please complete this form carefully to provide accurate information about the situation.

## How To Complete This Form

*   Fill out the form completely and accurately, as it will be used to investigate and address the complaint.
*   Enter your contact information so that animal control officers can follow up with you.
*   Provide as much detail as possible about the address and the barking dog.
*   Describe the impact of the barking on your daily life.

## Field-by-Field Explanation

*   **Your Full Name** (`complainant_name`, text, required): Enter your name as it is to be used by animal control officers.
*   **Your Residential Address** (`complainant_address`, text, required): Enter the address where you are experiencing the problem.
*   **Phone Number** (`complainant_phone`, text, required): Enter your phone number so that animal control officers can contact you.
*   **Address of the Barking Dog** (`incident_address`, text, required): Provide as much detail as possible about the address where the barking dog is located.
*   **Typical Duration of Barking** (`barking_duration`, select_one, required): Select the frequency of barking (Continuous, Intermittent, Specific times, or Only when owner is away).
*   **Frequency of Barking** (`barking_frequency`, select_one, required): Select the number of days per week the barking occurs (Every day, 3-5 days per week, Weekends only, or Occasional).
*   **Times of Day Barking Occurs** (`barking_times`, select_multiple, required): Select all the times of day when the barking occurs (Early Morning, Daytime, Evening, Late Night).
*   **Description of the Dog(s)** (`dog_description`, text, optional): Provide a description of the dog(s) (e.g., Small brown terrier, Large black lab, etc.).
*   **Dog Owner Name (if known)** (`owner_name`, text, optional): If you know the owner's name, enter it here.
*   **Have you attempted to discuss this with the owner?** (`prior_communication`, select_one, required): Select how you have interacted with the owner (Yes - Spoke in person, Yes - Left a note, No - Prefer not to contact directly, or No - Unable to locate owner).
*   **Impact of Barking on You** (`impact_description`, text, required): Describe the impact of the barking on your daily life (e.g., Loss of sleep, inability to work from home, etc.).
*   **Have you maintained a barking log (dates/times)?** (`bark_log_maintained`, select_one, required): Select whether you have kept a log of the barking (Yes - Log is ready for submission, No - I will start one).
*   **Additional Witnesses** (`witness_header`, text, optional): List any other neighbors who can verify the complaint.
*   **Date of Complaint** (`submission_date`, date, required): Enter the date you are submitting this complaint.
*   **Certification** (`legal_acknowledgement`, select_one, required): Certify that this complaint is true and accurate (I Agree and Certify or Other).
