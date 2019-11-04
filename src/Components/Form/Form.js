import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Form.css'
import Axios from 'axios';



class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      quest1 : "",
      quest2 : "",
      quest3 : "",
      quest4 : "",
      quest5 : "",
      quest6 : "",
      quest7 : "",
      quest8 : "",
      quest9 : "",
      quest10 : "",
      quest11 : "",
      quest12 : "",
      quest13 : "",
      quest14 : "",
      quest15 : "",
      quest16 : "",
      quest17 : "",
      quest18 : "",
      quest19 : "",
      quest20 : "",
    }
  }

submit = () =>{
  let formDon = new FormData();
  formDon.append('quest1' , this.state.quest1);
  formDon.append('quest2' , this.state.quest2);
  formDon.append('quest3' , this.state.quest3);
  formDon.append('quest4' , this.state.quest4);
  formDon.append('quest5' , this.state.quest5);
  formDon.append('quest6' , this.state.quest6);
  formDon.append('quest7' , this.state.quest7);
  formDon.append('quest8' , this.state.quest8);
  formDon.append('quest9' , this.state.quest9);
  formDon.append('quest10' , this.state.quest10);
  formDon.append('quest11' , this.state.quest11);
  formDon.append('quest12' , this.state.quest12);
  formDon.append('quest13' , this.state.quest13);
  formDon.append('quest14' , this.state.quest14);
  formDon.append('quest15' , this.state.quest15);
  formDon.append('quest16' , this.state.quest16);
  formDon.append('quest17' , this.state.quest17);
  formDon.append('quest18' , this.state.quest18);
  formDon.append('quest19' , this.state.quest19);
  formDon.append('quest20' , this.state.quest20);
  console.log(this.state)
  Axios.post('http://192.168.184.86:8000/Home/results',formDon)
  .then((response)=>{
    console.log(response)
  })
  
}

  render = () =>  {
      return (
        <Fragment>
             <p className='Question'>1) C’est mieux...</p>
<div>
  <input type="radio" id="huey" name="quest1" value="1" onChange={event => {
            this.setState({ quest1: event.target.value });
          }}/>
  <label htmlFor="huey">A deux</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest1" value="2" onChange={event => {
            this.setState({ quest1: event.target.value });
          }}/>
  <label htmlFor="dewey">A trois</label>
</div>
<div>
  <input type="radio" id="louie" name="quest1" value="3" onChange={event => {
            this.setState({ quest1: event.target.value });
          }}/>
  <label htmlFor="louie">Avec le cimétière entier</label>
</div>
<div>
  <input type="radio" id="louie" name="quest1" value="4" onChange={event => {
            this.setState({ quest1: event.target.value });
          }}/>
  <label htmlFor="louie">Tout seul</label>
</div>
              <p className='Question'>2) Vos accessoires préférés :</p>
<div>
  <input type="radio" id="huey" name="quest2" value="1" onChange={event => {
            this.setState({ quest2: event.target.value });
          }}/>
  <label htmlFor="huey">Fouets et menottes</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest2" value="2" onChange={event => {
            this.setState({ quest2: event.target.value });
          }}/>
  <label htmlFor="dewey">Poils et crocs</label>
</div>
<div>
  <input type="radio" id="louie" name="quest2" value="3" onChange={event => {
            this.setState({ quest2: event.target.value });
          }}/>
  <label htmlFor="louie">Anneau de fiançailles</label>
</div>
<div>
  <input type="radio" id="louie" name="quest2" value="4" onChange={event => {
            this.setState({ quest2: event.target.value });
          }}/>
  <label htmlFor="louie">No way</label>
</div>
            <p className='Question'>3) Vous considérez que se faire empaler pendant l’amour peut :</p>
<div>
  <input type="radio" id="huey" name="quest3" value="1" onChange={event => {
            this.setState({ quest3: event.target.value });
          }}/>
  <label htmlFor="huey">piquer mais c’est cool</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest3" value="2" onChange={event => {
            this.setState({ quest3: event.target.value });
          }}/>
  <label htmlFor="dewey">Rololo pas encore !!!</label>
</div>
<div>
  <input type="radio" id="louie" name="quest3" value="3" onChange={event => {
            this.setState({ quest3: event.target.value });
          }}/>
  <label htmlFor="louie">S’il n’est pas en argent avec grand joie</label>
</div>
<div>
  <input type="radio" id="louie" name="quest3" value="4" onChange={event => {
            this.setState({ quest3: event.target.value });
          }}/>
  <label htmlFor="louie">plutôt mourir encore, encore et encore et encore</label>
