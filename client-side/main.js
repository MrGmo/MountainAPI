document.querySelector('button').addEventListener('click', callAPI)

async function callAPI(){
  const mountainName = document.querySelector('input').value

  try{
    const response = await fetch(`https://simple-mountainapi.herokuapp.com/api/sevenSummits/${mountainName}`)
    const data = await response.json()
    console.log(data)
    document.querySelector('.one').innerText = 'Location: ' + data["Location"]
    document.querySelector('.two').innerText = 'Elevation: '+ data["Elevation"]
    document.querySelector('.three').innerText = 'First Ascent: '+ data["First Ascent"]

  }catch(error){
    console.log(error)
  }
}
