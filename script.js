const bodyElement = document.getElementsByTagName("body")[0];

const container = document.createElement("div");
container.classList.add("container");

const holder = document.createElement("div");
holder.classList.add("holder")
container.append(holder)

const titleName = document.createElement("h1");
titleName.append("Enter Your Information");
holder.append(titleName);

details = (name) => {
    let labelName = document.createElement("label");
    labelName.append(name);
    holder.append(labelName);
    labelName.setAttribute("for","enterName")
}

inputdetails = () => {
    let inputName = document.createElement("input");
    holder.append(inputName)
    inputName.classList.add("inputdetails");
    inputName.setAttribute("placeholder","fill the blank");
    inputName.setAttribute("id","enterName");
    inputName.setAttribute("name","enterName");
    inputName.setAttribute("type","text")
}

lineDown = () => {
    let line = document.createElement("br")
    holder.append(line)
}

for (let i=0; i<5; i++){
    if(i===0){
        details("Enter Your First Name")
        inputdetails()
        lineDown()
    } else if (i===1) {
        details("Enter Your Middle Name")
        inputdetails()
        lineDown()
    } else if (i===2){
        details("Enter Your Last Name")
        inputdetails()
        lineDown()
    } else if (i===3){
        details("Enter Your Born Date")
        const inputDate = document.createElement("input");
        inputDate.setAttribute("type","date");
        inputDate.classList.add("inputdate")
        holder.append(inputDate)
        lineDown()
    } else if (i===4){
        details("Enter Your Email")
        const inputEmail = document.createElement("input");
        inputEmail.setAttribute("type","email");
        inputEmail.setAttribute("placeholder","@gmail.com");
        inputEmail.classList.add("inputEmail")
        holder.append(inputEmail)
    }
}

const buttonContainer = document.createElement("div")
buttonContainer.classList.add("buttonContainer")
container.append(buttonContainer)
bodyElement.append(container);