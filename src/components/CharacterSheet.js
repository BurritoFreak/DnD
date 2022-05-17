import React from "react";
import Character from "./Character";
import Stats from "./Stats";
import Dice from "./Dice";
import Profile from "./Profile";
import Health from "./Health";
import Weapons from "./Weapons";
import Traits from "./Traits";
import Spells from "./Spells";


const CharacterSheet = ({ character }) => {
    return (
        <section id="character-sheet">
        <div class="riche">
        <div class="riche-0">
            <div class="riche-1"></div>
            <div class="riche-2">
                <div class="riche-3">
                    <div class="riche-4"></div>
                        <Stats character={character} />
                        <div class="riche-sheet">
                            <div class="riche-sheet-waves">
                                <div class="riche-sheet-waves-1"></div>
                            </div>
                            <div class="riche-name"></div>
                            <div class="riche-name-1"></div>

                            <input type="radio" id="riche-tab1" name="riche-tab" checked/>
                            <label for="riche-tab1" style="margin-left:337px;width:86px;">
                                <div>COMBAT</div>
                            </label>
                            <input type="radio" id="riche-tab2" name="riche-tab"/>
                            <label for="riche-tab2" style="margin-left:438px;width:86px;">
                                <div>SPELLS</div>
                            </label>
                            <input type="radio" id="riche-tab3" name="riche-tab"/>
                            <label for="riche-tab3" style="margin-left:539px;width:116px;">
                                <div>EQUIPMENT</div>
                            </label>
                            <input type="radio" id="riche-tab4" name="riche-tab"/>
                            <label for="riche-tab4" class="riche-class"><span class="a"></span> <span
                                    class="b"></span></label>
                            
                            <Dice />
                            <Profile character={character} />
                            <Health character={character} />
                            <Weapons character={character} />
                            <Traits character={character} />
                            <Spells character={character} />
                        </div>
                </div>
            </div>
        </div>
        </div>
        </section>
    );
};

export default CharacterSheet;