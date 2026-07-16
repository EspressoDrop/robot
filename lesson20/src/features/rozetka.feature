Feature: Rozetka site

  Scenario: Logo should be visible on main page
    Given I open Rozetka main page
    Then the logo should be visible

  Scenario: Search field should show popular queries
    Given I open Rozetka main page
    When I open the search field
    Then popular queries header should be visible

  Scenario: Search results should contain search query in titles
    Given I open Rozetka main page
    When I open the search field
    And I search for "ecoflow"
    Then all product titles should contain "ecoflow"

  Scenario: Products should be sorted by lowest price in ascending order
    Given I open Rozetka main page
    When I open the search field
    And I search for "ecoflow"
    And I sort by lowest price
    Then product prices should be in ascending order

  Scenario: Products should be sorted by highest price in descending order
    Given I open Rozetka main page
    When I open the search field
    And I search for "ecoflow"
    And I sort by highest price
    Then product prices should be in descending order
