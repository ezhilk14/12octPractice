function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    
    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname,attrvalue);
        return ele;
    }
    
    
    function createlinebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;
    }
    
    function createbutton(tagname,content){
        var ele=document.createElement(tagname);
        ele.innerHTML=content;
        return ele;
    }
    var fname=createlabels("label","for","fname","FirstName");
    var br1=createlinebreak("br");
    var finput=createinput("input","type","text","id","fname");
    var br2=createlinebreak("br");

    var mname=createlabels("label","for","mname","Middlename");
    var br3=createlinebreak("br");
    var minput=createinput("input","type","text","id","mname");
    var br4=createlinebreak("br");
    
    var lname=createlabels("label","for","lname","Lastname");
    var br5=createlinebreak("br");
    var linput=createinput("input","type","text","id","lname");
    var br6=createlinebreak("br");
    
    var phonenum=createlabels("label","for","pnum","PhoneNo.");
    var br7=createlinebreak("br");
    var pinput=createinput("input","type","number","id","pnum");
    var br8=createlinebreak("br");

    var button=createbutton("button","Submit");

    document.body.append(fname,br1,finput,br2,mname,br3,minput,br4,lname,br5,linput,br6,phonenum,br7,pinput,br8,button);
    