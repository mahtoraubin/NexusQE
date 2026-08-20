Feature: User Authentication

    As a registered User
    I want to login to my account
    So that I can access authenticated features

@smoke
Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the user should be logged in successfully

@regression
Scenario: Login with invalid credentials
    Given the user is on the login page
    When the user logs in with invalid credentials
    Then the user should see a login error message

@api
Scenario: User logs in via API
    When the user logs in via API
    Then the API login should be successful

@api
Scenario: User cannot login with invalid credentials
    When the user logs in via API with invalid credentials
    Then the API login should fail