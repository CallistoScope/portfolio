import { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { Experience } from "./models/experience";
import { formatDuration } from "./experience.helpers";

export function toExperience(doc: QueryDocumentSnapshot<DocumentData>): Experience {
    const data = doc.data() as Experience;

    return {
        ...data,
        id: doc.id,
        duration: formatDuration(data.startDate, data.endDate),
    } as Experience;
}

export function toExperiences(snapshot: QuerySnapshot<DocumentData>): Experience[] {
    return snapshot.docs.map(toExperience);
}
