.PHONY: *

install:
	@yarn install

setup:
	@$(MAKE) install

build: 
	@yarn build

start:
	@$(MAKE) setup
	@$(MAKE) build
	@yarn start

start-dev:
	@$(MAKE) setup
	@yarn dev
