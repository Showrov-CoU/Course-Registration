# Discuss how i managed the state in my project

1. I used 4 state [selectCourses, creditHours, remainingHours, totalPrice] in my project
2. First state "selectCourse" is updated when users click in select button.
3. Using "selectCourse" state as a props drilling to (Courses->Course) then get course information from Course component(Child) to App component(parent) with help of handleSelectCourses function.
4. Using this course information update 3 remaining state [creditHours, remainingHours, totalPrice]
5. Remaining 3 states and "selectCourses" state are passes as a props of Bookmark component for dynamically update "Total Credit Hour", "Credit Hour Remaining", "Total Price" and create a course list dynamically in Course Name Section.