</div>
            <p className='Question'>4) Selon vous, quel est le meilleur endroit pour une première rencontre ?</p>
<div>
  <input type="radio" id="huey" name="quest4" value="1" onChange={event => {
            this.setState({ quest4: event.target.value });
          }}/>
  <label htmlFor="huey">La jolie ville d’Hiroshima</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest4" value="2" onChange={event => {
            this.setState({ quest4: event.target.value });
          }}/>
  <label htmlFor="dewey">Sur le réacteur de Tchernobyl</label>
</div>
<div>
  <input type="radio" id="louie" name="quest4" value="3" onChange={event => {
            this.setState({ quest4: event.target.value });
          }}/>
  <label htmlFor="louie">La maison d’Amityville</label>
</div>
<div>
  <input type="radio" id="louie" name="quest4" value="4" onChange={event => {
            this.setState({ quest4: event.target.value });
          }}/>
  <label htmlFor="louie">Peu importe, l’important c’est le goût de ton coeur !</label>
</div>
            <p className='Question'>5) votre partenaire idéal serait ?</p>
<div>
  <input type="radio" id="huey" name="quest5" value="1" onChange={event => {
            this.setState({ quest5: event.target.value });
          }}/>
  <label htmlFor="huey">Un zombie</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest5" value={this.state.quest5} onChange={event => {
            this.setState({ quest5: event.target.value });
          }}/>
  <label htmlFor="dewey">Un humanoïde transgenre</label>
</div>
<div>
  <input type="radio" id="louie" name="quest5" value={this.state.quest5} onChange={event => {
            this.setState({ quest5: event.target.value });
          }}/>
  <label htmlFor="louie">Une créature démoniaque</label>
</div>
<div>
  <input type="radio" id="louie" name="quest5" value={this.state.quest5} onChange={event => {
            this.setState({ quest5: event.target.value });
          }}/>
  <label htmlFor="louie">Un loup garou</label>
</div>
            <p className='Question'>6) En dessert, tu préfères...</p>
<div>
  <input type="radio" id="huey" name="quest6" value={this.state.quest6} onChange={event => {
            this.setState({ quest6: event.target.value });
          }}/>
  <label htmlFor="huey">Un cerveau bien juteux</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest6" value={this.state.quest6} onChange={event => {
            this.setState({ quest6: event.target.value });
          }}/>
  <label htmlFor="dewey">Le cadavre d’Eddie</label>
</div>
<div>
  <input type="radio" id="louie" name="quest6" value={this.state.quest6} onChange={event => {
            this.setState({ quest6: event.target.value });
          }}/>
  <label htmlFor="louie">De la bave de crapaud bio</label>
</div>
<div>
  <input type="radio" id="louie" name="quest6" value={this.state.quest6} onChange={event => {
            this.setState({ quest6: event.target.value });
          }}/>
  <label htmlFor="louie">Du caviar de boue sans-gluten</label>
</div>
            <p className='Question'>7) Lors d'un banquet commun vous mangez :</p>
<div>
  <input type="radio" id="huey" name="quest7" value={this.state.quest7} onChange={event => {
            this.setState({ quest7: event.target.value });
          }}/>
  <label htmlFor="huey">Uniquement les salades bio du Pérou</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest7" value={this.state.quest7} onChange={event => {
            this.setState({ quest7: event.target.value });
          }}/>
  <label htmlFor="dewey">De tout mais vous faites attention à votre diète</label>
</div>
<div>
  <input type="radio" id="louie" name="quest7" value={this.state.quest7} onChange={event => {
            this.setState({ quest7: event.target.value });
          }}/>
  <label htmlFor="louie">Juste les âmes humaines (sauf les roux)</label>
</div>
<div>
  <input type="radio" id="louie" name="quest7" value={this.state.quest7} onChange={event => {
            this.setState({ quest7: event.target.value });
          }}/>
  <label htmlFor="louie">La totalité du banquet et aussi les gens, pas de gâchis</label>
</div>
            <p className='Question'>8) Des enfants viennent frapper à votre porte pour des bonbons :</p>
<div>
  <input type="radio" id="huey" name="quest8" value={this.state.quest8} onChange={event => {
            this.setState({ quest8: event.target.value });
          }}/>
  <label htmlFor="huey">Ca tombe bien vous aimez bien les enfants :)</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest8" value={this.state.quest8} onChange={event => {
            this.setState({ quest8: event.target.value });
          }}/>
  <label htmlFor="dewey">Vous leur donnez vos bonbons non bio et sans gluten (faut pas déconner)</label>
