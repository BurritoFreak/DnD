import React from 'react';

const Stats = ({ character }) => {

    var stats = JSON.parse(character.Stats);
    var savingThrows = JSON.parse(character.SavingThrows);
    var skills = JSON.parse(character.Skills);

    
    return (
        <div class="riche-rolls">

        <div class="riche-rolls-title"><span>STAT BLOCKS</span></div>

        <div class="riche-stat">
            <div class="riche-stat-score"><span class="str">{stats.Strength}</span></div>
            <h1><span class="str">{stats.Modifiers.Strength}</span> STRENGTH</h1>
            <div class="riche-stat-skills">
                <div><span class="str">{savingThrows.Strength}</span> SAVING THROW</div>
                <div><span class="str">{skills.Athletics}</span> ATHLETICS</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{stats.Dexterity}<span class="dex"></span></div>
            <h1><span class="dex">{stats.Dexterity}</span> DEXTERITY</h1>
            <div class="riche-stat-skills">
                <div><span class="dex">{stats.Strength}</span> SAVING THROW</div>
                <div><span class="dex">{skills.Acrobatics}</span> ACROBATICS</div>
                <div><span class="dex">{skills.SleightOfHand}</span> SLEIGHT OF HAND</div>
                <div title="DISADVANTAGE"><span class="dex">{skills.Stealth}</span> STEALTH</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{stats.Constitution}<span class="con"></span></div>
            <h1><span class="con">{stats.Modifiers.Constitution}</span> CONSTITUTION</h1>
            <div class="riche-stat-skills">
                <div><span class="con">{savingThrows.Constitution}</span> SAVING THROW</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{stats.Intelligence}<span class="int"></span></div>
            <h1><span class="int">{stats.Modifiers.Intelligence}</span> INTELLECT</h1>
            <div class="riche-stat-skills">
                <div><span class="int">{savingThrows.Intelligence}</span> SAVING THROW</div>
                <div><span class="int">{skills.Arcana}</span> ARCANA</div>
                <div><span class="int">{skills.History}</span> HISTORY</div>
                <div><span class="int">{skills.Investigation}</span> INVESTIGATION</div>
                <div><span class="int">{skills.Nature}</span> NATURE</div>
                <div><span class="intpro">{skills.Religion}</span> RELIGION</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{stats.Wisdom}<span class="wis"></span></div>
            <h1><span class="wis">{stats.Modifiers.Wisdom}</span> WISDOM</h1>
            <div class="riche-stat-skills">
                <div><span class="wispro">{savingThrows.Wisdom}</span> SAVING THROW</div>
                <div><span class="wis">{skills.AnimalHandling}</span> ANIMAL HANDLING</div>
                <div><span class="wis">{skills.Insight}</span> INSIGHT</div>
                <div><span class="wis">{skills.Medicine}</span> MEDICINE</div>
                <div><span class="wis">{skills.Perception}</span> PERCEPTION</div>
                <div><span class="wispro">{skills.Survival}</span> SURVIVAL</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{stats.Charisma}<span class="cha"></span></div>
            <h1><span class="cha">{stats.Modifiers.Charisma}</span> CHARISMA</h1>
            <div class="riche-stat-skills">
                <div><span class="chapro">{savingThrows.Charisma}</span> SAVING THROW</div>
                <div><span class="cha">{skills.Deception}</span> DECEPTION</div>
                <div><span class="chapro">{skills.Intimidation}</span> INTIMIDATION</div>
                <div><span class="cha">{skills.Performance}</span> PERFORMANCE</div>
                <div><span class="chapro">{skills.Persuasion}</span> PERSUASION</div>
            </div>
        </div>

    </div>
    )
};

export default Stats;