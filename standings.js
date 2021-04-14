
get_response();
function get_response() {
    $.ajax({
        url: "https://api-nba-v1.p.rapidapi.com/standings/standard/2020/conference/west",
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('x-rapidapi-key', 'a608bf2094mshb5854b582202c04p126486jsna20ea7f1f134'); xhr.setRequestHeader('x-rapidapi-host', 'api-nba-v1.p.rapidapi.com'); },
        success: function (res) {
            let teams = res.api.standings;
            let final = [];
            let check = [];
            $.ajax({
                url: `https://api-nba-v1.p.rapidapi.com/teams/confName/west`,
                type: "GET",
                beforeSend: function (xhr) { xhr.setRequestHeader('x-rapidapi-key', 'a608bf2094mshb5854b582202c04p126486jsna20ea7f1f134'); xhr.setRequestHeader('x-rapidapi-host', 'api-nba-v1.p.rapidapi.com'); },
                success: function (response) {
                    let i;
                    for(i of response.api.teams){
                        let team=teams.find((x)=>{
                            return x["teamId"]=== i["teamId"];
                        })
                        if (team !== undefined){
                            final.push(Object.assign({},team, { "teamName": i.fullName }));
                        } 
                    }
                    printresponse(final)
                }
            })
        },
    });
}

function printresponse(response) {
    let i;
    let teams = response.sort((a, b) => {
        return parseFloat(a["gamesBehind"]) > parseFloat(b["gamesBehind"]) ? 1 : parseFloat(a["gamesBehind"]) < parseFloat(b["gamesBehind"]) ? -1 : 0;
    });
    for (i of teams) { 
        let j = `<tr><td>${i["teamId"]}</td><td>${i["teamName"]}</td> <td>${i["win"]}</td> <td>${i["loss"]}</td> <td>${i["gamesBehind"]}</td> <td>${i["conference"]["name"]}</td> <td>${i["division"]["name"]}</td> <td>${i["home"]["win"]}-${i["home"]["loss"]}</td> <td>${i["away"]["win"]}-${i["away"]["loss"]}</td> <td>${i["lastTenWin"]}-${i["lastTenLoss"]}</td> <td>${i["streak"]}</td></tr>`
        $('#information').append(j);
    }
}

