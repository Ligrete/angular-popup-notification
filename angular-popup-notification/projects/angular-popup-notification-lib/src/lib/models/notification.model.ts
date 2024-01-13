export interface Notification {
    id: number;
    title: string;
    text: string;
    duration: number;
    createdAt: number;
    submitButton?: string;
    cancelButton?: string;
    isHidden?: boolean;
    isExpanded?: boolean;
}

export interface NotificationData {
    title: string;
    text: string;
    duration?: number;
    createdAt?: number;
    submitButton?: string;
    cancelButton?: string;
    isHidden?: boolean;
    isExpanded?: boolean;
}

