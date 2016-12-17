/**
 * Created by Matolay Pál
 */

// one mechanic for all other controller, what work with a (or more) json:
function JsonCtrl(option) {
    this.option = option;
    this.object = null;

    this.setObject = function (object) {
        this.object = object;
    };

    this.work = function (key) {
        switch (this.option){
            case "set":
                if(this.object===null) {
                    console.log("Error: object is null!");
                    return null;
                }
                localStorage.setItem(key, JSON.stringify(this.object));
                break;
            case "get":
                return JSON.parse(localStorage.getItem(key));
            default:
                console.log("Error: invalid option!")
        }
    }
}
