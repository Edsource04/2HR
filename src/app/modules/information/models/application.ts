import { Profile } from '../../models/profile';
import { WorkDays } from './workdays';
import { FamilyMember } from './family-member';
import { EducationApplication } from './education-application';
import { WorkExpApplication } from './work-experience-application';
import { SkillApplication } from './skill-application';
import { LanguageApplication } from './language-application';
import { PersonalReference } from './personal-reference';

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
   status: boolean;
   profile?: Profile;
}
