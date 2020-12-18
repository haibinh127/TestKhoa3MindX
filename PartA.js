//Ex1
var A1 = prompt("Hãy nhập vào mảng A1").split(",");
var A2 = prompt("Hãy nhập vào mảng A2").split(",");
var A3 = [];
function FindDifferences() {
    var difference1 = A1.filter(x => A2.indexOf(x) === -1);
    var difference2 = A2.filter(y => A1.indexOf(y) === -1);
    for (i = 0; i < difference1.length; i++) {
        A3.push(difference1[i]);
    };
    for (j = 0; j < difference2.length; j++) {
        A3.push(difference2[j]);
    }
    alert(A3);
};
FindDifferences();
//Ex2
var Teams = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39
    },
    {
        name: "Manchester City",
        points: 88,
        GD: 23   
    }
];
function swapPosition() {
    for (let i = 0; i < Teams.length - 1; i++) {
        for (let j = i + 1; j < Teams.length; j++) {
            if (Teams[i].points < Teams[j].points) {
                let temp1 = Teams[i];
                Teams[i] = Teams[j];
                Teams[j] = temp1;
            };
        };
    };
    for (let i = 0; i < Teams.length - 1; i++) {
        for (let j = i + 1; j < Teams.length; j++) {
            if (Teams[i].points == Teams[j].points) {
                if (Teams[i].GD > Teams[j].GD) {
                    let temp2 = Teams[i];
                    Teams[i] = Teams[j];
                    Teams[j] = temp2;
                };
            };
        };
    };
    for (let i = 0; i < Teams.length - 1; i++) {
        for (let j = i + 1; j < Teams.length; j++) {
            if (Teams[i].points == Teams[j].points && Teams[i].GD == Teams[j].GD) {
                Teams.sort(function () {
                    if (Teams[i].name < Teams[j].name) {
                        return -1;
                    };
                    if (Teams[i].name > Teams[j].name) {
                        return 1;
                    };
                    return 0;
                });
            };
        };
    };
    function addPosition() {
        for (i = 0; i < Teams.length; i++) {
            Teams[i].position = i+1;
        }
    };
    addPosition();
};
swapPosition();
console.log(Teams);