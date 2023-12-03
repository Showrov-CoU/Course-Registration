## [Live Link](https://online-dev-course.surge.sh/)

Live link: [https://online-dev-course.surge.sh/](https://online-dev-course.surge.sh/)

# Discuss how i managed the state in my project

1. I used 4 state [selectCourses, creditHours, remainingHours, totalPrice] in my project
2. First state "selectCourse" is updated when users click in select button.
3. Using "selectCourse" state as a props drilling to (Courses->Course) then get course information from Course component(Child) to App component(parent) with help of handleSelectCourses function.
4. Using this course information update 3 remaining state [creditHours, remainingHours, totalPrice]
5. Remaining 3 states and "selectCourses" state are passes as a props of Bookmark component for dynamically update "Total Credit Hour", "Credit Hour Remaining", "Total Price" and create a course list dynamically in Course Name Section.

# 3 Project features

1. User Interaction: Users can interact with my website by clicking buttons to select courses, and they can see the changes in the bookmark section in real-time.
2. Responsive Design: Ensuring that your website is responsive so that it works well on different devices, such as desktops, tablets, and mobile phones.
3. Dynamic Bookmarking: When a user clicks the "Select Button" on a course card, the following information is dynamically added to a bookmark section:
- Total Credit Hour: The cumulative sum of the credit hours for all selected courses.
- Credit Hour Remaining: Substract credit hour from highest credit 20.
- Total Price: The cumulative sum of the prices for all selected courses.
- Course Name: The title of the selected course.
