config-sync:
	npm run cs-export

config-sync-import:
	npm run cs-import

production_server = root@66.94.110.157
production_project_path = front-naturalize

rsync:
	rsync -azv . $(production_server):$(production_project_path)\
		--exclude-from .gitignore \
		--exclude-from .dockerignore \
		--include .env \
		--delete

deploy: rsync
	ssh $(production_server) "cd $(production_project_path) && docker compose -f docker-compose.production.yml down && docker compose -f docker-compose.production.yml build --no-cache && docker compose -f docker-compose.production.yml up -d"
