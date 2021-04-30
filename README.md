# ReactFrontEndNK

Reactiin oli mielestäni todella vaikeaa päästä sisälle. Tästä syystä sovellus hyödyntää paikallista JSON tiedostoa API:n sijaan, sillä en onnistunut saamaan ajax-kutsua toimimaan. Lisäksi minulla oli tapahtumakuuntelijoiden kanssa ongelmia, ja jouduin hyödyntämään Bootstrapin toimintoja niiden sijasta. Sovellus sisältää vain toiminnon, joka tulostaa kaikki tiedot ruudulle taulukkomuodossa. Tiedostot, jotka sisältävät omaa koodiani ovat src kansiossa olevat index.js, styles.css ja leffat.json tiedostot, sekä public kansiossa oleva index.html.

Lopuksi yritin julkaista sovelluksen Herokuun sekä Netlifyhin, mutta kumpikaan näistä ei toiminut. Heroku herjasi tiedostojen, mm. package.json ja index.html, sijainneista, ja Netlify:ssä julkaisu periaatteessa toimi, mutta kun siirtyy sovellukseen se antaa "Page not found" -ilmoituksen. En onnistunut löytämään tässä ajassa ratkaisua näihin ongelmiin.

Tässä kuitenkin linkki lyhyeeseen näyttötallennukseen, joka näyttää miten sovellus toimii lokaalisti: https://youtu.be/JkvhWD8syrA
