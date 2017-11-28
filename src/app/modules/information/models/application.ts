import { Profile } from '../../models/profile';

export class Application{
   _id?: string;
   positionTitle?: string;
   category?: string;
   vacantNumber?: string;
   availableWorkDay?: Date;
   lastName?: string;
   firstName?: string;
   nationality?: string;
   birthday?: Date;
   address?: string;
   email?: string;
   telephone?: string;
   cellphone?: string;
   socialId?: string;
   driverLicense?: boolean;
   carOwner?: boolean;
   missionRequired?: string;
   workDays?: Array<WorkDays>;
   familyMembers?: Array<FamilyMember>;
   educationApplications?: Array<EducationApplication>;
   workExpApplications?: Array<WorkExpApplication>;
   skillApplications?: Array<SkillApplication>;
   languageApplications?: Array<LanguageApplication>;
   personalReferences?: Array<PersonalReference>;
   presentationLetter?: string;
   profile?: Profile;
}

export enum WorkDays{
   sunday = 1,
   monday = 2,
   tuesday = 3,
   wednesday = 4,
   thursday = 5,
   friday = 6,
   saturday = 7
}

export class FamilyMember{
   _id?: string;
   name?: string;
   relationship?: string;
   position?: string;
   department?: string;
}

export class EducationApplication{
   _id?: string;
   schoolName?: string;
   fromDate?: Date;
   toDate?: Date;
   gradeObtained?: string;
}

export class WorkExpApplication{
   _id?: string;
   position?: string;
   companyName?: string;
   fromDate?: Date;
   toDate?: Date;
}

export class SkillApplication{
   _id?: string;
   description?: string;
   field?: string;
   finishedDate?: Date;
   institution?: string;
}

export class LanguageApplication{
   _id?: string;
   languageName?: string;
   speak?: number;
   read?: number;
   write?: number;
   
}

export class PersonalReference{
   _id?: string;
   fullname?: string;
   relationship?: string;
   contactNumber?: string
}