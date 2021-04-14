getTeam();
function getTeam() {
    $(document).ready(function () {
        $("select.teams").change(function () {
            var selectedTeam = $(this).children("option:selected").val();
            console.log(selectedTeam);
            $.ajax({
                url: "https://api-nba-v1.p.rapidapi.com/teams/shortName/" + selectedTeam,
                type: "GET",
                beforeSend: function (xhr) { xhr.setRequestHeader('x-rapidapi-key', 'a608bf2094mshb5854b582202c04p126486jsna20ea7f1f134'); xhr.setRequestHeader('x-rapidapi-host', 'api-nba-v1.p.rapidapi.com'); },
                success: function (res) {
                    printresponse(res);
                },
            });

        });
    });
}


function printresponse(response) {
    // let i;
    console.log(response);
    var Parent = document.getElementById("information");
    for (var i = Parent.rows.length - 1; i > 0; i--) {
        Parent.deleteRow(i);
    }
    let team = response.api.teams["0"];
    let j = `<tr><td>${team["fullName"]}</td><td>${team["teamId"]}</td> <td><img src="${team["logo"]}" width='100' height='100'></td> <td>${team["leagues"]["standard"]["confName"]}</td> <td>${team["city"]}</td></tr>`
    $('#information').append(j);
    // for(i of response){
    //     // var date =new Date(i["startTimeUTC"]).toDateString();
    //     // date=date.split(" ").slice(0,4).join(" ");
    //    
    // }
}