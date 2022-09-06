const teamMembers = [
    {
        nameSurname: "Wayne Barnett",
        role: "Founder & CEO",
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nameSurname: "Angela Caroll",
        role: "Chief Editor",
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        nameSurname: "Walter Gordon",
        role: "Office Manager",
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        nameSurname: "Angela Lopez",
        role: "Social Media Manager",
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nameSurname: "Scott Estrada",
        role: "Developer",
        photo: 'scott-estrada-developer.jpg',
    },
    {
        nameSurname: "Barbara Ramos",
        role: "Graphic Designer",
        photo: 'barbara-ramos-graphic-designer.jpg',
    }
]

console.log(teamMembers);

const arrayCardsImg = document.querySelectorAll(".card");
console.log(arrayCardsImg)

arrayCardsText = document.querySelectorAll(".card-body")
console.log(arrayCardsText)

for (let i = 0; i < teamMembers.length; i++) {
    arrayCardsImg[i].innerHTML = `<img src=img/${teamMembers[i].photo}>`;
    arrayCardsImg[i].append(arrayCardsText[i]);
    arrayCardsText[i].innerHTML = `<h5> ${teamMembers[i].nameSurname} </h5>`
    arrayCardsText[i].innerHTML += `<p> ${teamMembers[i].role} </p>`
}

