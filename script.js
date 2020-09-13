// CHALLENGE 1: YOUR AGE IN DAYS

const getAgeInDays = () => {
    let birthYear = prompt('What year were you born... Good friend ?');
    let ageInDays = (2020 - birthYear) * 365;

    let h1 = document.createElement('h1'); 
    let textAnswer = document.createTextNode('You are ' + ageInDays + ' days');

    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);

    document.getElementById('flex-box-result').appendChild(h1);
}

const reset = () => {
    document.getElementById('ageInDays').remove();
}
