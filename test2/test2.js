let users = [
    {
        id: 1,
        name: "john",
    },
    {
        id: 2,
        name: "roman",
    }

]
let courses = [
    {
        userId: 1,
        courseName: "Java",
        marks: 80
    },
    {
        userId: 1,
        courseName: "C#",
        marks: 90
    },
    {
        userId: 2,
        courseName: "Java",
        marks: 60
    },
    {
        userId: 2,
        courseName: "C#",
        marks: 50
    },
]

function getMarks() {
    let userId = 1;
    let allUsersTotalMarks = []
    users.forEach((user) => {
        let subCourses = courses.filter((course) => course.userId == user.id)
        console.log(subCourses);
        let totalMarks = 0;
        subCourses.forEach((course) => {
            totalMarks += course.marks
            // console.log(totalMarks);
        })
        console.log(totalMarks);
        allUsersTotalMarks.push({
            name: user.name,
            totalMarks: totalMarks
        })
    })
    console.log(allUsersTotalMarks);
}
getMarks()
const User = new Schema({
    name: {
        type: String,
    },
    courses: [
        {
            type:Schema.Types.ObjectId,
            ref:"Course"
        }
    ]
})
async function getMarksDb() {

    let output=await Course.aggregate([
        {
            $matc
        }
    ])

    let users = await User.find({}).populate("courses")
    users.forEach((user) => {
        let subCourses = courses.find({ userId: user.id })
        console.log(subCourses);
        let totalMarks = 0;
        subCourses.forEach((course) => {
            totalMarks += course.marks
            // console.log(totalMarks);
        })
        console.log(totalMarks);
        allUsersTotalMarks.push({
            name: user.name,
            totalMarks: totalMarks
        })
    })
}


