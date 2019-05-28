$(function() {
    let url = "https://akabab.github.io/superhero-api/api/all.json"



    $.get(url)
    
        .done(function(response){
        console.log(response[0])
                    response.forEach(function(stats){
                        
                        if (stats.id == "1"){
                            $('#stats').append(
                                '<div class = "stats">' +
                                '<b> Name: </b>' + stats.name + '<br>' +
                                '<b> Intelligence: </b>' + stats.powerstats.intelligence + '<br>' +
                                '<b> Stregth: </b>' + stats.powerstats.strength + '<br>' +
                                '<b> Speed: </b>' + stats.powerstats.speed + '<br>' +
                                '<b> Durability: </b>' + stats.powerstats.durability + '<br>' +
                                '<b> Power: </b>' + stats.powerstats.power + '<br>' +
                                '<b> Combat: </b>' + stats.powerstats.combat + '<br>'
                            )} 
                          
                
                    
                        
                    })
                })

})
