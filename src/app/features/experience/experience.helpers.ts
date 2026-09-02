import { Timestamp } from "firebase/firestore";

export function formatTimestamp(timestamp: Timestamp | undefined): string {
    if (!timestamp) return "Present";

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const month = monthNames[timestamp.toDate().getMonth()];
    const year = timestamp.toDate().getFullYear();

    return `${month} ${year}`;
}

export function formatDuration(startDate: Timestamp, endDate?: Timestamp): string {
    const start = startDate.toDate();
    const end = endDate?.toDate() ?? new Date();

    const diffInMs = end.getTime() - start.getTime();
    const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));

    if (diffInMonths < 1) {
        return "Less than a month";
    }

    if (diffInMonths < 12) {
        return diffInMonths === 1 ? "1 month" : `${diffInMonths} months`;
    }

    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    if (months === 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
    }

    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
}
