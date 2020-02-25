import nba from './nba.mp4'
import flight from './flight.mp4'
import linkd from './linkden.png'
import github from './github.png'

const AllProjects= [
    {
        video: nba,
        title: "NBA Stats",
        descrption: "Collect and store NBA game statistics and turn the information into various open-source charts in order to provide a more cohesive and proficient user experience for basketball enthusiasts. Created user account using Ruby on Rails for back end ​Designed custom charts for optimal user experience using Apexcharts.js Implemented various graph functions using React.js Improved 3rd party API for NBA stats",
        linkdin : linkd,
        github: github,
        githubCode: 'https://github.com/soufiane121/NBA_STATS'
    },
{
    video: flight,
    title: "Flight Tracker",
    descrption: "Search and track flights from an international aviation database using flight number or airport name. Receive SMS notifications on updates, delays, and more. Notifications automatically end when flight has arrived at its destination Created user using Ruby on Rails for back end ​Converted​ 3rd party API for flight data Engineered​ API changes for tracking flight status with practicing​ ​React.js Updated User of flight changes and status using Twilio Delivered push notifications to user with Twilio",
    linkdin : linkd,
    github: github,
    githubCode: 'https://github.com/soufiane121/Flight-web-tracker'
}
]

export default AllProjects;