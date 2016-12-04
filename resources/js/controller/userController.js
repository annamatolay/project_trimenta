/**
 * Created by Matolay Pál
 */

function UserController() {
    var user = new User();

    this.userChecking = function () {
        if (!user.getUser()) {
            $("#usrLogin").show();
        } else {
            $("#usrWelcome").show().append("Üdvözöllek, "+user.userName+"!");
        }
    };

    this.logInHanlder = function () {
        $("#usrLoginBut").click(function () {
            user.setUser();
        });
    };

    this.logOutHandler = function () {
        $("#usrLogoutBut").click(function() {
            localStorage.removeItem("user");
            location.reload();
        })
    };

    this.userSetting = function () {
        $("#usrSetBut").click(function() {
            $("#usrLogin").show();
            $("#index").show();
            $("#usrSetBut").hide();
            $("#usrWelcome").hide();
            $("#usrHA").attr("value", user.hostAddress);
            $("#usrN").attr("value", user.userName);
        });
    }

}