import React from "react";

const Weapons = ({ character }) => {
    
    return (
        <div class="riche-weapons">
    <div class="riche-weapons-0"><input type="checkbox" id="riche-weapon"/>
        <label for="riche-weapon" class="riche-weapon-0"><i
                class="th th-down-arrow"></i></label>
        {JSON.parse(character.Equipment).Weapons.map((weapons) => 
            <div class="riche-weapons-1" id="first">
            <h1><span class="weapon1">{weapons.Name}</span></h1>
            <h2>ATTACK MOD: <span class="attack1">{weapons.AttackMod}</span></h2>
            <h2>DAMAGE: <span class="damage1">{weapons.Damage}</span></h2>
            <h2>WEAPON TYPE: <span class="type1">{weapons.WeaponType}</span></h2>
            <h2>RANGE: <span class="range1">{weapons.Range}</span></h2>
            <div><button
                    onclick="document.getElementById('attack1roll').innerHTML = getAttack1(0,20)">ROLL
                    ATTACK</button>
                <h3 id="attack1roll"></h3>
                <button
                    onclick="document.getElementById('damage1roll').innerHTML = getDamage1(0,8)">ROLL
                    DAMAGE</button>
                <h3 id="damage1roll"></h3>
            </div>
        </div>
        )}
        </div>
</div>
    );
};

export default Weapons;