class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topic = [];
    }
    addTopic(title, date) {
        let newTopic = {
            title: title,
            date: date
        };
        this.topic.push(newTopic);
        this.topic.sort((f, s) => f.date - s.date);

        // this за последния варянт new className().method
        // return this;
    }
    get firstTopic() {
        return this.topic[0];
    }
    get lastTopic() {
        return this.topic[this.topic.length - 1];
    }
    toString() {
        let text = `Course \"${this.title}\" by ${this.trainer}`;
        if (this.topic.length > 0) {
            this.topic.forEach((e, i) => {
                    text += `\n * ${e.title} - ${e.date}`;
                })
        }
        return text;
    }
}


let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);
