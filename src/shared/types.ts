export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    Courses = "courses",
    Register = "register"
}

export interface HcoursesType {
    title: string;
    date: string;
    description: string;
}

export interface AboutboxType {
    description: string;
}

export interface CourseType {
    title: any;
    date: string;
    age: string;
    description: string;
    list: any;
}