const button = document.getElementById('calculate');
button.onclick = async () => {
    const block = document.getElementById('block');
    block.innerHTML = '';

    const firstCoord = Number(document.getElementsByName('first_coord')[0].value);
    const secondCoord = Number(document.getElementsByName('second_coord')[0].value);

    const tileX = Math.trunc((firstCoord + 180) * (Math.pow(2, 19) / 360));
    const tileY = Math.trunc((secondCoord * Math.pow(2, 19)) / 180) ;

    block.insertAdjacentHTML('beforeend',
        `<div">
                   <img src="https://core-carparks-renderer-lots.maps.yandex.net/maps-rdr-carparks/tiles?l=carparks&x=${tileX}&y=${tileY}&z=19&scale=1&lang=ru_RU"
                    alt="https://core-carparks-renderer-lots.maps.yandex.net/maps-rdr-carparks/tiles?l=carparks&x=${tileX}&y=${tileY}&z=19&scale=1&lang=ru_RU">
                  <div>
                    <span>Значение X плитки</span>
                    <span>${tileX}</span>
                  </div>
                   <div>
                    <span>Значение Y плитки</span>
                   <span>${tileY}</span>
                  </div>
               </div>`
    );
}