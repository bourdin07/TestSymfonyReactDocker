<?php


namespace App\Exception;


use Symfony\Component\Security\Core\Exception\AuthenticationException;

class AppAuthenticationException extends AuthenticationException
{
    public function __construct()
    {
        parent::__construct('Identifiant et/ou mot de passe invalide', 401);
    }
}