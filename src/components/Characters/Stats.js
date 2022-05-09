import React from 'react';

const Stats = ({ character }) => {
    
    return (
        <div class="riche-rolls">

        <div class="riche-rolls-title"><span>STAT BLOCKS</span></div>

        <div class="riche-stat">
            <div class="riche-stat-score"><span class="str">{character.Stats.Strength}</span></div>
            <h1><span class="str">{character.Stats.Modifiers.Strength}</span> STRENGTH</h1>
            <div class="riche-stat-skills">
                <div><span class="str">{character.SavingThrows.Strength}</span> SAVING THROW</div>
                <div><span class="str">{character.Skills.Athletics}</span> ATHLETICS</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{character.Stats.Dexterity}<span class="dex"></span></div>
            <h1><span class="dex">{character.Stats.Dexterity}</span> DEXTERITY</h1>
            <div class="riche-stat-skills">
                <div><span class="dex">{character.Stats.Strength}</span> SAVING THROW</div>
                <div><span class="dex">{character.Skills.Acrobatics}</span> ACROBATICS</div>
                <div><span class="dex">{character.Skills.SleightOfHand}</span> SLEIGHT OF HAND</div>
                <div title="DISADVANTAGE"><span class="dex">{character.Skills.Stealth}</span> STEALTH</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{character.Stats.Constitution}<span class="con"></span></div>
            <h1><span class="con">{character.Stats.Modifiers.Constitution}</span> CONSTITUTION</h1>
            <div class="riche-stat-skills">
                <div><span class="con">{character.SavingThrows.Constitution}</span> SAVING THROW</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{character.Stats.Intelligence}<span class="int"></span></div>
            <h1><span class="int">{character.Stats.Modifiers.Intelligence}</span> INTELLECT</h1>
            <div class="riche-stat-skills">
                <div><span class="int">{character.SavingThrows.Intelligence}</span> SAVING THROW</div>
                <div><span class="int">{character.Skills.Arcana}</span> ARCANA</div>
                <div><span class="int">{character.Skills.History}</span> HISTORY</div>
                <div><span class="int">{character.Skills.Investigation}</span> INVESTIGATION</div>
                <div><span class="int">{character.Skills.Nature}</span> NATURE</div>
                <div><span class="intpro">{character.Skills.Religion}</span> RELIGION</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{character.Stats.Wisdom}<span class="wis"></span></div>
            <h1><span class="wis">{character.Stats.Modifiers.Wisdom}</span> WISDOM</h1>
            <div class="riche-stat-skills">
                <div><span class="wispro">{character.SavingThrows.Wisdom}</span> SAVING THROW</div>
                <div><span class="wis">{character.Skills.AnimalHandling}</span> ANIMAL HANDLING</div>
                <div><span class="wis">{character.Skills.Insight}</span> INSIGHT</div>
                <div><span class="wis">{character.Skills.Medicine}</span> MEDICINE</div>
                <div><span class="wis">{character.Skills.Perception}</span> PERCEPTION</div>
                <div><span class="wispro">{character.Skills.Survival}</span> SURVIVAL</div>
            </div>
        </div>

        <div class="riche-stat">
            <div class="riche-stat-score">{character.Stats.Charisma}<span class="cha"></span></div>
            <h1><span class="cha">{character.Stats.Modifiers.Charisma}</span> CHARISMA</h1>
            <div class="riche-stat-skills">
                <div><span class="chapro">{character.SavingThrows.Charisma}</span> SAVING THROW</div>
                <div><span class="cha">{character.Skills.Deception}</span> DECEPTION</div>
                <div><span class="chapro">{character.Skills.Intimidation}</span> INTIMIDATION</div>
                <div><span class="cha">{character.Skills.Performance}</span> PERFORMANCE</div>
                <div><span class="chapro">{character.Skills.Persuasion}</span> PERSUASION</div>
            </div>
        </div>

    </div>
    )
};

export default Stats;