JSON Format Introduction
====

"ideas" is an array,

each idea:

1. Id: randomly produced. A random letter + date string format

2. Title

3. Tried: # of people that tried this idea

4. Description: 

5. Property: "public" means everybody can view this idea, "private" means only the user himself can.

6. Feeling: 

7. calendarColor: (automatically set) —> being used in calendar(match with different feelings)

8. Color: (automatically and randomly set) —> being used in explore2 (card's color)

9. myList: "true" means have been added to my list, vice versa

10. operationTime: (automatically set) —> the last opertaion time

11. createTime: (automatically set) 

12. Notes: (reflections for this idea) 

    each note:

    1. Reflection:

    2. longDate: (automatically set)

    3. Day:  (automatically set)

    4. Date:  (automatically set)

    5. Time:  (automatically set)

    6. property: "public" means everyone can see this reflection (in " idea detail" page)

       "private" means only I can see it (in "mylist" page "tried" section)

    7. Provider: name of the user who provide this reflection, when user using this app and leave reflections, here we set the default user name is "I"

13. Cost: 

14. Time:

15. userTried: "true": have tried it before, "false": never tried it before.



"Bottom bar" is an array, manipulating the bottom bar

"canlendarColorMatch" helps mapping each feeling to corresponding color

"cardColor" is used to randomly assign a card color to an idea.



```json
{
  "ideas": [
{
  "id": "I1520292675604",
  "title" : "correct format",
  "tried": "1090",
  "description": "Bought an icecream for kids that are playing on the yard. :-) ",
  "property": "public",
  "feeling": "charitable",
  "calendarColor": "red",
  "color": "brown",
  "myList": "true",
  "operationTime":"Thu Feb 22 2018 15:09:05 GMT-0800 (PST)",
  "createTime":"Thu Feb 22 2018 15:09:05 GMT-0800 (PST)",
  "notes": [
        {"reflection": "text here", 
        "longDate": "Mon Mar 05 2018 15:27:17 GMT-0800 (PST)",
        "day": "Mon",
        "date": "Mar 05 2018",
        "time": "15:27:17",
        "property": "public",
        "provider": "other people" },
        {"reflection": "this is my personal reflection, the provider is default: I, can be viewed through both mylist and idea details", 
        "longDate": "Mon Mar 05 2018 15:27:17 GMT-0800 (PST)",
        "day": "Mon",
        "date": "Mar 05 2018",
        "time": "15:27:17",
        "property": "public",
        "provider": "I" },
        {"reflection": "this is my personal reflection, and private, can only be viewed through mylist", 
        "longDate": "Mon Mar 05 2018 15:27:17 GMT-0800 (PST)",
        "day": "Mon",
        "date": "Mar 05 2018",
        "time": "15:27:17",
        "property": "private",
        "provider": "I" },
        {"reflection": "second comment here", 
        "longDate": "Mon Mar 05 2018 15:27:17 GMT-0800 (PST)",
        "day": "Mon",
        "date": "Mar 05 2018",
        "time": "15:27:17",
        "property": "public",
        "provider": "other animal" }
  ],
  "cost": "$$",
  "time": "days",
  "userTried": "true"
},....
  
],

  "bottom-bar": [
  { "name": "Surprise",
    "id": "surprise",
    "class": "fa fa-lightbulb"
  },....
],
  
"calendarColorMatch": {
  "relaxing": "blue",
  ...
},
  
 "cardColor": [
  "purple",...
 ]
}
 
```
  