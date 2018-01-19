
// Using ES6

/*
Author: Mohammed Ajao
*/

$(() => {
    console.log("oof")
    $.ajax({
        url: "https://api.behance.net/v2/users/kr0npr1nz/projects?client_id=1X2hR4X7WmiT7h0S2j5r6qL9eLrkJL87",
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
    }).done((data) => {
        console.log(data)
        data.projects.map((proj) => {
            $(".project-cont").append(`
            <div class="col-md-6 col-lg-4 p-0">
            <img src=${proj.covers.original} style="width: 100%;"></img>
            </div>
            `)
        })
    })
})

$(".proj-col").click(() => {
    $(".project-cont").addClass("animated fadeInDown")
    $(".project-cont").removeClass("d-none")
    $(".project-cont").removeClass("animated fadeOutUp")
})

$("#projContExit").click(() => {
    console.log("sds")
    $(".project-cont").removeClass("animated fadeInDown")
    $(".project-cont").addClass("animated fadeOutUp")
    $(".project-cont").addClass("d-none")
})