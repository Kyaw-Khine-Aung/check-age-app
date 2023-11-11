const inputDateTag = document.querySelector("#inputDate");
const calculatorTag = document.querySelector(".calculator")
// get today year month day
inputDateTag.max = new Date().toISOString().split("T")[0]; 

let resulutDay, resultMonth, resultYear;
const ageCal = () => {
    if (inputDateTag.length > 0) {
        let birthdayDate = new Date(inputDateTag.value);
    
    let birthdayDay = birthdayDate.getDate();
    let birthdayMonth = birthdayDate.getMonth() + 1;
    let birthdayYear = birthdayDate.getFullYear();

    let todayDate = new Date();
    let todayDateDay = todayDate.getDate();
    let todayDateMonth = todayDate.getMonth() + 1;
    let todayDateYear = todayDate.getFullYear();

    resultYear = todayDateYear - birthdayYear;

    if (todayDateMonth >= birthdayMonth) {
        resultMonth = todayDateMonth - birthdayMonth;
    }else {
        resultYear--;
        resultMonth = todayDateMonth + 12 - birthdayMonth;
    }

    if (todayDateDay >= birthdayDay) {
        resulutDay = todayDateDay - birthdayDay;
    }else {
        resultMonth--;
        resulutDay = getDaysInMonth(birthdayYear, birthdayMonth) + todayDateDay - birthdayDay;
    }
    if (resultMonth < 0) {
        resultMonth = 11;
        resultYear--;
    }

    let resultContainerTag = document.createElement("div");
    resultContainerTag.classList.add("resultContainer")

    let pTag = document.createElement("p");

    let imgTag = document.createElement("img");
    imgTag.classList.add("image");
    imgTag.addEventListener("click", () => {
        resultContainerTag.remove();
    })
    imgTag.src = "./image/cross-23-16.png";

    pTag.innerHTML = `You are <span>${resultYear}</span> years, <span>${resultMonth}</span> months and <span>${resulutDay}</span> days old.`;
    
    resultContainerTag.append(pTag, imgTag);
    calculatorTag.append(resultContainerTag);

    }else {
        inputDateTag.classList.add("error");
        
        setTimeout(() => {
           inputDateTag.classList.remove("error");
         }, 1000)
    }
}

// this function return exactly days of month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}