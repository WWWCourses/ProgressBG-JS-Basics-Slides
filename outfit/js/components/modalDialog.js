// disable scroll:
document.body.style.overflow = "hidden";

// create the close btn:
var modalDialogClose = document.createElement("div");
modalDialogClose.style.position = "absolute";
modalDialogClose.style.top = "0em";
modalDialogClose.style.right = "0em";
modalDialogClose.style.width = "2em";
modalDialogClose.style.height = "2em";
modalDialogClose.style.lineHeight = "2em";
modalDialogClose.style.border = "1px solid #3E6D60";
modalDialogClose.style.fontFamily = "handwritten";
modalDialogClose.style.color = "#3E6D60";
modalDialogClose.style.textAlign = "center";
modalDialogClose.style.verticalAlign = "middle";
modalDialogClose.style.cursor= "pointer";
modalDialogClose.innerHTML = "X";

// Create the modal-dialog:
var modalDialog = document.createElement("div");
modalDialog.style.position = "relative";
modalDialog.style.width = "50vw";
modalDialog.style.height = "50vh";
modalDialog.style.lineHeight = "50vh";
modalDialog.style.margin = "0 auto";
modalDialog.style.marginTop = "25vh";
modalDialog.style.background = "#FFF";
modalDialog.style.border = ".2em inset rgba(69, 167, 114, 1";

modalDialog.style.fontSize = "3vmax";
modalDialog.style.padding = "0 .5em";
modalDialog.style.textAlign = "center";
modalDialog.style.verticalAlign = "middle";

modalDialog.style.visibility = "visible";
modalDialog.style.opacity = "1";
// modalDialog.style.transition = "opacity 2s linear";

modalDialog.innerHTML = `
            За да видите кода натиснете <b>CTRL+U</b>
`;

// Create the modal-dialog area:
var modalDialogArea = document.createElement("div");
modalDialogArea.style.position = "absolute";
modalDialogArea.style.top = "0";
modalDialogArea.style.left = "0";
modalDialogArea.style.right = "0";
modalDialogArea.style.bottom = "0";
modalDialogArea.style.background = "rgba(0,0,0,0.8)";

//append to body
modalDialog.appendChild(modalDialogClose);
modalDialogArea.appendChild(modalDialog);
document.body.appendChild(modalDialogArea);

modalDialogClose.addEventListener("click", function(){
            removeDialog(modalDialogArea,0);
            // console.log("@@@@@@@@@@@@@@@@@@@@");
            // console.dir(modalDialogArea);
});

//remove dialog after N seconds, if it exists:
removeDialog(modalDialogArea, 5);


//functions
function removeDialog(modalDialogArea, N){
            setTimeout( function(){
                if ( modalDialogArea.parentNode ){
                    modalDialogArea.parentNode.removeChild(modalDialogArea);
                }
                // enable scroll:
                document.body.style.overflow = "auto";
            }, N*1000);
}
