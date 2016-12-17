/**
 * Created by Matolay Pál
 */

// mostly related visual (hide/show)
function UserController() {
    var user = new User();

    this.userChecking = function () {
        if (!user.getUser()) {
            $("#usrLogin").show();
        } else {
            $("#usrWelcome").append("<p>Üdvözöllek, "+user.userName+"!</p>");
            $(".user-board").show();
        }
    };

    this.logInHanlder = function () {
        $("#usrLoginBut").click(function () {
            user.setUser();
        });
    };

    this.logOutHandler = function () {
        $("#usrLogoutBut").click(function() {
            // after logout, clear the user data
            localStorage.removeItem("user");
            location.reload();
        })
    };

    this.userSetting = function () {
        $("#usrSetBut").click(function() {
            $(".homeBut").show();
            $("#usrLogin").show();
            $("#index").show();
            $("#loginText").hide();
            $(".user-board").hide();
            $("#workProc").hide();
            $("#usrHA").attr("value", user.hostAddress);
            $("#usrN").attr("value", user.userName);
        });
    }
}