#!/bin/sh
git add .
echo Digite uma mensagem para o commit:
read msg
git commit -am "$msg"
git push
echo Press Enter...
read
