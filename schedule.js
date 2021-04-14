get_response();
function get_response() {
    $.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/games/league/standard/2020",
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('x-rapidapi-key', 'a608bf2094mshb5854b582202c04p126486jsna20ea7f1f134'); xhr.setRequestHeader('x-rapidapi-host', 'api-nba-v1.p.rapidapi.com'); },
        success: function (res) {
            let arr=res.api.games.slice(0,99);
            printresponse(arr);
        },
    });
}

function printresponse(response) {
    let i;
    for(i of response){
        var date =new Date(i["startTimeUTC"]).toDateString();
        // date=date.split(" ").slice(0,4).join(" ");
        let j = `<tr><td>${date}</td><td>${i["gameId"]}</td> <td>${i["hTeam"]["nickName"]} vs ${i["vTeam"]["nickName"]}</td> <td>${i["arena"]}</td> <td>${i["city"]}</td> <td>${i["country"]}</td> <td>${i["seasonStage"]}</td></tr>`
        $('#information').append(j);
    }
}

