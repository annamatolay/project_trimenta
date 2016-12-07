/**
 * Created by Matolay Pál
 */

//TODO[2]: working with local json files

$(document).ready(function () {

    $("#index").click(function() {
        location.reload();
    });

    var usrC = new UserController();
    usrC.userChecking();
    usrC.logInHanlder();
    usrC.logOutHandler();
    usrC.userSetting();

});
