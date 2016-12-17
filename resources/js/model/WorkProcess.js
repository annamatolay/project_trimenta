/**
 * Created by Matolay Pál
 */

function  WorkProcess() {
    var allProcess = null;

    this.name = null;
    this.excepted = null;
    this.quantity = 0;

    this.getDatum = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        return yyyy+'.'+mm+'.'+dd;
    };

    this.datum = this.getDatum();

    this.load = function () {
        var json = new JsonCtrl("get");
        return json.work("work");
    };

    this.save = function () {
        allProcess = this.load();
        if (!allProcess) {
            allProcess = [];
        }
        this.name = $("input[name=workName]").val();
        this.excepted = $("input[name=expected]").val();
        allProcess.push(this);
        var json = new JsonCtrl("set");
        json.setObject(allProcess);
        json.work("work");
    };

}