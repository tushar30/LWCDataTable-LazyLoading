({
    selectedRecords : function(component, event, helper) {
        var selectRecords = event.getParam('recordIds');
        if(selectRecords != undefined) {
            component.set("v.recordIds", selectRecords);
        }
    }
})