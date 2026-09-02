import { computed, inject, Service, signal } from '@angular/core';
import { LoadState } from '@app/core/types/load-state';
import { ExperienceService } from './experience.service';
import { Experience } from './models/experience';

@Service()
export class ExperienceStore {
    private readonly service = inject(ExperienceService);

    readonly state = signal<LoadState>('idle');
    readonly experiences = signal<Experience[]>([]);
    readonly error = signal<unknown>(null);

    readonly isLoading = computed(
        () => this.state() === 'loading',
    );

    readonly isLoaded = computed(
        () => this.state() === 'success',
    );

    readonly hasError = computed(
        () => this.state() === 'error',
    );

    readonly hasExperiences = computed(
        () => this.experiences().length > 0,
    );

    readonly totalExperiences = computed(
        () => this.experiences().length,
    );

    readonly technologies = computed(() =>
        [...new Set(
            this.experiences().flatMap(
                experience => experience.technologies,
            ),
        )],
    );

    readonly yearsOfExperience = computed(() => {
        const totalYears =
            this.experiences()
                .map((experience) => {
                    const start = experience.startDate.toDate();
                    const end = experience.endDate
                        ? experience.endDate.toDate()
                        : new Date();
                    const diff = end.getTime() - start.getTime();
                    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
                    return years;
                })
                .reduce((total, years) => total + years, 0);

        return Math.round(totalYears * 10) / 10;
    });

    async load(): Promise<void> {
        if (
            this.state() === 'loading' ||
            this.state() === 'success'
        ) {
            return;
        }

        this.state.set('loading');
        this.error.set(null);

        try {
            const experiences =
                await this.service.getAllExperiences();

            this.experiences.set(experiences);
            this.state.set('success');
        } catch (error) {
            console.error(error);
            this.error.set(error);
            this.state.set('error');
        }
    }
}
