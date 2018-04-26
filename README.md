# lernt
Course ratings &amp; comments.

# set up
If you don't have docker, install it.
Run `docker-compose up --build`

# handy commandies

`docker-compose up --build` build and run everything
`docker ps -a` see all running containers, use this for info for other commands
`docker inspect {container id}` inspect a specific container for more info
`docker exec -it {container name} /bin/bash` connect to a terminal in a container
`docker system prune` clean up various docker junk

If something doesn't work, run docker system prune!