# Database Normalization Assessment - Help Guide
## Purpose
This form is used to assess the current state of a database schema and identify areas that can be improved by applying database normalization principles.

## How to Complete This Form
To complete this form, simply answer the following questions to the best of your ability.

## Field-by-Field Explanation
* **1. First Normal Form** (`first_normal_form`, Select One, required): This question is about whether the table is in the First Normal Form. A table in First Normal Form has a single value for each non-key attribute for each entity.
* **2. Second Normal Form** (`second_normal_form`, Select One, required): This question checks if the table is in the Second Normal Form. A table in Second Normal Form is one where each non-key attribute is a function of the entire primary key.
* **3. Third Normal Form** (`third_normal_form`, Select One, required): This question assesses if the table is in the Third Normal Form. A table in Third Normal Form is one where all non-key attributes are functions of the entire primary key.
* **4. Fourth Normal Form** (`fourth_normal_form`, Select One, required): This question checks if the table is in the Fourth Normal Form. A table in Fourth Normal Form is one where any two or more columns are used together to uniquely identify each row.
* **5. Fifth Normal Form** (`fifth_normal_form`, Select One, required): This question is about assessing if the table is in the Fifth Normal Form. A table in Fifth Normal Form is one where it cannot be in a higher normal form without a one-to-one relationship between tables.
* **6. Sixth Normal Form** (`sixth_normal_form`, Select One, required): This question checks if the table is in the Sixth Normal Form. A table in Sixth Normal Form is one where all non-key attributes depend on the entire primary key.
* **7. Seventh Normal Form** (`seventh_normal_form`, Select One, required): This question assesses if the table is in the Seventh Normal Form. This is the most normalized form, where all non-key attributes are each a function of the entire primary key.
* **Best Answer** (`best_answer`, Select Multiple, required): This question allows you to select the most normalized form from the options provided. Note that it's possible for a database to be in more than one normal form, so select all that apply.
