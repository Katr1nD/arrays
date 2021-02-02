const shoppingList = document.getElementById('shoppingList');
let arr = [{
        name: "strawberries",
        count: 7,
        bought: true,
        id: '0',
    },
    {
        name: "blueberries",
        count: 5,
        bought: false,
        id: '1',
    },
    {
        name: "raspberries",
        count: 3,
        bought: false,
        id: '2',
    },
    {
        name: "blackberries",
        count: 5,
        bought: true,
        id: '3',
    },
];

function addShoppingListItem() {
    const item = document.getElementById('item').value;
    if (item.length !== 0 || item.trim() === "") return;
    const index = arr.findIndex(oldItem => oldItem.name === item.toLowerCase());


    if (index !== -1) {
        arr[index].count++;
    } else {
        arr.push({
            name: item,
            count: 1,
            bought: false,
            id: String(arr.length),
        });
    }

    showShoppingList();
}

shoppingList.addEventListener('click', buyItem);

function buyItem(event) {
    const id = event.target.getAttribute('data-id');

    arr = arr.map(shoppingListItem => {
        return (shoppingListItem.id === id) ? {
                ...shoppingListItem,
                bought: !shoppingListItem.bought
            } :
            shoppingListItem;
    })
    showShoppingList();
}

function showShoppingList() {
    /*
    for (let i = 0; i < arr.length; i++) {
        const shoppingListItem = document.createElement('li');
        shoppingListItem.innerText = `${arr[i].name}: ${arr[i].count} pcs`;

        shoppingList.append(shoppingListItem);
    }
    */

    shoppingList.innerHTML = arr
        .sort((a, b) => a.bought - b.bought)
        .map(shoppingListItem => `<li data-id="${shoppingListItem.id}" class="${shoppingListItem.bought ? 'checked' : ''}">${shoppingListItem.name}: ${shoppingListItem.count} pcs</li>`)
        .join('');

}

showShoppingList();