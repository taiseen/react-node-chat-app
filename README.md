<img src="./client/public/readme.png" style='width:175px' align="right" />

24 - May - 2022

## Chat App | [Live Link][client]

# React + Node.js

## [Frontend][client] | [Backend][server] 


## 📝 Instruction of using this Chat App 
```jsx
Just Open this 'Live Link' as 1st tab into your browser & give 'userName' + 'roomName'
& open this same 'Live Link' in another (2nd) tab of your browser...
& this time give a different 'userName' but 'same roomName' that you give before, 
when you open this chat app through (1st) tab into your browser.

Now start testing & chatting... 

Happy Charting!... 😎😊😎
```

<br/>

# FrontEnd - Dependencies...
|No| Package Installs               | Usage for                             |
|--|--------------------------------|---------------------------------------|
| 1| yarn add `react-route-dom`     | declarative routing in react web app  |
| 2| yarn add `socket.io-client`    | for component navigation              |
| 3| yarn add `query-string`        | Parse and stringify URL query strings |
| 4| yarn add `react-emoji`         | An emoji mixin for React              |
| 5| yarn add `react-scroll-to-bottom`   | React container that will auto scroll to bottom |

<br/>

# BackEnd - Dependencies...
|No| Package Installs       | Use for                                       |
|--|------------------------|-----------------------------------------------|
| 1| yarn add `cors`        | enabling Cors origin request                  |
| 2| yarn add `express`     | creating routing for application              |
| 3| yarn add `nodemon`     | changing happen, server restart automatically |
| 4| yarn add `socket.io`   | real time data transfer                       |

<br/>

    🟨
    ├── client 
    │   ├── public
    │   └── src
    |       ├── components      # all needful components 
    |       ├── style           # reset base styling
    |       ├── App.js          # Router for navigate inside app
    |       └── index.js        # client - app running start point
    | 
    ├── server
    │   ├── client
    |   |   └── users.js        # temporary user database inside array 
    │   ├── public              # all static assets are present here
    │   └── index.js            # server - app running start point
    |
    ├── .gitignore
    ├── README.md
    └── readme.png
    🟨


# Learning context by developing this application:
|No| Context learn by building this project...    | 
|--|----------------------------------------------|
| 1| Project Structure                            | 
| 2| ReadMe file styling at new way               |
| 3| FrontEnd + BackEnd Connectivity              | 
| 4| FrontEnd + BackEnd Full Deployment           | 
| 5| Life Cycle Method `useEffect` Hook           | 
| 6| HTTP Server + Express + `Socket.io`          |

    
> Learning by inspired from[.](https://youtu.be/ZwFA3YMfkoc)


## 📜 License under the [MIT License](license)


[client]: www
[server]: www