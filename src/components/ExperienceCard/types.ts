import { DateField, ImageFieldImage } from "@prismicio/client"

export interface IExperienceCardProps {
    description: string | null | undefined
    startDate: DateField
    endDate: DateField
    title: string | null | undefined
    companyImage: ImageFieldImage
}