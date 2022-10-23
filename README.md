# theodinproject-library

issue: 
the loop will skip entries if removing a book different than the last one, because i both remove the entry and icrease the i... when i remove book #3, book #4 becomes #3 and i becomes 4

possible solution:
give each book object an unique key id then find that id in the myLibrary array
