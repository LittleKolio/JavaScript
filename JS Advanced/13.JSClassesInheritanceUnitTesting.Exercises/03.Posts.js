function result() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\n` +
                `Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(' * ' + comment);
        }
        toString() {
            let result = `${super.toString()}\n` +
                `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length != 0) {
                result += ('\nComments:\n' + this.comments.join('\n'));
            }
            return result;
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views += 1;
            return this;
        }
        toString() {
            let result = `${super.toString()}\n` +
                `Views: ${this.views}`;
            return result;
        }
    }
    return {Post, SocialMediaPost, BlogPost};
}



let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
