/**
 * Created by Matolay Pál
 */

$(document).ready(function () {

    $(".homeBut").click(function() {
        location.reload();
    });

    var usrC = new UserController();
    usrC.userChecking();
    usrC.logInHanlder();
    usrC.logOutHandler();
    usrC.userSetting();

    var workC = new WorkController();
    workC.addWorkProcess();
    workC.showDailyProcess();
    workC.saveWorkQuantity();

});
