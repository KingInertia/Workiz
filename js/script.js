const url = `https://api.pipedrive.com/v1/deals?api_token=d28c08e2567d20e4fd7f6f6d5cb83653841e79c2`;


document.addEventListener('DOMContentLoaded', () => {
  const buttonCreateJob = document.getElementById('button-create-job')
  const buttonSaveInfo = document.getElementById('button-save-info')

  const getField = id => document.getElementById(id)

  const fields = [
    'name',
    'last-name',
    'phone',
    'email',
    'job-type',
    'job-source',
    'job-description',
    'address',
    'city',
    'state',
    'zip-code',
    'service-area',
    'scheduled-date',
    'start-time',
    'end-time',
    'technician'
  ]

  buttonCreateJob.addEventListener('click', () => {
    let check = true
  
    
    if (getField('end-time').value.localeCompare(getField('start-time').value) <= 0) {
      check = false
    }
  
   
    for (let field of fields) {
      if (field === 'email' || field === 'job-description') continue
      
      const fieldElement = getField(field)
      if (!fieldElement.value) {
        check = false
        break
      }
    }
  
    if (check) {    
      const dealData = {
        title: 'Workiz',
       
      
    }
    
  
      
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dealData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Сделка успешно добавлена:', data.data)
        } else {
          console.error('Ошибка при добавлении сделки:', data.error)
        }
      })
      .catch(error => console.error('Ошибка сети:', error))
  
      buttonCreateJob.style.backgroundColor = 'red'
      buttonCreateJob.textContent = 'Request is send'
      buttonCreateJob.disabled = true
      buttonCreateJob.style.color = 'black'
      document.getElementById('error-message').style.display = 'none'
      console.log('Кнопка нажата')
      
    } else {
      document.getElementById('error-message').style.display = 'block'
    }
  })
  

  buttonSaveInfo.addEventListener('click', () => {
    
  })
})
