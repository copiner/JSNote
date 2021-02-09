
var LoginController = {
    errors:[],
    getUser:function(){
        return "username"
    },
    getPassword:function(){
        return "password"
    },
    validateEntry:function(user, pw){
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

    },
    showDialog:function(title,msg){
        //TODO
    },
    failure:function(err){
        this.errors.push(err);
        this.showDialog("Error", "Login invalid: " + err);
    }
}
//reflect

var AuthController = Object.create(LoginController);

AuthController.errors = [];
AuthController.checkAuth = function(){
    var user = this.getUser();
    var pw = this.getPassword();

    if(this.validateEntry(user, pw)){
        this.server("/check",{
            user:user,
            pw:pw
        })
            .then(this.success.bind(this))
            .fail(this.failure.bind(this))
        
    }
    
}

AuthController.server = function(url, data){
    return true;
}

AuthController.accepted = function(){
    this.showDialog("Success", "Authenticated!")
}

AuthController.rejected = function(err){
    this.failure("Auth Failed: " +err);
}

AuthCOntroller.checkAUth();

//
var c1 = Object.create(AuthCOntroller);
var c2 = Object.create(AuthCOntroller);
