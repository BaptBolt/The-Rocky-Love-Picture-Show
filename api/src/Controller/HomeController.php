<?php
/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\MatchManager;
use App\Model\ApiMonstersModel;

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
        $matchs = $matchManager->selectAll();

        foreach ($matchs as $match) {
            var_dump($match);
            echo"<br>";
            echo"<br>";
        }
    }

    public function monsters()
    {
        $monstersApi = new ApiMonstersModel();
        $monsters = $monstersApi->getMonsters();


        header("Content-Type: application/json");
        return json_encode($monsters);
    }
}
