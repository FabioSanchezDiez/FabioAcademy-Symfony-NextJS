.PHONY: init
init: build up-d install-dependencies create-db ## Runs everything needed to get the project ready from scratch

.PHONY: build
build: ## Build the containers
	sudo docker compose build

.PHONY: up
up: ## Start the containers
	sudo docker compose up

.PHONY: up-d
up-d: ## Start the containers in the background
	sudo docker compose up -d

.PHONY: stop
stop: ## Stop the containers
	sudo docker compose stop

.PHONY: create-db
create-db: ##Create the initial db
	sudo docker exec -it api_php php bin/console doctrine:migrations:migrate -n
	sudo docker exec -it api_php php bin/console doctrine:fixtures:load

.PHONY: install-dependencies
install-dependencies: ##Install composer dependencies
	sudo docker exec -it api_php composer install