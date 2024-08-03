import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Input: strs = ["flower","flow","flight"] 
  // Output: "fl"
  const longestCommonPrefex = () => {
    let strs = ["flower", "flow", "flight", "flgmin","fa"]
    let sortedStr = strs.sort()
    console.log(sortedStr)
    let str1 = sortedStr[0]
    let str1Arr = str1.split("")
    let outputstr = ""
    let tempStr = ""
    loop1:
    for (let i = 0; i < str1Arr.length; i++) {
      tempStr += str1Arr[i]
      for (let j = 1; j < sortedStr.length; j++) {
        // console.log(tempStr);
        if (!sortedStr[j].startsWith(tempStr)) {
          break loop1;
        }
      }
      outputstr = tempStr
    }
    if (outputstr) {
      console.log(outputstr);
    } else {
      console.log("No longestCommonPrefex");

    }


    // while () {

    // }
  }

  return (
    <>
      <button onClick={() => { longestCommonPrefex() }}>Click me!</button>
    </>
  )
}

export default App
