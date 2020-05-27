// Declaring new object

var course = new Object();

course.title = "JavaScript Essential";
course.instructor = "Me";
course.level = 1;
course.published = true;
course.views = 0;

// Or we can declare new object on different way

var course = {
    title: 'Jaca Script',
    instructor: 'you',
    level: 0,
    published: false,
    views: 1,
    updateViews: function () {
        return ++course.views
    }
}

// create object constructor 
class Course {
    constructor(title, instructor, level, published, views) {
        this.title = title;
        this.instructor = instructor;
        this.level = level;
        this.published = published;
        this.views = views;
        this.updateViews = function () {
            return ++this.views;
        };
    }
}
;

