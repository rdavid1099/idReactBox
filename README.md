# IdReactBox

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). All functionality with `create-react-app` is baked in to the cake.

A simple CRUD application built out using React and Rails API backend. To simplify the process, the Rails API is embedded in the project and run on a separate server. This allows the simulation of hitting an external API to practice `async/ await` patterns and the ability to slow down or speed up the response time.

## Installation

Since this is essentially two applications in the same directory, a simple `bash` script handles the installation of both projects.

1. Clone down the project
2. Go into the directory `idReactBox`
3. Run `./install.bash` - This will install all of the Ruby and JavaScript dependencies
4. Start both servers using `yarn start`
