function generateSongText(bottles) {
    let songText = '';
    
    for (let i = bottles; i > 0; i--) {
      let line1 = `${i} бутылок пива на стене, ${i} бутылок пива!`;
      let line2 = `Возьми одну, пусти по кругу, ${i - 1} бутылок пива на стене!`;
      
      if (i === 1) {
        line2 = 'Возьми одну, пусти по кругу, нет бутылок пива на стене!';
      }
      
      songText += line1 + '\n' + line2 + '\n\n';
    }
    
    return songText;
  }
  
  // Пример использования функции
  console.log(generateSongText(10));



  function generateSongText(numBottles) {
    let songText = '';
    
    for (let i = numBottles; i > 0; i--) {
        let bottlesWord = i === 1 ? 'Бутылка' : i === 2 ? 'Бутылки':'Бутылок';
        let beerWord = i === 1 ? 'Пива' : 'Пиво'


        songText += `${i} ${bottlesWord} ${beerWord} на стене, ${i} ${bottlesWord} ${beerWord}!\n`;
    songText += `Возьми одну, пусти по кругу, ${i - 1} ${i - 1 === 1 ? "бутылка" : "бутылки"} ${beerWord} на стене!\n\n`;
    }
    return songText;
  }
  




  function generateSongText(numBottles) {
    let songText = "";
    
    for (let i = numBottles; i > 0; i--) {
      let bottlesWord = i === 1 ? "бутылка" : i === 2 ? "бутылки" : "бутылок";
      let beerWord = i === 1 ? "пиво" : "пива";
      
      songText += `${i} ${bottlesWord} ${beerWord} на стене, ${i} ${bottlesWord} ${beerWord}!\n`;
      songText += `Возьми одну, пусти по кругу, ${i - 1} ${i - 1 === 1 ? "бутылка" : "бутылки"} ${beerWord} на стене!\n\n`;
    }
    
    return songText;
  }
  
  

  
  
  function generateSongText(number) {
    const verse = (num) => {
      if (num === 0) {
        return "Нет бутылок пива на стене!";
      } else if (num === 1) {
        return "1 бутылка пива на стене!";
      } else if (num % 10 === 1 && num !== 11) {
        return `${num} бутылка пива на стене!`;
      } else if (num % 10 >= 2 && num % 10 <= 4 && (num < 10 || num > 20)) {
        return `${num} бутылки пива на стене!`;
      } else {
        return `${num} бутылок пива на стене!`;
      }
    };
  
    let songText = "";
    for (let i = number; i >= 0; i--) {
      const currentVerse = verse(i);
      songText += currentVerse + "\n";
      if (i !== 0) {
        songText += "Возьми одну, пусти по кругу, ";
        songText += verse(i - 1) + "\n\n";
      }
    }
  
    return {
      text: songText,
      verses: verse,
    };
  }
  
  const song = generateSongText(99);
  console.log(song.text);
  console.log(song.verses(5));
