<?php

namespace App\Controller;

use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcher;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RandomController
 * @package App\Controller
 *
 * @Rest\Route("/random")
 */
class RandomController extends AbstractFOSRestController
{
    /**
     * @Rest\Get("/test")
     *
     * @return array
     * @throws \Exception
     */
    public function getRandom()
    {
        return $this->handleView(View::create(["test"], Response::HTTP_OK));
    }
}
