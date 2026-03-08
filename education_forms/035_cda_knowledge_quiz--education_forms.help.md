<thinking>
CDA Knowledge Quiz form is designed to assess an individual's understanding of the Clinical Document Architecture (CDA) standards and their implementation. 
- Check that you are in the correct context to fill out the form.
- Verify that you are not repeating a quiz.
</thinking>
# CDA Knowledge Quiz - Help Guide
## Purpose
This form is a quiz designed to test your knowledge of the Clinical Document Architecture (CDA) standards and their implementation.

## How To Complete This Form
1. Fill out the form in its entirety. 
2. Answer each question carefully, as each one is critical to the assessment of your knowledge.
3. Submit your answers when you complete the form.

## Field-by-Field Explanation

* **Participant Full Name** (`participant_full_name`, text, required): Enter your full name as it appears on your official documents.
* **Your Professional Role** (`professional_role_cda`, select_one, required): Select your professional role from the provided options:
	+ Health IT Developer
	+ Clinical Analyst
	+ Integration Engineer
	+ Health Information Manager
	+ Student/Researcher
* **CDA Level 1 primarily consists of** (`cda_level_check`, select_one, required): Select the most accurate answer:
	+ Fully structured XML body only
	+ Non-XML body or unstructured text
	+ Header only with no body content
* **Which component is REQUIRED in every CDA Header?** (`cda_header_components`, select_one, required): Select the most accurate answer:
	+ LegalAuthenticator
	+ ConfidentialityCode
	+ RealmCode
	+ LanguageCode
* **What is the root element of a CDA document?** (`xml_root_element`, select_one, required): Select the most accurate answer:
	+ HL7Document
	+ ClinicalDocument
	+ CDADocument
	+ MedicalRecord
* **What does OID stand for in the context of CDA?** (`oid_definition`, text, required): Enter your answer in text form.
* **The Continuity of Care Document (CCD) is a specific implementation of CDA** (`ccd_vs_cda`, select_one, required): Select the most accurate answer:
	+ True
	+ False
* **A structured CDA body consists of which elements?** (`cda_body_structure`, select_multiple, required): Select all that apply:
	+ Section
	+ Entry
	+ Observation
	+ NarrativeBlock
* **Which coding system is most commonly used for CDA Section codes?** (`loinc_coding_usage`, select_one, required): Select the most accurate answer:
	+ ICD-10
	+ SNOMED-CT
	+ LOINC
	+ CPT
* **CDA is based on which HL7 Model?** (`rim_relationship`, select_one, required): Select the most accurate answer:
	+ Reference Information Model (RIM)
	+ Clinical Information Model (CIM)
	+ Fast Healthcare Model (FHM)
* **CDA is a part of the HL7 Version 3 family of standards** (`importance_of_v3`, select_one, required): Select the most accurate answer:
	+ True
	+ False
* **Years of experience working with HL7 standards** (`participant_experience_level`, number, required): Enter your years of experience working with HL7 standards.
* **Any comments or feedback on this quiz or training session?** (`quiz_feedback_request`, text, optional): Enter any comments or feedback you may have.
* **Quiz Submission Date** (`submission_date_cda_quiz`, date, required): Enter the date you submitted the quiz.
