<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ConfidentialitéController extends AbstractController
{
    #[Route('/confidentialit/', name: 'app_confidentialite')]
    public function index(): Response
    {
        return $this->render('footer/confidentialite.html.twig', [
            'controller_name' => 'ConfidentialitéController',
        ]);
    }
}
