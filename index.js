const express = require('express')
const path = require('path')
const axios = require('axios')

const app = express()

app.use(express.static(__dirname + '/src'));

const PORT = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/activity', async (req, res) => {
  try {
    const response = await axios.get('http://www.boredapi.com/api/activity?type=recreational')
    const activity = response.data.activity
    res.json({ activity })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching activity' + error })
  }
})

app.get('/freeActivity', async (req, res) => {
  try {
    const response = await axios.get('http://www.boredapi.com/api/activity?price=0.0')
    const activity = response.data.activity
    res.json({ activity })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching activity' + error })
  }
})

app.get('/fetchQuote', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random')
    const quote = response.data[0].q
    const author = response.data[0].a

    res.json({ quote, author })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Erro ao buscar citação :/' + error })
  }
})



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
