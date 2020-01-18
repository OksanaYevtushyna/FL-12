class Fighter {
    constructor(proper) {
        proper.losses = 0;
        proper.wins = 0;
        return {
            getName() {
                return proper.name;
            },
            getDamage() {
                return proper.damage;
            },
            getStrength() {
                return proper.strength;
            },
            getAgility() {
                return proper.agility;
            },
            getHealth() {
                return proper.hp;
            },
            dealDamage(healthPoints) {
                proper.hp = proper.hp - healthPoints >= 0 ? proper.hp - healthPoints : 0;
            },
            heal(healthPoints) { //need to remake this function, works incorrectly
                let totalHp = proper.getHealth();
                proper.hp = proper.getHealth() + healthPoints <= totalHp ? proper.getHealth() + healthPoints : totalHp;
            },
            addWin() {
                return proper.wins++;
            },
            addLoss() {
                return proper.losses++;
            },
            attack(defender) {
                let maxPersent = 100;
                let random = Math.floor(Math.random() * maxPersent);
                let successProbability = maxPersent - (proper.strength + proper.agility);
                if (random <= successProbability) {
                    let defDam = defender.getHealth() - this.getDamage();
                    console.log(`${this.getName()} makes ${defDam} damage to ${defender.getName()}`);
                } else {
                    console.log(`${defender.getName()} attack missed`);
                }
            },
            /*battle(fighter1, fighter2) { another logic need here!!!
                //code
                if (fighter1.getHealth() <= 0) {
                    console.log(`${fighter2.getName()} has won!`);
                    fighter2.addWin();
                    fighter1.addLoss();
                } else if (fighter2.getHealth() <= 0) {
                    console.log(`${fighter1.getName()} has won!`);
                    fighter1.addWin();
                    fighter2.addLoss();
                }
            },*/
            logCombatHistory() {
                console.log(`Name: ${this.getName()}, Wins: ${this.addWin()}, Losses: ${this.addLoss()}`);
            }
        }
    }
}

const fighter1 = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });
const fighter2 = new Fighter({ name: 'Comos', damage: 25, hp: 90, strength: 20, agility: 35 });