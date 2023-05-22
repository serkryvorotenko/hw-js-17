class Person {
    constructor(name, surName) {
        this.name = name;
        this.surName = surName;
    }

    welcome() {
        console.log(`Hi! I'm ${this.name} ${this.surName}`)
    }
}

const person = new Person('John', 'Smith');
person.welcome();
console.log(person);

class Student extends Person {
    constructor(name, surName, faculty, marks) {
        super(name, surName);
        this.faculty = faculty;
        this.marks = marks;
    }

    getAvgMark = () => {
        const sum = this.marks.reduce(function (acc, val) {
            return acc + val;
        });
        return sum / this.marks.length;
    };
    getMedianMark = () => {
        const sortedMarks = this.marks.slice().sort(function (a, b) {
            return a - b;
        });
        const middle = Math.floor(sortedMarks.length / 2);
        if (sortedMarks.length % 2 === 0) {
            return (sortedMarks[middle - 1] + sortedMarks[middle]) / 2;
        } else {
            return sortedMarks[middle];
        }
    };
    getMaxMark = () => {
        return Math.max.apply(null, this.marks);
    };
    getMinMark = () => {
        return Math.min.apply(null, this.marks);
    };
    getTotal = () => {
        return this.marks.reduce(function (acc, val) {
            return acc + val;
        });
    };
    getInfo = () => {
        return this.name + ' ' + this.faculty + ' ' + this.getTotal();
    };
}

const student = new Student('Alex', 'Jons', 'some-faculty', [1, 23, 34, 66, 78, 98, 56, 87, 45, 34, 56, 23, 12, 34, 90, 87, 67])
student.welcome();
console.log(student);
console.log(student.getAvgMark());
console.log(student.getMedianMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());

class Headman extends Student {
    constructor(name, surName, faculty, marks) {
        super(name, surName, faculty, marks);
    }
    defendGroup() {
        console.log('This is my group. I am their hero!')
    };

}

const headman = new Headman('Mike', 'Jordan', 'some-faculty', [1, 2, 34, 66, 78, 98, 5, 8, 45, 34, 5, 23, 12, 34, 9, 8, 6])
headman.welcome();
console.log(headman);
console.log(headman.getAvgMark());
console.log(headman.getMedianMark());
console.log(headman.getMaxMark());
console.log(headman.getMinMark());
console.log(headman.getTotal());
console.log(headman.getInfo());
headman.defendGroup();