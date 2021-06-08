const getData = async (endpoint, data) => {
    const res = await fetch(
      endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
  
    try {
      const result = await res.json()
      return result
    }
    catch (error) {
      console.log('error', error)
    }
  }

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    formText =  Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    console.log(formText);
  if(formText!=false){
    getData('http://localhost:8080/test',{formText})
    // .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById("subjectivity").innerHTML = "Subjectivity: " + res.subjectivity;
        document.getElementById("confidence").innerHTML = "Confidence: " + res.confidence;
        document.getElementById("irony").innerHTML = "Irony: " + res.irony;
        document.getElementById("score_tag").innerHTML = "Score_tag: " + res.score_tag;
        document.getElementById("agreement").innerHTML = "Agreement: " + res.agreement;
        var i;
        var sentimented;
        for(i=0;i<10;i++){
          sentimented =  document.getElementById('result-sentimented')
          var newEl = document.createElement('p')
          newEl.innerHTML = res.sentence_list[i].text;
          sentimented.appendChild(newEl);
        }
    })
  }
}

export { handleSubmit, getData }
