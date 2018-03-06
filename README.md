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



# Functionalities Brief Introduction

1. "explore" page, you can click on the up-right "+" button, "newest", "trending", title of each card, up-right "+" button of each card, the blue/green/yellow badge of each card
2. "explore2" page, you can click on the up-right "+" button, drag the card to left or right
3. "surprise me" page, you can click "back" button, select from filter, and click "surprise me"
4. "surprise list" page, you can click "back" button, "surprise me again" button on the bottom, up-right "+" button of each card, title of each card, the blue/green/yellow badge of each card
5. "my list" page, you can click on the up-right "+" button, "to try", "tried", title of each card, the blue/green/yellow badge of each card, "I tried it" button, "reflection" button, 
6. "calendar" page, you can click on each date, switch month, click into a day to view tried ideas on that day, click the title to view the idea on "my list" and reflections.
7. "idea detail" page, you can click on the "back" button, the blue/green/yellow badge, the pen logo button to add refelctions, if you have never tried it before, there is a "I tried it" button for you to click.

