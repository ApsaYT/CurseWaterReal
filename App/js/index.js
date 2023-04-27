// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("7.771428571428571em")
                .setHeight("3.5047619047619047em")
                .setZIndex(2)
                .setCaption("Curse")
                .setHAlign("left")
                .setVAlign("middle")
                .setFontColor("#606060")
                .setFontSize("35px")
                .setFontWeight("bold")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block10")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("164.64761904761906em")
                .setHeight("5.40952380952381em")
                .setBorderType("none")
                .setBackground("#2D2D2D")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label14")
                .setLeft("8.380952380952381em")
                .setTop("0em")
                .setWidth("7.771428571428571em")
                .setHeight("3.5047619047619047em")
                .setZIndex(2)
                .setCaption("Water")
                .setHAlign("left")
                .setVAlign("middle")
                .setFontColor("#0000CD")
                .setFontSize("35px")
                .setFontWeight("bold")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block16")
                .setLeft("0em")
                .setTop("3.8095238095238093em")
                .setWidth("164.64761904761906em")
                .setHeight("105.98095238095237em")
                .setBorderType("none")
                .setBackground("#202020")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox3")
                .setClassName("xui-css-te")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});