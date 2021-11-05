<?php


namespace App\Exception;


use Symfony\Component\HttpKernel\Exception\HttpException;

class AccessDeniedException extends HttpException
{
    /**
     * InternatServeErroHttpException constructor.
     * @param \Throwable|null $previous
     * @param null $message
     * @param int $code
     * @param array $headers
     */
    public function __construct(\Throwable $previous = null, $message = null, int $code = 403, array $headers = [])
    {
        if ($message === null) {
            $message = 'Accès interdit';
        }
        parent::__construct(403, $message, $previous, $headers, $code);
    }
}