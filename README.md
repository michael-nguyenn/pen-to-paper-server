# Pen To Paper Server
***Pen To Paper is a simple journalling application where you can create your own entries or save them as templates***

This is the backend for Pen To Paper. 

## :running: Run Locally

Follow these steps to run a local instance of Pen To Paper's server. Install the frontend [here](https://github.com/n93michael/pen-to-paper-client):  
(You'll need node, npm, and MySQL already installed.)

<!-- Run Locally -->
### Installation

1. Clone or download this repo.
#### Set up the backend
2. Create a new database in MySQL called `pen&paper_database`.
3. Install server dependencies:  
   
   Run `npm install` from inside the server directory.
   ```bash    
   $ cd pen-to-paper-server
   $ npm install
   ```
4. Run migrations
   ```bash
   $ npm run migrate
   ```
5. Run seeds
   ```bash
   $ npm run seed
   ```
6. Set environment variables:  
   
   Rename `.env_sample` to `.env` and change placeholder values with your own.
   ```shell
   PORT=<PORT_NUMER>
   JWT_SECRET=<SECRET KEY>
   DB_HOST=<HOST ADDRESS>
   DB_USER=<YOUR DB USERNAME>
   DB_PSWD=<YOUR DB PASSWORD>
   ```
7. Start the server:
   ```bash
   $ node server.js
   ```

<!-- TechStack -->
## :space_invader: Tech Stack
- Express
- MySQL
- Knex

<!-- Contact -->
## :handshake: Contact

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/michael--nguyen/)
