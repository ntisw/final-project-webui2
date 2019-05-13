function headerForContentPages(_loginstatus){
    if(_loginstatus==false)
     window.location.href = 'index.html'
}

function headerForLoginPage(_loginstatus){
    if(_loginstatus==true)
     window.location.href = 'dashboard.html'
}

function getLoginStatus(){
    if(!getCookie('loginstatus')=='')
        return true
    else
        return false
}

function logout(){
    setCookie('loginstatus','',-1000)
}