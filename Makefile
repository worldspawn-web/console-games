gamestart:
	node bin/index.js

eslint:
	npx eslint .

install:
	npm ci

build:
	npx tsc