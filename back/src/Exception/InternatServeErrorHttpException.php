<?php


namespace App\Exception;


use Symfony\Component\HttpKernel\Exception\HttpException;

class InternatServeErrorHttpException extends HttpException
{
    /**
     * InternatServeErroHttpException constructor.
     * @param \Throwable|null $previous
     * @param null $message
     * @param int $code
     * @param array $headers
     */
    public function __construct(\Throwable $previous = null, $message = null, int $code = 0, array $headers = [])
    {
        if ($message === null) {
            $message = 'Erreur technique';
        }
        parent::__construct(500, $message, $previous, $headers, $code);
    }
}