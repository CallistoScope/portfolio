import { computed, inject, Service, signal } from "@angular/core";
import { Project, ProjectCategory } from "./models/project";
import { ProjectService } from "./projects.service";
import { LoadState } from "../../core/types/load-state";

@Service()
export class ProjectsStore {
    private readonly service = inject(ProjectService);

    readonly projectsState = signal<LoadState>('idle');
    readonly projectState = signal<LoadState>('idle');

    readonly projects = signal<Project[]>([]);
    readonly currentProject = signal<Project | null>(null);

    readonly selectedCategory = signal<ProjectCategory | null>(null);

    readonly projectsError = signal<unknown>(null);
    readonly projectError = signal<unknown>(null);

    readonly isProjectsIdle = computed(
        () => this.projectsState() === 'idle',
    );

    readonly isProjectsLoading = computed(
        () => this.projectsState() === 'loading',
    );

    readonly areProjectsLoaded = computed(
        () => this.projectsState() === 'success',
    );

    readonly hasProjectsError = computed(
        () => this.projectsState() === 'error',
    );

    readonly isProjectIdle = computed(
        () => this.projectState() === 'idle',
    );

    readonly isProjectLoading = computed(
        () => this.projectState() === 'loading',
    );

    readonly hasProjectLoaded = computed(
        () => this.projectState() === 'success',
    );

    readonly hasProjectError = computed(
        () => this.projectState() === 'error',
    );

    readonly categories: ProjectCategory[] = [
        'Professional',
        'Personal',
        'Open Source',
    ];

    readonly filteredProjects = computed(() => {
        const category = this.selectedCategory();

        if (!category) {
            return this.projects();
        }

        return this.projects().filter(
            project => project.category === category,
        );
    });

    selectCategory(category: ProjectCategory | null): void {
        this.selectedCategory.set(category);
    }

    async load(): Promise<void> {
        if (
            this.projectsState() === 'loading' ||
            this.projectsState() === 'success'
        ) {
            return;
        }

        this.projectsState.set('loading');
        this.projectsError.set(null);

        try {
            const projects = await this.service.getAllProjects();

            this.projects.set(projects);
            this.projectsState.set('success');
        } catch (error) {
            console.error(error);
            this.projectsError.set(error);
            this.projectsState.set('error');
        }
    }

    async loadProject(slug: string): Promise<void> {
        this.projectState.set('loading');
        this.projectError.set(null);
        this.currentProject.set(null);

        try {
            const project =
                await this.service.getProjectBySlug(slug);

            if (!project) {
                this.projectState.set('error');
                this.projectError.set(
                    new Error('Project not found'),
                );
                return;
            }

            this.currentProject.set(project);
            this.projectState.set('success');
        } catch (error) {
            console.error(error);
            this.projectError.set(error);
            this.projectState.set('error');
        }
    }
}
