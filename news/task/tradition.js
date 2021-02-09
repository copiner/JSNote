
//Parent
function Controller(){
    this.errors = [];
}

Controller.prototype.showDialog = function(title, msg){
    
}

Controller.prototype.success = function(msg){
    this.showDialog("Success ", msg);
}

Controller.prototype.failure = function(err){
    this.errors.push(err);
    this.showDialog("Error ", err);
}

//child
function LoginController(){
    Controller.call(this);
}

LoginController.prototype = Object.create(Controller.prototype);

LoginController.prototype.getUser = function(){
    return "username"
}

LoginController.prototype.getPassword = function(){
    return "password"
}

LoginController.prototype.validateEntry = function(user, pw){
    var user = user || this.getUser();
    var pw = pw || this.getPassword();

    if(!(user && pw)){
        return this.failure(
            "username && password is necessary!"
        )
    }
    else if(pw.length < 5){
        return this.failure(
            "Password must be 5+ charcters!"
        )
    }

    return ture;
}

//overwrite
LoginController.prototype.failure = function(err){
    Controller.prototype.failure.call(
        this,
        "Login invaild: " + err
    );
}


//child
function AuthController(login){
    Controller.call(this);
    this.login = login;
}

AuthController.prototype = Object.create(Controller.prototype);

AuthController.prototype.server = function(url,data){
    //todo promise
    return true;
}

AuthController.prototype.checkAuth = function(){
    var user = this.login.getUser();
    var pw = this.login.getPassword();

    if(this.login.validateEntry(user, pw)){
        this.server("/check",{
            user:user,
            pw:pw
        })
            .then(this.success.bind(this))
            .fail(this.failure.bind(this))
        
    }
}

AuthController.prototype.success = function(){
    Controller.prototype.success.call(this,"Authenticated!");
}

AuthController.prototype.failure = function(err){
    COntroller.prototype.failure.call(
        this,
        "Auth Failed: " + err
    )
}

var auth = new AuthController(
    new LoginController()
);

auth.checkAuth();
