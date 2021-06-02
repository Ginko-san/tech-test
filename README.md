# Tech test
## Getting Started

To run this project you are going to need to have a couple of packages installed:

1. Make sure you have installed [docker](https://www.docker.com/products/docker-desktop). After
   installation is complete, run the application.

2. If you have not yet setup [dotdocker](https://github.com/aj-may/dotdocker), navigate to this link
   and follow the installation instructions: <https://github.com/aj-may/dotdocker#installation/>

## Usage

Once you have this packages installed on your local, these are the steps you need to follow to getting up your enviroment:

1. Ensure [dotdocker](https://github.com/aj-may/dotdocker) is running. If it isn't, or you're not
   sure, run `dotdocker start`.

2. Clone this repository and navigate into the project directory.

3. Run `npm i` to install dependencies.

4. Run `docker-compose build` to build images.

5. Run `docker-compose up -d` and wait for services to start.
