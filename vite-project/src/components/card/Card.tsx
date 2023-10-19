import Script from './script.js';
import { useEffect } from 'react';
import './style.css';

function Card () {
  useEffect(() => {
    Script();
  }, []);

  return (
    <>
      <main className="main flow">
        <h1 className="main__heading">Les Séances</h1>
        <div className="main__cards cards">
          <div className="cards__inner">
            <div className="cards__card card">
              <h2 className="card__heading">Enseignement</h2>
              <p className="card__price">À partir de 25 €</p>
              <ul role="list" className="card__bullets flow">
                <li>Cours ponctuel</li>
                <li>Carte de 5 ou 10 cours</li>
                <li>Forfait mensuel (1 à 2 cours par semaine)</li>
                <li>Passage de galop</li>
              </ul>
              <a href="#basic" className="card__cta cta">
                Commencer l'enseignement
              </a>
            </div>
            <div className="cards__card card">
              <h2 className="card__heading">Travail du cheval</h2>
              <p className="card__price">À partir de 30 €</p>
              <ul role="list" className="card__bullets flow">
                <li>1 séance ponctuelle</li>
                <li>Carte de 5 ou 10 cours</li>
                <li>Forfait mensuel (1 à 5 séances par semaine)</li>
              </ul>
              <a href="#pro" className="card__cta cta">
              Commencer le travail du cheval
              </a>
            </div>
            <div className="cards__card card">
              <h2 className="card__heading">Autres prestations</h2>
              <p className="card__price">Me contacter</p>
              <ul role="list" className="card__bullets flow">
                <li>Remplacement / Renfort de personnel</li>
                <li>Gardiennage</li>
              </ul>
              <a href="#ultimate" className="card__cta cta">
                Demande de devis
              </a>
            </div>
          </div>
          <div className="overlay cards__inner" />
        </div>
      </main>
    </>
  );
}

export default Card;