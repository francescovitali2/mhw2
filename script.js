const prodotti = [
    { imgSrc: 'Prodotto1.jpg', hoverSrc: 'prodotto5.jpg', titolo: 'SWEATERS', descrizione: 'Questi capi presentano vita media, vestibilità dritta, lunghezza regolare e fascia in vita, realizzato al 100% in lino.'},
    { imgSrc: 'Prodotto2.jpg', hoverSrc: 'prodotto6.jpg', titolo: 'DENIM', descrizione: 'Abbiamo combinato il nostro tessuto di lino morbido e traspirante con l amata forma di ispirazione artigianale dei nostri Utility Barrel Pant.'},
    { imgSrc: 'Prodotto3.jpg', hoverSrc: 'prodotto7.jpg', titolo: 'TOP', descrizione: 'Realizzata nel nostro tessuto preferito per la stagione calda, la canotta in lino con scollo rotondo presenta un doppio scollo rotondo con una vestibilità comoda.'},
    { imgSrc: 'Prodotto4.jpg', hoverSrc: 'prodotto8.jpg', titolo: 'BOTTOM', descrizione: 'Questo capo è caratterizzato da vita alta, gamba a botte, lunghezza regolare, in cotone organico.'}
  ];

  const listaProdotti = document.getElementById('listaProdotti');
  prodotti.forEach(prodotto => {
    const nuovoElemento = document.createElement('li');
    const imgElement = document.createElement('img');
    imgElement.src = prodotto.imgSrc;
    imgElement.setAttribute('data-hover-src', prodotto.hoverSrc); 
    nuovoElemento.appendChild(imgElement);

    const titolo = document.createElement('h3');
    titolo.textContent = prodotto.titolo;
    nuovoElemento.appendChild(titolo);

    const descrizione = document.createElement('p');
    descrizione.textContent = prodotto.descrizione;
    descrizione.classList.add('descrizione');
    nuovoElemento.appendChild(descrizione);

    const tasto = document.createElement('a');
    tasto.textContent = 'Show More';
    tasto.classList.add('tasto');
    nuovoElemento.appendChild(tasto);

    tasto.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const testoVisibile = descrizione.style.display !== 'none';
        if (testoVisibile) {
            descrizione.style.display = 'none';
            tasto.textContent = 'Show More';
        } else {
            descrizione.style.display = 'block';
            tasto.textContent = 'Show Less';
        }
    });

    imgElement.addEventListener('mouseover', () => {
      imgElement.src = imgElement.getAttribute('data-hover-src');
    });

    imgElement.addEventListener('mouseout', () => {
      imgElement.src = prodotto.imgSrc;
    });
    listaProdotti.appendChild(nuovoElemento); 
});


