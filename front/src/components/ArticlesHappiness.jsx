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
                            <img src='/images/catastrophe1.jpg' alt='catastrophe' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg='4' className="article-border">
                    <Row className='row-border'>
                        <Col lg='6'>
                            <article>
                                <h3>Les dinosaures sont de retour ! </h3>
                                <p>Après de nombreuses années sans nouvelle d’eux, certaines espèces dinosaures ont refait leur apparition depuis fin mars sur notre belle planète. Ne soyez donc pas surpris de voir un ptérodactyle voler au-dessus de votre tête. 
                     </p>
                            </article>
                        </Col>
                        <Col lg='6' className='image-article'>
                            <img src='/images/deforestation.jpeg' alt='catastrophe' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='6'>
                            <article>
                                <h3>Planète 0 déchet ! </h3>
                                <p>Depuis quelques années nous voyons notre planète évoluer. En effet, les déchets diminuent à grand pas, d’ici quelques mois, nous n’aurons plus aucun déchet, tout sera recyclable et réutilisable. Tous à vos poubelles ! 
                     </p>
                            </article>
                        </Col>
                        <Col lg='6' className='image-article'>
                            <img src='/images/desert.jpg' alt='catastrophe' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col>
                    </Row>
                </Col>
                <hr />
            </Row>
            <Row>
                <Col>
                <img src='/images/continent.jpg' alt='catastrophe' className='image-article-bottom'/>
                <article className='article-body'>
                
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                                <h3>Les entreprises à 100% avec la planète ! </h3>
                                <p>Tous les nouveaux outils de bilan carbone de projets numériques ont été de grande ampleur cette année. En effet, chaque entreprise s’est mise aux normes afin que leur bilan carbone soit positif. Résultat ? Toutes ont pu continuer leurs activités tout en respectant la planète.</p>
                            </article>
                </Col>
            </Row>
        </Container>

    );
}

export default Articles;