</div>
<div>
  <input type="radio" id="louie" name="quest8" value={this.state.quest8} onChange={event => {
            this.setState({ quest8: event.target.value });
          }}/>
  <label htmlFor="louie">Vous leur donnez un morceau de votre chien en décomposition</label>
</div>
<div>
  <input type="radio" id="louie" name="quest8" value={this.state.quest8} onChange={event => {
            this.setState({ quest8: event.target.value });
          }}/>
  <label htmlFor="louie">Vous offrez vos meilleurs sucreries</label>
</div>
            <p className='Question'>9) Vous prenez des cours de cuisine, vous préferez cuisiner : </p>
<div>
  <input type="radio" id="huey" name="quest9" value={this.state.quest9} onChange={event => {
            this.setState({ quest9: event.target.value });
          }}/>
  <label htmlFor="huey">Un gratin d'algues vertes assaissonée d'un coulis de fraise</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest9" value={this.state.quest9} onChange={event => {
            this.setState({ quest9: event.target.value });
          }}/>
  <label htmlFor="dewey">Du hachis par humain entier</label>
</div>
<div>
  <input type="radio" id="louie" name="quest9" value={this.state.quest9} onChange={event => {
            this.setState({ quest9: event.target.value });
          }}/>
  <label htmlFor="louie">Votre prof et toutes les personnes participant au cours</label>
</div>
<div>
  <input type="radio" id="louie" name="quest9" value={this.state.quest9} onChange={event => {
            this.setState({ quest9: event.target.value });
          }}/>
  <label htmlFor="louie">Pas de cuisine pour moi, je préfère la chasse animale</label>
</div>
            <p className='Question'>10) Vous recevez des invités, vous leur préparez votre spécialité :</p>
<div>
  <input type="radio" id="huey" name="quest10" value={this.state.quest10} onChange={event => {
            this.setState({ quest10: event.target.value });
          }}/>
  <label htmlFor="huey">Des racines de mandragore bio achetées au marché local</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest10" value={this.state.quest10} onChange={event => {
            this.setState({ quest10: event.target.value });
          }}/>
  <label htmlFor="dewey">Des papillotes d’yeux de rat au basilic</label>
</div>
<div>
  <input type="radio" id="louie" name="quest10" value={this.state.quest10} onChange={event => {
            this.setState({ quest10: event.target.value });
          }}/>
  <label htmlFor="louie">Des criquets à la thai</label>
</div>
<div>
  <input type="radio" id="louie" name="quest10" value={this.state.quest10} onChange={event => {
            this.setState({ quest10: event.target.value });
          }}/>
  <label htmlFor="louie">Un soufflé de bébé phoques</label>
</div>
            <p className='Question'>11) Pensez-vous que les zombies devraient avoir le droit de vote?</p>
<div>
  <input type="radio" id="huey" name="quest11" value={this.state.quest11} onChange={event => {
            this.setState({ quest11: event.target.value });
          }}/>
  <label htmlFor="huey">Oui, même s’ils sont un peu lents, il faut accepter tout le monde</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest11" value={this.state.quest11} onChange={event => {
            this.setState({ quest11: event.target.value });
          }}/>
  <label htmlFor="dewey">Non</label>
</div>
<div>
  <input type="radio" id="louie" name="quest11" value={this.state.quest11} onChange={event => {
            this.setState({ quest11: event.target.value });
          }}/>
  <label htmlFor="louie">Pas sûr</label>
</div>
<div>
  <input type="radio" id="louie" name="quest11" value={this.state.quest11} onChange={event => {
            this.setState({ quest11: event.target.value });
          }}/>
  <label htmlFor="louie">Les zombies sont trop bêtes pour voter, ils feraient mieux d’arrêter les manifestations.</label>
</div>
            <p className='Question'>12) Le comte Dracula est…</p>
<div>
  <input type="radio" id="rep1" name="quest12" value={this.state.quest12} onChange={event => {
            this.setState({ quest12: event.target.value });
          }}/>
  <label htmlFor="rep1">Notre seigneur suprême</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest12" value={this.state.quest12} onChange={event => {
            this.setState({ quest12: event.target.value });
          }}/>
  <label htmlFor="dewey">Le représentant de l’oligarchie capitaliste </label>
</div>
<div>
  <input type="radio" id="louie" name="quest12" value={this.state.quest12} onChange={event => {
            this.setState({ quest12: event.target.value });
          }}/>
  <label htmlFor="louie">Un reptilien</label>
