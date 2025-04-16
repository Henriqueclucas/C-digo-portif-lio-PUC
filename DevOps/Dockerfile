name: Login no Docker Hub
uses: docker/login-action@v2
with:
username: ${{ secrets.DOCKERHUB_USERNAME }}
password: ${{ secrets.DOCKERHUB_TOKEN }}

FROM ubuntu 
RUN apt update
RUN apt install curl --yes

