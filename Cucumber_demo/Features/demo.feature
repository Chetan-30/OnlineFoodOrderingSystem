@tag
Feature: Test OnlineMeals features
  @tag1
  Scenario: Add items to the cart 
    Given Open FoodOrdering Website 
    And Create Account  
    And Login into account with incorrect credentials
    Then Login with correct credentials