</div>
<div>
  <input type="radio" id="louie" name="quest12" value={this.state.quest12} onChange={event => {
            this.setState({ quest12: event.target.value });
          }}/>
  <label htmlFor="louie">Un méchant dictateur</label>
</div>
            <p className='Question'>13) Que pensez-vous de la mode des goules de porter des lunettes rondes?</p>
<div>
  <input type="radio" id="huey" name="quest13" value={this.state.quest13} onChange={event => {
            this.setState({ quest13: event.target.value });
          }}/>
  <label htmlFor="huey">Ce sont des bobos, c’est juste pour le style</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest13" value={this.state.quest13} onChange={event => {
            this.setState({ quest13: event.target.value });
          }}/>
  <label htmlFor="dewey">C’est trop tendance, j’adore !</label>
</div>
<div>
  <input type="radio" id="louie" name="quest13" value={this.state.quest13} onChange={event => {
            this.setState({ quest13: event.target.value });
          }}/>
  <label htmlFor="louie">Ils se la racontent.</label>
</div>
<div>
  <input type="radio" id="louie" name="quest13" value={this.state.quest13} onChange={event => {
            this.setState({ quest13: event.target.value });
          }}/>
  <label htmlFor="louie">Les valeurs se perdent.</label>
</div>
            <p className='Question'>14) Une odeur putride se fait sentir dans le bus :</p>
<div>
  <input type="radio" id="huey" name="quest14" value={this.state.quest14} onChange={event => {
            this.setState({ quest14: event.target.value });
          }}/>
  <label htmlFor="huey">Vous sortez au prochain arrêt</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest14" value={this.state.quest14} onChange={event => {
            this.setState({ quest14: event.target.value });
          }}/>
  <label htmlFor="dewey">Vous retenez votre souffle</label>
</div>
<div>
  <input type="radio" id="louie" name="quest14" value={this.state.quest14} onChange={event => {
            this.setState({ quest14: event.target.value });
          }}/>
  <label htmlFor="louie">C'est vous en fait</label>
</div>
<div>
  <input type="radio" id="louie" name="quest14" value={this.state.quest14} onChange={event => {
            this.setState({ quest14: event.target.value });
          }}/>
  <label htmlFor="louie">Vous cherchez et remercier la personne pour cette odeur exquise</label>
</div>
            <p className='Question'>15)Des brigands viennent pour vous voler :</p>
<div>
  <input type="radio" id="huey" name="quest15" value={this.state.quest15} onChange={event => {
            this.setState({ quest15: event.target.value });
          }}/>
  <label htmlFor="huey">Vous les mangez, tous.</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest15" value={this.state.quest15} onChange={event => {
            this.setState({ quest15: event.target.value });
          }}/>
  <label htmlFor="dewey">Vous préparez votre plus grand hurlement</label>
</div>
<div>
  <input type="radio" id="louie" name="quest15" value={this.state.quest15} onChange={event => {
            this.setState({ quest15: event.target.value });
          }}/>
  <label htmlFor="louie">Votre odeur les submerge de désespoir</label>
</div>
<div>
  <input type="radio" id="louie" name="quest15" value={this.state.quest15} onChange={event => {
            this.setState({ quest15: event.target.value });
          }}/>
  <label htmlFor="louie">Vous les invitez à partager la jeune vierge que vous venez de cuisiner</label>
</div>
            <p className='Question'>16) Ils m’entraînent au bout de la nuit...</p>
<div>
  <input type="radio" id="huey" name="quest16" value={this.state.quest16} onChange={event => {
            this.setState({ quest16: event.target.value });
          }}/>
  <label htmlFor="huey">Les démons de minuiiiiiiit </label>
</div>
<div>
  <input type="radio" id="dewey" name="quest16" value={this.state.quest16} onChange={event => {
            this.setState({ quest16: event.target.value });
          }}/>
  <label htmlFor="dewey">Personne, je reste dormir dans mon cercueil.</label>
</div>
<div>
  <input type="radio" id="louie" name="quest16" value={this.state.quest16} onChange={event => {
            this.setState({ quest16: event.target.value });
          }}/>
  <label htmlFor="louie">Mes potos squelettes et moi on joue au poker posey dans le canapey </label>
</div>
<div>
  <input type="radio" id="louie" name="quest16" value={this.state.quest16} onChange={event => {
            this.setState({ quest16: event.target.value });
          }}/>
  <label htmlFor="louie">Mes pintes de sang frais </label>
</div>
            <p className='Question'>17) Ta consommation de substances</p>
<div>
  <input type="radio" id="huey" name="quest17" value={this.state.quest17} onChange={event => {
            this.setState({ quest17: event.target.value });
          }}/>
  <label htmlFor="huey">Jamais ! (Excepté une fois au chalet…) </label>
