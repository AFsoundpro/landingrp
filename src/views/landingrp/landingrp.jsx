import React, { useEffect } from 'react';
import "./landingrp.css";
import Footer from '../../components/footer/footer';

function Landingrp() {
    // useEffect(() => {
    //     function initMap() {
    //         var location = { lat: LATITUD, lng: LONGITUD }; // reemplace LATITUD y LONGITUD con las coordenadas del local
    //         var map = new window.google.maps.Map(document.getElementById('map'), {
    //             zoom: 15, // nivel de zoom del mapa
    //             center: location // ubicación del mapa
    //         });
    //         var marker = new window.google.maps.Marker({
    //             position: location,
    //             map: map
    //         });
    //     }

    //     initMap();
    // }, []);

    return (
        <div>
            {/* Header */}
            <header className="header">
                <h1>
                    <img src="/img/Logo-RP-claro.png" alt="" />
                </h1>
            </header>

            {/* Navigation */}
            <nav className="nav">
                <a href="#">Inicio</a>
                <a href="#">Quienes Somos</a>
                <a href="#">Servicios</a>
                <a href="#">Tarifas</a>
                <a href="#">Localizacion</a>
            </nav>

            {/* Quienes Somos */}
            <section className="content who">
                <h2 className="title">Quienes Somos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis eligendi quaerat deleniti
                    officiis! Debitis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati praesentium doloribus sequi hic
                    minus voluptatem officiis quisquam et repudiandae. Suscipit eaque quos laborum quis impedit modi fuga?
                    Consectetur aliquam at, magni ea quidem itaque eos excepturi tempore aspernatur dolor dignissimos non
                    sapiente, in debitis ut. Ducimus ipsa quidem omnis?</p>
            </section>

            {/* Servicios */}
            <section className="content servicios">
                <h2 className="title">Servicios</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt accusantium autem fugit
                    error perferendis.</p>
                <ul className="list-servicios">
                    <li>
                        <figure>
                            <img src="/img/usa1.png" alt="" />
                            <figcaption>Lorem, ipsum dolor.</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/colombia1.jpg" alt="" />
                            <figcaption>Lorem, ipsum dolor.</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/cajaadd.png" alt="" />
                            <figcaption>Lorem, ipsum dolor.</figcaption>
                        </figure>
                    </li>
                </ul>
            </section>

            {/* Tarifas */}
            <section className="content tarifas">
                <article className="contain">
                    <h2 className="title">--Tarifas--</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt repudiandae laborum
                        sapiente repellat blanditiis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo hic aperiam dolore reiciendis
                        fugit, iusto labore, eveniet quam inventore voluptatem at possimus ea dolor vel accusamus quasi
                        maiores repudiandae itaque. Molestias earum, ipsa a quis, eaque odit consectetur dolorum fugiat
                        quaerat labore autem magnam cumque eligendi nulla. Hic, vel pariatur?</p>
                    <a href="#" className="btn">contactanos</a>
                </article>
            </section>

            {/* Localizacion */}
            <section className="content localizacion">
                <h2 className="title">Localizacion</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, blanditiis laborum deleniti
                    ratione expedita adipisci!</p>
                <figure className="map">
                    <img src="/img/buzon.png" alt="" />
                </figure>
                <div id="map" style={{ height: '500px' }}></div>
            </section>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Landingrp;