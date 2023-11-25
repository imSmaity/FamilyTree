import { useRef, useState } from 'react'
import Controller from './components/Controller'
import Details from './components/Details'
import './style.css'

const Dashboard = () => {
  const [fileContent, setFileContent] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const content = e.target.result
        setFileContent(JSON.parse(content))
      }

      reader.readAsText(file)
    }
  }

  const handleButtonClick = () => {
    // Trigger the click event on the file input
    fileInputRef.current.click()
  }

  return (
    <div className="container">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Controller
        importJson={handleButtonClick}
        setSearchQuery={setSearchQuery}
      />
      <Details data={fileContent} searchQuery={searchQuery} />
    </div>
  )
}

export default Dashboard
