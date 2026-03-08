# School Extracurricular Interest Poll Form - Help Guide
## Purpose
This form is designed to collect information from students about their interest in various extracurricular activities offered by the school, including clubs, sports, and enrichment activities.

## How To Complete This Form
To complete this form, follow these steps:

1. Please answer the question on the first page, "Are you interested in joining any of the clubs listed?" with either "Yes" or "No".
2. If you answered "Yes" to the previous question, please select your interest in each of the listed clubs. You can choose multiple clubs.
3. If you are interested in joining a sport, please select your interest from the options provided.
4. If you are interested in an enrichment activity, please select your interest from the options provided.
5. If there is a club that is not listed, please enter the name of the club and provide a brief description.
6. If you have a sport interest outside of school, please enter the name and description of the sport.
7. Finally, indicate how likely you are to be involved in school clubs, sports, and enrichment activities by selecting a number from 1-10.

## Field-by-Field Explanation

* **Are you interested in joining any of the clubs listed?** (`club_interest`, select_one, required): This question helps us understand if you are interested in joining any of the clubs listed. Please answer with either "Yes" or "No".
* **Chess Club** (`clubs_1`, select_multiple, required): If you selected "Yes" to the previous question, this question allows you to select your interest in the Chess Club. You can choose multiple options.
* **Drama Club** (`clubs_2`, select_multiple, required): If you selected "Yes" to the previous question, this question allows you to select your interest in the Drama Club. You can choose multiple options.
* **Debate Club** (`clubs_3`, select_multiple, required): If you selected "Yes" to the previous question, this question allows you to select your interest in the Debate Club. You can choose multiple options.
* **Which sports would you be interested in joining?** (`sports_1`, select_multiple, required): If you are interested in joining a sport, this question allows you to select multiple sports.
* **Soccer** (`sports_2`, select_multiple, required): If you selected multiple sports in the previous question, this question allows you to select your interest in the Soccer.
* **Basketball** (`sports_3`, select_multiple, required): If you selected multiple sports in the previous question, this question allows you to select your interest in the Basketball.
* **Tennis** (`sports_4`, select_multiple, required): If you selected multiple sports in the previous question, this question allows you to select your interest in the Tennis.
* **Which enrichment activities would you be interested in?** (`enrichment_interest`, select_multiple, required): If you are interested in an enrichment activity, this question allows you to select multiple activities.
* **Coding Club** (`enrichment_1`, select_multiple, required): If you selected multiple activities in the previous question, this question allows you to select your interest in the Coding Club.
* **Art Studio** (`enrichment_2`, select_multiple, required): If you selected multiple activities in the previous question, this question allows you to select your interest in the Art Studio.
* **Robotics Club** (`enrichment_3`, select_multiple, required): If you selected multiple activities in the previous question, this question allows you to select your interest in the Robotics Club.
* **Is there an interest in a club that is not listed?** (`other_club_interest`, text, required): If you are interested in a club that is not listed, please enter the name of the club and provide a brief description.
* **Name of the club -** (`other_club_name`, text, required): Please enter the name of the club.
* **Description of the club -** (`other_club_description`, text, required): Please enter a brief description of the club.
* **Formation of the club** (`other_club_formation`, text, required): Please enter the formation of the club.
* **Status of the club** (`other_club_status`, text, required): Please enter the status of the club.
* **How likely are you to be involved in school clubs?** (`school_club_interest`, number, required): Please indicate how likely you are to be involved in school clubs by selecting a number from 1-10.
* **How likely are you to be involved in school sports?** (`school_sport_interest`, number, required): Please indicate how likely you are to be involved in school sports by selecting a number from 1-10.
* **How likely are you to be involved in school enrichment activities?** (`school_enrichment_interest`, number, required): Please indicate how likely you are to be involved in school enrichment activities by selecting a number from 1-10.
* **Which sports would you be interested in outside of school?** (`other_sport_interest`, select_multiple, required): If you are interested in a sport outside of school, please select multiple sports.
* **Name of the sport -** (`other_sport_name_1`, text, required): If you selected multiple sports in the previous question, please enter the name of the sport.
* **Description of the sport -** (`other_sport_description_1`, text, required): If you selected multiple sports in the previous question, please enter a brief description of the sport.
* **Which sports would you be interested in outside of school?** (`other_sport_name_2`, text, required): If you selected multiple sports in the previous question, please enter the name of the sport.
* **Description of the sport -** (`other_sport_description_2`, text, required): If you selected multiple sports in the previous question, please enter a brief description of the sport.
