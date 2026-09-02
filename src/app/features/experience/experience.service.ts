import { Service } from '@angular/core';
import { firestore } from '@app/firebase';
import { collection, limit, getDocs, orderBy, query, getDoc, doc } from 'firebase/firestore';
import { Experience } from './models/experience';
import { toExperience, toExperiences } from './experience.mapper';

@Service()
export class ExperienceService {
    private readonly firestore = firestore;

    async getAllExperiences(): Promise<Experience[]> {
        const snapshot = await getDocs(
            query(
                collection(this.firestore, 'experience'),
                orderBy('startDate', 'desc'),
            ),
        );

        return toExperiences(snapshot);
    }

    async getLatestExperiences(): Promise<Experience[]> {
        const snapshot = await getDocs(
            query(
                collection(this.firestore, 'experience'),
                orderBy('startDate', 'desc'),
                limit(3),
            ),
        );

        return toExperiences(snapshot);
    }

    async getExperienceById(id: string): Promise<Experience | null> {
        const snapshot = await getDoc(
            doc(this.firestore, 'experience', id),
        );

        return snapshot.exists() ? toExperience(snapshot) : null;
    }
}
