import React from "react";

const Health = ({ character }) => {
    return (
        <div class="riche-health">
<h1>
    <div><input type="number" id="hpealth"/>
        <h2>/ <span>{character.HP}</span></h2>
    </div><b>TOTAL HP<span style="width:10px;display:inline-block;"></span></b>
</h1>
<div class="riche-health-1">
    <div><span class="ac">{character.AC}</span>
        <h3>AC</h3>
    </div>
    <div><span class="speed">{character.Speed}</span>
        <h3>SPEED</h3>
    </div>
    <div><span class="vision">{character.Vision}</span>
        <h3>VISION</h3>
    </div>
    <div><span class="hd">{character.hd}</span>
        <h3>HD</h3>
    </div>
    <div><span class="pro"></span>
        <h3>PROF.</h3>
    </div>
    <div style="margin:0px;"><span class="inspo">{character.Inspiration}</span>
        <h3>INIT.</h3>
    </div>
</div>
</div>
    );
};

export default Health;