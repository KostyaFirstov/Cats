console.log(cats)

for(let i = 0; i < cats.length; i++){
    catInfo = {
        name: `${cats[i].name}`,
        img_link: `${cats[i].img_link}`,
        age: `${cats[i].age}`,
        rate: `${cats[i].rate}`,
        favourite: `${cats[i].favourite}`,
        description: `${cats[i].description}`,
        id: `${cats[i].id}`
    }

    addCard(catInfo);
}

function addCard(catInfo){

    let textAge = '';
    if(catInfo.age == 1){
        textAge = 'год';
    } else if(catInfo.age > 1 && catInfo.age < 5){
        textAge = 'года';
    } else {
        textAge = 'лет';
    }

    let favourite = {
        text: '',
        class: ''
    }
    if(catInfo.favourite == 'false'){
        favourite.text = 'Любимая';
        favourite.class = 'favourite';
    } else {
        favourite.text = 'Не любимая';
        favourite.class = 'notfavourite';
    }

    let html = ` 
            <div class="cards__item">
                <div class="cards__text">
                    <div class="cards__name">
                        <h2>${catInfo.name}, <span class="cards__age">${catInfo.age} ${textAge}</span></h2>
                    </div>
                    <div class="cards__desc">
                        <p>${catInfo.description}</p>
                    </div>
                    <div class="cards__info">
                        <div class="cards__favourite">
                            <span class="${favourite.class}">${favourite.text}</span>
                        </div>
                        <div class="cards__id">
                            <span>id: ${catInfo.id}</span>
                        </div>
                    </div>
                </div>
                <div class="cards__image">
                    <img src="${catInfo.img_link}" alt="${catInfo.name}">
                </div>
            </div>
    `

    let div = document.body.childNodes[1];
    div.insertAdjacentHTML('beforeend', html);
}
        