
var data = [
    { id: 1, title: 'ONLINE FORMS', images: 'https://www.dentalwellnessteam.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/05/Depositphotos_64582857_m-2015.jpg.webp' },
    { id: 2, title: 'MEET DR.WILLS', images: 'https://www.pankey.org/wp-content/uploads/Dr.-Wills2.jpg' },
    { id: 3, title: 'PATIENT REVIEWS', images: 'https://portaleducacao.vteximg.com.br/arquivos/ids/163176-350-189/Thumb-Programa-de-preparacao-para-aposentadoria.png?v=638024076305370000' },
    { id: 4, title: 'FUN TEAM PHOTOS', images: 'https://transform.octanecdn.com/crop/760x500/https://octanecdn.com/my1stchoicedentalcarecom/my1stchoicedentalcarecom_436180616.jpg' },
];


var htmlElements = data.map(function(item) {
    return '<div data-aos="fade-left"  class="grow-map-div">' +
               '<h3>' + item.title + '</h3>' +
               '<img  src="' + item.images + '" alt="" class="grow-item-image"> ' +
               
              
           '</div>';
});

document.getElementById('output').innerHTML = htmlElements.join('');
