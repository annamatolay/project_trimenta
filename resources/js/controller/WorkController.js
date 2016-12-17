/**
 * Created by Matolay Pál
 */

function WorkController() {
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

    var workProcess = new WorkProcess();

    this.addWorkProcess = function () {
        $("#workSaveBut").click(function () {
            workProcess.save();
            location.reload();
        })
    };

    this.showDailyProcess = function () {

        var data = workProcess.load();

        console.log(data);

        if(!data) {
            return;
        }

        for (var i=0;i<data.length;i++) {
            var excepted = parseInt(data[i].excepted);
            var quantity = parseInt(data[i].quantity);
            var color = null;

            if (excepted>quantity) {
                color = "list-group-item list-group-item-danger";
            } else {
                color = "list-group-item list-group-item-success";
            }

            $("#workProc").append('<li><button type="button" class="'+color+'"  value="'+i+
                '" data-toggle="modal" data-target="#myModal">'+data[i].name+'</button>');
        }

        $(document).on("click", "button", function(){
            if(this.value) {
                var index = parseInt(this.value);
                $("#modalTitle").empty().append('<h4 class="modal-title">Munkafolyamat neve: '+data[index].name+'</h4>');
                $("#modalBody").empty().append(
                    "Létrehozás Dátuma: "+data[index].datum+"<br>"+
                    "Mennyiség: "+quantity+"<br>"+
                    "Elvárt mennyiség: "+data[index].excepted);
                $("#modalFooter").empty().append('<button id="saveQuantBut" type="button" class="btn btn-default" ' +
                    'data-dismiss="modal" value="'+index+'">Mentés</button>')
            }
        });

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