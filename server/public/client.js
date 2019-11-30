$(document).ready(readyNow);

function readyNow() {
    console.log('JQ loaded');

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

