/**
 * Created by Administrator on 2016/11/8.
 */

$(function(){

    $("input").attr("style","outline:none");

    //*****index.html�����رհ�ť
    searchClose();

    //********���ٵ����ر������л�
        $(".a-quicknav").click(function(){
            if($(".navct-wrap").css("display") == "none"){
                $(".navct-wrap").css("display","block");
            }else{
                $(".navct-wrap").css("display","none");
            }
        })


    //*****login.html��¼��֤
    login();
    var flag = login();
    console.log(flag);
    login_success(flag);

})























