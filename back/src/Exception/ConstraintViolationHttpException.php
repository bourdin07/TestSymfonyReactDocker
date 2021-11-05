<?php


namespace App\Exception;


use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormErrorIterator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class ConstraintViolationHttpException extends BadRequestHttpException
{
    /**
     * ConstraintViolationHttpException constructor.
     * @param ConstraintViolationListInterface|FormErrorIterator|string $errors
     */
    public function __construct($errors)
    {
        $message = [];
        if ($errors instanceof ConstraintViolationListInterface) {
            /** @var ConstraintViolation $error */
            foreach ($errors as $error) {
                $message[] = $error->getMessage();
            }
            $message = implode("\n", $message);
        } else if ($errors instanceof FormErrorIterator) {
            foreach ($errors as $error) {
                // Avec $flatten=true dans le $form->getErrors, chaque élément est une instance de FormError
                if ($error instanceof FormError) {
                    $message[] = $error->getMessage();
                }
            }
            $message = implode("\n", $message);
        } else {
            $message = $errors;
        }

        parent::__construct($message);
    }
}