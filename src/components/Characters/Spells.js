
import React from 'react';

const Spells = ({ character }) => {

return (
    <div class="spells">
    <div class="riche-spell-stats">
<div class="riche-spell-stats-1">
    <div></div>
</div>
<div class="riche-spell-stats-2">SAVING<div>DC</div>
</div>
<div class="riche-spell-stats-1">
    <div id="SPELLBONUS"></div>
</div>
<div class="riche-spell-stats-2">ATTACK<div>BONUS</div>
</div>
<div class="riche-spell-stats-1">
    <div id="SPELLSTAT"></div>
</div>
<div class="riche-spell-stats-2">CASTING<div>STAT</div>
</div>
<div class="riche-spell-stats-1">
    <div id="SPELLSLOT"></div>
</div>
<div class="riche-spell-stats-2">TOTAL<div>SLOTS</div>
</div>
</div>



<div class="riche-spells">
<div class="riche-spells-1" style="margin-top:0px;">
    <div><input type="number" value="0"/><span>/</span><input type="number" value="0"/>
    </div>
    <h1>CANTRIPS</h1>
    <p>character.Spells["Cantrips"]</p>
</div>
<div class="riche-spells-1">
    <div><input type="number" value="0"/><span>/</span><input type="number" value="0"/>
    </div>
    <h1>1ST LEVEL SPELLS</h1>
    <p>character.Spells["Level 1"]</p>
</div>
<div class="riche-spells-1">
    <div><input type="number" value="0"/><span>/</span><input type="number" value="0"/>
    </div>
    <h1>2ND LEVEL SPELLS</h1>
    <p>character.Spells["Level 2"]</p>
</div>
<div class="riche-spells-1">
    <div><input type="number" value="0"/><span>/</span><input type="number" value="0"/>
    </div>
    <h1>3RD LEVEL SPELLS</h1>
    <p>character.Spells["Level 3"]</p>
</div>
<div class="riche-spells-1">
    <div><input type="number" value="0"/><span>/</span><input type="number" value="0"/>
    </div>
    <h1>4TH LEVEL SPELLS</h1>
    <p>character.Spells["Level 4"]</p>
</div>
<div class="riche-spells-1">
    <div><input type="number" value="0"/><span>/</span><input type="number" value="0"/>
    </div>
    <h1>5TH LEVEL SPELLS</h1>
    <p>character.Spells["Level 5"]</p>
</div>
</div>
</div>
);
};

export default Spells;