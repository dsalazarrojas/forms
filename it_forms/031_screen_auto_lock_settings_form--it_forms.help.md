# Screen Auto Lock Settings Form - Help Guide

## Purpose
This form is used to configure settings for screen auto-lock functionality, allowing you to control when screens auto-lock on different devices or operating systems.

## How To Complete This Form
1. Select the device type that you want to configure screen auto-lock settings for.
2. Choose the operating systems (e.g., Android, iOS, macOS) that you want to apply the settings to.
3. Indicate whether the screen currently auto-locks or not.
4. Set the current timeout value in seconds.
5. Choose whether you want the screen to auto-lock at the preferred timeout.
6. Set the preferred timeout value in seconds.
7. Select any exceptions to the screen auto-lock rule, such as when requests are pending or the screen is asleep.
8. Enter any additional comments about exceptions.
9. Note any drag and drop functionality settings, if applicable.

## Field-by-Field Explanation
* **device_type** (`mobile`, select_one): Select the type of device you want to configure screen auto-lock settings for (android, iOS, other).
* **Operating System** (`os`, select_multiple): Choose all operating systems that you want to apply the settings to (android, iOS, windows, macos).
* **Current Timeout** (`current_timeout`, select_one): Indicate whether the screen currently auto-locks (`Yes`, `No`).
* **Current Timeout Value** (`current_timeout_value`, number): Set the current timeout value in seconds.
* **Preferred Timeout** (`preferred_timeout`, select_one): Choose whether you want the screen to auto-lock at the preferred timeout (`Yes`, `No`).
* **Preferred Timeout Value** (`preferred_timeout_value`, number): Set the preferred timeout value in seconds.
* **Exception Requests** (`exception_requests`, select_multiple): Select any exceptions to the screen auto-lock rule (none, screen lock, screen sleep).
* **Exception Requests Text** (`exception_requests_text`, text): Enter any additional comments about exceptions.
* **Drag and Drop** (`drag_and_drop`, note): Note any drag and drop functionality settings, if applicable.
