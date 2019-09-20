Feature: Smoke test of facebook application
    Scenario Outline: Perform smoke test of facebook application
    Given Open firefox browser and start application
    When I enter valid "<username>" and "<password>" credentials
    And Click login button
    Then User should be able to login successfully
    Then Application should be closed
    
    Examples:
    | username | password |
    | mydevopscloud@gmail.com | Test@123$|
    | mydevopscloud@gmail.com | Test@123$|

    Scenario Outline: Perform smoke test of facebook application with invalid credentials
    Given Open firefox browser and start application
    When I enter valid "<username>" and "<password>" credentials
    And Click login button
    Then User should not be able to login
    Then Application should be closed
    
   Examples: 
    | username | password |
    | mydevopscloud@gmail.com | Test@123$45|
    | mydevopcloud@gmail.com | Test@123$99|
    | mydevopcloud@gmail.com | Test@123$|
	
	
	
	
	
	
	