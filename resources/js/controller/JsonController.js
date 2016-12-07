/**
 * Created by Matolay Pál
 */

function JsonCtrl() {
    this.option = null;
    this.object = null;
    this.setOption = function (option) {
        this.option = option;
    };

    this.setObject = function (object) {
        this.object = object;
    };

    this.work = function (key) {
        if(this.option==="set"){
            localStorage.setItem(key, JSON.stringify(this.object));
        } if (this.option==="get"){
            return JSON.parse(localStorage.getItem(key));
        }

    };

    // switch (option){
        // case "set": setJson();
        // case "get": getJson();
        // default: alert("invalid argumetn!")
    // }

}
