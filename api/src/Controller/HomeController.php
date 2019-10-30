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
        $matchs = $matchManager->selectAll();

        foreach ($matchs as $match) {
            var_dump($match);
            echo"<br>";
            echo"<br>";
        }
        die();
    }
}
