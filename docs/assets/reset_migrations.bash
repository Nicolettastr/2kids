rm -R -f ./migrations &&
pipenv run init &&
psql -h localhost -U postgres -c 'DROP DATABASE twokidsbd;' || true &&
psql -h localhost -U postgres -c 'CREATE DATABASE twokidsbd;' &&
pipenv run migrate &&
pipenv run upgrade
