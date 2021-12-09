import React from "react"
import '../Styles/Footer.css';


export default class Footer extends React.Component {
    render () {
    return(
      <div className="footer_container">
          <footer>
            <div className="footer_bloc1">
              <div>
                <h3 className="footer_h3">DÉCOUVREZ NATIONAL GEOGRAPHIC</h3>
                  <ul className="ul_footer">
                    <li className="li_footer">
                      <a className="footer_a" href="https://www.nationalgeographic.fr/">Site officiel</a>
                    </li>
                  </ul>
              </div>
              <div>
                <h3 className="footer_h3">À PROPOS DE NATIONAL GEOGRAPHIC</h3>
                  <ul className="ul_footer">
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">Thématiques et auteurs</a>
                    </li>
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">National Geographic Partners</a>
                    </li>
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">National Geographic Society</a>
                    </li>
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">Grille TV</a>
                    </li>
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">Disney+</a>
                    </li>
                  </ul>
                </div>
                <div>
                <h3 className="footer_h3">S'ABONNER</h3>
                  <ul className="ul_footer">
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">Magasines</a>
                    </li>
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">Newsletter</a>
                    </li>
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">Livres</a>
                    </li>
                    <li className="li_footer">
                      <a className="footer_a" href="google.com">Disney+</a>
                    </li>
                  </ul>
                </div>
                <div>
                <h3 className="footer_h3">NOUS SUIVRE</h3>
                <div >
                  <div className="bloc_social_media">
                    <a className="footer_a margin_icons_SM" href="https://www.facebook.com/NatGeoFrance/" target="_blank" rel="noopener noreferrer" data-no-external-disclaimer="">
                      <svg viewBox="0 0 754 754" aria-label="facebook" width="10" height="10" className="css-1psceqd">
                        <path transform="scale(1, -1) translate(-135, -825)" d="M568 581v77.8c0 29.6 19.6 36.4 33.2 36.4 13.8 0 84.2 0 84.2 0v128.8l-116.2 0.8c-128.6 0-157.6-96.2-157.6-158.2v-86h-74.6v-132.6h74.6c0-170.8 0-376.6 0-376.6h156.2c0 0 0 207.8 0 376.6h105.4l13.8 133h-119z"></path>
                        </svg>
                        <span arial-label="facebook" role="button" className="hidden"></span>
                    </a>
                    <a className="footer_a margin_icons_SM" href="https://twitter.com/NatGeoFrance" target="_blank" rel="noopener noreferrer" data-no-external-disclaimer="" >
                      <svg viewBox="0 0 804 804" aria-label="twitter" width="10" height="10" className="css-1psceqd">
                        <path transform="scale(1, -1) translate(-110, -850)" d="M913.8 716.4c-29.8-14.4-61.4-23.8-94.8-28 34 22 60.2 56.6 72.8 98-32-20.2-67.4-34.6-105-43.2-29.8 34.6-73 56.2-120.2 56.2-91 0-164.8-79.4-164.8-177.6 0-13.8 1.4-27.4 4.2-40.2-136.8 7-258.4 78-339.8 185-14-26.2-22.2-56.6-22.2-89.2 0-61.4 29-116 73.2-147.4-27 1-52.6 8.6-74.6 22.2 0-0.8 0-1.6 0-2.4 0-85.8 56.8-157.4 132.2-174-13.8-4-28.4-5.8-43.6-5.8-10.6 0-20.6 0.8-30.8 3.2 21-70.8 82-122.2 154-123.2-56.4-47.8-127.4-76-204.8-76-13.4 0-26.6 0.8-39.4 2.4 73-50.6 159.4-80 252.8-80 303.2 0 469.2 270.4 469.2 505 0 7.6-0.2 15.2-0.6 22.6 32 25.6 60 56.8 82.2 92.4z"></path>
                      </svg>
                      <span arial-label="twitter" role="button" className="hidden">twitter</span>
                    </a>                  
                    <a className="footer_a margin_icons_SM" href="https://www.instagram.com/natgeo_france/" target="_blank" rel="noopener noreferrer" data-no-external-disclaimer="">
                      <svg viewBox="0 0 844 844" aria-label="instagram" width="10" height="10" className="css-1psceqd">
                        <path transform="scale(1, -1) translate(-90, -870)" d="M514 794c112.6 0 126-0.4 170.6-2.4 41.2-1.8 63.4-8.8 78.4-14.6 19.6-7.6 33.8-16.8 48.6-31.6s24-28.8 31.6-48.6c5.8-14.8 12.6-37.2 14.6-78.4 2-44.4 2.4-57.8 2.4-170.6s-0.4-126-2.4-170.6c-1.8-41.2-8.8-63.4-14.6-78.4-7.6-19.6-16.8-33.8-31.6-48.6s-28.8-24-48.6-31.6c-14.8-5.8-37.2-12.6-78.4-14.6-44.4-2-57.8-2.4-170.6-2.4s-126 0.4-170.6 2.4c-41.2 1.8-63.4 8.8-78.4 14.6-19.6 7.6-33.8 16.8-48.6 31.6s-24 28.8-31.6 48.6c-5.8 14.8-12.6 37.2-14.6 78.4-1.8 44.8-2.2 58.2-2.2 170.8s0.4 126 2.4 170.6c1.8 41.2 8.8 63.4 14.6 78.4 7.6 19.6 16.8 33.8 31.6 48.6s28.8 24 48.6 31.6c14.8 5.8 37.2 12.6 78.4 14.6 44.4 1.8 57.8 2.2 170.4 2.2zM514 870c-114.6 0-129-0.4-174-2.6-45-2-75.6-9.2-102.4-19.6-27.8-10.8-51.2-25.2-74.8-48.6-23.4-23.4-37.8-47-48.6-74.8-10.4-26.8-17.6-57.6-19.6-102.4-2-45-2.6-59.4-2.6-174s0.4-129 2.6-174c2-45 9.2-75.6 19.6-102.4 10.8-27.8 25.2-51.2 48.6-74.8 23.4-23.4 47-37.8 74.8-48.6 26.8-10.4 57.6-17.6 102.4-19.6 45-2 59.4-2.6 174-2.6s129 0.4 174 2.6c45 2 75.6 9.2 102.4 19.6 27.8 10.8 51.2 25.2 74.8 48.6 23.4 23.4 37.8 47 48.6 74.8 10.4 26.8 17.6 57.6 19.6 102.4 2 45 2.6 59.4 2.6 174s-0.4 129-2.6 174c-2 45-9.2 75.6-19.6 102.4-10.8 27.8-25.2 51.2-48.6 74.8-23.4 23.4-47 37.8-74.8 48.6-26.8 10.4-57.6 17.6-102.4 19.6-45 2.2-59.4 2.6-174 2.6v0zM514 664.8c-119.6 0-216.8-97-216.8-216.8s97.2-216.8 216.8-216.8 216.8 97.2 216.8 216.8-97.2 216.8-216.8 216.8zM514 307.4c-77.6 0-140.6 63-140.6 140.6s63 140.6 140.6 140.6 140.6-63 140.6-140.6-63-140.6-140.6-140.6zM789.8 673.2c0-27.946-22.654-50.6-50.6-50.6s-50.6 22.654-50.6 50.6c0 27.946 22.654 50.6 50.6 50.6s50.6-22.654 50.6-50.6z"></path>
                      </svg>
                      <span arial-label="instagram" role="button" className="hidden">instagram</span>
                    </a>                  
                    <a className="footer_a margin_icons_SM" href="https://flipboard.com/@NatGeoFrance" target="_blank" rel="noopener noreferrer" data-no-external-disclaimer="">
                      <svg viewBox="0 0 500 500" aria-label="flipboard" width="10" height="10" className="css-1psceqd">
                        <path d="M0,0V500H500V0ZM400,200H300V300H200V400H100V100H400Z"></path>
                      </svg>
                      <span arial-label="flipboard" role="button" className="hidden">flipboard</span>
                    </a>                              
                    <a className="footer_a margin_icons_SM" href="https://www.youtube.com/channel/UCT60XBtfRQzf5NKFGDNbfCw" target="_blank" rel="noopener noreferrer" data-no-external-disclaimer="">
                      <svg viewBox="-2 -2 1028 725" aria-label="youtube" width="10" height="10" className="css-1psceqd">
                        <path d="M1013.023 156.281s-9.981-70.389-40.606-101.386c-38.842-40.684-82.38-40.885-102.346-43.267C727.134 1.296 512.721 1.296 512.721 1.296h-.444s-214.408 0-357.35 10.332c-19.967 2.381-63.49 2.583-102.346 43.267C21.956 85.892 11.99 156.281 11.99 156.281S1.775 238.94 1.775 321.6v77.493c0 82.658 10.215 165.317 10.215 165.317s9.966 70.39 40.591 101.387c38.856 40.684 89.896 39.397 112.629 43.661 81.718 7.836 347.29 10.261 347.29 10.261s214.634-.323 357.571-10.655c19.966-2.382 63.504-2.583 102.346-43.267 30.625-30.997 40.606-101.387 40.606-101.387s10.2-82.659 10.2-165.317V321.6c.001-82.66-10.2-165.319-10.2-165.319zM407.047 493L407 206l276 144-275.953 143z"></path>
                      </svg>
                      <span arial-label="youtube" role="button" className="hidden">youtube</span>
                    </a>
                  </div>
                  </div>                    
                </div>
              </div>
           
              <div className="bloc2_footer">
              <div className="partie1-bloc2_footer">
                <ul className="ul_bloc2_footer ">
                  <li className="li_footer">
                    <a className="footer_a" href="google.com">Termes et conditions</a>
                  </li>
                  <li className="li_footer">
                    <a className="footer_a" href="google.com">Politique de Confidentialite (Mise à jour)</a>              
                  </li>
                  <li className="li_footer">
                    <a className="footer_a" href="google.com">Les Cookies</a>              
                  </li>
                  <li className="li_footer">
                    <a className="footer_a" href="google.com">Gestion des Consentements</a>              
                  </li>
                  <li className="li_footer">
                    <a className="footer_a" href="google.com">Gestion des Cookies</a>              
                  </li>
                </ul>
              </div>
              <div className="partie2-bloc2_footer">
              COPYRIGHT © 1996-2015 NATIONAL GEOGRAPHIC SOCIETY. COPYRIGHT © 2015-2017 NATIONAL GEOGRAPHIC PARTNERS, LLC. TOUS DROITS RÉSERVÉS.
              </div>
              </div>
          </footer>
        </div>
    )
  }

}
  
