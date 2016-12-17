/**
 * Created by Matolay Pál
 */

function WorkController() {

    // some trick with html element:
    $("#newWBut").click(function () {
        $("#workProc").hide();
        $("#usrLogin").hide();
        $("#newWorkProc").show();
    });

    $("#dailyProcBut").click(function () {
        $("#newWorkProc").hide();
        $("#usrLogin").hide();
        $("#workProc").show();
    });

    // create a new model
    var workProcess = new WorkProcess();

    this.addWorkProcess = function () {
        $("#workSaveBut").click(function () {
            workProcess.save();
            location.reload();
        })
    };

    this.showDailyProcess = function () {

        var allProcess = workProcess.load();

        // just for checking
        console.log(allProcess);

        // if data null, the job is done
        if(!allProcess) {
            return;
        }

        for (var i=0;i<allProcess.length;i++) {
            // get really int number:
            var excepted = parseInt(allProcess[i].excepted);
            var quantity = parseInt(allProcess[i].quantity);
            var color = null;

            //if the work done, the color change
            if (excepted>quantity) {
                color = "list-group-item list-group-item-danger";
            } else {
                color = "list-group-item list-group-item-success";
            }

            // append the model-open button to the html
            $("#workProc").append('<li><button type="button" class="'+color+'"  value="'+i+
                '" data-toggle="modal" data-target="#myModal">'+allProcess[i].name+'</button>');
        }

        // this checking every button on this page, but we work just the existing
        $(document).on("click", "button", function(){
            if(this.value) {
                // create the modal header and body content based on button value
                // so the page have one modal, but the content change dynamically
                var index = parseInt(this.value);
                $("#modalTitle").empty().append('<h4 class="modal-title">Munkafolyamat neve: '+allProcess[index].name+'</h4>');
                $("#modalBody").empty().append(
                    "Létrehozás Dátuma: "+allProcess[index].datum+"<br>"+
                    "Mennyiség: "+quantity+"<br>"+
                    "Elvárt mennyiség: "+allProcess[index].excepted);
                $("#modalFooter").empty().append('<button id="saveQuantBut" type="button" class="btn btn-default" ' +
                    'data-dismiss="modal" value="'+index+'">Mentés</button>')
            }
        });

        // set a new quantity for one work process
        this.saveWorkQuantity = function () {
            var allProcess = workProcess.load();
            $(document).on("click", "#saveQuantBut", function () {
                var index = parseInt(this.value);
                allProcess[index].quantity += 1;
                console.log(allProcess[index]);
                var json = new JsonCtrl("set");
                json.setObject(allProcess);
                json.work("work");
                location.reload();
            });
        }
    };
}