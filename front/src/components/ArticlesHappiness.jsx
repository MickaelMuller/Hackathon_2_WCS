import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Articles.scss';

const Articles = () => {
  return (
    <Container className='Articles'>
      <Row className='row-border'>
        <Col lg='8'>
          <Row>
            <Col lg='6'>
              <article className='article-body'>
                <h3>APPLE se met au Green </h3>
                <p>En effet, Steve Jobs oblige désormais tous ses appareils à avoir une extinction obligatoire par jour. Ainsi lorsqu'ils se mettent en veillent automatiquement ils s'éteignent sans enlever les alarmes, réveils, les rappels etc.</p>
              </article>
            </Col>
            <Col lg='6' className='image-article'>
              <img className="art1" src='/images/iphone.jpg' alt='iphone' />
              <p className='legend'>Le nouvel Iphone prend en compte la "mise en veille augmentée"</p>
            </Col>
            <Col lg='12' className="article-top">
              <article className='article-body'>
                <h3>Planète 0 déchet ! </h3>
                <img className="image-big" src='/images/plage.jpg' alt='plage propre' />
                <p className='legend'>Les initiatives océanes ont porté leurs fruits</p>
                <p>Depuis quelques années nous voyons notre planète évoluer. En effet, les déchets diminuent à grand pas, d’ici quelques mois, nous n’aurons plus aucun déchet, tout sera recyclable et réutilisable. Tous à vos poubelles !
                                </p>
              </article>
            </Col>
            <Col lg='12' className="article-top">
              <article className='article-body'>
                <h3>La réparabilité enseignée dans les écoles </h3>
                <img className="image-big" src='/images/ecole.jpg' alt='plage propre' />
                <p className='legend'>Un nouveau type d'enseignement fait son entrée au collège</p>
                <p>Entre l’anglais et les additions, un nouvel enseignement a vu le jour dans nos écoles primaires. Faites place à la réparabilité : les enfants apprennent et comprennent comment consommer différemment en étant éco-responsables. Encore une belle initiative en faveur de notre jolie planète.
                                </p>
              </article>
            </Col>
          </Row>
        </Col>
        <Col lg='4' className="article-border">
          <Row className='row-border'>
            <Col lg='6'>
              <article>
                <h3>La consommation energitique mondiale a baissé de 20% en 3 ans </h3>
                <p>Depuis que les entreprises mondiales ont toutes leurs bilans carbone positifs, la consommation énergétique mondiale a fortement baissé depuis 3 ans. Le nucléaire et le pétrole ne sont plus que de l’histoire ancienne.
                                </p>
              </article>
            </Col>
            <Col lg='6' className='image-article'>
              <img src='/images/energie.png' alt='consommation energetique' />
              <p className='legend'>Des chiffres positifs et réconfortants</p>
            </Col>
          </Row>
          <Row>
            <Col lg='6'>
              <article>
                <h3>Amazon plante des arbres à l'emplacement de ses datacenters </h3>
                <p>Tous les datas center du grand leader Amazon sont rasés à ce jour pour faire place à de nouvelles forêts dans le monde entier. Soyez prêt à retrouver votre mère nature !
                                </p>
              </article>
            </Col>
            <Col lg='6' className='image-article square'>
              <img src='/images/foret.jpeg' alt='reforestation' />
              <p className='legend'>Une initiative saluée par les sénateurs des états concernés</p>
            </Col>
          </Row>
          <Row className="article-top">
            <Col lg='6'>
              <article>
                <h3>Une nouvelle espèce d’orang-outan découverte en Indonésie</h3>
                <p>Il s’agit de la première nouvelle espèce de grands singes confirmée par la science depuis 1929. Une nouvelle espèce d’orang-outan a été découverte sur l’île de Sumatra en Indonésie.
                                </p>
              </article>
            </Col>
            <Col lg='6' className='square'>
              <img src='/medias/singe.jpg' alt='orang-outan' />
              <p className='legend'>Une nouvelle espèce d’orang-outan</p>
            </Col>
          </Row>
        </Col>
        <hr />
      </Row>
      <Row>
        <Col className="papa-article-bottom">
          <img src='/images/entreprise.jpeg' alt='catastrophe' className='image-article-bottom' />
          <article className='article-body'>

            <p className='legend papa-article-bottom'>Pari réussi pour les entreprises qui ont appliqué la loi Ecologie 2020</p>
            <h3>Les entreprises à 100% avec la planète ! </h3>
            <p>Tous les nouveaux outils de bilan carbone de projets numériques ont été de grande ampleur cette année. En effet, chaque entreprise s’est mise aux normes afin que leur bilan carbone soit positif. Résultat ? Toutes ont pu continuer leurs activités tout en respectant la planète.</p>
          </article>
        </Col>
      </Row>
    </Container>

  );
}

export default Articles;