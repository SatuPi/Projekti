Projektin kuvaus

Kyseessä on front end -harjoitusprojekti, jossa on keskitytty erityisesti erilaisten sivuosioiden rakenteeseen ja toiminnallisuuksien monipuoliseen kokeilemiseen (ei niinkään esimerkiksi ux tai usability periaatteisiin). Tavoitteena ei ole ollut rakentaa valmiita, kaupallisia verkkosivuja, vaan harjoitella käytännön taitoja HTML:n, CSS:n ja JavaScriptin avulla.

Sivustolla on toteutettu seuraavat osiot ja ominaisuudet:

Navigaatio: Ylävalikko, jossa näkyvät pääsivut. Responsiivinen mobiilivalikko (hamburilaisvalikko), joka avautuu ja sulkeutuu JavaScriptin avulla.

Hero-osio: Esittelyvideo (video-elementti), jonka päällä on demo-teksti sekä toimintapainikkeet ("Liity asiakkaaksi" (oletuksena pinkki) ja "Varaa demo").

Palveluosio: Kolme palvelukorttia, jotka sisältävät kuvauksen ja ikonin. Hover-efektissä muut kortit blurrautuvat ja tarkastelussa oleva korostuu ja sen check-ikoni muuttuu vihreäksi.

Hinnasto: Kaksi hintakorttia, joissa hover ominaisuudella näkyy reunukset ja toisessa tarjoushinta. Kortit on sijoitettu CSS Gridin avulla.

Custom-palveluita esittelevä kuvarulla.

Asiantuntijat-osio: Kortit asiantuntijoista, responsiivinen ulkoasu, kuva ja teksti.

Usein kysytyt kysymykset (UKK): Accordion-rakenne, jossa kysymykset avautuvat ja sulkeutuvat yksi kerrallaan. (Tälle en tehnyt muutoksia moduulin esimerkeistä.)

Footer: Kolme laatikkoa (uutiskirje, yhteystiedot/logo, sosiaalisen median linkit). Uutiskirje-osiossa animoitu hover (heartbeat) ja siirtyvät placeholder-tekstit.

Popup-ikkunat:

Liity asiakkaaksi -painikkeen lomakepopup (nimi, sähköposti, valintaruudut).

Varaa demo -painike avaa ajanvarausikkunan.

Kirjaudu -hover-popup, jossa kirjautumiskentät.

Takaisin ylös -nappi, jossa käytetty käännettyä raketti-ikonia.

Ulkoasuun on haettu yhtenäistä teemaa avaruudesta. Useissa otsikoissa käytetään avaruuskuvaa tekstin taustana ja useat painikkeet, popup-ikkunat sekä footer-laatikot hyödyntävät avaruusaiheista taustakuvaa. 
Kirjaudu painikkeessa on astronatti-ikoni/emoji. Ylös-napissa on käytetty rakettiaiheista ikonia, joka on suunnattu ylöspäin kallistamalla sitä 45 astetta vasemmalle.

Kaikki osiot on suunniteltu skaalautumaan eri ruuduille käyttäen Flexboxia ja CSS Grid -tekniikoita. Projekti sisältää myös JavaScript-pohjaisia vuorovaikutuksia ja responsiivisia säätöjä erityisesti mobiilinäkymää varten.

Projektissa on hyödynnetty kurssin moduulitehtävissä rakennettua pohjaa. 
Kuvissa on hyödynnetty Pinterestiä (avaruustaustat ja kuvat, video) ja Sora-kuvanluontia (planeetat, asiantuntijat). 
Vinkkejä ja koodiapua eri osioihin ja toimintoihin on haettu Instagramista (esimerkiksi frontendjoe, coding.vibess, coding.stella ja the_coding_wizard). 
Apua virheiden etsimiseen ja koodin kirjoittamiseen on saatu keskustelemalla ChatGPT:n kanssa (esim. promptilla "Miten saan tällaisen heartbeat animaation uutiskirjekorttiin (+screenshot instagram postauksesta)").
