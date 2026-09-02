import { Timestamp } from "firebase/firestore";

export interface Experience {
    id: string;
    company: string;
    position: string;

    employmentType?: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';

    location?: string;
    startDate: Timestamp;
    endDate?: Timestamp;

    duration: string;

    description: string;

    responsibilities: string[];
    achievements: string[];

    technologies: string[];

    companyUrl?: string;
    projectUrls?: {
        label: string;
        url: string;
    }[];
}
