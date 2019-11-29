import React from "react"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"

import "./index.css"

function App() {

  // const date = new Date()
  // const hours = date.getHours()
  // let timeOfDay
  // const styles = {
  //   fontSize: 30
  // }

  // if (hours < 12) {
  //   timeOfDay = "morning"
  //   styles.color = "#04756F"
  // } else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon"
  //   styles.color = "#2E0927"
  // } else {
  //   timeOfDay = "night"
  //   styles.color = "#D90000"
  // }


  return (
    <div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      {/* <Header />
      <MainContent />
        <h1 style={styles}>Good {timeOfDay}!</h1>
      
      <Footer /> */}
    </div>
  )
}

export default App