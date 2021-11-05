<?php


namespace App\Exception;


use Symfony\Component\HttpKernel\Exception\HttpException;

class UserNotFoundInLdapException extends HttpException
{
    /**
     * UserNotFoundInLdapException constructor.
     * @param null $message
     */
    public function __construct($message = null)
    {
        if ($message === null) {
            $message = 'Utilisateur modifié en base de données (non trouvé dans le LDAP)';
        }

        parent::__construct(404, $message);
    }
}