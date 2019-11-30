$(document).ready(readyNow);

function readyNow() {
    console.log('JQ loaded');

    $('#submitBtn').on('click', submitItem)

    $.ajax({
        method: 'GET',
        url: '/food-items'
    }).then(function(response) {
        console.log(response);

        let foodItems = response;
        
        for (let item of foodItems) {
            $('#displayFoodTable').append(`
            <tr>
                <td>${item.name}</td>
                <td>${item.food}</td>
                <td>${item.price}</td>
            </tr>
            `);
        }

        
    });
}

function submitItem() {
    const itemsIn = {
        name: $('#nameIn').val(),
        food: $('#foodIn').val(),
        price: $('#priceIn').val()
    };
    console.log(`Items in is ${JSON.stringify(itemsIn)}`);

}

