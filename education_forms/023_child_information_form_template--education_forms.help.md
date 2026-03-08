# Child Information Form Template - Help Guide
## Purpose
This form is designed to gather essential information about a child's basic details, family background, and emergency contact information. It is intended for parents or guardians to provide accurate and complete data to ensure effective communication and logistics for the program.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in the child's full name as it appears on their birth certificate.
2. Select the child's date of birth.
3. Select the child's gender.
4. If you would like to provide additional family background information, please enter the father or guardian's name.
5. If you would like to provide additional family background information, please enter the mother or guardian's name.
6. Enter the primary home phone number for non-emergency updates.
7. Enter the name of an emergency contact person.
8. Select the relationship between the child and the emergency contact.
9. Enter the emergency contact person's phone number.
10. (Optional) List any siblings also enrolled in our program.

## Field-by-Field Explanation

### 1. Child Full Name
*   **Child Full Name** (`child_name`, `text`, `required`): Enter the child's full name as it appears on their birth certificate.

### 2. Date of Birth
*   **Date of Birth** (`child_dob`, `date`, `required`): Select the child's birthday.

### 3. Gender
*   **Gender** (`child_gender`, `select_one`, `required`): Select the child's gender.

### 4. Father or Guardian Name
*   **Father or Guardian Name** (`father_guardian_name`, `text`, `optional`): If you would like to provide additional family background information, please enter the father or guardian's name.

### 5. Mother or Guardian Name
*   **Mother or Guardian Name** (`mother_guardian_name`, `text`, `optional`): If you would like to provide additional family background information, please enter the mother or guardian's name.

### 6. Primary Home Phone
*   **Primary Home Phone** (`home_phone`, `text`, `required`): Enter the primary home phone number for non-emergency updates.

### 7. Emergency Contact Name
*   **Emergency Contact Name** (`emergency_name`, `text`, `required`): Enter the name of an emergency contact person.

### 8. Relationship to Child
*   **Relationship to Child** (`emergency_relationship`, `select_one`, `required`): Select the relationship between the child and the emergency contact person.

### 9. Emergency Contact Phone
*   **Emergency Contact Phone** (`emergency_phone`, `text`, `required`): Enter the emergency contact person's phone number.

### 10. Current Teacher and Grade
*   **Current Teacher and Grade** (`teacher_grade`, `text`, `required`): Enter the current teacher and grade of the child in school.

### 11. List any Siblings
*   **List any Siblings** (`sibling_list`, `text`, `optional`): (Optional) List any siblings also enrolled in our program.
