
const Dice = () => { 

    return (
<div class="riche-dice">
        <div class="riche-dice-1">
            <button
                onclick="document.getElementById('d100roll').innerHTML = getRndInteger(0,100)">d100</button>
            <div id="d100roll"></div>
        </div>
        <div class="riche-dice-1">
            <button
                onclick="document.getElementById('d20roll').innerHTML = getRndInteger(0,20)">d20</button>
            <div id="d20roll"></div>
        </div>
        <div class="riche-dice-1">
            <button
                onclick="document.getElementById('d12roll').innerHTML = getRndInteger(0,12)">d12</button>
            <div id="d12roll"></div>
        </div>
        <div class="riche-dice-1">
            <button
                onclick="document.getElementById('d10roll').innerHTML = getRndInteger(0,10)">d10</button>
            <div id="d10roll"></div>
        </div>
        <div class="riche-dice-1">
            <button
                onclick="document.getElementById('d8roll').innerHTML = getRndInteger(0,8)">d8</button>
            <div id="d8roll"></div>
        </div>
        <div class="riche-dice-1">
            <button
                onclick="document.getElementById('d6roll').innerHTML = getRndInteger(0,6)">d6</button>
            <div id="d6roll"></div>
        </div>
        <div class="riche-dice-1">
            <button
                onclick="document.getElementById('d4roll').innerHTML = getRndInteger(0,4)">d4</button>
            <div id="d4roll"></div>
        </div>
    </div>
    );
    }

export default Dice;