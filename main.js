function Apples(name, weight) {
    this.name = name;
    this.weight = weight;
    this.isEmpty = function () {
        if (this.weight === 0) {
            document.write(this.name + ' is empty.');
            return true;
        }
    };
}

function Human(name, weight) {
    this.name = name;
    this.weight = weight;
    this.eatApple = function (apple) {
        this.weight +=1;
        apple.weight -=1;
        document.write(this.name + ' eat apple <br/>');
        document.write('Cân nặng của ' + this.name + ' là: ' + this.weight + '<br/>');
        document.write('Cân nặng của ' + apple.name + ' là: ' + apple.weight + '<hr/>');
        apple.isEmpty();
    }
}

let apple = new Apples('apple', 10);
let adam = new Human('Adam', 50);
let eva = new Human('Eva', 70);
document.write('Cân nặng của Adam là: ' + adam.weight + '<br/>');
document.write('Cân nặng của Eva là: ' + eva.weight + '<br/>');
document.write('Cân nặng của apple là: ' + apple.weight + '<hr/>');

for (let i = 0;apple.weight!==0; i++) {
    adam.eatApple(apple);
    eva.eatApple(apple);
}