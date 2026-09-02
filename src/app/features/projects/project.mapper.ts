import { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { Project } from "./models/project";

export function toProject(doc: QueryDocumentSnapshot<DocumentData>): Project {
    const data = doc.data() as Project;

    return {
        ...data,
        id: doc.id,
    } as Project;
}

export function toProjects(snapshot: QuerySnapshot<DocumentData>): Project[] {
    return snapshot.docs.map(toProject);
}
