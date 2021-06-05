const checkWord = (dataKey, word) => {
  const checkLetter = (value) => {
    // parameter diubah terlebih dahulu ke string agar function menjadi dinamis
    let stringValue = value.toString()

    // Diubah ke string terlebih dahulu agar menjadi dinamis
    var stringWord = word.toString();

    // Membuat value sementara
    let tempValue = ''

    for (let i = 0; i < stringValue.length; i++) {
      if (word.indexOf(stringValue.charAt(i)) >= 0) {
        tempValue = tempValue + stringValue.charAt(i)
      } else {
        console.log(stringValue + " => " + 'false')
      }
    }

    if (tempValue === stringValue) {
      console.log(stringValue + " => " + 'true')
    }
  }

  dataKey.forEach(checkLetter)
}

// const checkLetter = () => {
//   let word = 'dumbways';
//   let value = 'dumbz'
//   let tempValue = ''
//   for (let i = 0; i < value.length; i++) {
//     if (word.indexOf(value.charAt(i)) >= 0) {
//       tempValue = tempValue + value.charAt(i)

//     }
//   }
//   console.log(tempValue)
//   if (tempValue === value) {
//     console.log(value + " => " + 'true')
//   } else {
//     console.log(value + " => " + 'false')
//   }
// }