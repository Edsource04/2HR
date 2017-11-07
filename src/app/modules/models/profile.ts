import { Education } from './education';
import { WorkExperience } from './work-experience';
import { Skill } from './skill';
import { Language } from './language';

export class Profile{
    _id?: String;
    fullname: String;
    currentPosition: String;
    email: String;
    address: String;
    telephone: String;
    cellphone: String;
    imgSrc?: String;
    skills?: Skill[];
    languages?: Language[];
    workExperiences?: WorkExperience[];
    educations?: Education[];
}