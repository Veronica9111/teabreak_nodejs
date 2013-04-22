function LoginValidator(){

// bind a simple alert window to this controller to display any errors //

    this.loginErrors = $('.modal-alert');
    this.loginErrors.modal({ show : false, keyboard : true, backdrop : true });

    this.showLoginError = function(t, m)
    {
        $('.modal-alert .modal-header h3').text(t);
        $('.modal-alert .modal-body p').text(m);
        this.loginErrors.modal('show');
    }

}

LoginValidator.prototype.validateForm = function()
{
    if ($('#user-name').val() == ''){
        this.showLoginError('Whoops!', 'Please enter a valid username');
        return false;
    }   else if ($('#user-passwd').val() == ''){
        this.showLoginError('Whoops!', 'Please enter a valid password');        return false;
    }   else{
        return true;
    }
}
