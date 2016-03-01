Feature: NTA XYZ system EAC108E CRUD Function

  As a NTA User
  I want to login NTA XYZ system
  and Create/Read/Update/Delete EAC108E Business Enyity

@watch
Scenario: Login EAC108E
  Given I have visited NTA XYZ
  When I press Enter Key
  Then I see "作業功能範例" page

@watch
Scenario: Create EAC108E Business Enyity
  Given I have visited NTA XYZ EAC108E
  When I press create button
  And wait for user interaction finish
  Then I see "新增成功。"

@watch
Scenario: Search EAC108E Business Entity after creation
  Given I have visited NTA XYZ EAC108E
  When I press search button
  Then I see "查詢成功。"
  
@watch
Scenario: Update EAC108E Business Entity
  When I press update button
  Then I see "更新成功。"  
  
@watch
Scenario: Delete EAC108E Business Entity
  When I press delete button
  Then I see "刪除成功。"  