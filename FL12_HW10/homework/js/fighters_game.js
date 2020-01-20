class Fighter {
    constructor(proper) {
        proper.losses = 0;
        proper.wins = 0;
        proper.health = proper.hp;
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
                return proper.health;
            },
            dealDamage(healthPoints) {
                return proper.health = proper.health - healthPoints >= 0 ? proper.health - healthPoints : 0;
            },
            heal(healthPoints) {
                return proper.health = proper.health + healthPoints <= proper.hp ? proper.health + healthPoints : proper.hp;
            },
            addWin() {
                proper.wins++;
            },
            addLoss() {
                proper.losses++;
            },
            attack(defender) {
                let maxPersent = 100;
                let random = Math.floor(Math.random() * maxPersent);
                let successProbability = maxPersent - (defender.getStrength() + defender.getAgility());
                if (random <= successProbability) {
                    defender.dealDamage(this.getDamage());
                    console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
                } else {
                    console.log(`${defender.getName()} attack missed`);
                }
            },
            logCombatHistory() {
                console.log(`Name: ${this.getName()}, Wins: ${proper.wins}, Losses: ${proper.losses}`);
            }
        }
    }
}

battle = (...fighters) => {
    if (fighters[0].getHealth() <= 0 || fighters[1].getHealth() <= 0) {
        console.log(`${this.getName()} is dead and can't fight!`);
    } else {
        fighters[0].attack(fighters[1]);
        if (fighters[1].getHealth()) {
            fighters[1].attack(fighters[0]);
            if (fighters[0].getHealth()) {
                battle(...fighters);
            } else {
                console.log(`${fighters[1].getName()} has won!`);
                fighters[1].addWin();
                fighters[0].addLoss();
            }
        } else {
            console.log(`${fighters[0].getName()} has won!`);
            fighters[0].addWin();
            fighters[1].addLoss();
        }
    }
}

const fighter1 = new Fighter({ name: 'Maximus', damage: 15, hp: 100, strength: 30, agility: 25 });
const fighter2 = new Fighter({ name: 'Comos', damage: 22, hp: 90, strength: 20, agility: 35 });