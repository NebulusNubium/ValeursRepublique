<?php

namespace App\Controller;

use App\Entity\Score;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JeuController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/jeu', name: 'app_jeu')]
    public function index(): Response
    {
        // Récupérer les 3 meilleurs scores
        $topScores = $this->entityManager->getRepository(Score::class)
            ->findBy([], ['timeInSeconds' => 'ASC'], 3);

        // Récupérer le dernier score de l'utilisateur actuel (si disponible)
        // Note : Pour identifier l'utilisateur actuel, vous pouvez utiliser une session ou un champ dans le formulaire
        $currentUserScore = null; // À implémenter selon votre logique d'identification

        return $this->render('jeu/jeu.html.twig', [
            'top_scores' => $topScores,
            'current_user_score' => $currentUserScore,
        ]);
    }

    #[Route('/api/save-score', name: 'api_save_score', methods: ['POST'])]
    public function saveScore(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $playerName = $data['playerName'] ?? 'Anonyme';
        $timeInSeconds = $data['timeInSeconds'] ?? 0;

        $score = new Score();
        $score->setPlayerName($playerName);
        $score->setTimeInSeconds($timeInSeconds);
        $score->setCreatedAt(new \DateTime());

        $this->entityManager->persist($score);
        $this->entityManager->flush();

        return $this->json(['message' => 'Score enregistré avec succès']);
    }

    #[Route('/api/top-scores', name: 'api_top_scores', methods: ['GET'])]
    public function getTopScores(): JsonResponse
    {
        $topScores = $this->entityManager->getRepository(Score::class)
            ->findBy([], ['timeInSeconds' => 'ASC'], 3);

        return $this->json($topScores, 200, [], [
            'groups' => ['score'],
        ]);
    }
}