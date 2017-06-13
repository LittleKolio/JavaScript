class MailBox {
    constructor() {
        this.mailBox = [];
    }
    addMessage(subject, text) {
        let newMail = {
            subject: subject,
            text: text
        };
        this.mailBox.push(newMail);
        return this;
    }
    get messageCount() {
        return this.mailBox.length;
    }
    deleteAllMessages() {
        this.mailBox = [];
    }
    findBySubject(str) {
        let result = [];
        this.mailBox.forEach((e) => {
            if (e.subject.indexOf(str) !== -1)
                result.push(e);
        });
        return result;
    }

    toString() {
        let result = ' * (empty mailbox)';
        if (this.mailBox.length > 0) {
            result = '';
            this.mailBox.forEach((e) => {
                result += ` * [${e.subject}] ${e.text}\n`
            })
        }
        return result;

    }
}