import { useState } from "react";
import "./styles.css";
const emojiDict = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "👋": "Waving Hand",
  "😍": "Smiling Face with Heart-Eyes",
  "🤚": "Raised Back of Hand",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🖐️": "Hand with Fingers Splayed",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "✋": "Raised Hand",
  "👌": "OK Hand",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "✌️": "Victory Hand",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "👊": "Oncoming Fist",
  "🤧": "Sneezing Face",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "🙏": "Folded Hands",
  "😵": "Dizzy Face",
  "👻": "Ghost",
  "🤠": "Cowboy Hat Face",
  "😺": "Grinning Cat",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "😠": "Angry Face",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "😰": "Anxious Face with Sweat"
};

export default function App() {
  var emojiArr = Object.keys(emojiDict);

  const [meaning, setterOutput] = useState("Meaning of Emojis");

  function inputClickHandler(event) {
    var userInput = event.target.value;
    var output = emojiDict[userInput];
    if (output === undefined) {
      var error = "Sorry we have limited Database at the moment!!!";
      setterOutput(error);
    } else {
      setterOutput(output);
    }
  }

  function clickEventHandler(item) {
    setterOutput(emojiDict[item]);
  }
  return (
    <div className="App">
      <header>
        <h1 className="main">
          {/* <div id="madeBy">By Sakshi Tripathi</div> */}
          Dictionary of Emoticons🤔
        </h1>
      </header>
      <h3>
        <span className="head2">Enter your Emoticon</span>
      </h3>
      <input placeholder="Enter your emoji here" onChange={inputClickHandler} />
      <div className="meaning">
        <span>{meaning}</span>
      </div>
      <h3 className="intro">you can choose your emoticons from here also...</h3>

      <div className="info">
        {emojiArr.map(function (emoji) {
          return (
            <span
              id="emojiArr"
              key={emoji}
              onClick={() => clickEventHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer>
        <h2>
          <span className="foot">About </span>
        </h2>
        <span className="about">
          Dictionary of Emoticon is an emoji reference website which documents
          the meaning of emoji characters in the Unicode Standard
        </span>
      </footer>
    </div>
  );
}
