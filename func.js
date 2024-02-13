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
  console.log(generateSongText(10))