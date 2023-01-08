Feature: Login

    User want to login into application

    Scenario: Invalid Login if password is empty
    Given user open login page
    When user enter valid username and empty password and click on Login button
    Then user verify error messege

    Scenario: Invalid Login if username is empty
    Given user open login page
    When user enter empty username and valid password and click on Login button
    Then user verify error messege