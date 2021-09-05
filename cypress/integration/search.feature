Feature: ICT

I want to test ICT

Scenario: Search followed by sorting and filtering
Given ICT webpage is open with title "Insurance Consulting and Technology - Willis Towers Watson"
When I change the language to United States English
And I search for "IFRS 17"
Then Search Page is opened with title "Search - Willis Towers Watson"
And Page heading contains "IFRS 17"
When Sort by Date if not sorted already
And Filter for "Article" Content type filter
Then Article links in the list are correct