const fromText =  document.querySelector(".from-text"),
toText =  document.querySelector(".to-text")
selectTag = document.querySelectorAll("select"),
reLoad= document.querySelector(".rel");
translateBtn = document.querySelector(".trns");
selectTag.forEach((tag,id) => {
    for (const country_code in countries)
    {
        //english and hindi as default
        let selected;
        if(id == 0 && country_code == "en-GB"){
            selected = "selected";
        }
        else if(id == 1 && country_code == "hi-IN"){
            selected = "selected";
        }
        let option = document.createElement("option");
        option.value = country_code;
        option.textContent = countries[country_code];
        option.selected = selected;
        tag.insertAdjacentElement("beforeend",option); //adding all countries
    }
});

translateBtn.addEventListener("click",()=>{
    let text = fromText.value;
    console.log(text);
    translateFrom = selectTag[0].value;
    translateTo = selectTag[1].value;
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data =>{
        console.log(data);
        toText.value = data.responseData.translatedText;
    })
})

reLoad.addEventListener("click", () => {
    window.location.reload();
  });