</div>
<div>
  <input type="radio" id="dewey" name="quest17" value={this.state.quest17} onChange={event => {
            this.setState({ quest17: event.target.value });
          }}/>
  <label htmlFor="dewey">J’adoooooooore les sushis de petit doigt</label>
</div>
<div>
  <input type="radio" id="louie" name="quest17" value={this.state.quest17} onChange={event => {
            this.setState({ quest17: event.target.value });
          }}/>
  <label htmlFor="louie">Ma cons… Cons… de qu… quoi?</label>
</div>
<div>
  <input type="radio" id="louie" name="quest17" value={this.state.quest17} onChange={event => {
            this.setState({ quest17: event.target.value });
          }}/>
  <label htmlFor="louie">Je m’ouvre occasionnellement une bouteille de chianti pour déguster un foie avec des fêves au beurre</label>
</div>
            <p className='Question'>18) Le samedi soir…</p>
<div>
  <input type="radio" id="huey" name="quest18" value={this.state.quest18} onChange={event => {
            this.setState({ quest18: event.target.value });
          }}/>
  <label htmlFor="huey">Une petite tisane et hop ! Au lit !</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest18" value={this.state.quest18} onChange={event => {
            this.setState({ quest18: event.target.value });
          }}/>
  <label htmlFor="dewey">Je me prépare pour aller au bal masqué (ohé ohé)</label>
</div>
<div>
  <input type="radio" id="louie" name="quest18" value={this.state.quest18} onChange={event => {
            this.setState({ quest18: event.target.value });
          }}/>
  <label htmlFor="louie">Une petite rave dans le jardin de la dernière maison sur la gauche</label>
</div>
<div>
  <input type="radio" id="louie" name="quest18" value={this.state.quest18} onChange={event => {
            this.setState({ quest18: event.target.value });
          }}/>
  <label htmlFor="louie">Movie night !</label>
</div>

            <p className='Question'>19) Quel est votre type de soirée :</p>
<div>
  <input type="radio" id="huey" name="quest19" value={this.state.quest19} onChange={event => {
            this.setState({ quest19: event.target.value });
          }}/>
  <label htmlFor="huey">Dîner au chandelle dans un cimetière</label>
</div>
<div>
  <input type="radio" id="dewey" name="quest19" value={this.state.quest19} onChange={event => {
            this.setState({ quest19: event.target.value });
          }}/>
  <label htmlFor="dewey">Grosse fête chez Frank </label>
</div>
<div>
  <input type="radio" id="louie" name="quest19" value={this.state.quest19} onChange={event => {
            this.setState({ quest19: event.target.value });
          }}/>
  <label htmlFor="louie">Devant la tv dans la cave de Marco </label>
</div>
<div>
  <input type="radio" id="louie" name="quest19" value={this.state.quest19} onChange={event => {
            this.setState({ quest19: event.target.value });
          }}/>
  <label htmlFor="louie">Pendu dans un placard </label>
</div>

            <p className='Question'>20) Vos voisins les zombies font du bruit : </p>
<div>
  <input type="radio" id="huey" name="quest20" value={this.state.quest20} onChange={event => {
            this.setState({ quest20: event.target.value });
          }}/>
  <label htmlFor="huey">Vous préparez votre plus grand hurlement </label>
</div>
<div>
  <input type="radio" id="dewey" name="quest20" value={this.state.quest20} onChange={event => {
            this.setState({ quest20: event.target.value });
          }}/>
  <label htmlFor="dewey">Vous retournez dans votre grotte</label>
</div>
<div>
  <input type="radio" id="louie" name="quest20" value={this.state.quest20} onChange={event => {
            this.setState({ quest20: event.target.value });
          }}/>
  <label htmlFor="louie">Vous les rejoignez pour réveiller tout le cimetière</label>
</div>
<div>
  <input type="radio" id="louie" name="quest20" value={this.state.quest20} onChange={event => {
            this.setState({ quest20: event.target.value });
          }}/>
  <label className='LastLabel' htmlFor="louie">Vous preparez vos pouces quies</label> 
</div>
<div>
<img src ={`${process.env.PUBLIC_URL}/asset/textmatch.gif`}/><br/>
</div>
<Link to='/match'><button className='Submit' type="submit" onClick={this.submit} ><img className='Button' src='https://media.giphy.com/media/11tRBTlIlmb10k/giphy.gif'/></button></Link>
  </Fragment>
      
      )
  }
};
export default Form;

