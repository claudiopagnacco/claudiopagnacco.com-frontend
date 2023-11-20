import { useState, useEffect } from "react";

const time = { carattere: 30, frase: 1500 };

export default function TextWrittenAnimation({frasi}) {
    const [currentFrase, setCurrentFrase] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [displayEmoji, setDisplayEmoji] = useState('');
    const [isWriting, setIsWriting] = useState(false);
  
    useEffect(() => {
      const frase = frasi[currentFrase];
      let currentCharacter = 0;

      setIsWriting(true);
  
      const intervalId = setInterval(() => {
        if (currentCharacter <= frase.text.length) {
          setDisplayText(frase.text.slice(0, currentCharacter));
          currentCharacter++;
        } else {
          clearInterval(intervalId);
  
          if (frase.emoji) {
            setDisplayEmoji(frase.emoji);
          }
          setIsWriting(false);
          if (currentFrase < frasi.length - 1) {
            setTimeout(() => {
              setCurrentFrase(currentFrase + 1);
              setDisplayText('');
              setDisplayEmoji('');
            }, time.frase);
          }
        }
      }, time.carattere);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [currentFrase, frasi]);

    function replaceWithBr() {
        return displayText.replace(/\n/g, "<br />") + (displayEmoji ? " " + displayEmoji : "") + "<div />";
      }
      
  
    return (

        <h1 className={isWriting ? '' : 'light'} dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
    );
  };

