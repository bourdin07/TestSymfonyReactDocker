FROM php:8.0
LABEL maintainer="maxime.bourdin.tic@gmail.com"

RUN apt-get update && apt-get install -y vim git unzip curl libxml2-dev libldb-dev libldap2-dev libcurl3-dev zlib1g-dev libpng-dev libzip-dev libpq-dev wget

RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime
RUN "date"

RUN echo 'memory_limit = 1024M' >> /usr/local/etc/php/conf.d/docker-php-memlimit.ini

RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo pdo_pgsql xml ldap curl zip gd sockets intl

RUN wget https://get.symfony.com/cli/installer -O - | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

RUN usermod -u 1000 www-data

EXPOSE 8000

WORKDIR /var/www/default

ENTRYPOINT ["docker-php-entrypoint"]
