# README
## Version
* Ruby 2.7.2
* Rails 6.1
* Node 14.15

## Install
```
bundle install
yarn install
```

## Run
```
docker-compose up -d
rails server
```

## Hot-Reloading React Frontend
```
./bin/webpack-dev-server
```

# Foreman
It's possible to use Foreman to launch all the dev environment in only one command
1. Install foreman on your computer
```
gem install foreman
```
2. Run foreman
```
foreman start -f foreman.dev
```

# Other commands
edit credentials
```
EDITOR="nano -w" rails credentials:edit 
```

add rarible API dependencies
```
yarn add @rarible/protocol-ethereum-sdk eth-sig-util @ethereumjs/common @ethereumjs/tx @rarible/action @rarible/protocol-api-client ethereumjs-util tslib web3 web3-eth-contract web3-utils @rarible/types 
```