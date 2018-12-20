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
                            <h3>Le 7ème continent : permis de construire pour 300 logements</h3>
                                <p>En septembre 2024 l’annonce est tombée comme un couperet lors des discussions sur le projet d’habitation sur le 7ème continent, causé par le manque de reconditionnement de vos iPhones. Un an après, il a été signé et les travaux sont en cours depuis novembre… (lire la suite)
                     </p>
                            </article>
                        </Col>
                        <Col lg='6' className='image-article'>
                        <img className="art1" src='https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-0/p480x480/48394032_1871774179588627_7450304688324345856_n.jpg?_nc_cat=103&_nc_ht=scontent-cdt1-1.xx&oh=9a88244dc31d537c926f244477f2cf4d&oe=5CD8696D' alt='catastrophe' />
                            <p className='legend'>En septembre 2024 l’annonce est tombée comme un couperet lors des discussions sur le projet d’habitation sur le 7ème continent.</p>
                        </Col>
                        <Col lg='12' className="article-top">
                            <article className='article-body'>
                                <h3>Le dernier mâle rhinocéros blanc du Nord s'est éteint</h3>
                                <img className="image-big" src='/images/rhino.jpeg' alt='catastrophe' />
                                <p className='legend'>Sudan s'est éteint. Il était le dernier représentant mâle de la sous-espèce de rhinocéros blanc du Nord</p>


                                <p>Sudan, 45 ans, souffrait depuis longtemps de complications de santé. Il ne reste désormais que deux femelles vivantes de cette sous-espèce.Il était le dernier mâle. Le plus convoité de sa sous-espèce. Sudan, un rhinocéros blanc du Nord, s'est éteint à l'âge de 45 ans. Le dernier représentant de la sous-espèce Ceratotherium simum cottoni souffrait depuis longtemps de complications de santé liées à son âge. Il avait également contracté plusieurs infections et son état de santé s'était ces derniers temps "aggravé de façon significative", a indiqué l'Ol Pejeta Conservancy dans un communiqué. Cette organisation non gouvernementale prenait soin de l'animal dans sa réserve de 350 km², située à quelque 200 km au nord de Nairobi, au Kenya. Les soignants ont constaté que "son état s'est aggravé de façon significative" et qu'il "était incapable de se lever". "L'équipe vétérinaire a pris la décision de l'euthanasier".</p>
                            </article>
                        </Col>
                    </Row>
                </Col>
                <Col lg='4' className="article-border">
                    <Row className='row-border'>
                    <Col lg='6'>
                            <article>
                                <h3>Météo : +45c° depuis 2023 </h3>
                                <p>Des températures de +45c° en moyenne sont constamment enregistrées sur notre planète terre suite à un excès de consommation de votre réseau 4G depuis de nombreuses années… (lire la suite)
                     </p>
                            </article>
                        </Col>
                        <Col lg='6' className='image-article'>
                            <img src='/images/desert.jpg' alt='desert' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col> 
                    </Row>
                    <Row>
                        <Col lg='6'>
                            <article>
                                <h3>Désastre : l'eau se fait de plus en plus rare</h3>
                                <p>Des températures de +45c° en moyenne sont constamment enregistrées sur notre planète terre suite à un excès de consommation de votre réseau 4G depuis de nombreuses années… (lire la suite)
                     </p>
                            </article>
                        </Col>
                        <Col lg='6' className='image-article square'>
                            <img src='/images/mer.jpeg' alt='mer assechée' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col>
                    </Row>
                    <Row className="article-top">
                        <Col lg='6'>
                            <article>
                                <h3>Gouvernement : Nabila passe à la culture </h3>
                                <p>Des températures de +45c° en moyenne sont constamment enregistrées sur notre planète terre suite à un excès de consommation de votre réseau 4G depuis de nombreuses années… (lire la suite)
                     </p>
                            </article>
                        </Col>
                        <Col lg='6' className='square'>
                            <img src='/images/culture.jpg' alt='catastrophe' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col>
                    </Row>
                </Col>
                <hr />
            </Row>
            <Row>
                <Col>
                <img src='/medias/chat4(1).jpg' alt='catastrophe' className='image-article-bottom'/>
                <article className='article-body'>
                
                            <p className='legend'>Pauvre chatte en voie de disparition</p>
                                <h3>Espèce en voie de disparition : LE CHAT </h3>
                                <p>Du jamais vu sur cette planète, le chat est actuellement en voie de disparition due à la surconsommation de vos vidéos YouTube. Dites bonjour à la nouvelle Youtubeuse Lil Miquela, et dites au revoir à vos matous… (lire la suite)</p>
                            </article>
                </Col>
            </Row>
        </Container>

    );
}

export default Articles;
