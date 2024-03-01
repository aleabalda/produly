# Produly
A web app built for users to become more productive in a simple, effortless way.

## How to Run
Run the command `cd produly-app`

Then run `npm run dev`

Finally, take the link in the terminal to open up the app.

## Features
### To-Do List
Users have to-do lists where they can create tasks and assign priorities to them.
### Calendar
Users have access to a calendar that they can use to create important events and assign a time to them as well as if they would like to receive a notification.
### Journal
Users have access to a journal where they can write down whatever they want such as their goals for the day.

## Documentation
### Current View of App (2024-02-04)
![image](https://github.com/aleabalda/produly/assets/113554225/967f5b7e-13b3-4cbb-8548-928b7246e0d2)

### Current View of App (2024-02-12)
![image](https://github.com/aleabalda/produly/assets/113554225/2d2d5967-9e4a-434c-a005-1226f53278fb)

### Current View of App (2024-02-18)
![image](https://github.com/aleabalda/produly/assets/113554225/4fdfd272-682a-4279-b92b-968b60b30054)

### Current View of App (2024-02-24)
![image](https://github.com/aleabalda/produly/assets/113554225/d522b4f0-c05e-477d-a051-9ff45811e2ac)
The above figure is the recently created calendar view (with a minor bug) in dark mode

## What I learned...
### Linters
I took the time to learn more about different linters used. I thought there would be one linter that is used by everyone and is "best practice".
However, after researching and watching videos on linters I realized code format and structure is subjective, to an extent of course. Thus, I decided
to create a super-linter workflow using github actions. This way when I push code to my repository I can see clearly what issues I have and where they are.

### Local Storage
I learned how to manipulate local storage when working on the to-do list page. It was extremely simple the only part I really struggled with was when removing a task from local storage.
I searched up some of the most common ways to remove an item from an array in javascript and went with the option of using the filter method. Initially, I didn't have any unique identifiers
to use to remove an item so I ended up just using the `Date` object for a timestamp. If users are to be implemented in the future I will most likely use username or userID or something of the sort.
Overall, local storage is a very simple concept and the code for it is fairly simple as well.  



