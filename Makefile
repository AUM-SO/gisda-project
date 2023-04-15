PROJECT := trekking-web

deploy:
	docker-compose -p ${PROJECT} up -d --build

build:
	docker-compose -p ${PROJECT} build

down:
	docker-compose -p ${PROJECT} down

restart:
	docker-compose -p ${PROJECT} restart

bash:
	docker-compose -p ${PROJECT} run --rm web bash

logs:
	docker-compose -p ${PROJECT} logs -f web

