let styles = [{
        ['color']: "purple",
    },
    {
        ['font-size']: "28px",
    },
    {
        ['font-family']: "cursive",
    },
    {
        ['text-decoration']: "underline",
    },
    {
        ['text-transform']: "capitalize",
    }
];

function styleText() {
    const pElement = document.createElement("p");
    pElement.innerText = document.getElementById('text').value;

    const stylesString = styles.map(obj => `${Object.keys(obj)[0]}: ${Object.values(obj)[0]}`).join('; ');

    pElement.setAttribute("style", stylesString);

    document.getElementById('content').append(pElement);
}