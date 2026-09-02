import { Service } from "@angular/core";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "@app/firebase";
import { Project, ProjectCategory } from "./models/project";
import { toProject, toProjects } from "./project.mapper";

@Service()
export class ProjectService {
    private readonly firestore = firestore;

    async getAllProjects(): Promise<Project[]> {
        const snapshot = await getDocs(
            query(
                collection(this.firestore, 'projects'),
                orderBy('order', 'desc'),
            ),
        );

        return toProjects(snapshot);
    }

    async getFeaturedProjects(): Promise<Project[]> {
        const snapshot = await getDocs(
            query(
                collection(this.firestore, 'projects'),
                where('category', '==', 'Professional'),
                orderBy('order', 'desc'),
                limit(3),
            ),
        );

        return toProjects(snapshot);
    }

    async getProjectById(id: string): Promise<Project | null> {
        const snapshot = await getDoc(
            doc(this.firestore, 'projects', id),
        );

        return snapshot.exists() ? toProject(snapshot) : null;
    }

    async getProjectBySlug(slug: string): Promise<Project | null> {
        const snapshot = await getDocs(
            query(
                collection(this.firestore, 'projects'),
                where('slug', '==', slug),
                limit(1),
            ),
        );

        return snapshot.empty ? null : toProject(snapshot.docs[0]);
    }

    async getProjectsByCategory(category: ProjectCategory): Promise<Project[]> {
        const snapshot = await getDocs(
            query(
                collection(this.firestore, 'projects'),
                where('category', '==', category),
                orderBy('order', 'desc'),
            ),
        );

        return toProjects(snapshot);
    }
}
