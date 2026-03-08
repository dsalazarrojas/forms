<thinking>
This form is likely designed to gather data on the prevalence of canine heartworms within a particular region, and to collect information on the number of tests conducted, number of positive cases, and diagnostic methods used. This data can be useful for public health professionals and veterinarians to track and manage heartworm infections in dogs. 
</thinking>

# Canine Heartworm Prevalence Survey - Help Guide
## Purpose
The Canine Heartworm Prevalence Survey is a tool designed to gather data on the prevalence of canine heartworm infections. The data collected will help public health professionals and veterinarians track and manage heartworm infections in dogs.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your clinic's name in the "Clinic name" field.
2. Enter your name as a veterinarian in the "Veterinarian name" field.
3. Provide a valid email address for follow up in the "Contact email" field.
4. Enter your phone number in the "Contact phone" field (optional).
5. Select the date the data covers in the "Report date" field.
6. Enter the number of dogs tested during the reporting period in the "Number of dogs tested" field.
7. Enter the number of positive heartworm cases in the "Number of positive cases" field.
8. Select all diagnostic methods used to test for heartworms in the "Diagnostic methods used" field.
9. Select all common prevention practices reported by clinic staff or owners in the "Prevention practices reported" field (optional).
10. Select the geographic region or county where the data was collected in the "Region" field.
11. Enter any additional observations or comments in the "Additional notes" field (optional).

## Field-by-Field Explanation

* **-- Personal Information --** (`section_personal_information`, `note`, required: false): This is a title section that introduces the survey.
* **Clinic name** (`clinic_name`, `text`, required: true): Enter the official name of your clinic or hospital.
* **Veterinarian name** (`veterinarian_name`, `text`, required: true): Enter your full name as a veterinarian.
* **Contact email** (`contact_email`, `email`, required: true): Provide a valid email address for follow up.
* **Contact phone** (`contact_phone`, `text`, required: false): Enter your clinic's phone number for further contact.
* **Report date** (`report_date`, `date`, required: true): Select the date the data covers.
* **Number of dogs tested** (`number_tested`, `number`, required: true): Enter the number of dogs tested during the reporting period.
* **Number of positive cases** (`number_positive`, `number`, required: true): Enter the number of positive heartworm cases.
* **Diagnostic methods used** (`diagnostic_methods`, `select_multiple`, required: true): Select all diagnostic methods used to test for heartworms, including Antigen test, Microfilaria test, PCR, Necropsy, and Other.
* **Prevention practices reported** (`prevention_practices`, `select_multiple`, required: false): Select all common prevention practices reported by your clinic, including Monthly preventives, Annual injection, Topical application, Owner education, and None reported.
* **Region** (`region`, `select_one`, required: true): Select the geographic region or county where the data was collected, which may be North, South, East, West, or Central.
* **Additional notes** (`additional_notes`, `text`, required: false): Enter any additional observations or comments about the data collected.
