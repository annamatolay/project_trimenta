/**
 * Created by Matolay Pál
 */

function  workProcess(name, excepted, datum) {
    this.name = name;
    this.excepted = excepted;
    this.quantity = 0;
    this.datum = datum;

    this.plusQuantity = function () {
        return this.quantity++;
    };

    this.checkQuantity = function () {
      return this.quantity>=this.excepted;
    };

    this.saveProcess = function () {
        jsonController("set", "work");
    };

    this.loadProgress = function () {
        getJson("get", "work");
    }
}