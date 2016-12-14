/**
 * Created by Matolay Pál
 */

function WorkController() {
    $("#newWBut").click(function () {
        $("#newWorkProc").show();
    });

    var workProcess = new WorkProcess();

    this.addWorkProcess = function () {
        $("#workSaveBut").click(function () {
            workProcess.save();
            location.reload();
        })
    };

    this.showDailyProcess = function () {
        $("#dailyProcBut").click(function () {
            var data = workProcess.load();
            console.log(data);
            for (var i=0;i<data.length;i++) {
                $("#workProc").append(data[i].quantity+'<button>'+data[i].name+'</button>')
            }
        })
    }
}
