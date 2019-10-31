<?php
/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\MatchManager;

class HomeController extends AbstractController
{

    /**
     * Display home page
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function index()
    {
        return $this->twig->render('Home/index.html.twig');
    }

    public function form()
    {
        return $this->twig->render('Home/form.html.twig');
    }

    public function match()
    {
        $matchManager = new MatchManager();
        $lovers = $matchManager->selectMatch();
        foreach ($lovers as $lover) {
            $loveUser = 100; // remplacer par $_POST['loveStyle'] etc.
            $foodUser = 0;
            $ethicUser = 60;
            $partyUser = 30;
            $id = $lover['id'];
            $loveRate = abs($loveUser - $lover['loveStyle']);
            $loveMatch = 100 - $loveRate;
            $foodRate = abs($foodUser - $lover['food']);
            $foodMatch = 100 - $foodRate;
            $ethicRate = abs($ethicUser - $lover['ethic']);
            $ethicMatch = 100 - $ethicRate;
            $partyRate = abs($partyUser - $lover['partyMonster']);
            $partyMatch = 100 - $partyRate;
            $totalMatch = ($loveMatch + $foodMatch + $ethicMatch + $partyMatch) / 4;

            $matchManager->addMatch($totalMatch, $id);
            $soulmates = $matchManager->selectByMatch();
        }
        foreach ($soulmates as $soulmate) {
            var_dump($soulmate['name']);
            var_dump($soulmate['matchRate']);
            echo "<br>";
            echo "<br>";
        }
    }
}
