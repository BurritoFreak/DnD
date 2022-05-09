import React from "react";

const Traits = ({ character }) => {

    return (
        <div class="riche-skills">
        <div class="riche-skills-left">
            <div>CLASS SKILLS</div>
        </div>
        <div class="riche-skills-right">
        <div class="riche-skills-right-1">
        {character.Traits.map((trait) => 
            <div><input type="checkbox" id="riche-skill5" checked/>
        <label for="riche-skill5">+ <span class="skill5">{trait.Skill}</span></label>
        <div class="riche-skills-blurb">{trait.Desc}</div>
    </div>
        )}
        </div>
        </div>
        </div>
    );
    
};

/*
<div class="locked" title="UNLOCKED AT LEVEL 6"><input type="checkbox"
                        id="riche-skill6">
                    <label for="riche-skill6">+ <span class="skill6"></span></label>
                    <div class="riche-skills-blurb">
                        aura of protection blurb
                    </div>
                </div>
*/

export default Traits;