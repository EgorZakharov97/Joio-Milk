#!/bin/bash

git pull > ../../update-logs/pull.log &
npm i > ../../update-logs/install.log &
npm run build > ../../update-logs/build.log &
pm2 restart joio > ../../update-logs/restart.log