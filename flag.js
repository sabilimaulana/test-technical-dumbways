const flag = (letters) => {
  for (let i = 1; i <= 7; i++) {
    if (i < 3 || i > 5) {
      let text1 = ''
      for (let i = 1; i <= letters.length; i++) {
        if (i % 2 === 1) {
          text1 = text1 + '=';
          if (i != letters.length) {
            text1 = text1 + ' ';
          }
        } else {
          text1 = text1 + '*';
          if (i != letters.length) {
            text1 = text1 + ' ';
          }
        }
      }
      console.log(text1);

    } else if (i === 4) {
      let result = '';

      for (let i = 0; i < letters.length; i++) {
        // Untuk menghilangkan spaci ' ' diakhir Kata
        if (i + 1 != letters.length) {
          result = result + letters[i] + ' ';
        } else {
          result = result + letters[i];
        }
      }
      console.log(result);

    } else {
      let text2 = '';
      for (let i = 1; i <= letters.length; i++) {
        if (i % 2 === 1) {
          text2 = text2 + '*';
          if (i != letters.length) {
            text2 = text2 + ' ';
          }
        } else {
          text2 = text2 + '=';
          if (i != letters.length) {
            text2 = text2 + ' ';
          }
        }
      }
      console.log(text2);
    }
  }
}