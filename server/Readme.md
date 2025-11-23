# WhatsTheBest Backend 

WhatsTheBest is a platform where users can search for anything best place, restraunt, hotel, etc., in different cities, to make user's life easier to find the best place around India.

## How to run the Backend 

### Without Docker
1. Clone the repository
2. Install dependencies
3. Set up environment variables
4. Run the server (npm run dev)
 
### With Docker
1. Clone the repository
2. Install dependencies
3. Set up environment variables
4. Run the server (docker compose build && docker compose up -d)
5. to access the mongo_db container in the terminal use 
    - docker exec -it mongodb_container_name mongosh -u mongodb_username -p mongodb_password --authenticationDatabase admin