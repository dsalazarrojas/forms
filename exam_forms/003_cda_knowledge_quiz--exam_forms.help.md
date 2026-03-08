# CDA Knowledge Quiz - Help Guide
## Purpose
The CDA Knowledge Quiz is a multiple-choice quiz designed to test your knowledge of Clinical Document Architecture (CDA). The quiz consists of 10 questions that cover various aspects of CDA, including its purpose, underlying technology, document structure, and relationship with other standards like FHIR.

## How To Complete This Form
1. Fill out the form by selecting the correct answer for each question.
2. Make sure to answer every question, as some questions may have multiple correct answers.
3. Use the provided instructions for each question to help guide your selection.
4. When multiple selections are allowed, choose all applicable answers.

## Field-by-Field Explanation

* **Participant Name** (`participant_name`, text, required): Your full name, which will be used for quiz results delivery.
* **Email Address** (`email_address`, email, required): Your email address, which will be used for quiz results delivery.
* **Organization** (`organization`, text, optional): Your workplace or institution (optional).
* **Role** (`role`, select_one, required): Select your primary role, which is used to categorize your answers.
	+ Healthcare Provider
	+ IT Professional
	+ Healthcare Administrator
	+ Student
	+ Other
* **Quiz Instructions** (`quiz_instructions`, note, optional): This is a note field, not a question. It is meant to provide context and instructions for the quiz.
* **Question 1 - What does CDA stand for** (`question_1`, select_one, required): Select the correct expansion of CDA from the provided options.
	+ Clinical Document Architecture
	+ Clinical Data Analytics
	+ Certified Document Assessment
	+ Central Data Archive
* **Question 2 - Which organization developed CDA** (`question_2`, select_one, required): Select the correct organization behind CDA from the provided options.
	+ HL7 International
	+ DICOM
	+ IHE
	+ ISO
* **Question 3 - What is the primary purpose of CDA** (`question_3`, select_one, required): Select the main use case for CDA documents.
	+ Exchange of clinical documents
	+ Medical imaging storage
	+ Billing and claims processing
	+ Appointment scheduling
* **Question 4 - Which markup language is CDA based on** (`question_4`, select_one, required): Select the underlying technology of CDA.
	+ XML
	+ JSON
	+ HTML
	+ YAML
* **Question 5 - What is a CDA document header used for** (`question_5`, select_one, required): Select the purpose of the header section in a CDA document.
	+ Patient and document metadata
	+ Clinical observations only
	+ Medication lists
	+ Laboratory results
* **Question 6 - Which of these is a CDA document type** (`question_6`, select_one, required): Select the correct CDA document type from the provided options.
	+ Continuity of Care Document CCD
	+ Digital Imaging and Communications DICOM
	+ Fast Healthcare Interoperability Resources FHIR
	+ Health Level Seven HL7 v2
* **Question 7 - Can CDA documents be human readable** (`question_7`, select_one, required): Select whether CDA documents can be human readable.
	+ Yes always human and machine readable
	+ No machine readable only
	+ Only with special software
	+ Only in PDF format
* **Question 8 - What is the relationship between CDA and FHIR** (`question_8`, select_one, required): Select the relationship between CDA and FHIR.
	+ Both are HL7 standards for different use cases
	+ FHIR replaced CDA completely
	+ CDA is a subset of FHIR
	+ They are unrelated standards
* **Question 9 - Select all that apply - CDA document sections can contain** (`question_9`, select_multiple, required): Select all applicable answers for CDA document sections.
	+ Clinical notes
	+ Laboratory results
	+ Medications
	+ Allergies
	+ Vital signs
* **Question 10 - Why is CDA important for interoperability** (`question_10`, select_one, required): Select the main benefit of CDA for healthcare data exchange.
	+ Enables consistent document exchange between systems
	+ Reduces storage costs
	+ Speeds up network connections
	+ Eliminates need for databases
* **Confidence Level** (`confidence_level`, select_one, required): Select your confidence level in your answers.
	+ Very Confident
	+ Somewhat Confident
	+ Neutral
	+ Not Very Confident
	+ Not Confident At All
* **Additional Comments** (`additional_comments`, text, optional): Provide any feedback about the quiz content.

## Tips
* Make sure to answer every question, as some questions may have multiple correct answers.
* Be honest about your confidence level in your answers.
* Provide any feedback or comments you have about the quiz content.
